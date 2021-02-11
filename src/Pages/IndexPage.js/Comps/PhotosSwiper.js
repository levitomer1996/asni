import React, { useState } from "react";
import { Typography, Fade } from "@material-ui/core";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import { useStyles } from "./IndexPage.style";
import MobilePhotosSwiper from "./MobilePhotosSwiper";

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
  {
    title: "ישישבות בים",
    img_url: "https://i.ibb.co/6mBkf3N/pexels-photo-4609731.jpg",
  },
];

function PhotosSwiper() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.photos_container}>
        <Swiper
          spaceBetween={20}
          slidesPerView={3}
          scrollbar={{ draggable: true }}
        >
          {list.map((photo) => {
            return (
              <SwiperSlide>
                <Photo img_url={photo.img_url} title={photo.title} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <MobilePhotosSwiper />
    </>
  );
}

export default PhotosSwiper;
