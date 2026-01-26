import { Stack } from "@/shared/ui/Stack/Stack"
import { Text } from "@/shared/ui/Text/Text"
import styles from "./CardCarousel.module.scss"
import { useTranslation } from "react-i18next"
import { useResize } from "@/shared/hooks/useResize"

export const CardCarousel = () => {

    const { t } = useTranslation("common");
    const { isMobile, isTablet } = useResize();


    return (
        <Stack justify="center" align="center">
            <figure className={styles.iconCards}>
                <Stack className={styles.iconCardsContent}>
                    <Stack className={styles.iconCardsItem} justify="center" align="end">
                        <Text className={styles.cardText} fontStyle="poppins500" size={isMobile ? "16" : "20"} color="white">{t("service.Web Development")}</Text>
                    </Stack>
                    <Stack className={styles.iconCardsItem} justify="center" align="end">
                        <Text className={styles.cardText} fontStyle="poppins500" size={isMobile? "16" : "20"} color="white">{t("service.Web Design")}</Text>
                    </Stack>
                    <Stack className={styles.iconCardsItem} justify="center" align="end">
                        <Text className={styles.cardText} fontStyle="poppins500" size={isMobile? "16" : "20"} color="white">{t("service.Responsive Design")}</Text>
                    </Stack>
                </Stack>
            </figure>
        </Stack>
    );
};
