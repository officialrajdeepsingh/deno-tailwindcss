
import { Head ,Link} from "$fresh/runtime.ts";
import { asset } from "$fresh/runtime.ts";
import Header from './Header.tsx';

export default function SharedHead(props) {
  
  return (
    <>
    <Head>
        <link href={ asset("/build.css") } rel="stylesheet" type="text/css" />
    </Head>

    <Header />

    <div className=" mt-10 mx-auto justify-center">
      {props.children}
    </div>
    
    </>
  );
}