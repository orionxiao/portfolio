import Link from "next/link";

function Header() {
  return (
    <header>
      <h1>Orion Xiao</h1>
      <Link href="/">Home</Link>
      <Link href="/about">About Me</Link>
    </header>
  );
}

export default Header;
