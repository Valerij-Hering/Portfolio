import clsx from "clsx";
import styles from "./Hamburger.module.scss";

export const Hamburger = ({ isActive, onToggle, size = 24 }) => {
    return (
        <svg
            className={clsx(styles.ham4, { [styles.active]: isActive })}
            width={size}
            viewBox="22 25 56 50"
            onClick={onToggle}
        >
            <path className={styles.top} d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20" />
            <path className={styles.middle} d="m 70,50 h -40" />
            <path className={styles.bottom} d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20" />
        </svg>
    );
};
