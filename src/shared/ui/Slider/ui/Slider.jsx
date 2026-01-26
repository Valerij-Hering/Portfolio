import { useResize } from "@/shared/hooks/useResize";
import styles from "./Slider.module.scss"
import { Pagination, Navigation,  } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Stack } from "../../Stack/Stack";
import { SkeletonLoader } from "@/shared/ui/SkeletonLoader/SkeletonLoader";
import { useImagePreload } from "@/shared/hooks/useImagePreload";


export const Slider = ({data}) => {

    const { isMobile } = useResize();

    return (
        <Stack className={styles.containerSlider}>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                clickable: true,
                }}
                navigation={isMobile ? false : true}
                modules={[Pagination, Navigation]}
            >
                {data?.map(item => {
                    const isLoaded = useImagePreload(item.image);

                    return (
                        <SwiperSlide key={item.id} className={styles.swiperSlide}>
                            {!isLoaded 
                                ? <SkeletonLoader image aspectRatio="4/3" titleLine={false} lines={0} />
                                : <img src={item.image} alt={item.title || "Slide"} className={styles.slideImage}/>
                            }
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </Stack>
    )
}