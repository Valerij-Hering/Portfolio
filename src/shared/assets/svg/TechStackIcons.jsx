/* -------------------------------------------------------------------------- */
/*                                 COLOR MAP                                  */
/* -------------------------------------------------------------------------- */
const colorMap = {
    white: "var(--white-color)",
    whiteSoft: "var(--white-soft-color)",
    blue: "var(--blue-color)",
    black: "var(--black-color)",
    blackSoft: "var(--black-soft-color)",
    grey: "var(--grey-color)",
};

const getResolvedColor = (color) => colorMap[color] || color;


/* -------------------------------------------------------------------------- */
/*                                USER ICON                                   */
/* -------------------------------------------------------------------------- */
export const UserIcon = ({
    color = "currentColor",
    size = 24,
    className,
    ...otherProps
    }) => {
    const resolvedColor = getResolvedColor(color);

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={size}
            height={size}
            fill={resolvedColor}
            className={className}
            {...otherProps}
        >
            <path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"/>
        </svg>
    );
};


/* -------------------------------------------------------------------------- */
/*                                API ICON                                    */
/* -------------------------------------------------------------------------- */
export const ApiIcon = ({
    color = "currentColor",
    size = 24,
    className,
    ...otherProps
    }) => {
    const resolvedColor = getResolvedColor(color);

    return (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill={resolvedColor}
        className={className}
        {...otherProps}
        >
        <path d="M7 7H5A2 2 0 0 0 3 9V17H5V13H7V17H9V9A2 2 0 0 0 7 7M7 11H5V9H7M14 7H10V17H12V13H14A2 2 0 0 0 16 11V9A2 2 0 0 0 14 7M14 11H12V9H14M20 9V15H21V17H17V15H18V9H17V7H21V9Z" />
        </svg>
    );
};


/* -------------------------------------------------------------------------- */
/*                                DATA BASE ICON                              */
/* -------------------------------------------------------------------------- */
export const DatabaseIcon = ({
    color = "currentColor",
    size = 24,
    className,
    ...otherProps
    }) => {
    const resolvedColor = getResolvedColor(color);

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={size}
            height={size}
            fill={resolvedColor}
            className={className}
            {...otherProps}
        >
            <path d="M12,3C7.58,3 4,4.79 4,7C4,9.21 7.58,11 12,11C16.42,11 20,9.21 20,7C20,4.79 16.42,3 12,3M4,9V12C4,14.21 7.58,16 12,16C16.42,16 20,14.21 20,12V9C20,11.21 16.42,13 12,13C7.58,13 4,11.21 4,9M4,14V17C4,19.21 7.58,21 12,21C16.42,21 20,19.21 20,17V14C20,16.21 16.42,18 12,18C7.58,18 4,16.21 4,14Z"/>
        </svg>
    );
};


/* -------------------------------------------------------------------------- */
/*                                EARTH ICON                                  */
/* -------------------------------------------------------------------------- */
    export const EarthIcon = ({
    color = "currentColor",
    size = 24,
    className,
    ...otherProps
    }) => {
    const resolvedColor = getResolvedColor(color);

    return (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill={resolvedColor}
        className={className}
        {...otherProps}
        >
        <path d="M17.9,17.39C17.64,16.59 16.89,16 16,16H15V13A1,1 0 0,0 14,12H8V10H10A1,1 0 0,0 11,9V7H13A2,2 0 0,0 15,5V4.59C17.93,5.77 20,8.64 20,12C20,14.08 19.2,15.97 17.9,17.39M11,19.93C7.05,19.44 4,16.08 4,12C4,11.38 4.08,10.78 4.21,10.21L9,15V16A2,2 0 0,0 11,18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
        </svg>
    );
};


