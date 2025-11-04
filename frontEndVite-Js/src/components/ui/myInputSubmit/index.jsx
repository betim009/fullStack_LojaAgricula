import "./myInputSubmit.css";

export default function MyInputSubmit({ props }) {
  const { className, type = "submit", value, disabled, onClick } = props;
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
