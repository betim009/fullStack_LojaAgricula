import MyFormLogin from "../../components/myFormLogin";
import MyAlert from "../../components/ui/myAlert";
import { useFormAuth } from "../../hooks/useFormAuth";

export default function Login() {
  const {
    form,
    handleChange,
    msgAlert,
    handleSubmit,
    handleCloseAlert,
    disabledBtn,
  } = useFormAuth();

  return (
    <>
      <MyAlert
        props={{
          text: msgAlert.text,
          style: msgAlert.status,
          show: msgAlert.show,
          handleCloseAlert,
        }}
      />

      <span className="mBottom-10"></span>

      <MyFormLogin
        props={{
          form: form,
          handleChange,
          handleSubmit,
          disabledBtn,
        }}
      />
    </>
  );
}