/* -------------------------------------------------------------------------- */
/*                                PERFOMANCE ICON                             */
/* -------------------------------------------------------------------------- */
export const PerformanceIcon = ({
    color = "currentColor",
    size = 24,
    className,
    ...otherProps
    }) => {
    const resolvedColor = getResolvedColor(color);

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={size}
            height={size}
            fill={resolvedColor}
            className={className}
            {...otherProps}
            >
            <path d="M21,2H3A2,2 0 0,0 1,4V20A2,2 0 0,0 3,22H21A2,2 0 0,0 23,20V4A2,2 0 0,0 21,2M11,17.5L9.5,19L5,14.5L9.5,10L11,11.5L8,14.5L11,17.5M14.5,19L13,17.5L16,14.5L13,11.5L14.5,10L19,14.5L14.5,19M21,7H3V4H21V7Z" />
        </svg>
    );
};


/* -------------------------------------------------------------------------- */
/*                                RESPONSIVE DESIGN ICON                      */
/* -------------------------------------------------------------------------- */
export const ResponsiveIcon = ({
    color = "currentColor",
    size = 24,
    className,
    ...otherProps
}) => {
    const resolvedColor = getResolvedColor(color);

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={size}
            height={size}
            fill={resolvedColor}
            className={className}
            {...otherProps}
        >
            <path d="M22,17H18V10H22M23,8H17A1,1 0 0,0 16,9V19A1,1 0 0,0 17,20H23A1,1 0 0,0 24,19V9A1,1 0 0,0 23,8M4,6H22V4H4A2,2 0 0,0 2,6V17H0V20H14V17H4V6Z" />
        </svg>
    );
};


/* -------------------------------------------------------------------------- */
/*                                CHART ICON                                  */
/* -------------------------------------------------------------------------- */
export const ChartIcon = ({
    color = "currentColor",
    size = 24,
    className,
    ...otherProps
    }) => {
    const resolvedColor = getResolvedColor(color);

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={size}
            height={size}
            fill={resolvedColor}
            className={className}
            {...otherProps}
            >
            <path d="M22,21H2V3H4V15.54L9.5,6L16,9.78L20.24,2.45L21.97,3.45L22,21Z" />
        </svg>
    );
};

/* -------------------------------------------------------------------------- */
/*                                SHOPPING ICON                               */
/* -------------------------------------------------------------------------- */
export const ShoppingIcon = ({
    color = "currentColor",
    size = 24,
    className,
    ...otherProps
    }) => {
    const resolvedColor = getResolvedColor(color);

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={size}
            height={size}
            fill={resolvedColor}
            className={className}
            {...otherProps}
            >
            <path d="M12,13A5,5 0 0,1 7,8H9A3,3 0 0,0 12,11A3,3 0 0,0 15,8H17A5,5 0 0,1 12,13M12,3A3,3 0 0,1 15,6H9A3,3 0 0,1 12,3M19,6H17A5,5 0 0,0 12,1A5,5 0 0,0 7,6H5C3.89,6 3,6.89 3,8V20A2,2 0 0,0 5,22H19A2,2 0 0,0 21,20V8C21,6.89 20.1,6 19,6Z" />
        </svg>
    );
};


/* -------------------------------------------------------------------------- */
/*                                PAYMENT ICON                                */
/* -------------------------------------------------------------------------- */
export const PaymentIcon = ({
    color = "currentColor",
    size = 24,
    className,
    ...otherProps
    }) => {
    const resolvedColor = getResolvedColor(color);

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={size}
            height={size}
            fill={resolvedColor}
            className={className}
            {...otherProps}
            >
            <path d="M20 4H4A2 2 0 0 0 2 6V18A2 2 0 0 0 4 20H20A2 2 0 0 0 22 18V6A2 2 0 0 0 20 4M20 11H4V8H20Z" />
        </svg>
    );
};

/* -------------------------------------------------------------------------- */
/*                                CALCULATOR ICON                             */
/* -------------------------------------------------------------------------- */
export const CalculatorIcon = ({
    color = "currentColor",
    size = 24,
    className,
    ...otherProps
    }) => {
    const resolvedColor = getResolvedColor(color);

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={size}
            height={size}
            fill={resolvedColor}
            className={className}
            {...otherProps}
            >
            <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3M13 7.1L14.1 6L15.5 7.4L16.9 6L18 7.1L16.6 8.5L18 9.9L16.9 11L15.5 9.6L14.1 11L13 9.9L14.4 8.5L13 7.1M6.2 7.7H11.2V9.2H6.2V7.7M11.5 16H9.5V18H8V16H6V14.5H8V12.5H9.5V14.5H11.5V16M18 17.2H13V15.7H18V17.2M18 14.8H13V13.3H18V14.8Z" />
        </svg>
    );
};


