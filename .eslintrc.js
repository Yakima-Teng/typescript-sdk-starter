module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  overrides: [
    {
      files: ["scripts/**/*.js"],
      "parserOptions": {
        "sourceType": "script"
      },
      rules: {}
    },
    {
      "files": ["src/**/*.ts", "test/**/*.ts"],
      extends: [
        'airbnb-base',
        'plugin:jest/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
      ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        // ecmaVersion用来指定你想要使用的 ECMAScript 版本
        ecmaVersion: 12,
        sourceType: 'module',
      },
      plugins: ['@typescript-eslint', 'import'],
      rules: {
        'import/no-unresolved': 'off',
        'import/extensions': 'off',
        'import/prefer-default-export': 'off',
        "no-shadow": "off",
        "@typescript-eslint/no-shadow": ["error"]
      },
    }
  ]
};
