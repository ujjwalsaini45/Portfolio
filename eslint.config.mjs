import { defineConfig } from "eslint/config";

const eslintConfig = defineConfig([
  {
    rules: {},
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  },
]);

export default eslintConfig;