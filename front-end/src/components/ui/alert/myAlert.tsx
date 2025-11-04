import { useState } from "react";
import "./myAlert.css"

type MyAlertType = {
    text: string;
    className: string;
}

export default function MyAlert({ props }: { props: MyAlertType }) {
    const { text, className } = props;
    const [show, setShow] = useState(false);
    return (
        <div className={className} hidden={show}>
            <p>{text}</p>
            <button onClick={() => setShow(!show)}>X</button>
        </div>
    )
}