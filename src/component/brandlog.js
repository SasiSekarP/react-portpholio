const BrandLogo = () => {
  const brandLogo = [
    "https://assets.website-files.com/62a83ee090ccdee139c347e5/62d969cad44fb711e700c0a1_Group%2018530.webp",
    "https://assets.website-files.com/62a83ee090ccdee139c347e5/62d969cae70f01d34820d129_Group%2018531.webp",
    "https://assets.website-files.com/62a83ee090ccdee139c347e5/62d969c99e10c822b37179e8_Group%2018532.webp",
    "https://assets.website-files.com/62a83ee090ccdee139c347e5/62d969ca4e2bcd235bf57982_Group%2018533.webp",
    "https://assets.website-files.com/62a83ee090ccdee139c347e5/62d969ca47165b7b29cd5bfa_Group%2018534.webp",
    "https://assets.website-files.com/62a83ee090ccdee139c347e5/62d969cb054ce48a81f23d47_Group%2018535.webp",
    "https://assets.website-files.com/62a83ee090ccdee139c347e5/62d969caa274fa886bbafd69_Group%2018536.webp",
  ];
  return (
    <>
      {brandLogo.map((singleData, index) => {
        return (
          <img
            alt="brand-log-images"
            className="brand-card"
            key={index}
            src={singleData}
          ></img>
        );
      })}
    </>
  );
};

export default BrandLogo;
