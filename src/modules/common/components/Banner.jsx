// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Autoplay, Pagination } from "swiper";

const bannerOptions = [
  "https://lnfdkaooikvjxeghvcba.supabase.co/storage/v1/object/public/ecommerce/banners/banner-4.webp",
  "https://lnfdkaooikvjxeghvcba.supabase.co/storage/v1/object/public/ecommerce/banners/banner-5.webp",
  "https://lnfdkaooikvjxeghvcba.supabase.co/storage/v1/object/public/ecommerce/banners/banner-6.webp",
];

export default function Banner() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="banner-swiper"
      >
        {bannerOptions.map((item) => (
          <SwiperSlide key={item}>
            <img src={item} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
