import {
  ActionFunctionArgs,
  json,
  LoaderFunctionArgs,
  type MetaFunction,
} from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";
import { format, parseISO } from "date-fns";

// eslint-disable-next-line no-empty-pattern
export const loader = ({}: LoaderFunctionArgs) => {
  return json({
    notes: [
      {
        id: "123",
        title: "My Note",
        body: "Some content in my note",
        createdAt: new Date(),
      },
      {
        id: "456",
        title: "Another Note",
        body: "Some content in my note",
        createdAt: new Date(),
      },
    ],
  });
};

// eslint-disable-next-line no-empty-pattern
export const action = ({}: ActionFunctionArgs) => {
  return null;
};

export const meta: MetaFunction = () => {
  return [
    { title: "Remix Notes" },
    { name: "description", content: "PIN Remix take-home" },
  ];
};

export default function Index() {
  const { notes } = useLoaderData<typeof loader>();

  return (
    <main className="h-full grid grid-cols-[400px_1fr] grid-rows-1">
      <Form
        method="post"
        className="px-4 py-2 bg-blue-200/50 flex flex-col gap-2"
      >
        <h2 className="font-semibold text-md text-blue-700">New Note</h2>
        <input
          name="title"
          placeholder="Title"
          className="w-full rounded-md px-2 py-1 focus:outline-2 outline-blue-500 outline-offset-2"
        />
        <textarea
          name="body"
          placeholder="Body"
          className="w-full rounded-md px-2 py-1 focus:outline-2 outline-blue-500 outline-offset-2"
        />
        <button className="bg-blue-500 rounded-md px-2 py-1 text-white hover:bg-blue-700 focus:outline-2 outline-blue-500 outline-offset-2 disabled:opacity:50 disabled:bg-slate-100">
          Create
        </button>
      </Form>
      <div className="px-4 py-2 overflow-auto flex flex-col gap-2">
        {notes.map(({ id, title, body, createdAt }) => (
          <div key={id} className="rounded-md bg-blue-50 px-3 py-2">
            <h2 className="font-semibold text-md text-blue-700">{title}</h2>
            <p className="text-blue-900">{body}</p>
            <div className="text-sm pt-2 text-blue-500">
              {format(parseISO(createdAt), "PPPpp")}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
