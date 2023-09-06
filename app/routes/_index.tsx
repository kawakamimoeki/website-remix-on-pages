import type { V2_MetaFunction } from "@remix-run/cloudflare";
import { Link } from "@remix-run/react";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div
      className="leading-7 bg-white text-gray-900 dark:bg-gray-900 dark:text-white"
      style={{
        transition: "0.5s",
      }}
    >
      <div className="mx-auto max-w-3xl p-4">
        <div className="mb-5">
          <h1 className="text-4xl mb-1 font-bold">
            <Link to="/">
              <span className="">@moekidev</span>
            </Link>
          </h1>
          <p>{"Hello. I'm a web developer in Japan."}</p>
        </div>
        <div className="mb-5">
          <h2 className="text-2xl font-bold mb-1">Technology Leads People</h2>
          <p>
            Technology has fostered my creativity. Photos, music, software.
            Without computer technology, I would not have been able to make the
            ideas in my head a reality. It is a world where I can show photos to
            many people without an exhibition, and a world where I can make
            music without playing an instrument. My goal is to become an
            engineer who supports individual creativity.
          </p>
        </div>
        <div className="mb-5">
          <h2 className="text-2xl font-bold mb-1">Contact</h2>
          <p>
            <a className="underline" href="mailto: hello@moeki.dev">
              hello@moeki.dev
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
