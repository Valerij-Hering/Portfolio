import clsx from "clsx";

const colorMap = {
    white: "var(--white-color)",
    whiteSoft: "var(--white-soft-color)",
    blue: "var(--blue-color)",
    black: "var(--black-color)",
    blackSoft: "var(--black-soft-color)",
    grey: "var(--grey-color)",
};

const getResolvedColor = (color) => colorMap[color] || color;

export const ImageIcon = ({
    size = 24,
    color = "black",
    className,
    ...props
}) => {
    const resolvedColor = getResolvedColor(color);

    return (
        <svg
            className={clsx(className)}
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill={resolvedColor}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                fillRule="evenodd"
                d="M13 10a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H14a1 1 0 0 1-1-1Z"
                clipRule="evenodd"
            />
            <path
                fillRule="evenodd"
                d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12c0 .556-.227 1.06-.593 1.422A.999.999 0 0 1 20.5 20H4a2.002 2.002 0 0 1-2-2V6Zm6.892 12 3.833-5.356-3.99-4.322a1 1 0 0 0-1.549.097L4 12.879V6h16v9.95l-3.257-3.619a1 1 0 0 0-1.557.088L11.2 18H8.892Z"
                clipRule="evenodd"
            />
        </svg>
    );
};
