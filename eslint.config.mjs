import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default tseslint.config(
  js.configs.recommended, // ESLint's recommended rules
  ...tseslint.configs.recommended, // TypeScript ESLint recommended rules
  // Incorporate Next.js specific configurations.
  // next/core-web-vitals is important.
  // We use FlatCompat for next/core-web-vitals as it's a common way Next.js provides its flat config parts.
  ...compat.extends("next/core-web-vitals"),
  // Add any other specific Next.js configs if needed, e.g. from next/typescript if not covered
  {
    // Specify languageOptions for TypeScript files if not implicitly covered by tseslint.configs.recommended
    // This ensures the parser is correctly set up for .ts and .tsx files.
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
    // You can add specific rules for Next.js/React here if needed
    // For example, rules from 'eslint-plugin-react' or 'eslint-plugin-jsx-a11y'
    // often included in 'next/core-web-vitals' or 'eslint-config-next'
  },
  eslintConfigPrettier // Prettier config to disable ESLint stylistic rules (must be last)
);
