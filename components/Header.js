import Link from "next/link";
import HeaderWrapper from "../styles";

function Header() {
    return (
        <HeaderWrapper>
            <h1>Orion Xiao</h1>
            <Link href="/">Home</Link>
            <Link href="/about">About Me</Link>
        </HeaderWrapper>
    );
}

export default Header;
