function Button(props) {
  const { buttonName, style } = props;
  return (
    <div>
      <button className={style}>{buttonName}</button>
    </div>
  );
}

export default Button;
