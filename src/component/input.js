const InputComponent = () => {
  return (
    <div className="input-row">
      <input
        name="demo-input"
        className="demo-input"
        placeholder="ENTER YOUR EMAIL"
      ></input>
      <button type="button" className="demo-input-btn">
        GET DEMO
      </button>
    </div>
  );
};

export default InputComponent;
