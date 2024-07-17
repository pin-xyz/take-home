# PIN - Take-Home

This repo contains a partially implemented note taking app using Remix / React. The goal for this take-home is to implement some of the missing features of this app.

We ask that you spend no more than 2 hours on this project, as we will also review your code and pair on this project together in a follow up session.

## Getting Started

1. `cd` to this directory and take a look around
2. When ready, run `npm i`
3. Run your development server by running `npm run dev`
> Heads up: You'll need at least Node v18 installed to run this Remix code, although we recommend at least v20. If you're unsure how to do this, we recommend installing Node Version Manager (nvm) and then installing node with that.
4. Open a browser window to `localhost:3000` to view the app

## Resources & Documentation

* [Prisma Schema](https://www.prisma.io/docs/concepts/components/prisma-schema)
* [Remix](https://remix.run/docs/en/main)

## Whats missing?

This app is missing much of its core functionality. The task here is to finish implementing some of the missing features for an MVP version of our note taking app. Much of the work needed to complete this project will be done in `app/routes/_index.ts`.

### Finish home page

1. Update the `_index.tsx` action functon to save notes to our Sqlite database. 
> Hint: you will need to import the prisma client from `db.server.ts`
2. Currently our notes are hard-coded inside of our `loader`. Display notes that are stored in the database using the Prisma client.
3. Add a `createdAt` field to the `Note` model in our Prisma schema in `schema.prisma`. 
> Hint: Don't forget to run migrations after you make changes to the schema. See `package.json`'s `migrate` script.
4. After a note is created, clear the `New Note` form.

### Page UX improvements

Great! Now that we can create notes, let's improve the user experience a little bit. We're primarily going to be focused on enhancing the UX using [useFetcher](https://remix.run/docs/en/main/hooks/use-fetcher).

Imagine we're building this app in a real environment, so we have to deal with more latency than locally. Clicking the "Create" button may not work instantaneously. This might accidentally cause the user to press it again, which could result in several types of unwanted side-effects. To see this locally, a simple `await new Promise((resolve) => setTimeout(resolve, 5000));` could be added to the beginning of the `action`.

1. Instead of `Form`, switch to relying on `fetcher.Form`
2. Disable the Create button while the data is being submitted and handled by the server
3. Show a javascript `alert` once the note has been processed successfully
> Hint 1: this will likely involve using a React `useEffect`

> Hint 2: it may be helpful to return a non-null value from the `action` and make sure the `useFetcher` is typed correctly (e.g. `useFetcher<...>()`)

## Interview

### Pairing Questions

In the interview, your interviewer will ask you to discuss your solution for the above points. After that, you'll be given a few other features to implement in the code while explaining your solution to the interviewer.

If you have Visual Studio Code installed on your machine, please add the [LiveShare](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare) extension so your interviewer and you can collaborate on the code. If not, you can access LiveShare using your browser with a link your interviewer will provide.

### Algorithm Question

If there is time afterwards, your interviewer will walkthrough a basic algorithm problem (imagine Leetcode easy-medium) and chat about solutions.

## Questions?

If you need anything please do not hesistate to reach out to your interviewer.