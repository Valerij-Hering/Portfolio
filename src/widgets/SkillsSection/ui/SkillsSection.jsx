import { Stack } from "@/shared/ui/Stack/Stack"
import { Text } from "@/shared/ui/Text/Text"
import styles from "./SkillsSection.module.scss"
import { Carousel3D } from "@/app/features/carousel3d/ui/Carousel3D/Carousel3D"
import Button from "@/shared/ui/Button/Button"
import { useResize } from "@/shared/hooks/useResize"
import { Slider } from "@/shared/ui/Slider/ui/Slider"
import { dataCertificates } from "@/shared/ui/Slider/lib/data"
import { useBodyScrollLock } from "../../../shared/hooks/useBodyScrollLock"
import {carousel3Dimages} from "../../../app/features/carousel3d/lib/data"
import { useTranslation } from "react-i18next"
import { ArrowIcon } from "../../../shared/assets/svg/ArrowIcon"
import { useBoolean } from "../../../shared/hooks/useBoolean"


export const SkillsSection = ({idSection}) => {

    const { isMobile, isTablet } = useResize();
    const { value: isSliderOpen, toggle, setFalse: sliderClose } = useBoolean();
    const { lockScroll, unlockScroll } = useBodyScrollLock();
    const { t } = useTranslation("common");

    return (
        <Stack className={styles.skillsSection} id={idSection} data-section={idSection} direction="column" align="center" fullWidth>
            <Stack direction="column" align="center">
                <Text tag="h2" fontStyle="poppins700" size={isMobile ? "34" : "42"} color="blackSoft">{t("skills.My Skills")}</Text>
                <Stack className={styles.containerHeader} align="center" gap="4">
                    < hr/>
                    <Text color="blue" fontStyle="poppins500" size={isMobile ? "18" : "20"}>{t("skills.what i know")}</Text>
                    <hr/> 
                </Stack>
            </Stack>
            <Stack className={styles.containerContent} direction={isTablet || isMobile ? "column_reverse" : "row"} justify="between" align={isTablet || isMobile ? "center" : "end"} gap={isTablet ? "48" : ""} fullWidth>
                <Stack className={styles.subcontainerContent}  direction="column" gap="16">
                    <Stack className={styles.content} direction="column">
                        <Text fontStyle="poppins700" size={isMobile ? "18" : "22"} color="blackSoft">
                            {t("skills.My creative skills & experience")}
                        </Text>
                        <Text fontStyle="poppins600" size={isMobile ? "16" : "20"} lineHeight={1.6} color="blackSoft">{t("skills.Languages")}: <Text tag="span" fontStyle="poppins400" size={isMobile ? "16" : "18"} color="blackSoft">JavaScript, Pithon</Text>
                        </Text>
                        <Text fontStyle="poppins600" size={isMobile ? "16" : "20"} color="blackSoft">{t("skills.Libraries & frameworks")}: <Text tag="span" fontStyle="poppins400" size={isMobile ? "16" : "18"} color="blackSoft">React, Redux, Node, Bootstrap 5</Text>
                        </Text>
                    </Stack>
                    <Button variant="filled" color="blue" onClick={() => { toggle(); lockScroll(); }}>{t("buttons.learn_more")}</Button>
                </Stack>
                <Carousel3D images={carousel3Dimages} size={isMobile ? "100" : "150"} radius={isMobile ? "150" : "240"}/>
            </Stack>
            {isSliderOpen &&
                <Stack 
                    className={styles.containerSlider} 
                    fullWidth
                    direction="column" 
                    gap="32"
                    justify="center"
                    align="center"
                    data-aos="zoom-out"
                >
                        <Slider data={dataCertificates} />
                        <Button
                            className={styles.btnClose}
                            variant="clear"
                            color="grey"
                            onClick={() => { sliderClose(); unlockScroll(); }}
                        >
                            <ArrowIcon rotate="left"/>{t("buttons.go_back")}
                        </Button>
                </Stack>
            }
        </Stack>
    )
}