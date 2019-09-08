import * as pageComponents from '../layouts';
import { withPrismicPreview } from 'prismic-react-tools';
import prismicOptions from '../../prismic-config';

export default withPrismicPreview({ pageComponents, ...prismicOptions });
