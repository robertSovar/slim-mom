function Button(props) {
  const { buttonName, style, type, onClick } = props;
  return (
    <div>
      <button className={style} type={type} onClick={onClick}>
        {buttonName}
      </button>
    </div>
  );
}

export default Button;
