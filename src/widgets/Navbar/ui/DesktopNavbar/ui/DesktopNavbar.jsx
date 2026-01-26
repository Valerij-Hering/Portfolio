import { Stack } from "@/shared/ui/Stack/Stack"
import { Text } from "@/shared/ui/Text/Text"
import styles from "./DesktopNavbar.module.scss"
import { getStyles } from "@/shared/lib/getStyles";
import { useScrollTrigger } from "@/shared/hooks/useScrollTrigger";
import { navbarLinks } from "../../../lib/navbarLinks";
import { useScrollTo } from "@/shared/hooks/useScrollTo";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../../../../LanguageSwitcher/ui/LanguageSwitcher";
import { useActiveSection } from "@/shared/hooks/useActiveSection";



export const DesktopNavbar = () => {

    const navColor = useScrollTrigger(10)
    const scrollTo = useScrollTo()
    const { t } = useTranslation("common");
    const activeSection = useActiveSection()


    return (
        <Stack className={getStyles(styles.desktopNavbar, { [styles.desktopNavbarColor] : navColor }, [])} tag="nav" justify="center" align="center" fullWidth>
            <Stack className={styles.containerNav} justify="between" align="center">
                <Stack align="center">
                    <Text fontStyle="poppins700"  size="34" color="whiteSoft">Portfo</Text>
                    <Text fontStyle="ubuntu700" size="34" color={navColor ? "white" : "blue"}>lio.</Text>
                </Stack>
                <Stack className={styles.containerLinks}>
                    {navbarLinks.map(({ id, label, section }) => (
                        <a
                            key={id}
                            onClick={() => scrollTo(section)}
                            className={getStyles(styles.navLink, {
                                [styles.activeLink]: activeSection === section
                            }, [])}
                        >
                            {t(label)}
                        </a>
                    ))}
                </Stack>
                <LanguageSwitcher/>
            </Stack>
        </Stack>
    )
}