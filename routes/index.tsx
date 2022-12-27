import Counter from "../islands/Counter.tsx";
import Layout from '../components/Layout.tsx';


export default function Home() {
  return (
    <>

      <Layout >

        <div className="bg-slate-300 w-6/6  md:w-5/6 lg:w-4/6 xl:w-4/6 2xl:w-4/6 flex flex-col  items-center mx-auto">

          <img
            src="/logo.svg"
            width="128"
            height="128"
            alt="the fresh logo: a sliced lemon dripping with juice"
          />
          <p className="text-center text-md md:text-xl lg:text-1xl xl:text-2xl 2xl:text-2xl">
            Welcome to  fresh with tailwind CSS. Try updating this message in the ./routes/index.tsx
            file, and refresh.
          </p>
          <Counter start={3} />
        </div>

      </Layout>
    </>
  );
}
