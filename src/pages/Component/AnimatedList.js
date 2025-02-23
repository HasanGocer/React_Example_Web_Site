import React, { useState, useCallback, useRef, useEffect } from "react";
import { useTransition, animated } from "@react-spring/web";
import styles from "./styles.module.css";

const theme = {
  primary: "#00CFFF", // Çok canlı turkuaz-mavi
  secondary: "#00E5FF", // Neon turkuaz
  backgroundGradient: "linear-gradient(135deg, #00B2E1, #00CFFF, #00E5FF)", // Parlak mavi-turkuaz geçişleri
  text: "#FFFFFF", // Beyaz, yüksek kontrast için
};

const AnimatedList = ({ itemsList }) => {
  const ref = useRef([]);
  const [items, setItems] = useState([]);

  const transitions = useTransition(items, {
    from: {
      opacity: 0,
      height: 0,
      innerHeight: 0,
      transform: "perspective(600px) rotateX(0deg)",
      color: theme.primary, // Canlı turkuaz-mavi
    },
    enter: [
      { opacity: 1, height: 80, innerHeight: 80 },
      {
        transform: "perspective(600px) rotateX(180deg)",
        color: theme.secondary,
      }, // Neon turkuaz
      { transform: "perspective(600px) rotateX(0deg)" },
    ],
    leave: [
      { color: "#c23369" }, // Ayrılırken farklı bir renk kullanmak istersen burayı değiştirebilirsin
      { innerHeight: 0 },
      { opacity: 0, height: 0 },
    ],
    update: { color: theme.text }, // Beyaz, yüksek kontrast için
  });

  const reset = useCallback(() => {
    ref.current.forEach(clearTimeout);
    ref.current = [];
    setItems([]);

    itemsList.forEach((item, index) => {
      ref.current.push(setTimeout(() => setItems(item), (index + 1) * 3000));
    });
  }, [itemsList]);

  useEffect(() => {
    reset();
    return () => ref.current.forEach(clearTimeout);
  }, [reset]);

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        {transitions(({ innerHeight, ...rest }, item) => (
          <animated.div
            className={styles.transitionsItem}
            style={rest}
            onClick={reset}
          >
            <animated.div style={{ overflow: "hidden", height: innerHeight }}>
              {item}
            </animated.div>
          </animated.div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedList;
