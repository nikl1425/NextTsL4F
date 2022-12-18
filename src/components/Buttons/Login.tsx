import React, {FC} from "react";
import { LoginProps } from "./types";


const Login: FC<LoginProps> = ({title, handler, disable}) => {

    return (
        <>
            <button className="" disabled={disable} onChange={() => handler()}>{title}</button>
        </>
    )
}

export default Login;