/* -------------------------------------------------------------------------- */
/*                                ALERT ICON                                  */
/* -------------------------------------------------------------------------- */
export const AlertIcon = ({
    color = "currentColor",
    size = 24,
    className,
    ...otherProps
    }) => {
    const resolvedColor = getResolvedColor(color);

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={size}
            height={size}
            fill={resolvedColor}
            className={className}
            {...otherProps}
            >
            <path d="M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M13,13V7H11V13H13M13,17V15H11V17H13Z" />
        </svg>
    );
};


/* -------------------------------------------------------------------------- */
/*                                MESSAGE ICON                                */
/* -------------------------------------------------------------------------- */
export const MessageIcon = ({
    color = "currentColor",
    size = 24,
    className,
    ...otherProps
    }) => {
    const resolvedColor = getResolvedColor(color);

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={size}
            height={size}
            fill={resolvedColor}
            className={className}
            {...otherProps}
            >
            <path d="M4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H16L12,22L8,18H4A2,2 0 0,1 2,16V4A2,2 0 0,1 4,2M5,5V7H19V5H5M5,9V11H15V9H5M5,13V15H17V13H5Z" />
        </svg>
    );
};


/* -------------------------------------------------------------------------- */
/*                                SEARCH ICON                                 */
/* -------------------------------------------------------------------------- */
export const SearchIcon = ({
    color = "currentColor",
    size = 24,
    className,
    ...otherProps
    }) => {
    const resolvedColor = getResolvedColor(color);

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={size}
            height={size}
            fill={resolvedColor}
            className={className}
            {...otherProps}
            >
            <path d="M20,20A2,2 0 0,1 18,22H4A2,2 0 0,1 2,20V6A2,2 0 0,1 4,4H9.5C9.2,4.8 9,5.6 9,6.5C9,10.1 11.9,13 15.5,13C16.3,13 17,12.9 17.6,12.6L20,15V20M19.3,8.9C19.7,8.2 20,7.4 20,6.5C20,4 18,2 15.5,2C13,2 11,4 11,6.5C11,9 13,11 15.5,11C16.4,11 17.2,10.7 17.9,10.3L21,13.4L22.4,12L19.3,8.9M15.5,9C14.1,9 13,7.9 13,6.5C13,5.1 14.1,4 15.5,4C16.9,4 18,5.1 18,6.5C18,7.9 16.9,9 15.5,9Z" />
        </svg>
    );
};


/* -------------------------------------------------------------------------- */
/*                                TIMER ICON                                  */
/* -------------------------------------------------------------------------- */
export const TimerIcon = ({
    color = "currentColor",
    size = 24,
    className,
    ...otherProps
    }) => {
    const resolvedColor = getResolvedColor(color);

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={size}
            height={size}
            fill={resolvedColor}
            className={className}
            {...otherProps}
            >
            <path d="M19.03 7.39L20.45 5.97C20 5.46 19.55 5 19.04 4.56L17.62 6C16.07 4.74 14.12 4 12 4C7.03 4 3 8.03 3 13S7.03 22 12 22C17 22 21 17.97 21 13C21 10.88 20.26 8.93 19.03 7.39M13 14H11V7H13V14M15 1H9V3H15V1Z" />
        </svg>
    );
};


/* -------------------------------------------------------------------------- */
/*                                MUSIC ICON                                  */
/* -------------------------------------------------------------------------- */
export const MusicIcon = ({
    color = "currentColor",
    size = 24,
    className,
    ...otherProps
    }) => {
    const resolvedColor = getResolvedColor(color);

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={size}
            height={size}
            fill={resolvedColor}
            className={className}
            {...otherProps}
            >
            <path d="M16,9H13V14.5A2.5,2.5 0 0,1 10.5,17A2.5,2.5 0 0,1 8,14.5A2.5,2.5 0 0,1 10.5,12C11.07,12 11.58,12.19 12,12.5V7H16M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3Z" />
        </svg>
    );
};


