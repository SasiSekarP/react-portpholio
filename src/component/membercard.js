const MemberCard = () => {
  const memberCard = [
    {
      img: "https://assets.website-files.com/62a83ee090ccdee139c347e5/62e0341ce2debac5188bfaa5_Mask%20Group%20174.webp",
      name: "Simon Page",
      position: "Owner, Mamagato Restaurant",
      string:
        "In 2022 so far we are hitting our best months in customers & revenue even in an economic downturn",
      offer: "40%",
      offer_head: "Average net profit increase",
      product_used: [
        "Messaging",
        "Webchat",
        "Reviews",
        "Listings",
        "Referrals",
      ],
      id: 1,
    },
    {
      img: "https://assets.website-files.com/62a83ee090ccdee139c347e5/62e0341c025451d2b6d54b11_xZ4wg2Xj-2.webp",
      name: "Daniel Wilson",
      position: "Marketing head, The Air Conditioning Company",
      string:
        "Our rating improved from 3.3 to 4.6 & reviews are up 200%, we are getting more leads from Google",
      offer: "200%",
      offer_head: "New review growth",
      product_used: [
        "Reviews",
        "Listings",
        "Messaging",
        "Webchat",
        "Customer Manager",
      ],
      id: 2,
    },
    {
      img: "https://assets.website-files.com/62a83ee090ccdee139c347e5/62ae22ec3263c7de8393966d_photo-1493666438817-866a91353ca9.webp",
      name: "Debbie Rose",
      position: "Owner, Jiva luxury Spa",
      string:
        "Effective text & email marketing campaign on SalesCaptain helped us make additional $150k in two weeks",
      offer: "$150k",
      offer_head: "Generated with marketing campaign",
      product_used: [
        "Marketing",
        "Webchat",
        "Review",
        "Messaging",
        "Competition & Insights",
      ],
      id: 3,
    },
  ];
  return (
    <div className="member-card-container">
      {memberCard.map((singleData) => {
        return (
          <div key={singleData.id} className="memberCard">
            <div className="row1">
              <div className="left">
                <img
                  alt="profile-img"
                  className="profile-img"
                  src={singleData.img}
                ></img>
              </div>
              <div className="memberCardRight">
                <div className="row1_top">{singleData.name}</div>
                <div className="row1_bottom">{singleData.position}</div>
              </div>
            </div>
            <div className="row2">"{singleData.string}"</div>
            <div className="row3">{singleData.offer}</div>
            <div className="row4">
              <div className="row4_child">{singleData.offer_head}</div>
            </div>
            <div className="row5">Product used :</div>
            <div className="row6">
              {singleData.product_used.map((data) => {
                return <div className="smallcard">{data}</div>;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default MemberCard;
