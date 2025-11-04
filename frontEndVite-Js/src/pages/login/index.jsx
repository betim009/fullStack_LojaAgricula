import { useState } from "react";
import MyFormLogin from "../../components/myFormLogin";

export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = ({ target }) => {
    const { value, name } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <>
      <MyFormLogin
        props={{
          form: form,
          handleChange: handleChange,
        }}
      />
    </>
  );
}
