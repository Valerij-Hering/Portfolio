import { GridFilterIcon, HtmlFilterIcon, JsFilterIcon, ReactIcon } from "../../../../shared/assets/svg/FilterIcons";



export const PROJECT_FILTERS = {
    ALL: {
        id: "all",
        icon: (color, size) => <GridFilterIcon color={color} size={size}/>
    },
    REACT: {
        id: "react",
        icon: (color, size) => <ReactIcon color={color} size={size}/>
    },
    FRONTEND: {
        id: "frontend",
        icon: (color, size) => <HtmlFilterIcon color={color} size={size}/>
    },
    FULLSTACK: {
        id: "fullstack",
        icon: (color, size) => <JsFilterIcon color={color} size={size}/>
    }
};
