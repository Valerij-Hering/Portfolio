import { Stack } from "@/shared/ui/Stack/Stack";
import { Text } from "@/shared/ui/Text/Text";
import styles from "./ProjectModal.module.scss";
import { useBodyScrollLock } from "@/shared/hooks/useBodyScrollLock"
import Button from "@/shared/ui/Button/Button";
import { GithubIcon } from "../../../../shared/assets/svg/socialMediaIcons";
import { useResize } from "@/shared/hooks/useResize";
import { GithubModal } from "../../GithubModal/ui/GithubModal";
import { useTranslation } from "react-i18next"
import { useImagePreload } from "../../../../shared/hooks/useImagePreload";
import { SkeletonLoader } from "../../../../shared/ui/SkeletonLoader/SkeletonLoader";
import { ArrowIcon } from "../../../../shared/assets/svg/ArrowIcon";
import { useBoolean } from "../../../../shared/hooks/useBoolean";



export const ProjectModal = ({ project, onClose }) => {

    const isLoaded = useImagePreload(project.imageModal);

    const { t } = useTranslation("common");
    const { lockScroll, unlockScroll } = useBodyScrollLock();
    const { isMobile, isTablet } = useResize();
    const { value: isGithubModalOpen, setTrue: openGithubModal, setFalse: closeGithubModal } = useBoolean();


    return (
        <Stack className={styles.overlay} direction="column" justify={isMobile ? "start": "between"} gap={48}  align="center"  fullWidth>
            <Stack direction="column" align="center" gap={8}>
                <Text tag="h3" fontStyle="poppins700" size="24" color="blackSoft">
                    {project.title}
                </Text>
                <Text className={styles.subtitle} align="center" fontStyle="poppins300" size={14}  color="grey">{t(project.description)}</Text>
            </Stack>
            <Stack className={styles.modal} direction={isTablet || isMobile ? "column_reverse" : "row"} align={isTablet || isMobile ? "center" : "start"} justify="center" >
                <Stack className={styles.containerContent} direction="column" gap={32} align={isTablet || isMobile ? "center" : "start"} fullWidth>
                    <Stack className={styles.containerFeatures} justify={isTablet || isMobile ? "center" : "start"} wrap gap={24}>
                        {project.features.map((feature, index) => (
                        <Stack className={styles.content} direction="column" align={isTablet || isMobile ? "center" : ""}  gap={8} key={index} fullWidth={isMobile}>
                            {feature.icon("blue", 24)}
                            <Text className={styles.contentTitle} align={isTablet || isMobile ? "center" : ""} fontStyle="poppins600"  color="blackSoft" size={18}>{t(feature.title)}</Text>
                            {feature.description && (
                                <Text className={styles.description} align={isTablet || isMobile ? "center" : "justify"} fontStyle="poppins300" size="14" color="grey">
                                    {t(feature.description)}
                                </Text>
                            )}
                        </Stack>
                        ))}
                        
                    </Stack>
                    <Stack gap={16} direction={isMobile ? "column" : "row"}  {...(isMobile ? { fullWidth: true } : {})}>
                        <Button as="a"  variant="filled" color="blue" {...(isMobile ? { fullWidth: true } : {})} target="_blank"  size="medium" href={project.link} >
                            {t("buttons.website")}
                        </Button>
                        <Button 
                            {...(isMobile ? { fullWidth: true } : {})}
                            className={styles.btnGithub} 
                            onClick={() => {
                                if (typeof project.github === "object") 
                                    openGithubModal(),
                                    lockScroll(); 
                                else window.open(project.github, "_blank");
                            }} variant="subtle" color="grey" size="medium"
                        >
                            <GithubIcon color="blackSoft" size={19}/> Github
                        </Button>
                    </Stack>
                    
                </Stack>
                { !isLoaded 
                    ? <SkeletonLoader image aspectRatio="16/9" titleLine={false} lines={0} /> 
                    : <img src={project.imageModal} alt={project.title} className={styles.image} /> 
                }
            </Stack>
            <Button variant="clear" color="dark" size="small" onClick={() => {onClose(); unlockScroll()}}>
                        <ArrowIcon rotate="left"/> {t("buttons.go_back")}
            </Button>
            {isGithubModalOpen && (
                <GithubModal links={project.github} onClose={closeGithubModal}/>
            )}
        </Stack>
    );
};
