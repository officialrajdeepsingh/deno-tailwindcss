import { Head } from "$fresh/runtime.ts";
import Counter from "../islands/Counter.tsx";
import Layout from '../components/Layout.tsx';


export default function Home() {
  return (
    <>

      <Layout >

        <div className="bg-slate-300 w-4/6 flex flex-col  items-center mx-auto">

          <img
            src="/logo.svg"
            width="128"
            height="128"
            alt="the fresh logo: a sliced lemon dripping with juice"
          />
          <p>
            Welcome to  fresh with tailwind CSS. Try updating this message in the ./routes/index.tsx
            file, and refresh.
          </p>
          <Counter start={3} />
        </div>

      </Layout>
    </>
  );
}
