
export default function Header(props) {
  
  return (
    <>
    <header className="mt-10 w-full mx-auto justify-center">

        <nav className="w-4/6 mx-auto">
            <ul className="flex flex-row ">
                <li className="text-center mx-2"><a target="_blank" href="https://deno.com/">Docs</a></li>
                <li className="text-center mx-2"><a target="_blank" href="https://fresh.deno.dev/">Deploy</a></li>
                <li className="text-center mx-2"><a target="_blank" href="https://github.com/officialrajdeepsingh/deno-tailwindcss">Github</a></li>
            </ul>
        </nav>

    </header>
    </>
  );
}