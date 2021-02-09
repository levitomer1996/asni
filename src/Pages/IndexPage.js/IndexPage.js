import React, { useEffect } from "react";
import ParallexImage from "./Comps/ParallexImage";
import Swiper from "../../Components/Swiper/Swiper";
import PhotosSwiper from "./Comps/PhotosSwiper";
import MobilePhotosSwiper from "./Comps/MobilePhotosSwiper";
import useGetSpecials from "../../hooks/useGetSpecials";
import { useStyles } from "./Comps/IndexPage.style";

function IndexPage() {
  const classes = useStyles();
  const [getSpecials, specials, spinner] = useGetSpecials();
  useEffect(() => {
    getSpecials();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ParallexImage />
      <Swiper list={specials} spinner={spinner} />
      <PhotosSwiper />
    </div>
  );
}

export default IndexPage;
