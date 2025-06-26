import { useEffect } from "react"

export const useResponsiveTitle = () => {
    useEffect(() => {
        const setTitle = () => {
            document.title = window.innerWidth < 768 ? "Yogarth." : "ogarth."
        };


        setTitle();
        window.addEventListener("resize", setTitle);
        return () => window.removeEventListener("resize", setTitle);
    }, []);





    
}