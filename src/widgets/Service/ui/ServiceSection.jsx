import styles from "./ServiceSection.module.scss"
import { Stack } from "@/shared/ui/Stack/Stack"
import { Text } from "@/shared/ui/Text/Text"
import { CardCarousel } from "@/app/features/card-carousel/ui/CardCarousel/CardCarousel"
import { useTranslation } from "react-i18next"
import { useResize } from "@/shared/hooks/useResize"


export const ServiceSection = ({idSection}) => {

    const { t } = useTranslation("common");
    const { isMobile, isTablet } = useResize();

    return (
        <Stack className={styles.containerService} id={idSection} data-section={idSection} tag="section" direction="column" align="center" gap="48">
            <Stack direction="column" align="center" >
                <Text tag="h2" fontStyle="poppins700" size={isMobile ? "34" : "42"} color="whiteSoft">{t("service.My Service")}</Text>
                <Stack className={styles.containerHeader} align="center" gap="4">
                    < hr/>
                    <Text color="blue" fontStyle="poppins500" size={isMobile ? "18" : "20"}>{t("service.what i provide")}</Text>
                    <hr/> 
                </Stack>
            </Stack>
            <CardCarousel/>
        </Stack>
    )
}