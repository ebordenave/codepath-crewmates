import "./Button.css";

export const Button = ({ color, backgroundColor, buttonText, onCLick }) => {
  const style = {
    backgroundColor: backgroundColor,
    color: color,
  };
  return (
    <div className="button" style={style}>
      <button style={style} onClick={onCLick}>
        {buttonText}
      </button>
    </div>
  );
};