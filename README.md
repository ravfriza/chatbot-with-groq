# Simple Chatbot (Vite + React, Typescript, LangChain, Groq)

Simple chatbot that i created using LangChain and Groq AI, might update the features later...

## Features

- Chatting with Groq AI
- Custom UI components
- TypeScript support
- Modern development setup with Vite
- Responsive design
- Tailwind CSS for styling

## Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager
- Groq API key (get it from https://console.groq.com/login)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd <project-directory>
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:5173`

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── custom/
│   │   │   ├── header.tsx
│   │   │   └── chat-card.tsx
│   │   └── ui/
│   │       ├── input.tsx
│   │       └── button.tsx
│   ├── App.tsx
│   └── index.css
├── index.html
└── tailwind.config.js
```

## Technical Details

This template provides a minimal setup to get React working in Vite with HMR and ESLint rules.

### Available Plugins

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### ESLint Configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

1. Configure the top-level `parserOptions` property:

```js
export default tseslint.config({
  languageOptions: {
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

2. Update ESLint configuration with React support:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  settings: { react: { version: '18.3' } },
  plugins: {
    react,
  },
  rules: {
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## License

[MIT License](LICENSE)
