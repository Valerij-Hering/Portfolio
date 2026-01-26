import styles from "./AppPreloader.module.scss";
import { Stack } from "@/shared/ui/Stack/Stack"

export const AppPreloader = () => {
    return (
        <div className={styles.overlay}>
            <div className={styles.preloader}>
                {Array.from({ length: 9 }).map((_, i) => (
                    <div key={i}></div>
                ))}
            </div>
        </div>
    );
};
