"use client";

import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const slides = [
  {
    img: "/food1.jpg",
    title: "Delicious Meals Delivered",
    desc: "Explore a variety of tasty dishes from your favorite restaurants.",
  },
  {
    img: "/food2.jpg",
    title: "Fresh & Healthy Choices",
    desc: "Enjoy nutritious meals crafted with fresh ingredients.",
  },
  {
    img: "/waiter.jpg",
    title: "Fastest Food Delivery",
    desc: "Get your food delivered hot and fresh at your doorstep.",
  },
];

export function Carousel() {
  const router = useRouter();

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000, stopOnInteraction: false }),
    Fade(),
  ]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.plugins().autoplay?.play();
  }, [emblaApi]);

  return (
    <section className="relative w-full">
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {slides.map((slide, i) => (
              <div
                key={i}
                className="embla__slide relative h-[65vh] md:h-[80vh] w-full"
              >
                {/* Background Image */}
                <Image
                  src={slide.img}
                  alt={slide.title}
                  fill
                  priority={i === 0}
                  className="object-cover"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/50" />

                {/* Content */}
                <div className="absolute inset-0 flex items-center justify-center text-center px-4">
                  <div className="max-w-2xl text-white">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4">
                      {slide.title}
                    </h1>
                    <p className="text-sm md:text-lg mb-6 opacity-90">
                      {slide.desc}
                    </p>

                    <Button
                      onClick={() => router.push("/meals")}
                      variant={"secondary"}
                    >
                      Explore Meals
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
