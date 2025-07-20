"useClient";
import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ArrowUp = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!show) return null; 

  return (
    <a
      href="/#main"
      aria-label="Scroll to top"
      className="fixed bottom-4 right-4 z-[9999] text-black p-3 rounded-full shadow-lg hover:bg-purple-500 hover:text-white transition cursor-pointer animate-bounce"
    >
      <FaArrowUp />
    </a>
  );
};

export default ArrowUp;
