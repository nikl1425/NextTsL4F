import React, {FC} from "react";
import Link from "next/link";

import {NavLinkProps} from "./types";

const NavLink : FC<NavLinkProps> = ({title, href}) => {
    return (
        <Link href={href}>{title}</Link>
    )
}

export default NavLink;