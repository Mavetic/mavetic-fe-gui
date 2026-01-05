@mavetic/mavetic-fe-core
=========================

FE GUI wrappers and utilities
-----------------

Features
--------
- Wrapper component for MUI providers with Next.js support
- Support for passing theme customizations

Installation
------------
Using pnpm (recommended):

```
pnpm add @mavetic/mavetic-fe-gui
```

You must also install the peer dependencies in your app:

```
pnpm add react@19 react-dom@19 @mui/material @mui/system @emotion/react @emotion/styled @emotion/cache
```

Peer versions used in this library (minimums):
- react: 19.2.0
- react-dom: 19.2.0
- @mui/material, @mui/system: ^7.2.0
- @emotion/react, @emotion/styled, @emotion/cache: ^11.14.x

If you use npm or yarn:

```
npm i @mavetic/mavetic-fe-gui # then add the peers above
# or
yarn add @mavetic/mavetic-fe-gui
```


Usage example
-----
```typescript jsx
import { GuiProvider } from "@mavetic/mavetic-fe-gui";
import type { createTheme } from "@mui/material/styles";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

const theme: Parameters<typeof createTheme>[0] = {
    typography: {
        fontFamily: roboto.style.fontFamily,
    },
};

const RootLayout = () => {
   return <GuiProvider theme={theme}>
        {/* App contents */}
    </GuiProvider>
}

export default RootLayout;
```

Local development
-----------------
- Build the library:
  ```
  pnpm build
  ```
- Lint & format (Biome):
  ```
  pnpm lint
  ```
- Run tests (Vitest + Testing Library):
  ```
  pnpm test
  ```
  
Publishing
----------
Build artifacts are emitted to `dist/` via `tsdown` and are the only files included in the package.

License
-------
This project is licensed under MIT license (see LICENSE file)
