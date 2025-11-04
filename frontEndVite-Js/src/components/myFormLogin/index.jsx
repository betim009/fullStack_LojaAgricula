import "./myFormLogin.css";
import MyInputSubmit from "../ui/myInputSubmit";
import MyInputText from "../ui/myInputText";

export default function MyFormLogin({ props }) {
  const { form, handleChange } = props;
  return (
    <form className="formLogin">
      <MyInputText
        props={{
          className: "text",
          type: "email",
          placeholder: "Digite seu email",
          name: "email",
          value: form.email,
          onChange: handleChange,
        }}
      />
      <MyInputText
        props={{
          className: "text",
          type: "password",
          placeholder: "Digite sua senha",
          name: "password",
          value: form.password,
          onChange: handleChange,
        }}
      />
      <MyInputSubmit
        props={{
          className: "submit",
          value: "Confirmar",
        }}
      />
    </form>
  );
}
