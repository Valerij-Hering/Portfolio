import { Stack } from "@/shared/ui/Stack/Stack"
import styles from './ContactSocial.module.scss'
import { getStyles } from "@/shared/lib/getStyles"
import { socialMediaData } from "../../lib/data"
import { Text } from "@/shared/ui/Text/Text"

const mapColors = {
    white: 'var(--white-color)',
    blue: 'var(--blue-color)',
    black: 'var(--black-soft-color)',
    grey: 'var(--grey-color)'
};

export const ContactSocial = ({color = "white", size}) => {

    const iconColor = mapColors[color] || color;

    return (
        <Stack gap="16">
            {socialMediaData.map(({ id, name, icon, href, bgColor }) => (
                <a
                    key={id}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className={getStyles(styles.link, {}, [styles[color]])}
                    style={{ "--bg-color": bgColor }}
                >
                    {icon(iconColor, size)}
                    <Stack
                        className={styles.tooltip}
                        style={{ "--bg-color": bgColor }}
                    >
                        <Text fontStyle="poppins400" size="14" color="white">{name}</Text>
                    </Stack>
                </a>
            ))}
        </Stack>
    )
}