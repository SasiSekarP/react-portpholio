const SecondCardContainer = () => {
  const secondCardsContainer = [
    {
      title: "Attract",
      paradata: "Attract more customers",
      arrData: [
        {
          id: 1,
          icon: "https://assets.website-files.com/62a83ee090ccdee139c347e5/62d9bbec00a8aaf428800c75_Group%2018613.svg",
          title: "Reviews",
          description: "Improve ratings & get chosen more.",
        },
        {
          id: 2,
          icon: "https://assets.website-files.com/62a83ee090ccdee139c347e5/62d9bbeb4806cd1c4715ced5_Group%2018614.svg",
          title: "Listing",
          description: "improve listings & get seen more.",
        },
        {
          id: 3,
          icon: "https://assets.website-files.com/62a83ee090ccdee139c347e5/62d9bbec43bcc550dc49c6e8_Group%2018624.svg",
          title: "Marketing",
          description: "Reach out to customers on text & email.",
        },
        {
          id: 4,
          icon: "https://assets.website-files.com/62a83ee090ccdee139c347e5/62d9bbeb12ef6612375a88c4_Group%2018618.svg",
          title: "SmartPages",
          description: "Engage more with our AI SEO.",
        },
      ],
    },
    {
      title: "Engage",
      paradata: "Convert leads to customers",
      arrData: [
        {
          id: 1,
          icon: "https://assets.website-files.com/62a83ee090ccdee139c347e5/62d9bbeb8a983469d6918815_Group%2018616.svg",
          title: "WebChat",
          description: "Convert leads on website chat with ou Ai.",
        },
        {
          id: 2,
          icon: "https://assets.website-files.com/62a83ee090ccdee139c347e5/62d9bbeb7cee6e0fc06b720a_Group%2018617.svg",
          title: "Messaging",
          description: "Engage with customers across all channels.",
        },
        {
          id: 3,
          icon: "https://assets.website-files.com/62a83ee090ccdee139c347e5/62d9bbebaaeb8c7e7cef4b97_Group%2018619.svg",
          title: "Referrals",
          description: "Let your customers refer you.",
        },
        {
          id: 4,
          icon: "https://assets.website-files.com/62a83ee090ccdee139c347e5/62d9bbeb12ef6662a15a88c5_Group%2018615.svg",
          title: "Payments",
          description: "Modernize your payment tools.",
        },
      ],
    },
    {
      title: "Elevate",
      paradata: "Provide a delightful experience",
      arrData: [
        {
          id: 1,
          icon: "https://assets.website-files.com/62a83ee090ccdee139c347e5/62d9bbec5519b27af4eec871_Group%2018623.svg",
          title: "Captain AI",
          description: "Your AI assistant to drive growth",
        },
        {
          id: 2,
          icon: "https://assets.website-files.com/62a83ee090ccdee139c347e5/62d9bbec4d64345353355417_Group%2018621.svg",
          title: "Feedback & survey",
          description: "Listen to your customers & delight them.",
        },
        {
          id: 3,
          icon: "https://assets.website-files.com/62a83ee090ccdee139c347e5/62d9bbecb9ed0fa8b30e3a47_Group%2018620.svg",
          title: "Competition & Insights",
          description: "Learn about your competitors & insights.",
        },
        {
          id: 4,
          icon: "https://assets.website-files.com/62a83ee090ccdee139c347e5/62d9bbec4a3eedd06bd65d1a_Group%2018622.svg",
          title: "Customer Manager",
          description: "Manage all your customer data & activity.",
        },
      ],
    },
  ];
  return (
    <div className="secondCardsContainer">
      {secondCardsContainer.map((singledata, index) => {
        return (
          <div key={index} className="secondClassCard">
            <div className="secondClassCardTitle">{singledata.title}</div>
            <div className="secondClassCardLable">{singledata.paradata}</div>
            <div className="secondsmallCardContainer">
              {singledata.arrData.map((data) => {
                return (
                  <div className="secondsmallContainer">
                    <img
                      alt="img"
                      className="secondCardSmallImage"
                      src={data.icon}
                    ></img>
                    <div>
                      <div className="secondCardRightTop">{data.title}</div>
                      <div className="secondCardRightBottom">
                        {data.description}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SecondCardContainer;
