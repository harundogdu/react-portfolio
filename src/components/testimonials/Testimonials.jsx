import React from 'react'
import './testimonials.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Title } from 'components';

const Testimonials = () => {
    const testimonials = [
        {
            name: 'John Doe',
            job: 'Web Developer',
            company: 'Company',
            img: 'https://i.pravatar.cc/100',
            comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam distinctio eligendi architecto nostrum, id natus consequatur unde porro, nihil vel, obcaecati assumenda dolor! Velit nobis sequi quo cum, quae qui!"
        },
        {
            name: 'John Doe',
            job: 'Web Developer',
            company: 'Company',
            img: 'https://i.pravatar.cc/110',
            comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam distinctio eligendi architecto nostrum, id natus consequatur unde porro, nihil vel, obcaecati assumenda dolor! Velit nobis sequi quo cum, quae qui!"
        },
        {
            name: 'John Doe',
            job: 'Web Developer',
            company: 'Company',
            img: 'https://i.pravatar.cc/111',
            comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam distinctio eligendi architecto nostrum, id natus consequatur unde porro, nihil vel, obcaecati assumenda dolor! Velit nobis sequi quo cum, quae qui!"
        },
        {
            name: 'John Doe',
            job: 'Web Developer',
            company: 'Company',
            img: 'https://i.pravatar.cc/115',
            comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam distinctio eligendi architecto nostrum, id natus consequatur unde porro, nihil vel, obcaecati assumenda dolor! Velit nobis sequi quo cum, quae qui!"
        },
        {
            name: 'John Doe',
            job: 'Web Developer',
            company: 'Company',
            img: 'https://i.pravatar.cc/102',
            comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam distinctio eligendi architecto nostrum, id natus consequatur unde porro, nihil vel, obcaecati assumenda dolor! Velit nobis sequi quo cum, quae qui!"
        }
    ]
    return (
        <section id='testimonials'>
            <Title title="Testimonials" text="Review from clients" />
            <div className='testimonial-container'>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={3}
                    navigation
                    pagination={{ clickable: true }}
                    loop
                    autoplay={{ delay: 1000 }}
                    fadeEffect={{ crossFade: true }}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 10
                        },
                        480: {
                            slidesPerView: 1,
                            spaceBetween: 10
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 20
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 30
                        }
                    }}
                >
                    {
                        testimonials.map((testimonial, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <div className='testimonial-item'>
                                        <div className='testimonial-img'>
                                            <img src={testimonial.img} alt={testimonial.name} />
                                        </div>
                                        <div className='testimonial-info'>
                                            <h3>{testimonial.name}</h3>
                                            <p>{testimonial.comment}</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
        </section >
    )
}

export default Testimonials