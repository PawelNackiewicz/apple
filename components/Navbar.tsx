import Link from "next/link";
import { useContext } from "react";
import { ThemeContext } from "../pages/_app";

export function Navbar() {
  const [theme] = useContext(ThemeContext);

  return (
    <nav className={`bg-${theme}-500 min-w-full`}>
      <ul className="flex justify-end pr-2">
        <li className="m-1">
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li className="m-1">
          <Link href="/login">
            <a>Sign in</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
