import { Stack } from "@/shared/ui/Stack/Stack"
import { Text } from "@/shared/ui/Text/Text"
import styles from "./AboutSection.module.scss"
import myFoto from "@/shared/assets/images/foto/PHOTO-76.jpg"
import { useResize } from "@/shared/hooks/useResize"
import { TypedText } from "@/shared/ui/TypedText/TypedText"
import Button from "@/shared/ui/Button/Button"
import Resume from "@/shared/assets/pdf/CV Frontend Developer Valerij Hering.pdf"
import { useTranslation } from "react-i18next"



export const AboutSection = ({idSection}) => {

    const { isMobile, isTablet } = useResize();
    const { t } = useTranslation("common");

    return (
        <Stack className={styles.aboutSection} id={idSection} data-section={idSection} tag="section" direction="column" align="center" gap="48" fullWidth>
            <Stack direction="column" align="center">
                <Text tag="h2" fontStyle="poppins700" size={isMobile ? "34" : "42"} color="blackSoft" >{t("about.About me")}</Text>
                <Stack className={styles.containerHeader} align="center" gap="4">
                    < hr/>
                    <Text color="blue" fontStyle="poppins500" size={isMobile ? "18" : "20"}>{t("about.who i am")}</Text>
                    <hr/> 
                </Stack>
            </Stack>
            <Stack className={styles.containerContent} direction={isTablet || isMobile ? "column" : "row"}  justify="evenly" align="center" gap="48" fullWidth>
                <img className={styles.foto} src={myFoto}/>
                <Stack direction="column" align="start" gap="16">
                    <Text tag="h2" size={isMobile ? 20 : isTablet ? 24 : 28} fontStyle="poppins600" color="blackSoft">{t("about.I'm Valerii and I'm a")} <TypedText/></Text>
                    <Text className={styles.content} color="grey" lineHeight={1.6} fontStyle="poppins300">
                        {t("about.about_text")}
                    </Text>
                    <Button as="a" variant="filled" color="blue" href={Resume} target="_blank">
                        {t("buttons.download_cv")}
                    </Button>
                </Stack>
            </Stack>
        </Stack>
    )
}