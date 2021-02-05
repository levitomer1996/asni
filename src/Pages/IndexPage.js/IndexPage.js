import React, { useEffect } from "react";
import ParallexImage from "./Comps/ParallexImage";
import Swiper from "../../Components/Swiper/Swiper";
import useGetSpecials from "../../hooks/useGetSpecials";
import { useStyles } from "./Comps/IndexPage.style";
function IndexPage() {
  const classes = useStyles();
  const [getSpecials, specials, spinner] = useGetSpecials();
  useEffect(() => {
    getSpecials();
  }, []);

  return (
    <div>
      <ParallexImage />
      <Swiper list={specials} spinner={spinner} />
    </div>
  );
}

export default IndexPage;