/* -------------------------------------------------------------------------- */
/*                                SNOW ICON                                   */
/* -------------------------------------------------------------------------- */
export const SnowIcon = ({
    color = "currentColor",
    size = 24,
    className,
    ...otherProps
    }) => {
    const resolvedColor = getResolvedColor(color);

    return (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill={resolvedColor}
        className={className}
        {...otherProps}
        >
        <path d="M20.79,13.95L18.46,14.57L16.46,13.44V10.56L18.46,9.43L20.79,10.05L21.31,8.12L19.54,7.65L20,5.88L18.07,5.36L17.45,7.69L15.45,8.82L13,7.38V5.12L14.71,3.41L13.29,2L12,3.29L10.71,2L9.29,3.41L11,5.12V7.38L8.5,8.82L6.5,7.69L5.92,5.36L4,5.88L4.47,7.65L2.7,8.12L3.22,10.05L5.55,9.43L7.55,10.56V13.45L5.55,14.58L3.22,13.96L2.7,15.89L4.47,16.36L4,18.12L5.93,18.64L6.55,16.31L8.55,15.18L11,16.62V18.88L9.29,20.59L10.71,22L12,20.71L13.29,22L14.7,20.59L13,18.88V16.62L15.5,15.17L17.5,16.3L18.12,18.63L20,18.12L19.53,16.35L21.3,15.88L20.79,13.95M9.5,10.56L12,9.11L14.5,10.56V13.44L12,14.89L9.5,13.44V10.56Z"/>
        </svg>
    );
};


/* -------------------------------------------------------------------------- */
/*                                CALENDAR ICON                               */
/* -------------------------------------------------------------------------- */
export const CalendarIcon = ({
    color = "currentColor",
    size = 24,
    className,
    ...otherProps
}) => {
    const resolvedColor = getResolvedColor(color);

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={size}
            height={size}
            fill={resolvedColor}
            className={className}
            {...otherProps}
            >
            <path d="M9,10V12H7V10H9M13,10V12H11V10H13M17,10V12H15V10H17M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5A2,2 0 0,1 5,3H6V1H8V3H16V1H18V3H19M19,19V8H5V19H19M9,14V16H7V14H9M13,14V16H11V14H13M17,14V16H15V14H17Z"/>
        </svg>
    );
};


/* -------------------------------------------------------------------------- */
/*                                THEME ICON                                  */
/* -------------------------------------------------------------------------- */
export const ThemeIcon = ({
    color = "currentColor",
    size = 24,
    className,
    ...otherProps
}) => {
    const resolvedColor = getResolvedColor(color);

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={size}
            height={size}
            fill={resolvedColor}
            className={className}
            {...otherProps}
        >
            <path d="M19,3H14V5H19V18L14,12V21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M10,18H5L10,12M10,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H10V23H12V1H10V3Z"/>
        </svg>
    );
};


/* -------------------------------------------------------------------------- */
/*                                CLOCK ICON                                  */
/* -------------------------------------------------------------------------- */
export const ClockIcon = ({
    color = "currentColor",
    size = 24,
    className,
    ...otherProps
}) => {
    const resolvedColor = getResolvedColor(color);

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={size}
            height={size}
            fill={resolvedColor}
            className={className}
            {...otherProps}
            >
            <path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12S17.5 2 12 2M16.3 15.2L11 12.3V7H12.5V11.4L17 13.9L16.3 15.2Z" />
        </svg>
    );
};


