import Link from "next/link";

export function Navbar() {
  return (
    <nav className="bg-green-500 min-w-full">
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
