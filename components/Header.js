import Link from "next/link"

function Header() {
    return (
        <div className="header">
            <Link href="#home" prefetch>
                <a>Home</a>
            </Link>

            <Link href="#portfolio" prefetch>
                <a>Portfolio</a>
            </Link>

            <Link href="#bio" prefetch>
                <a>About</a>
            </Link>
        </div>
    )
}

export default Header
