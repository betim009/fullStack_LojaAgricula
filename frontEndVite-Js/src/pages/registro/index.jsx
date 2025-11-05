import MyInputText from "../../components/ui/myInputText";
import { useFormAuth } from "../../hooks/useFormAuth";

export default function Registro() {
  const { form, handleChange } = useFormAuth();

  return (
    <>
      <form>
        <MyInputText
          props={{
            className: "text",
            type: "text",
            placeholder: "Digite o nome completo",
            name: "username",
            value: form.username,
            onChange: handleChange,
          }}
        />

        <MyInputText
          props={{
            className: "text",
            type: "tel",
            placeholder: "Digite o telefone",
            name: "phone",
            value: form.phone,
            onChange: handleChange,
          }}
        />

        <MyInputText
          props={{
            className: "text",
            type: "email",
            placeholder: "Digite o email",
            name: "email",
            value: form.email,
            onChange: handleChange,
          }}
        />

        <MyInputText
          props={{
            className: "text",
            type: "password",
            placeholder: "Digite a senha",
            name: "phone",
            value: form.phone,
            onChange: handleChange,
          }}
        />
      </form>
    </>
  );
}
