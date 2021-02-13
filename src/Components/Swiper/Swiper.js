import { Typography } from "@material-ui/core";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import useGetSpecials from "../../hooks/useGetSpecials";
import ProductCard from "../ProductCard/ProductCard";
import { useStyles } from "./Swiper.styles";
import SwiperMobile from "./SwiperMobile";

export default ({ list, spinner }) => {
  const classes = useStyles();
  if (list.length === 0) {
    return null;
  }
  return (
    <div className={classes.container}>
      <Typography className={classes.label}> :חבילות</Typography>
      <div className={classes.root}>
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {
            // s = item
            list.map((s) => {
              return (
                <SwiperSlide key={s.id}>
                  <ProductCard
                    title={s.title}
                    price={s.price}
                    img_url={s.img_url}
                    description={s.description}
                    id={s.id}
                    spinner={spinner}
                    share_link={`/productdetails/${s.id}`}
                  />
                </SwiperSlide>
              );
            })
          }
        </Swiper>
      </div>
      <SwiperMobile list={list} />
    </div>
  );
};
