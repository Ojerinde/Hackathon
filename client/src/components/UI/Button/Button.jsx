const Button = (props) => {
  console.log(props);
  return (
    <button
      onClick={props.onClick}
      type={props.type}
      className={`button ${props.className} `}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};
export default Button;
