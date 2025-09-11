import { Link } from "react-router";

export function LoginPage() {
  return (
    <section>
      <div className="container bg-white mx-auto mt-32 w-xl px-24 py-16 flex flex-col gap-8 shadow-sm/4">
        <h1 className="text-2xl font-semibold">Sign in</h1>
        {/* PLACEHOLDER, replace with input components */}
        <div className="flex flex-col">
          <label className="mb-1">Name</label>
          <input
            type="text"
            id=""
            name=""
            placeholder=""
            className="border border-custom-gray rounded-md p-2"
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-1">Password</label>
          <input
            type="text"
            id=""
            name=""
            placeholder=""
            className="border border-custom-gray rounded-md p-2"
          />
        </div>
        <div className="bg-custom-blue text-white text-center text-xl py-3">
            Sign in
        </div>
        <div className="text-center text-custom-gray">
            <Link to="/">Back to results</Link>
        </div>
      </div>
    </section>
  );
}
