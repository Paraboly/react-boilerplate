# Paraboly React Boilerplate

> Paraboly react boilerplate web application repository.

## TODO:

- [x] Initial working version
- [x] Refactoring webpack
- [ ] i18n support
- [ ] Refactoring routing
- [ ] Refactoring app navigation
- [ ] Add lazy-loading support
- [ ] Prettier config
- [ ] Eslint config
- [ ] Editor config
- [ ] Haskey integration
- [ ] Github actions
- [ ] Fix multi-times hmr triggers

## Installation

1. Clone/download repo
2. `npm install`

---

## Commands

| Command              | Description                                                                               |
| -------------------- | ----------------------------------------------------------------------------------------- |
| `npm run start`      | (alias of `npm run start-dev`)                                                            |
| `npm run start-dev`  | Build app continuously (HMR enabled) and serve @ `http://localhost:${env.PORT \|\| 2999}` |
| `npm run start-prod` | Build app once (HMR disabled) to `/dist/` and serve @ `http://localhost:9001`             |
| `npm run build`      | Build app to `/dist/`                                                                     |
| `npm run test`       | Run tests                                                                                 |
| `npm run lint`       | Run linter                                                                                |
| `npm run lint -- --fix` | Run linter and fix issues                                                                 |

---
## Features
- Typescript, styled-components and scss support
- Hot reload without page refresh
- Home page, Login page and protected routes
- Lazy loaded routes
- Optimized production build by code splitting
- i18n support
- React 18, MUI 5 and Webpack 5
## Technology Stack

#### UI Dependency

- **[React](https://facebook.github.io/react/)** (18.x)
- **[ReactRouter](https://reactrouter.com/)** (5.x)
- **[MUI](https://mui.com/)** (5.x)
- **[ReactIcons](https://react-icons.github.io/react-icons/)** (4.3.1)
- **[Axios](https://github.com/axios/axios)** (0.27.2)

#### DEV Dependency

- **[Webpack](https://webpack.js.org/)** (5.x)
- **[Typescript](https://www.typescriptlang.org/)** (4.x)
- **[Hot Module Replacement (HMR)](https://webpack.js.org/concepts/hot-module-replacement/)** ([React Fast Refresh](https://github.com/pmmmwh/react-refresh-webpack-plugin))
- [SASS](http://sass-lang.com/) support
- Code linting ([ESLint](https://github.com/eslint/eslint)) and formatting ([Prettier](https://github.com/prettier/prettier))
- Test framework ([Jest](https://facebook.github.io/jest/))

#### Logging

- **[Sentry](https://docs.sentry.io/platforms/javascript/)** (6.x)
- **[Logrocket](https://docs.logrocket.com/reference/javascript-sdk-api)** (3.x)

_Boilerplate: [React Webpack Babel Starter](https://github.com/vikpe/react-webpack-babel-starter)_
