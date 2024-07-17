# PIN - Take-Home

This repo contains a partially implemented note taking app using Remix / React. The goal for this take-home is to implement some of the missing features of this app.

We ask that you spend no more than 2 hours on this project, as we will also review your code and pair on this project together in a follow up session.

## Getting Started

1. Start by cloning this repo to your local machine
1. `cd` to your newly cloned repo and take a look around
1. When ready, run `npm i`
1. Run your development server by running `npm run dev`
1. Open a browser window to `localhost:3000` to view the app

## Resources & Documentation

* [Prisma Schema](https://www.prisma.io/docs/concepts/components/prisma-schema)
* [Remix](https://remix.run/docs/en/main)

## Whats missing?

This app is missing much of its core functionality. The task here is to finish implementing some of the missing features for an MVP version of our note taking app. Much of the work needed to complete this project will be done in `app/routes/_index.ts`.

### Finish home page

1. Update the `_index.tsx` action functon to save notes to our Sqlite database. 
> Hint: you will need to import the prisma client from `db.server.ts`
1. Currently our notes are hard-coded inside of our `loader`. Display notes that are stored in the database using the Prisma client.
1. Add a `createdAt` field to the `Note` model in our Prisma schema in `schema.prisma`. 
> Hint: Don't forget to run migrations after you make changes to the schema.
1. After a note is created, clear the `New Note` form.

### Page UX improvements

Great! Now that we can create notes, let's improve the user experience a little bit. We're primarily going to be focused on enhancing the UX using [useFetcher](https://remix.run/docs/en/main/hooks/use-fetcher)

1. 

## Pairing Questions

There are a few other features we'd like to implement during our pairing session together.

1. Implement the ability to delete notes
2. Validate the users input. The title and body fields cannot be empty. Show an error in the `New Note` form and prevent the user from submitting the form.

Things we'll talk through:

* How can we make this application more production ready?
* How can we make this app more accessible?
* What steps could be taken to improve the performance of an app like this at scale?

## Questions?

If you need anything please do not hesistate to reach out to your interviewer.