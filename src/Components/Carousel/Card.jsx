import React from 'react'
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

const instructors = [
    {
      name: "Skyler White",
      image: "image-url",
      subject: "Design",
      rating: 4.5,
    },
    {
      name: "Emma Ava",
      image: "image-url",
      subject: "Marketing",
      rating: 4.7,
    },
    {
      name: "William Lucas",
      image: "image-url",
      subject: "Business",
      rating: 4.9,
    },
    {
      name: "Charlotte Mia",
      image: "image-url",
      subject: "Development",
      rating: 4.8,
    },
  ];

function Caro() {
  return (
    <div className="bg-pink-100 py-16 text-center">
      <h2 className="text-3xl font-bold mb-8">Expert Instructors</h2>
      <Swiper
        spaceBetween={20}
        slidesPerView={4}
        autoplay={{ delay: 3000 }}
        modules={[  Navigation]}
        className="flex justify-center"
      >
        {instructors.map((instructor, index) => (
        <SwiperSlide  key={index}>
            <div className="bg-white rounded-lg shadow-md p-6 transform transition-transform duration-300 hover:scale-105">
              <img
                className="rounded-full w-24 h-24 mx-auto mb-4"
                src={instructor.image}
                alt={instructor.name}
              />
              <h3 className="text-xl font-semibold">{instructor.name}</h3>
              <p className="text-gray-500">{instructor.subject}</p>
              <span className="text-yellow-500 mt-2 block">
                {instructor.rating} ⭐
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <button className="mt-8 bg-pink-500 text-white py-2 px-6 rounded-full hover:bg-pink-600 transition-colors duration-300">
        View All
      </button>
    </div>
  )
}

export default Caro