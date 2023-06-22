const GreenContainer = () => {
  return (
    <div className="greenContainer">
      <div className="greenHeading">Ready to grow?</div>
      <div className="greenBoxTxt">
        See why 100,000+ businesses trust us. Book a personalized demo to see
        <br />
        how SalesCaptain provides you the right tools to grow your business.
      </div>
      <div className="input-row2">
        <input
          name="demo-input"
          className="demo-input"
          placeholder="ENTER YOUR EMAIL"
        ></input>
        <button type="button" className="demo-input-btn">
          GET DEMO
        </button>
      </div>
      <div className="greenboxstarrow">
        <img
          className="greenboxImg"
          alt="img"
          src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62af532e37289b6270d7aba8_stars.webp"
        ></img>
        <div>500+ Reviews</div>
      </div>
    </div>
  );
};

export default GreenContainer;
