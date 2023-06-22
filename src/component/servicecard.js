const ServiceCard = () => {
  const serviceCardData = [
    {
      id: "1",
      img: "https://assets.website-files.com/62a83ee090ccdee139c347e5/62dd3e7d32dfae5cd2e139e5_Group%2018673.svg",
      txt: "Healthcare",
    },
    {
      id: "2",
      img: "https://assets.website-files.com/62a83ee090ccdee139c347e5/62dd3e7c6aace717f0cd9c6b_Group%2018674.svg",
      txt: "Dental",
    },
    {
      id: "3",
      img: "https://assets.website-files.com/62a83ee090ccdee139c347e5/62dd3e7ee724d71235537f0b_Group%2018681.svg",
      txt: "Home Service",
    },
    {
      id: "4",
      img: "https://assets.website-files.com/62a83ee090ccdee139c347e5/62dd3e7d9f7f1bb4a89eedec_Group%2018675.svg",
      txt: "Retail",
    },
    {
      id: "5",
      img: "https://assets.website-files.com/62a83ee090ccdee139c347e5/62dd3e7ddd5081b753e27b8c_Group%2018676.svg",
      txt: "Hospitality",
    },
    {
      id: "6",
      img: "https://assets.website-files.com/62a83ee090ccdee139c347e5/62dd3e7d132cbe948c251a1b_Group%2018677.svg",
      txt: "Automotive",
    },
    {
      id: "7",
      img: "https://assets.website-files.com/62a83ee090ccdee139c347e5/62dd3e7e8642e919312d89de_Group%2018678.svg",
      txt: "Restaurants",
    },
    {
      id: "8",
      img: "https://assets.website-files.com/62a83ee090ccdee139c347e5/62dd3e7e13ffea380326cf92_Group%2018679.svg",
      txt: "Wellness",
    },
    {
      id: "9",
      img: "https://assets.website-files.com/62a83ee090ccdee139c347e5/62dd3e7e8642e9d49c2d89dd_Group%2018680.svg",
      txt: "Professional Service",
    },
    {
      id: "10",
      img: "https://assets.website-files.com/62a83ee090ccdee139c347e5/62dd3e7e9f7f1b11439eedef_Group%2018682.svg",
      txt: "Care service",
    },
    {
      id: "11",
      img: "https://assets.website-files.com/62a83ee090ccdee139c347e5/62dd3e7eee175fd8089febf1_Group%2018683.svg",
      txt: "Financial Service",
    },
    {
      id: "12",
      img: "https://assets.website-files.com/62a83ee090ccdee139c347e5/62dd3e7e9f7f1b73679eedee_Group%2018684.svg",
      txt: "Recreational Service",
    },
  ];
  return (
    <div className="serviceCardContainer">
      {serviceCardData.map((data) => {
        return (
          <div className="serviceCard" key={data.id}>
            <img
              alt="serviceCardImg"
              className="serviceCardImg"
              src={data.img}
            ></img>
            <div className="serviceCardTxt">{data.txt}</div>
          </div>
        );
      })}
    </div>
  );
};

export default ServiceCard;
