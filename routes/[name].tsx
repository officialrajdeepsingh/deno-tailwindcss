import { PageProps } from "$fresh/server.ts";
import Layout from '../components/Layout.tsx';

export default function Greet(props: PageProps) {
  return <Layout>
              <div className="mx-auto mt-16">
                <h2 className="text-center text-4xl">Hello {props.params.name}</h2>
                </div>
    </Layout>
}
