import axios from "axios";
import { useEffect, useState } from "react";

const data = {
  email: "",
  password: "",
};

export function useFormAuth(init = data) {
  const [form, setForm] = useState(init);
  const [disabledBtn, setDisabledBtn] = useState(true);
  const [msgAlert, setMsgAlert] = useState({
    status: "",
    text: "",
    show: false,
  });

  useEffect(() => {
    if (msgAlert.show) {
      setTimeout(() => {
        setMsgAlert({
          status: "",
          text: "",
          show: false,
        });
      }, 2500);
    }
  }, [msgAlert]);

  useEffect(() => {
    const emailOk = form.email.trim().length >= 10;
    const passwordOk = form.password.trim().length >= 8;
    setDisabledBtn(!(emailOk && passwordOk));
  }, [form.email, form.password]);

  const handleChange = ({ target }) => {
    const { value, name } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const url = "http://localhost:3000/users/login";

    try {
      const { data } = await axios.post(url, form);
      console.log(data);
      setMsgAlert({
        status: "success",
        text: "Login feito com sucesso",
        show: true,
      });
    } catch (err) {
      if (axios.isAxiosError(err) && err.response) {
        setMsgAlert({
          status: "failed",
          text: "Porfavor verificar suas credenciais novamente",
          show: true,
        });

        setForm({
          email: "",
          password: "",
          disabled: true,
        });
      } else {
        setMsgAlert({
          status: "off",
          text: "Servidor em manutenção",
          show: true,
        });
      }
    }
  };

  const handleCloseAlert = () => {
    console.log("Aki");
    setMsgAlert({
      status: "",
      text: "",
      show: false,
    });
  };

  return {
    form,
    handleChange,
    msgAlert,
    handleSubmit,
    handleCloseAlert,
    disabledBtn,
  };
}
