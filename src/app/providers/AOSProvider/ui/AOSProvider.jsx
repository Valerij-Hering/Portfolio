import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const AOSProvider = ({ children }) => {
    useEffect(() => {
        AOS.init({
        duration: 300,
        });
    }, []);

    return children;
};
