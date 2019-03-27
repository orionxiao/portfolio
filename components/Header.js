import Link from "next/link";

function Header() {
    return (
        <div className="header">
            <Link href="/"><a>Home</a></Link>
            &nbsp;&nbsp;&nbsp;
            <Link href="/about"><a>About</a></Link>
        </div>
    );
}

export default Header;
