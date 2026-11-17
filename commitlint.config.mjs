export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // release commits carry generated notes with long lines
    'body-max-line-length': [0],
    'footer-max-line-length': [0],
  },
};