/* -------------------------------------------------------------------------- */
/*                                SCORE ICON                                  */
/* -------------------------------------------------------------------------- */
export const ScoreIcon = ({
    color = "currentColor",
    size = 24,
    className,
    ...otherProps
}) => {
    const resolvedColor = getResolvedColor(color);

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={size}
            height={size}
            fill={resolvedColor}
            className={className}
            {...otherProps}
            >
            <path d="M6 9H8V15H6V9M16 9H18V15H16V9M21 3C22.1 3 23 3.9 23 5V19C23 20.1 22.1 21 21 21H3C1.9 21 1 20.1 1 19V5C1 3.9 1.9 3 3 3H21M5 7C4.4 7 4 7.4 4 8V16C4 16.6 4.4 17 5 17H9C9.6 17 10 16.6 10 16V8C10 7.4 9.6 7 9 7H5M15 7C14.4 7 14 7.4 14 8V16C14 16.6 14.4 17 15 17H19C19.6 17 20 16.6 20 16V8C20 7.4 19.6 7 19 7H15M12 11C12.6 11 13 10.6 13 10C13 9.4 12.6 9 12 9C11.4 9 11 9.4 11 10C11 10.6 11.4 11 12 11M12 15C12.6 15 13 14.6 13 14C13 13.4 12.6 13 12 13C11.4 13 11 13.4 11 14C11 14.6 11.4 15 12 15Z"/>
        </svg>
    );
};


/* -------------------------------------------------------------------------- */
/*                                QUESTION ICON                               */
/* -------------------------------------------------------------------------- */
export const QuestionIcon = ({
    color = "currentColor",
    size = 24,
    className,
    ...otherProps
}) => {
    const resolvedColor = getResolvedColor(color);

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={size}
            height={size}
            fill={resolvedColor}
            className={className}
            {...otherProps}
            >
            <path d="M11,18H13V16H11V18M12,6A4,4 0 0,0 8,10H10A2,2 0 0,1 12,8A2,2 0 0,1 14,10C14,12 11,11.75 11,15H13C13,12.75 16,12.5 16,10A4,4 0 0,0 12,6M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3Z"/>
        </svg>
    );
};


/* -------------------------------------------------------------------------- */
/*                                TASK ICON                                   */
/* -------------------------------------------------------------------------- */
export const TaskIcon = ({
    color = "currentColor",
    size = 24,
    className,
    ...otherProps
}) => {
    const resolvedColor = getResolvedColor(color);

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={size}
            height={size}
            fill={resolvedColor}
            className={className}
            {...otherProps}
            >
            <path d="M18,17H10.5L12.5,15H18M6,17V14.5L13.88,6.65C14.07,6.45 14.39,6.45 14.59,6.65L16.35,8.41C16.55,8.61 16.55,8.92 16.35,9.12L8.47,17M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z"/>
        </svg>

    );
};


/* -------------------------------------------------------------------------- */
/*                                SECURITY ICON                               */
/* -------------------------------------------------------------------------- */
export const SecurityIcon = ({
    color = "currentColor",
    size = 24,
    className,
    ...otherProps
}) => {
    const resolvedColor = getResolvedColor(color);

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={size}
            height={size}
            fill={resolvedColor}
            className={className}
            {...otherProps}
        >
            <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,5A3,3 0 0,1 15,8A3,3 0 0,1 12,11A3,3 0 0,1 9,8A3,3 0 0,1 12,5M17.13,17C15.92,18.85 14.11,20.24 12,20.92C9.89,20.24 8.08,18.85 6.87,17C6.53,16.5 6.24,16 6,15.47C6,13.82 8.71,12.47 12,12.47C15.29,12.47 18,13.79 18,15.47C17.76,16 17.47,16.5 17.13,17Z"/>
        </svg>
    );
};


/* -------------------------------------------------------------------------- */
/*                                MAIL ICON                                   */
/* -------------------------------------------------------------------------- */
export const MailIcon = ({
    color = "currentColor",
    size = 24,
    className,
    ...otherProps
}) => {
    const resolvedColor = getResolvedColor(color);

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={size}
            height={size}
            fill={resolvedColor}
            className={className}
            {...otherProps}
        >
            <path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z"/>
        </svg>
    );
};


/* -------------------------------------------------------------------------- */
/*                                LOCATION ICON                               */
/* -------------------------------------------------------------------------- */
export const LocationIcon = ({
    color = "currentColor",
    size = 24,
    className,
    ...otherProps
    }) => {
    const resolvedColor = getResolvedColor(color);

    return (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill={resolvedColor}
        className={className}
        {...otherProps}
        >
        <path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" />
        </svg>
    );
};


