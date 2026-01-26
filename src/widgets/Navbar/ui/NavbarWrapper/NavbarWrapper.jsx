import { Stack } from "@/shared/ui/Stack/Stack"
import { useResize } from "@/shared/hooks/useResize";
import { MobileNavbar } from "../MobileNavbar/ui/MobileNavbar";
import { DesktopNavbar } from "../DesktopNavbar/ui/DesktopNavbar";

export const NavbarWrapper = () => {

        const { isMobile, isTablet } = useResize();

    return (
        <Stack>
            {isTablet || isMobile ? <MobileNavbar/> : <DesktopNavbar/>}
        </Stack>
    )
}