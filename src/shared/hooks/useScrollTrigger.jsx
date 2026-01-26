import { useState, useEffect } from "react";

export const useScrollTrigger = (scrollThreshold = 10) => {
    const [triggered, setTriggered] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        const scrolled = window.scrollY; // или document.documentElement.scrollTop
        setTriggered(scrolled > scrollThreshold);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => {
        window.removeEventListener("scroll", handleScroll);
        };
    }, [scrollThreshold]);

    return triggered;
};
