import { Stack } from "@/shared/ui/Stack/Stack"
import { Text } from "@/shared/ui/Text/Text"
import styles from "./ProjectCard.module.scss"
import Button from "@/shared/ui/Button/Button"
import { GithubIcon } from "@/shared/assets/svg/socialMediaIcons";
import { useTranslation } from "react-i18next"
import { SkeletonLoader } from "@/shared/ui/SkeletonLoader/SkeletonLoader";
import { useImagePreload } from "@/shared/hooks/useImagePreload";



export const ProjectCard = ({ project, onProject, onGithubClick }) => {

    const { t } = useTranslation("common");
    const isLoaded = useImagePreload(project.image);

    return (
        <Stack className={styles.containerCard} direction="column" gap={16}>
            <Stack direction="column" gap={12} fullWidth>
                    { !isLoaded 
                    ? <SkeletonLoader image aspectRatio="16/9" titleLine={false} lines={0}/>
                    : <img className={styles.image} src={project.image}/>
                    }
                <Text fontStyle="poppins500" size="14" color="blue">{project.tech}</Text>
            </Stack>
            <Stack direction="column" gap={4}>
                <Text fontStyle="poppins600" size="20" color="blackSoft">{project.title}</Text>
                <Text className={styles.description} fontStyle="poppins300"  color="grey">{t(project.description)}</Text>
            </Stack>
            <Stack gap={12}>
                <Button size="small"  variant="filled" color="blue" onClick={onProject}>{t("buttons.learn_more")}</Button>
                <Button variant="subtle" color="grey" size="small" onClick={onGithubClick}>
                    <GithubIcon className={styles.icon} color="blackSoft" size={19}/> 
                    Github
                </Button>
            </Stack>
        </Stack>
    )
}