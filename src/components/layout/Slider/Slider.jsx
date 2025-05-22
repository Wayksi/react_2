import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import "swiper/css";
import { SliderWrapper } from "./style";
import ProductCard from "@ui/ProductCard/ProductCard";

function Slider({ products }) {  
    const swiperRef = useRef(null);
    
    return (
        <SliderWrapper>
            <Swiper
                direction="vertical"
                spaceBetween={12}
                slidesPerView="auto"
                freeMode={true}
                modules={[Mousewheel]}
                mousewheel={true}
                pagination={{
                type: "fraction"
        }}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
            >
                {products.map((product, index) => (
                    <SwiperSlide key={product.id} onClick={() => swiperRef.current?.slideTo(index)}>
                        <ProductCard product={product} />                
                    </SwiperSlide>
                ))}                
            </Swiper>
        </SliderWrapper>
    );
};

export default Slider;