/* -------------------------------------------------------------------------- */
/*                                HTML ICON                                   */
/* -------------------------------------------------------------------------- */
export const HtmlIcon = ({
    color = "currentColor",
    size = 24,
    className,
    ...otherProps
}) => {
    const resolvedColor = getResolvedColor(color);

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={size}
            height={size}
            fill={resolvedColor}
            className={className}
            {...otherProps}
        >
            <path d="M5.59 3.41L7 4.82L3.82 8L7 11.18L5.59 12.6L1 8L5.59 3.41M11.41 3.41L16 8L11.41 12.6L10 11.18L13.18 8L10 4.82L11.41 3.41M22 6V18C22 19.11 21.11 20 20 20H4C2.9 20 2 19.11 2 18V14H4V18H20V6H17.03V4H20C21.11 4 22 4.89 22 6Z"/>
        </svg>
    );
};


/* -------------------------------------------------------------------------- */
/*                                JS ICON                                     */
/* -------------------------------------------------------------------------- */
export const JsIcon = ({
    color = "currentColor",
    size = 24,
    className,
    ...otherProps
}) => {
    const resolvedColor = getResolvedColor(color);

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={size}
            height={size}
            fill={resolvedColor}
            className={className}
            {...otherProps}
        >
            <path d="M5 3C3.9 3 3 3.9 3 5S2.1 7 1 7V9C2.1 9 3 9.9 3 11S3.9 13 5 13H7V11H5V10C5 8.9 4.1 8 3 8C4.1 8 5 7.1 5 6V5H7V3M11 3C12.1 3 13 3.9 13 5S13.9 7 15 7V9C13.9 9 13 9.9 13 11S12.1 13 11 13H9V11H11V10C11 8.9 11.9 8 13 8C11.9 8 11 7.1 11 6V5H9V3H11M22 6V18C22 19.11 21.11 20 20 20H4C2.9 20 2 19.11 2 18V15H4V18H20V6H17.03V4H20C21.11 4 22 4.89 22 6Z"/>
        </svg>
    );
};


/* -------------------------------------------------------------------------- */
/*                                WEB ICON                                    */
/* -------------------------------------------------------------------------- */
export const WebIcon = ({
    color = "currentColor",
    size = 24,
    className,
    ...otherProps
}) => {
    const resolvedColor = getResolvedColor(color);

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={size}
            height={size}
            fill={resolvedColor}
            className={className}
            {...otherProps}
        >
            <path d="M16.36,14C16.44,13.34 16.5,12.68 16.5,12C16.5,11.32 16.44,10.66 16.36,10H19.74C19.9,10.64 20,11.31 20,12C20,12.69 19.9,13.36 19.74,14M14.59,19.56C15.19,18.45 15.65,17.25 15.97,16H18.92C17.96,17.65 16.43,18.93 14.59,19.56M14.34,14H9.66C9.56,13.34 9.5,12.68 9.5,12C9.5,11.32 9.56,10.65 9.66,10H14.34C14.43,10.65 14.5,11.32 14.5,12C14.5,12.68 14.43,13.34 14.34,14M12,19.96C11.17,18.76 10.5,17.43 10.09,16H13.91C13.5,17.43 12.83,18.76 12,19.96M8,8H5.08C6.03,6.34 7.57,5.06 9.4,4.44C8.8,5.55 8.35,6.75 8,8M5.08,16H8C8.35,17.25 8.8,18.45 9.4,19.56C7.57,18.93 6.03,17.65 5.08,16M4.26,14C4.1,13.36 4,12.69 4,12C4,11.31 4.1,10.64 4.26,10H7.64C7.56,10.66 7.5,11.32 7.5,12C7.5,12.68 7.56,13.34 7.64,14M12,4.03C12.83,5.23 13.5,6.57 13.91,8H10.09C10.5,6.57 11.17,5.23 12,4.03M18.92,8H15.97C15.65,6.75 15.19,5.55 14.59,4.44C16.43,5.07 17.96,6.34 18.92,8M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"/>
        </svg>
    );
};

