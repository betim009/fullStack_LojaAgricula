import type { MouseEventHandler } from "react";
import "./myInputSubmit.css";

type MyInputSubmitProps = {
    className: string;
    type?: string;
    value: string;
    disabled?: boolean;
    onClick?: MouseEventHandler<HTMLInputElement>;
};

type MyInputSubmitComponentProps = {
    props: MyInputSubmitProps;
};

export default function MyInputSubmit({ props }: MyInputSubmitComponentProps) {
    const {
        className,
        type = "submit",
        value,
        disabled,
        onClick,
    } = props;

    return (
        <input
            className={className}
            type={type}
            value={value}
            disabled={disabled}
            onClick={onClick}
        />
    );
}
