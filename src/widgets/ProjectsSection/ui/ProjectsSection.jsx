import { useState } from "react";
import { Stack } from "@/shared/ui/Stack/Stack"
import { Text } from "@/shared/ui/Text/Text"
import styles from "./ProjectsSection.module.scss"
import { Pagination } from "@/shared/ui/Pagination/Pagination"
import { ProjectCard } from "@/app/entities/ProjectCard/ui/ProjectCard"
import { projects } from "../../../shared/data/projects"
import { ProjectModal } from "../../../app/entities/ProjectModal/ui/ProjectModal";
import { useBodyScrollLock } from "@/shared/hooks/useBodyScrollLock"
import { useScrollTo } from "@/shared/hooks/useScrollTo";
import { GithubModal } from "../../../app/entities/GithubModal/ui/GithubModal";
import { useTranslation } from "react-i18next"
import { useResize } from "@/shared/hooks/useResize"
import { ProjectFilter } from "../../../app/features/projectFilter/ui/projectFilter";
import { PROJECT_FILTERS } from "../../../app/features/projectFilter/model/types";
import { useBoolean } from "../../../shared/hooks/useBoolean";



export const ProjectsSection = ({idSection}) => {

    const [currentPage, setCurrentPage] = useState(0);
    const { value: isProjectCardOpen, setTrue: openProjectCard, setFalse: closeProjectCard } = useBoolean(false);
    const { value: isGithubModalOpen, setTrue: openGithubModal, setFalse: closeGithubModal } = useBoolean();
    const [selectedProject, setSelectedProject] = useState(null);
    const { lockScroll, unlockScroll } = useBodyScrollLock();
    const scrollTo = useScrollTo()
    const { t } = useTranslation("common");
    const { isMobile, isTablet } = useResize();
    const [filter, setFilter] = useState(PROJECT_FILTERS.ALL.id);


    // Функция фильтрации --------------------------------------------
    const filterProjects = (projects, filter) => {
        switch (filter) {
            case PROJECT_FILTERS.REACT.id:
            return projects.filter(p => p.tech?.includes("React"));
            case PROJECT_FILTERS.FRONTEND.id:
            return projects.filter(p => p.type === "frontend");
            case PROJECT_FILTERS.FULLSTACK.id:
            return projects.filter(p => p.type === "fullstack");
            default:
            return projects;
        }
    };

    // Пагинация ------------------------------------------------------
    const projectsPerPage = 6;
    const reversedProjects = [...projects].reverse();
    const filtered = filterProjects(reversedProjects, filter);
    const pageCount = Math.ceil(filtered.length / projectsPerPage);
    const startIndex = currentPage * projectsPerPage;
    const currentProjects = filtered.slice(startIndex, startIndex + projectsPerPage);

    const handlePageClick = (selectedItem) => {
        setCurrentPage(selectedItem.selected);
        scrollTo("projects")
    };

    const handleProjectClick = (project) => {
        setSelectedProject(project);
        openProjectCard(); 
    };

    // Функция сброса страницы при смене фильтра
    const handleFilterChange = (newFilterId) => {
        setFilter(newFilterId);
        setCurrentPage(0);
    };

    // Модалка Github ---------------------------------------------------
    const handleGithubClick = (project) => {
        if (typeof project.github === "object") {
            setSelectedProject(project);
            openGithubModal();
            lockScroll();
        } else {
            window.open(project.github, "_blank");
        }
    };


    return (
        <Stack className={styles.projectsSection} id={idSection} data-section={idSection} tag="section" direction="column" align="center" gap="48" fullWidth>
            <Stack  direction="column" align="center">
                <Text tag="h2" fontStyle="poppins700" size={isMobile ? "34" : "42"} color="whiteSoft" >{t("projects.My Projects")}</Text>
                <Stack className={styles.containerHeader} align="center" gap="4">
                    < hr/>
                    <Text color="blue" fontStyle="poppins500" size={isMobile ? "18" : "20"}>{t("projects.what can i do")}</Text>
                    <hr/> 
                </Stack>
            </Stack>
            
            <Stack justify="center" align="start" gap="16" wrap className={styles.containerProjects}>
                <ProjectFilter value={filter} onChange={handleFilterChange}/>
                {currentProjects.map((project) => (
                    <ProjectCard 
                        key={project.id} 
                        project={project} 
                        onProject={() => {handleProjectClick(project); lockScroll();}}
                        onGithubClick={() => handleGithubClick(project)}
                    />
                ))}
            </Stack>
            <Pagination pageCount={pageCount} onPageChange={handlePageClick} forcePage={currentPage}/>
            { isProjectCardOpen &&
                <ProjectModal project={selectedProject} onClose={closeProjectCard}/>
            }
            {isGithubModalOpen && selectedProject && (
                <GithubModal links={selectedProject.github} onClose={() => { closeGithubModal(); unlockScroll(); }}/>
            )}
        </Stack>
    )
}