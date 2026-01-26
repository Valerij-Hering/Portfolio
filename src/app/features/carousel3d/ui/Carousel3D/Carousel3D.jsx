import React, { useEffect, useRef, useCallback } from "react";
import PropTypes from "prop-types";
import styles from "./Carousel3D.module.scss";
import { Stack } from "@/shared/ui/Stack/Stack";
import { getStyles } from "@/shared/lib/getStyles";

export const Carousel3D = ({
  images = [],
  radius = 240,
  size = 150,
  speed = 60,
  autoRotate = true,
  tilt = -10, // наклон
  className = "",
}) => {
  const dragRef = useRef(null);

  // Расположение изображений по кругу
  const initPositions = useCallback(() => {
    const spin = dragRef.current.querySelector(`.${styles.spinContainer}`);
    if (!spin) return;

    const imgs = spin.children;
    const count = imgs.length;

    for (let i = 0; i < count; i++) {
      const deg = (i * 360) / count;
      imgs[i].style.transform = `rotateY(${deg}deg) translateZ(${radius}px)`;
      imgs[i].style.width = `${size}px`;
      imgs[i].style.height = `${Math.round(size * 1.4)}px`;
      imgs[i].style.left = "50%";
      imgs[i].style.top = "50%";
      imgs[i].style.margin = `-${Math.round(size / 2)}px 0 0 -${Math.round(size / 2)}px`;
      imgs[i].style.transition = "transform 1s";
    }
  }, [radius, size]);

  // Анимация автоворота через CSS
  useEffect(() => {
    const drag = dragRef.current;
    if (!drag) return;

    drag.style.transform = `rotateX(${tilt}deg)`;
    if (autoRotate) {
      drag.style.animation = `spin-reverse ${speed}s linear infinite`;
    } else {
      drag.style.animation = "none";
    }

    initPositions();
  }, [autoRotate, speed, tilt, initPositions]);

  return (
    <Stack className={getStyles(styles.carouselWrapper, {}, [className])} justify="center" align="center">
      <Stack ref={dragRef} className={styles.dragContainer}>
        <Stack className={styles.spinContainer}>
          {images.map((item) => (
            <img key={item.id} src={item.image} alt="" draggable="false"/>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
};

Carousel3D.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      image: PropTypes.string,
    })
  ).isRequired,
  radius: PropTypes.number,
  size: PropTypes.number,
  speed: PropTypes.number,
  autoRotate: PropTypes.bool,
  tilt: PropTypes.number,
  className: PropTypes.string,
};
