import Link from "next/link";
import { HeaderWrapper }from "../styles";

function Header() {
    return (
        <HeaderWrapper>
            <Link href="/">Home</Link>
            <Link href="/about">About Me</Link>
        </HeaderWrapper>
    );
}

export default Header;
