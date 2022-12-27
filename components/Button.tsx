import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";

export function Button(props: JSX.HTMLAttributes<HTMLButtonElement>) {
  return (
    <button className="bg-blue-600 text-black w-26 mx-2 py-1 px-3 mb-10"
      {...props}
      disabled={!IS_BROWSER || props.disabled}
    />
  );
}
