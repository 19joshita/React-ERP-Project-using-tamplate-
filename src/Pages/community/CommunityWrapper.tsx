import React from "react";
import Community from "./Community";
import image1 from "./../../assets/community/image1.webp";
import image2 from "./../../assets/community/image2.webp";
import image3 from "./../../assets/community/image3.webp";
import image4 from "./../../assets/community/image4.webp";
type Props = {};

const CommunityWrapper = (props: Props) => {
  const communityData = [
    {
      image: image1,
      projectName: "One Wall Street",
      price: "1,23,4435",
      address: "1 Wall Street,Manhattan,NY",
    },
    {
      image: image2,
      projectName: "49 Chambers ",
      price: "3,250,000",
      address: "49 Chambers Street",
    },
    {
      image: image3,
      projectName: "Rose Hill ",
      price: "5,965,000",
      address: "30 East 29th Street",
    },
    {
      image: image4,
      projectName: "25 Park Row",
      price: "3,775,000",
      address: "25 Park Row,Manhattan",
    },
    {
      image: image2,
      projectName: "49 Chambers ",
      price: "3,250,000",
      address: "49 Chambers Street",
    },
  ];
  return (
    <div>
      <Community communityData={communityData} />
    </div>
  );
};

export default CommunityWrapper;
