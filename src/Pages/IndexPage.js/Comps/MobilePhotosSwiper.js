import React, { useState } from "react";
import { Typography, Fade } from "@material-ui/core";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import { useStyles } from "./IndexPage.style";

const Photo = ({ title, img_url }) => {
  const classes = useStyles();
  const [fade, setFade] = useState(false);
  return (
    <div
      className={classes.photo}
      style={{
        backgroundImage: `url(${img_url})`,
      }}
      onMouseOver={() => setFade(true)}
      onMouseOut={() => setFade(false)}
    >
      <Fade in={fade}>
        <div className={classes.title_fade}>
          <Typography variant="h5">{title}</Typography>
        </div>
      </Fade>
    </div>
  );
};

const list = [
  {
    title: "ישיבות אלכוהול",
    img_url: "https://i.ibb.co/p1DkCPv/pexels-posawee-suwannaphati-391213.jpg",
  },
  {
    title: "ישיבות וויד",
    img_url: "https://i.ibb.co/DYZTJNy/pexels-yash-lucid-1466335.jpg",
  },
  {
    title: "בוא תרגיע רגע",
    img_url: "https://i.ibb.co/VCqtddt/pexels-pixabay-55825.jpg",
  },
];

function MobilePhotosSwiper() {
  const classes = useStyles();

  return (
    <div className={classes.photos_mobile_container}>
      <Swiper spaceBetween={0} slidesPerView={1} autoplay={{ delay: 1000 }}>
        {list.map((photo) => {
          return (
            <SwiperSlide>
              <Photo img_url={photo.img_url} title={photo.title} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default MobilePhotosSwiper;
