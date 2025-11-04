import "./myInputText.css";

export default function MyInputText({ props }) {
  const {
    className,
    type,
    placeholder,
    required = true,
    value,
    name,
    onChange,
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
