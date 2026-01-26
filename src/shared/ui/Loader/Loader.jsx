import styles from "./Loader.module.scss";
import { Stack } from "@/shared/ui/Stack/Stack"

export const Loader = ({ size = 16, color = "white" }) => {
    return <div className={styles.loader} style={{ width: size, height: size, color }}></div>;
};
