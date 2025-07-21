import Image from "next/image";
import GalleryCard from "./GalleryCard";

const Gallery = () => {
  return (
    <>
      <GalleryCard
        src="/curriculum-crafter.png"
        alt="Curriculum Crafter"
        width={800}
        height={600}
      />
      <GalleryCard
        src="/lets-do-it.png"
        alt="Let's Do It"
        width={800}
        height={600}
      />
      <GalleryCard
        src="/ta-te-ti.png"
        alt="Ta TE TI"
        width={800}
        height={600}
      />
    </>
  );
};

export default Gallery;
