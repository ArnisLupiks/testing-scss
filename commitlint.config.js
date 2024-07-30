module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
      'header-max-length': [2, 'always', 100],
      'body-leading-blank': [2, 'always'],
      'footer-leading-blank': [0, 'always'],
      'references-empty': [2, 'never'],
      'body-empty': [2, 'never'],
      'subject-min-length': [2, 'always', 100],
    },
    parserPreset: {
      parserOpts: {
        issuePrefixes: ['FIX-'],
      },
    },
  };