import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import ProductCard from "../ProductCard/ProductCard";
import { useStyles } from "./Swiper.styles";

function SwiperMobile({ list, spinner }) {
  const classes = useStyles();
  if (list.length === 0) {
    return null;
  }
  return (
    <div className={classes.root_mobile}>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {
          // s = item
          list.map((s) => {
            return (
              <SwiperSlide>
                <ProductCard
                  title={s.title}
                  price={s.price}
                  img_url={s.img_url}
                  description={s.description}
                  id={s.id}
                  key={s.id}
                  share_link={`/productdetails/${s.id}`}
                />
              </SwiperSlide>
            );
          })
        }
      </Swiper>
    </div>
  );
}

export default SwiperMobile;
