import { Stack } from "@/shared/ui/Stack/Stack"
import { Text } from "@/shared/ui/Text/Text"
import Button from "@/shared/ui/Button/Button"
import styles from "./HeroSection.module.scss"
import { TypedText } from "@/shared/ui/TypedText/TypedText";
import { HeroSocial } from "@/app/entities/SocialMedia/ui/HeroSocial.jsx/HeroSocial";
import { ParticlesBackground } from "@/shared/ui/Particles/ParticlesBackground";
import { useResize } from "@/shared/hooks/useResize";
import { useScrollTo } from "../../../shared/hooks/useScrollTo";
import { useTranslation } from "react-i18next"
import { ArrowIcon } from "../../../shared/assets/svg/ArrowIcon";



export const HeroSection = ({idSection}) => {

    const { isMobile, isTablet } = useResize();
    const isDesktop = !isMobile && !isTablet;
    const scrollTo = useScrollTo()
    const { t } = useTranslation("common");

    return (
        <Stack
            id={idSection}
            data-section={idSection}
            tag="section"
            className={styles.hero_section}
            fullWidth
            direction="column"
            align="end"
            justify="center"
            gap={24}
        >
            <ParticlesBackground/>
            <Stack className={styles.contentContainer}  tag="section" align="center" justify={!isDesktop ? "center" : "between"}>
                {/* Контент */}
                <Stack direction="column" align={!isDesktop ? "center" : "start"} gap={24}>
                    <Stack direction="column" align={!isDesktop ? "center" : "start"}>
                        <Text className={styles.text1} fontStyle="poppins500" size={isMobile ? 20 : isTablet ? 20 : 24} color="whiteSoft">{t("home.Hello, my name is")}</Text>
                        <Text className={styles.text2} fontStyle="poppins800" size={isMobile ? 42 : isTablet ? 48 : 64} color="whiteSoft">{t("me.my_name")}</Text>
                        <Text className={styles.text3} fontStyle="poppins500" size={isMobile ? 24 : isTablet ? 24 : 28} color="whiteSoft">{t("home.And I'm a")} <TypedText/></Text>
                    </Stack>
                    <Button variant="filled" color="blue" onClick={() => scrollTo('contact')}>
                        {t("buttons.contact_me")}
                    </Button>
                </Stack>
                {/* Соцсети */}
                {isDesktop && <HeroSocial/>}
            </Stack>
            {/* Scroll down */}
            <Button variant="clear" onClick={() => scrollTo('about')} className={styles.container_chevronDown}>
                <Stack direction="column" align="center">
                    <Text className={styles.hero__scroll} size ={14} color="whiteSoft" fontStyle="poppins200">{t("buttons.scroll_down")}</Text>
                    {/* <ArrowDownIcon className={styles.ChevronDown} color="blue" strokeWidth={40} size ={28}/> */}
                    <ArrowIcon className={styles.ChevronDown} color="blue" size ={35}/>
                </Stack>
            </Button>
        </Stack>
    );
};
