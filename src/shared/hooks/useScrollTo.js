import { useCallback } from "react";

export const useScrollTo = () => {
    const scrollTo = useCallback((id, options = { behavior: "smooth" }) => {
        const element = document.getElementById(id);
        if (element) {
        element.scrollIntoView(options);
        }
    }, []);

    return scrollTo;
};
