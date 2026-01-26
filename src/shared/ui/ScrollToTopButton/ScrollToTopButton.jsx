import { Stack } from "@/shared/ui/Stack/Stack"
import styles from "./ScrollToTopButton.module.scss"
import { useScrollTrigger } from "../../hooks/useScrollTrigger"
import { useScrollTo } from "../../hooks/useScrollTo"
import { ArrowIcon } from "../../assets/svg/ArrowIcon";


export const ScrollToTopButton = ({to}) => {

    const showButton = useScrollTrigger(10)
    const scrollTo = useScrollTo()

    return (
        <Stack>
            {showButton && (
            <button
                className={styles.scrollToTopButton}
                onClick={() => scrollTo(to)}
            >
                <ArrowIcon size={30} rotate="top"/>
            </button>
            )}
        </Stack>
    );
}