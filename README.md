# SuperCrawler Frontend App

## Created with React + TypeScript + Vite + Tailwind CSS + Flowbite React

To run the application just use couple of commands:

- `npm install`
- `npm run dev`

This should run local app on [localhost:5173](http://localhost:5173/).

## Configuring connection to the backend

In the folder `src\Config` we do keep our `pageConfig.ts` file.

- Configure the `BackendBaseUrl` property with the backend url like this:

```ts
   const PageConfig = {
    BackendBaseUrl: "http://localhost:7180",
    Timeout: 5000
  };,
```
