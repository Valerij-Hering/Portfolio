import { Stack } from "@/shared/ui/Stack/Stack"
import styles from './HeroSocial.module.scss'
import { getStyles } from "@/shared/lib/getStyles"
import { socialMediaData } from "../../lib/data"

const mapColors = {
    white: 'var(--white-color)',
    blue: 'var(--blue-color)',
    black: 'var(--black-soft-color)',
    grey: 'var(--grey-color)'
};

export const HeroSocial = ({color = "white", size}) => {

    const iconColor = mapColors[color] || color;

    return (
        <Stack direction = 'column' gap = '12'>
            {socialMediaData.map(({ id, icon, href, bgColor }) => (
                <a
                    key={id}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className={getStyles(styles.circle, {}, [styles[color]])}
                    style={{ "--bg-color": bgColor }}
                >
                    {icon(iconColor, size)}
                </a>
            ))}
        </Stack>
    )
}