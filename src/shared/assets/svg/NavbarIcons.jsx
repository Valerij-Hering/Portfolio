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
/*                                CLOSE ICON                                  */
/* -------------------------------------------------------------------------- */
export const CloseIcon = ({
  color = "white",
  size = 24,
  className,
  ...otherProps
  }) => {
  const resolvedColor = getResolvedColor(color);

  return (
  <svg
    xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill={resolvedColor}
    className={className}
    {...otherProps}
  > 
    <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" /> 
  </svg>
  );
};


/* -------------------------------------------------------------------------- */
/*                                HOME ICON                                   */
/* -------------------------------------------------------------------------- */
export const HomeIcon = ({
  color = "white",
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
      <path d="M9,13H15V19H18V10L12,5.5L6,10V19H9V13M4,21V9L12,3L20,9V21H4Z"/>
    </svg>
  );
};

/* -------------------------------------------------------------------------- */
/*                                USER-OUTLINE ICON                           */
/* -------------------------------------------------------------------------- */
export const UserOutlineIcon = ({
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
            <path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,6A2,2 0 0,0 10,8A2,2 0 0,0 12,10A2,2 0 0,0 14,8A2,2 0 0,0 12,6M12,13C14.67,13 20,14.33 20,17V20H4V17C4,14.33 9.33,13 12,13M12,14.9C9.03,14.9 5.9,16.36 5.9,17V18.1H18.1V17C18.1,16.36 14.97,14.9 12,14.9Z"/>
        </svg>
    );
};


/* -------------------------------------------------------------------------- */
/*                                GRID ICON                                   */
/* -------------------------------------------------------------------------- */
export const GridIcon = ({
  color = "white",
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
      <path d="M3 11H11V3H3M5 5H9V9H5M13 21H21V13H13M15 15H19V19H15M3 21H11V13H3M5 15H9V19H5M13 3V11H21V3M19 9H15V5H19Z"/>
    </svg>
  );
};

/* -------------------------------------------------------------------------- */
/*                                CHART ICON                                  */
/* -------------------------------------------------------------------------- */
export const ChartIcon = ({
  color = "white",
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
      <path d="M9 17H7V10H9V17M13 17H11V7H13V17M17 17H15V13H17V17M19 19H5V5H19V19.1M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3Z"/>
    </svg>
  );
};


/* -------------------------------------------------------------------------- */
/*                                 BAG ICON                                   */
/* -------------------------------------------------------------------------- */
export const BagIcon = ({
  color = "white",
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
      <path d="M20,6C20.58,6 21.05,6.2 21.42,6.59C21.8,7 22,7.45 22,8V19C22,19.55 21.8,20 21.42,20.41C21.05,20.8 20.58,21 20,21H4C3.42,21 2.95,20.8 2.58,20.41C2.2,20 2,19.55 2,19V8C2,7.45 2.2,7 2.58,6.59C2.95,6.2 3.42,6 4,6H8V4C8,3.42 8.2,2.95 8.58,2.58C8.95,2.2 9.42,2 10,2H14C14.58,2 15.05,2.2 15.42,2.58C15.8,2.95 16,3.42 16,4V6H20M4,8V19H20V8H4M14,6V4H10V6H14Z"/>
    </svg>
  );
};

/* -------------------------------------------------------------------------- */
/*                                EMAIL ICON                                  */
/* -------------------------------------------------------------------------- */
export const EmailIcon = ({
  color = "white",
  size = 24,
  className,
  ...otherProps
  }) => {
  const resolvedColor = getResolvedColor(color);

  return (
  <svg
    xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={resolvedColor}
    className={className}
    {...otherProps}
  > 
    <path d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6M20 6L12 11L4 6H20M20 18H4V8L12 13L20 8V18Z" /> 
  </svg>
  );
};

