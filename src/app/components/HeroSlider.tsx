import { useRef } from "react";
import Slider from "react-slick";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Slide {
  image: string;
  title: string;
  subtitle: string;
  description?: string;
  gradient: string;
}

const slides: Slide[] = [
  {
    image:
      "https://img.freepik.com/free-photo/group-people-working-website-template_53876-25068.jpg?semt=ais_hybrid&w=740&q=80",
    title: "Engineering",
    subtitle: "the Future",
    description:
      "Custom software solutions that transform businesses",
    gradient: "from-black/80 via-[#2A478C]/70 to-transparent",
  },
  {
    image:
      "https://images.unsplash.com/photo-1758876022356-9e7597f556d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjB0ZWNoJTIwb2ZmaWNlJTIwd29ya3NwYWNlJTIwaW5ub3ZhdGlvbnxlbnwxfHx8fDE3NzY1MzI2NzV8MA&ixlib=rb-4.1.0&q=80&w=1920",
    title: "Innovation",
    subtitle: "at Scale",
    description:
      "Enterprise solutions powered by cutting-edge technology",
    gradient: "from-black/80 via-[#8C52FF]/70 to-transparent",
  },
  {
    image:
      "https://t4.ftcdn.net/jpg/04/19/26/97/360_F_419269782_9LsP3TQndMVnZ2j3ZhTPhMjaqQpFAth9.jpg",
    title: "Code That",
    subtitle: "Matters",
    description: "Building tomorrow's technology, today",
    gradient: "from-black/80 via-[#2A478C]/60 to-black/40",
  },
  {
    image:
      "https://res.cloudinary.com/jerrick/image/upload/v1746773742/681da6ee27b290001de4237a.jpg",
    title: "Empowering",
    subtitle: "Teams",
    description:
      "World-class internships shaping future engineers",
    gradient: "from-black/80 via-[#8C52FF]/60 to-transparent",
  },
];

export function HeroSlider() {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    pauseOnHover: false,
    arrows: false,
    cssEase: "cubic-bezier(0.87, 0, 0.13, 1)",
  };

  return (
    <div className="relative h-screen overflow-hidden group">
      <Slider ref={sliderRef} {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative h-screen">
            <div className="absolute inset-0">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-r ${slide.gradient}`}
              />
            </div>

            <div className="relative h-full flex items-center justify-center">
              <div className="max-w-7xl mx-auto px-6 lg:px-8 text-white">
                <div className="max-w-4xl">
                  <motion.h1
                    key={`title-${index}`}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold mb-2 leading-tight"
                  >
                    <span className="block text-white mb-2">
                      {slide.title}
                    </span>
                    <span className="block bg-gradient-to-r from-white via-blue-200 to-blue-300 bg-clip-text text-transparent">
                      {slide.subtitle}
                    </span>
                  </motion.h1>
                  {slide.description && (
                    <motion.p
                      key={`description-${index}`}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1, delay: 0.4 }}
                      className="text-xl md:text-2xl text-gray-200 font-light tracking-wide mt-6"
                    >
                      {slide.description}
                    </motion.p>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      <button
        onClick={() => sliderRef.current?.slickPrev()}
        className="absolute left-8 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 hover:bg-white/20 transition-all duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={() => sliderRef.current?.slickNext()}
        className="absolute right-8 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 hover:bg-white/20 transition-all duration-300"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10" />
    </div>
  );
}