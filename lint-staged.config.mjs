const config = {
  '*.{md,json}': ['prettier --write'],
  '*.{ts,js,mjs}': ['eslint --fix', 'prettier --write'],
};

export default config;
