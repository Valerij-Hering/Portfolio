import {LinkedinIcon, GithubIcon, TelegramIcon} from "@/shared/assets/svg/socialMediaIcons"

export const socialMediaData = [
    {
        id: 1,
        name: "Linkedin",
        icon: (color, size) => <LinkedinIcon color={color} size={size}/>,
        href: 'https://www.linkedin.com/in/valerij-hering-b618aa252/',
        bgColor: "var(--linkedin-blue)"
    },

    {
        id: 2,
        name: "Telegram",
        icon: (color, size) => <TelegramIcon color={color} size={size}/>,
        href: 'https://t.me/Valerij_Hering',
        bgColor: "var(--telegram-color)"
    },

    {
        id: 3,
        name: "Github",
        icon: (color, size) => <GithubIcon color={color} size={size}/>,
        href: 'https://github.com/Valerij-Hering',
        bgColor: "var(--github-color)"
    },
]