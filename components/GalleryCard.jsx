import { Icon } from "@iconify/react";
import Image from "next/image";

const GalleryCard = ({ src, alt, width, height }) => {
  return (
    <div className="shadow-lg cursor-pointer transition duration-300 ease-in-out hover:scale-105">
      <div className="border-gray-500 border-1">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="w-full h-auto"
        />
      </div>
      <div className="border-gray-500 border-1 rounded-bl-lg rounded-br-lg h-8 flex items-center">
        <Icon
          icon="mdi-light:home"
          width={24}
          height={24}
        />
      </div>
    </div>
  );
};

export default GalleryCard;
