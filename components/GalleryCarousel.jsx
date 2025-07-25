import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
const GalleryCarousel = () => {
  return (
    <Carousel orientation="horizontal">
      <CarouselContent>
        <CarouselItem>
          <Image
            src="/curriculum-crafter.png"
            alt="Curriculum Crafter"
            width={800}
            height={600}
            className="w-full h-auto"
          />
        </CarouselItem>
        <CarouselItem>
          <Image
            src="/lets-do-it.png"
            alt="Let's Do It"
            width={800}
            height={600}
            className="w-full h-auto"
          />
        </CarouselItem>
        <CarouselItem>
          {" "}
          <Image
            src="/ta-te-ti.png"
            alt="Ta TE TI"
            width={800}
            height={600}
            className="w-full h-auto"
          />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default GalleryCarousel;
