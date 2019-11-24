import { api, getApi } from 'prismic-javascript';
import keysToCamel from '../helpers/keysToCamel';
import qs from 'qs';

export default class Prismic {
  getAllDocuments = async () => {
    const { accessToken, apiEndpoint } = this;

    const client = await api(apiEndpoint, { accessToken });
    const documents = await this.getDocuments({ client, lang: '*' });

    return {
      documents
    };
  };

  getDocuments = async ({ client, lang, mergedResponse = [], page = 1, pageSize = 100 }) => {
    const { results, total_results_size: totalResults } = await client.query([], { lang, page, pageSize });

    mergedResponse = [...mergedResponse, ...results];

    if (page * pageSize < totalResults) {
      return this.getDocuments({ client, lang, mergedResponse, page: page + 1, pageSize });
    }

    return keysToCamel(mergedResponse);
  };

  getPreview = async ({ location, options }) => {
    try {
      const { accessToken, apiEndpoint } = this;

      const query = qs.parse(location.search.slice(1));

      const { token } = query;

      const now = new Date();

      now.setHours(now.getHours() + 1);

      const client = await getApi(apiEndpoint, { accessToken });
      const fetchedDocument = await client.previewSession(token, document => document);

      const prismicDocument = keysToCamel(fetchedDocument);
      const documents = await this.getDocuments({ client, lang: '*' });

      // eslint-disable-next-line no-undef
      if (token && document) {
        // eslint-disable-next-line no-undef
        document.cookie = `${Prismic.previewCookie}=${token}; expires=${now.toUTCString()}; path=/`;
      }

      let pageContext = typeof options.onCreatePages === 'function' ? options.onCreatePages({ documents }) || {} : {};

      pageContext = { document: prismicDocument, ...pageContext };

      if (typeof options.onCreatePage === 'function') {
        pageContext = {
          ...pageContext,
          ...options.onCreatePage({
            document: prismicDocument,
            documents,
            ...pageContext
          })
        };
      }

      return pageContext;
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);

      return null;
    }
  };

  constructor({ accessToken, repositoryName }) {
    this.accessToken = accessToken;
    this.repositoryName = repositoryName;
    this.apiEndpoint = `https://${repositoryName}.prismic.io/api/v2`;
  }
}
