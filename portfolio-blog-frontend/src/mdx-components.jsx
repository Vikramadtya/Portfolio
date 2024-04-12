// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including inline styles,
// components from other libraries, and more.

export function useMDXComponents(components) {
  return {
    h2: ({ children }) => (
      <h2 className="mt-12 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0">
        {children}
      </h2>
    ),
    li: ({ children }) => (
      <li className="mt-2 leading-7 text-primary/90 md:text-lg">{children}</li>
    ),
    ul: ({ children }) => (
      <ul className="ml-6 list-disc space-y-2 ps-5 text-sm text-gray-600 marker:text-blue-600 dark:text-gray-400">
        {children}
      </ul>
    ),
    p: ({ children }) => (
      <p className="leading-7 text-primary/90 md:text-lg [&:not(:first-child)]:mt-6">
        {" "}
        {children}
      </p>
    ),
    ...components,
  };
}
