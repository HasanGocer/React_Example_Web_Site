import { useRef, useEffect } from "react";
import "./MouseLight.css"; // Stil dosyasını ayrı tutuyoruz

const MouseLight = () => {
  const lightRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (lightRef.current) {
        lightRef.current.style.left = `${event.clientX}px`;
        lightRef.current.style.top = `${event.clientY}px`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <div className="mouse-light" ref={lightRef}></div>;
};

export default MouseLight;
