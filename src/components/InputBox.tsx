import "../css/input-box.css";

const InputBox = (props: any) => {
  return (
    <>
      <input className="InputBox" placeholder={props.placeholder} />
    </>
  );
};

export default InputBox;
