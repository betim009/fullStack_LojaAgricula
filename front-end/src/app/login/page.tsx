"use client"
import "./login.css"
import MyInputText from "@/components/ui/myInputText";
import MyHeader from "@/components/myHeader";
import MyInputSubmit from "@/components/ui/myInputSubmit";
import { useForm } from "@/hooks/useForm";
import { ChangeEvent, useEffect, useState } from "react";
import axios from "axios";
import MyAlert from "@/components/ui/alert/myAlert";

export default function Login() {
    const [showAlert, setShowAlert] = useState("");
    const { handleChange, form } = useForm({
        email: "",
        password: ""
    })

    useEffect(() => {
        setTimeout(() => {
            setShowAlert("")
        }, 3500);
    }, [showAlert])

    const handleSubmit = async (event: ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();
        const url = "http://localhost:3000/users/login";
        try {
            const { data } = await axios.post(url, form);
            setShowAlert("success");
        } catch (err) {
            if (axios.isAxiosError(err) && err.response) {
                setShowAlert("failed");
                console.log("AKI")
            } else {
                setShowAlert("Servidor off");;
            }
        }
    }

    return (
        <>
            <MyHeader />
            {showAlert === "success" && <MyAlert
                props={{
                    text: "Login feito com sucesso!",
                    className: "success"
                }}
            />}

            {showAlert === "failed" && <MyAlert
                props={{
                    text: "Falha ao tentar fazer login, confira o seu email e password.",
                    className: "failed"
                }}
            />}
            <form className="form-login" onSubmit={handleSubmit}>
                <MyInputText
                    props={{
                        className: "text",
                        type: "email",
                        placeholder: "Digite seu email",
                        name: "email",
                        value: form.email,
                        onChange: handleChange
                    }}
                />
                <MyInputText
                    props={{
                        className: "text",
                        type: "password",
                        placeholder: "Digite sua senha",
                        name: "password",
                        value: form.password,
                        onChange: handleChange
                    }}
                />
                <MyInputSubmit
                    props={{
                        className: "submit",
                        value: "Confirmar",
                    }}
                />
            </form>
        </>
    )
}
