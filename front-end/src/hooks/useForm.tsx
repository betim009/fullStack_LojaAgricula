"use client";
import { ChangeEvent, useState } from "react";

type UseFormProps = {
    email: string;
    password: string;
};

type UseFormReturn = {
    form: UseFormProps;
    handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export function useForm(initial: UseFormProps): UseFormReturn {
    const [form, setForm] = useState(initial);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        setForm({
            ...form,
            [name]: value,
        });
    };

    return {
        form,
        handleChange,
    };
}
