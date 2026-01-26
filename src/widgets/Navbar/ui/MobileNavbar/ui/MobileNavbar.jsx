import { Stack } from "@/shared/ui/Stack/Stack"
import { Text } from "@/shared/ui/Text/Text"
import styles from "./MobileNavbar.module.scss"
import { getStyles } from "@/shared/lib/getStyles";
import { useScrollTrigger } from "@/shared/hooks/useScrollTrigger";
import { useResize } from "@/shared/hooks/useResize";
import { navbarLinks } from "../../../lib/navbarLinks";
import Button from "@/shared/ui/Button/Button";
import { useScrollTo } from "@/shared/hooks/useScrollTo";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../../../../LanguageSwitcher/ui/LanguageSwitcher";
import { useActiveSection } from "@/shared/hooks/useActiveSection";
import { useEffect, useRef } from "react";
import { Hamburger } from "../../Hamburger/ui/Hamburger";
import { useBoolean } from "../../../../../shared/hooks/useBoolean";




export const MobileNavbar = () => {

    const { isMobile, isTablet } = useResize();
    const { value: isMobileNavbarOpen, toggle: toggleMobileNavbar, setFalse: closeMobileNavbar } = useBoolean();
    const navColor = useScrollTrigger(10)
    const scrollTo = useScrollTo()
    const { t } = useTranslation("common");
    const activeSection = useActiveSection()
    const menuRef = useRef(null);
    const toggleBtnRef = useRef(null);

    useEffect(() => {
    const handleClickOutside = (e) => {
        const clickedOutsideMenu =
        menuRef.current && !menuRef.current.contains(e.target);
        const clickedOutsideButton =
        toggleBtnRef.current && !toggleBtnRef.current.contains(e.target);

        if (clickedOutsideMenu && clickedOutsideButton) {
        closeMobileNavbar();
        }
    };

    if (isMobileNavbarOpen) {
        document.addEventListener("click", handleClickOutside);
    }

    return () => document.removeEventListener("click", handleClickOutside);
    }, [isMobileNavbarOpen, closeMobileNavbar]);




    return (
        <Stack ref={menuRef} className={getStyles(styles.mobileNavbar, { [styles.mobileNavbarColor] : navColor }, [])} tag="nav" justify="center" align="center" fullWidth>
            <Stack className={styles.containerNav} justify="between" align="center">
                <Stack align="center">
                    <Text fontStyle="poppins700" size={isMobile ? 22 : isTablet ? 28 : 34} color="whiteSoft">Portfo</Text>
                    <Text fontStyle="ubuntu700" size={isMobile ? 22 : isTablet ? 28 : 34} color={navColor || isMobileNavbarOpen ? "white" : "blue"}>lio.</Text>
                </Stack>
                <Stack align="center" gap={12}>
                    <LanguageSwitcher size={18}/>
                    <Button ref={toggleBtnRef}  variant="clear" noPadding onClick={(e) => {e.stopPropagation(); toggleMobileNavbar();}}>
                        <Hamburger isActive={isMobileNavbarOpen} />
                    </Button>
                </Stack>
                {isMobileNavbarOpen &&
                    <Stack className={styles.containerLinks} direction="column" align="center" fullWidth data-aos="fade-down">
                        <Stack className={styles.subcontainerLinks} fullWidth></Stack>
                        <Stack  className={styles.linksList} direction="column" align="center" fullWidth>
                            {navbarLinks.map(({ id, label, section, icon}) => (
                                <a
                                    key={id}
                                    onClick={() => scrollTo(section)}
                                    className={getStyles(styles.navLink, {
                                [styles.activeLink]: activeSection === section
                            }, [])}
                                >
                                    {icon("white", 25)}
                                    {t(label)}
                                </a>
                            ))}
                        </Stack>
                    </Stack>
                }
            </Stack>
        </Stack>
    )
}