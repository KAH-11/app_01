import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Swipper = (props) => {

    const { items } = props;

    return ( 
        <div class="md:p-10 p-10 w-full mt-5 2xl:container mx-auto">
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ clickable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >

                {
                    items.map( (item , index) => (
                        <SwiperSlide key={index}><img src={item.url} alt="Error loading image!" class="block object-cover md:h-[60vh] w-full"/></SwiperSlide>
                    ) )
                }
                
            </Swiper>
        </div>
     );
}
 
export default Swipper;