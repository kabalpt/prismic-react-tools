const langs = require('./lang-config');

module.exports = ({ document }) => {
  let path;
  const { id, lang, uid } = document;

  if (uid === 'homepage') {
    path = `${langs[lang].default ? '' : langs[lang].path}/`;
  } else {
    path = `${langs[lang].default ? '' : langs[lang].path}/${uid || id}/`;
  }

  const context = {
    document,
    lang,
    locale: langs[lang].path,
    path
  };

  return context;
};
