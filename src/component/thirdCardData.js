const ThirdCardData = () => {
  const thirdCardData = [
    {
      id: "1",
      img: "https://assets.website-files.com/62a83ee090ccdee139c347e5/62defe250a42e4ba76b2ab04_Mask%20Group%20166.webp",
      txt: "Customers want to find local proprietors on search engines and nearly 90 percent of that traffic goes to Google.",
      title: "Google My Business Basics: How to get more customers from GMB.",
    },
    {
      id: "2",
      img: "https://assets.website-files.com/62a83ee090ccdee139c347e5/62defe243b03ce85cb2d8c9d_Mask%20Group%20165.webp",
      txt: "Today’s leading businesses aren’t just being found - they’re engaging the moment they’re discovered.",
      title: "How to use Google's Business Messaging tool to get new customers",
    },
    {
      id: "3",
      img: "https://assets.website-files.com/62a83ee090ccdee139c347e5/62defe2556fec0b3086291da_pexels-antoni-shkraba-4348404.webp",
      txt: "More than 61% of marketers have reported that attracting traffic to their website is their biggest challenge.",
      title: "6 Ways to Increase Your Website Traffic and Leads",
    },
  ];
  return (
    <div className="sampleResource">
      {thirdCardData.map((data) => {
        return (
          <div key={data.id} className="thirdCard">
            <img src={data.img} alt="img" className="thirdCardImg"></img>
            <div className="thirdCardTitle">{data.title}</div>
            <div className="thirdCardTxt">{data.txt}</div>
          </div>
        );
      })}
    </div>
  );
};

export default ThirdCardData;
