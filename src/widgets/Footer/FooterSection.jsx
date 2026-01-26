import { Stack } from "@/shared/ui/Stack/Stack"
import { Text } from "@/shared/ui/Text/Text"
import styles from "./FooterSection.module.scss"
import { useTranslation } from "react-i18next"

export const FooterSection = () => {

    const { t } = useTranslation("common");

    return (
        <Stack className={styles.footer} tag="footer" justify="center" align="center" fullWidth>
            <Text color="white">
                {t("footer.Created by")} <Text tag="span" color="blue" size="18">{t("footer.Valerii Hering")}</Text> | © 2022 {t("footer.All rights reserved")}.
            </Text>
        </Stack>
    )
}