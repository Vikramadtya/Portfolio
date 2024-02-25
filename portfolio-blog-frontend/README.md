# Portfolio/Blog Frontend

![logo](../assets/logo.png)

## Getting Started

To run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

## Favicon

The favicon package was generated with [RealFaviconGenerator](https://realfavicongenerator.net/) [v0.16](https://realfavicongenerator.net/change_log#v0.16) using the main logo

## Usage instructions

Extract the package to the `public` directory

> Usually we extract this package in the root of web site. If site is http://www.example.com, we should be able to access a file named http://www.example.com/favicon.icon

Insert the following code in the `head` section of the `index.html`

```html
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
<link rel="manifest" href="/site.webmanifest" />
<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#1abc9c" />
<meta name="apple-mobile-web-app-title" content="Portfolio" />
<meta name="application-name" content="Portfolio" />
<meta name="msapplication-TileColor" content="#1abc9c" />
<meta name="theme-color" content="#ecf0f1" />
```

in `Next.js` we don't have `index.html` but instead we modify the `layout.js`

```javascript
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#1abc9c"
        />
        <meta name="apple-mobile-web-app-title" content="Portfolio" />
        <meta name="application-name" content="Portfolio" />
        <meta name="msapplication-TileColor" content="#1abc9c" />
        <meta name="theme-color" content="#ecf0f1" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
```

## Prettier

To install prettier

```shell
npm install --save-dev prettier
```

to run the prettier for formatting

```shell
npx prettier . --write
```

add the script in json

```json
"scripts": {
    ...
    "format": "npx prettier --write *"
  }
```

add file `.prettierrc`

## Eslint

To add eslint configuration for prettier

```shell
npm install -D eslint-config-prettier@8.5.0
```

the changes to `.eslintrc.json`

```json
{
  "extends": [
    "next/core-web-vitals",
    "eslint:recommended", // non-opinionated linting rules
    "prettier" // ignores some formatting rules, it should always be last
  ]
}
```
