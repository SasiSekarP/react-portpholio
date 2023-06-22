const SwitchContainer = () => {
  const switchBoxData = [
    {
      title: "Get discovered by more customers",
      txt: "Higher reviews & better listings make you more discoverable to people organically",
      id: "1",
      blueTxt: "Get started",
      img: "https://assets.website-files.com/62a83ee090ccdee139c347e5/62cc453f2139195799ff1678_Mask%20Group%20109.webp",
    },
    {
      title: "Faster conversion with our Captain AI",
      txt: "Automate web chat, messaging, reviews & feedbacks with our AI assistant",
      id: "2",
      blueTxt: "Get started",
      img: "https://assets.website-files.com/62a83ee090ccdee139c347e5/62def85e197fa06b03e4005b_Group%2018718.webp",
    },
    {
      title: "Marketing that works for you",
      txt: "Run highly effective & targeted campaigns on text & emails and put your customer data to use",
      id: "3",
      blueTxt: "Get started",
      img: "https://assets.website-files.com/62a83ee090ccdee139c347e5/62dee8fb4ff877b8c4b92833_new111.webp",
    },
    {
      title: "Training & Support",
      txt: "Talk to a dedicated relationship manager to get the help you need. No wait time, a dedicated line just for you.",
      id: "4",
      blueTxt: "Get started",
      img: "https://assets.website-files.com/62a83ee090ccdee139c347e5/62dee8fba79d98b49f7812a5_new222.webp",
    },
  ];
  return (
    <div>
      {switchBoxData.map((data) => {
        return (
          <div
            key={data.id}
            className={
              data.id % 2 === 0 ? "switchCard right" : "switchCard left"
            }
          >
            <div className="imgContainer">
              <img alt="img" src={data.img}></img>
            </div>
            <div className="switchCardTxtArea">
              <div className="switchCardTxtAreaTitle">{data.title}</div>
              <div className="switchCardTxtAreaTxt">{data.txt}</div>
              <div className="switchCardTxtAreaBlue">{data.blueTxt}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SwitchContainer;
