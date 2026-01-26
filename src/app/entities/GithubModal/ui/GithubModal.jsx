import { Stack } from "@/shared/ui/Stack/Stack"
import styles from "./GithubModal.module.scss"
import { GithubIcon } from "@/shared/assets/svg/socialMediaIcons"
import Button from "@/shared/ui/Button/Button"
import { Text } from "@/shared/ui/Text/Text"
import { HtmlIcon, JsIcon } from "../../../../shared/assets/svg/TechStackIcons"
import { useTranslation } from "react-i18next"
import { ArrowIcon } from "../../../../shared/assets/svg/ArrowIcon"


export const GithubModal = ({onClose, links}) => {

    const { t } = useTranslation("common");

    return (
        <Stack className={styles.githubModalOverlay} justify="center" align="center" fullWidth onClick={onClose} >
            <Stack className={styles.githubModal} onClick={(e) => e.stopPropagation()} direction="column" justify="center" align="center" gap={24} fullWidth data-aos="zoom-out">
                <Stack className={styles.containerIcon} direction="column" justify="center" align="center" gap={4}>
                    <GithubIcon color="githubColor" size={70}/>
                </Stack>
                <Stack direction="column" align="center" fullWidth gap={32}>
                    <Stack fullWidth justify="center" align="center" gap={12}>
                        <hr className={styles.hr}/>
                        <Text className={styles.title} fontStyle="poppins700" size="14" align="center" color="blackSoft">{t("githubModal.CHOOSE REPOSITORY")}</Text>
                        <hr className={styles.hr}/>
                    </Stack>
                    <Stack direction="column" align="center" fullWidth gap={12}>
                        <Button as="a" href={links.frontend} onClick={onClose} variant="filled" color="blue" size="medium" target="_blank" fullWidth>
                            <HtmlIcon color="white"/>{t("buttons.frontend")}
                        </Button>
                        <Button as="a" href={links.backend} onClick={onClose} variant="filled" color="pink" size="medium" target="_blank" fullWidth>
                            <JsIcon color="white"/>{t("buttons.backend")}
                        </Button>
                    </Stack>
                    <Button variant="clear" color="dark" noPadding  size="small" onClick={onClose}>
                        <ArrowIcon rotate="left"/> {t("buttons.go_back")}
                    </Button>
                </Stack>
            </Stack>
        </Stack>
    )
}