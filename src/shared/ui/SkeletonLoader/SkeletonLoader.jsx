import { ImageIcon } from "../../assets/svg/ImageIcon";
import styles from "./SkeletonLoader.module.scss";
import clsx from "clsx";

export const SkeletonLoader = ({
  avatar = false,
  avatarSize = 48,
  titleLine = true,      // новая пропса: показывать заголовок
  lines = 0,             // кол-во обычных текстовых линий
  lineWidth = "100%",
  image = false,
  aspectRatio = "16/9",
  className
}) => {
  return (
    <div className={clsx(styles.wrapper, className)}>
      {avatar && <div className={styles.circle} style={{ width: avatarSize, height: avatarSize }} />}
      {image && <div className={styles.imageBlock} style={{ aspectRatio }} >
          <ImageIcon/>
        </div>}
      
      {(titleLine || lines > 0) && (
        <div className={styles.textLines}>
          {titleLine && <div className={clsx(styles.line, styles.titleLine)} style={{ width: "70%" }} />}
          {Array.from({ length: lines }).map((_, i) => (
            <div
              key={i}
              className={styles.line}
              style={{ width: lineWidth === "random" ? `${60 + Math.random() * 40}%` : lineWidth }}
            />
          ))}
        </div>
      )}
    </div>
  );
};
