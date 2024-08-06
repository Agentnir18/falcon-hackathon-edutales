# Story Wise Frontend Setup

## Instructions to Run Locally

1. **Clone the Repository:**

    ```bash
    git clone https://github.com/your-repo/story-wise.git
    cd story-wise
    ```

2. **Install Dependencies:**

    ```bash
    npm install
    ```

3. **Run the Development Server:**

    ```bash
    npm run dev
    ```

4. **Build for Production:**

    ```bash
    npm run build
    ```

5. **Preview the Production Build:**

    ```bash
    npm run preview
    ```

## Installed Packages

- `react`
- `react-dom`
- `vite`
- `@vitejs/plugin-react`
- `eslint`
- `eslint-plugin-react`
- `@typescript-eslint/eslint-plugin`
- `@typescript-eslint/parser`

## Features of Story Wise

- **Generate Stories/Sitcom scripts using AI:** User inputs their topic and understands through generated stories/sitcom scripts
- **Search:** Users can search from our vast collection.
- **Filter:** Users can filter from our vast collection.

## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json', './tsconfig.app.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list