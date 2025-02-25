import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import {Pagination} from "swiper/modules";
import {useTranslation} from "react-i18next";


const Testmonials = () => {
    const {t} = useTranslation()
    return (
        <div className='bg-[#e4c393] px-[32px] py-[64px] max-lg:p-[32px]'>
            <h1 className='text-[32px] text-center font-semibold pb-[20px]'>{t('testimonialsTitle')}</h1>
            <Swiper
                slidesPerView={1}
                pagination={{clickable: true}}
                modules={[Pagination]}
                className="relative" // Додаємо більше відступу внизу
            >
                <SwiperSlide>
                    <div
                        className='flex flex-col items-center text-[#988463] text-[20px] text-center gap-[10px] w-full'>
                        <h3 className='w-[70%]'>
                          "{t('testimonial1')}"
                        </h3>
                        <p>— Sophie & Pierre, {t('france')}</p>
                        <img
                            className='w-[48px] h-[48px] rounded-[50%] border-white border-[3px]'
                            src='https://images.unsplash.com/photo-1686668214052-862d295d120a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjQzOTV8MHwxfHNlYXJjaHwxMDJ8fGZhbWlseSUyMHdpdGglMjBuZXdib3JufGVufDB8fHx8MTczODgwNTIyNnww&ixlib=rb-4.0.3&q=80&w=1080'
                            alt=''
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className='flex flex-col items-center text-[#988463] text-[20px] text-center gap-[10px] w-full'>
                        <h3 className='w-[70%]'>
                            "{t('testimonial2')}"
                        </h3>
                        <p>— Daniel & James, {t('usa')}</p>
                        <img
                            className='w-[48px] h-[48px] rounded-[50%] border-white border-[3px]'
                            src='https://images.unsplash.com/photo-1562386144-647fa76ce59a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjQzOTV8MHwxfHNlYXJjaHwzNXx8Z2F5c3xlbnwwfHx8fDE3Mzg4MDUwNzN8MA&ixlib=rb-4.0.3&q=80&w=1080'
                            alt=''
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className='flex flex-col items-center text-[#988463] text-[20px] text-center gap-[10px] w-full'>
                        <h3 className='w-[70%]'>
                            "{t('testimonial3')}"
                            <br/>
                        </h3>
                        <p>— Elena & Marco, {t('italy')}</p>
                        <img
                            className='w-[48px] h-[48px] rounded-[50%] border-white border-[3px]'
                            src='https://images.unsplash.com/photo-1600232857706-2513fd7d7c16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjQzOTV8MHwxfHNlYXJjaHw4N3x8bWlkZGxlJTIwYWdlJTIwY291cGxlfGVufDB8fHx8MTczODgwNDk5N3ww&ixlib=rb-4.0.3&q=80&w=1080'
                            alt=''
                        />
                    </div>
                </SwiperSlide>

                <div className="custom-pagination mt-10"></div>
            </Swiper>

        </div>
    );
};

export default Testmonials;