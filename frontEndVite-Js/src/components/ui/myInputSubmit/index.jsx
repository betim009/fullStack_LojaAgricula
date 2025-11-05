import "./myInputSubmit.css";

export default function MyInputSubmit({ props }) {
  const { className, type = "submit", value, disabledBtn, onClick } = props;
  return (
    <input
      className={className}
      type={type}
      value={value}
      disabled={disabledBtn}
      onClick={onClick}
    />
  );
}
