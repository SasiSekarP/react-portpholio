import Navbar from "./navbar";
import GreenContainer from "./greenContainer";

const Resources = () => {
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
    {
      id: "4",
      img: "https://assets.website-files.com/62a83ee090ccdee139c347e5/62e65796ab613599bc167753_Mask%20Group%20193.webp",
      txt: "Learn how to use organic & paid social media strategies to get more customers through Facebook.",
      title: "Facebook 101 for small businesses",
    },
    {
      id: "5",
      img: "https://assets.website-files.com/62a83ee090ccdee139c347e5/62e65796773ee0d71b12079b_Mask%20Group%20192.webp",
      txt: "Check out the tips to decide which form of communication to use when connecting with your customers.",
      title: "Should it be a call or a text?",
    },
    {
      id: "6",
      img: "https://assets.website-files.com/62a83ee090ccdee139c347e5/62e65afa069cdf00e68a36eb_Mask%20Group%20198.webp",
      txt: "Learn how to add products to your google business profile and get much better discoverability",
      title: "Add products to your Google Business profile",
    },
    {
      id: "7",
      img: "https://assets.website-files.com/62a83ee090ccdee139c347e5/62e6593e86728d466efdfd9f_Mask%20Group%20196.webp",
      txt: "10 ways you can incorporate texting in your customer  interactions and improve their experience",
      title: "10 ways you can text customers",
    },
    {
      id: "8",
      img: "https://assets.website-files.com/62a83ee090ccdee139c347e5/62efdec027e6aed5b0229fe7_Mask%20Group%20211.webp",
      txt: "Learn how to use organic & paid social media strategies to get more customers through Facebook.",
      title: "Twitter 101 for small business",
    },
    {
      id: "9",
      img: "https://assets.website-files.com/62a83ee090ccdee139c347e5/62e6593ed40fd84f4e31f2c5_Mask%20Group%20194.webp",
      txt: "Check out specially curated tips to dominate local searches & stay on top in professional services industry",
      title: "Dominate local search in Professional Services",
    },
    {
      id: "10",
      img: "https://assets.website-files.com/62a83ee090ccdee139c347e5/62e65afa86728dcd3dfe1572_Mask%20Group%20199.webp",
      txt: "Negative reviews are an opportunity to grow. Learn how to respond to them properly to create a positive impression.",
      title: "Good ways to reply to a bad review",
    },
    {
      id: "11",
      img: "https://assets.website-files.com/62a83ee090ccdee139c347e5/62efde087d098c919770a100_blogposts.png",
      txt: "Learn how to add services to your google business profile and get much better discoverability",
      title: "Add services to your Google Business profile",
    },
    {
      id: "12",
      img: "https://assets.website-files.com/62a83ee090ccdee139c347e5/62e65afa2736d1673fa915ec_Mask%20Group%20197.webp",
      txt: "Discover how you can get more customers through organic & paid Instagram marketing strategies for your business",
      title: "Instagram 101 for small businesses",
    },
  ];
  return (
    <div className="container">
      <Navbar />
      <div className="imageContainer">
        <img
          className="resourcesimg"
          alt="img"
          src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62e5a3e4dd3aac1fd418842f_Mask%20Group%20189.webp"
        ></img>
        <img
          className="resourcesimg"
          alt="img"
          src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62e5a3a8ab61350b930e9916_Mask%20Group%20190.webp"
        ></img>
      </div>
      <div className="second-header-container">
        <h1 className="second-header">Recent Blogs</h1>
      </div>
      <div className="sampleResource">
        {thirdCardData.map((data) => {
          return (
            <div key={data.id} className="thirdCard2">
              <img src={data.img} alt="img" className="thirdCardImg"></img>
              <div className="resourceBlogSideTxt">BLOG POST</div>
              <div className="thirdCardTitle">{data.title}</div>
              <div className="thirdCardTxt">{data.txt}</div>
            </div>
          );
        })}
      </div>
      <GreenContainer />
    </div>
  );
};

export default Resources;
