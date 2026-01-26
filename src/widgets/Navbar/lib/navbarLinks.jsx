import {
    HomeIcon,
    UserOutlineIcon,
    GridIcon,
    ChartIcon,
    BagIcon,
    EmailIcon,
    } from "@/shared/assets/svg/NavbarIcons";


    export const navbarLinks = [
    {
        id: 1,
        label: "nav.home",
        section: "home",
        icon: (color, size) => <HomeIcon color={color} size={size}/>,
    },
    {
        id: 2,
        label: "nav.about",
        section: "about",
        icon: (color, size) => <UserOutlineIcon color={color} size={size}/>,
    },
    {
        id: 3,
        label: "nav.service",
        section: "service",
        icon: (color, size) => <GridIcon color={color} size={size}/>,
    },
    {
        id: 4,
        label: "nav.skills",
        section: "skills",
        icon: (color, size) => <ChartIcon color={color} size={size}/>,
    },
    {
        id: 5,
        label: "nav.projects",
        section: "projects",
        icon: (color, size) => <BagIcon color={color} size={size}/>,
        
    },
    {
        id: 6,
        label: "nav.contact",
        section: "contact",
        icon: (color, size) => <EmailIcon color={color} size={size}/>,
    },
];
