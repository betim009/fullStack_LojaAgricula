import type { ChangeEventHandler } from "react";
import "./myInputText.css";

type MyInputTextProps = {
    className: string;
    type: string;
    placeholder: string;
    required?: boolean;
    value?: string;
    name?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
};

type MyInputTextComponentProps = {
    props: MyInputTextProps;
};

export default function MyInputText({ props }: MyInputTextComponentProps) {
    const {
        className,
        type,
        placeholder,
        required = true,
        value,
        name,
        onChange
    } = props;

    return (
        <input
            className={className}
            type={type}
            placeholder={placeholder}
            required={required}
            value={value}
            name={name}
            onChange={onChange}
        />
    );
}
