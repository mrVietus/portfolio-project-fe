# SuperCrawler Frontend App

## Created with React + TypeScript

To run the application just use couple of commands:

- `npm install`
- `npm run dev`

This should run local app on [localhost:5173](http://localhost:5173/).

## Technologies Used

- [React](https://react.dev/)

- [TypeScript](https://www.typescriptlang.org/)

- [Vite](https://vitejs.dev/)

- [Tailwind CSS](https://tailwindcss.com/)

- [Flowbite React](https://www.flowbite-react.com/)

- [TanStack Query v5](https://tanstack.com/query/v5/)

## Configuring connection to the backend

In the folder `src\Config` we do keep our `pageConfig.ts` file.

- Configure the `BackendBaseUrl` property with the backend url,
- Configure the `ItemsPerPage` property with desired number of items that will be taken into pagination

```ts
   const PageConfig = {
    BackendBaseUrl: "http://localhost:7180",
    Timeout: 5000,
    ItemsPerPage: 10
  };,
```
