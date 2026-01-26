import { useRef, useEffect, useMemo } from "react";
import { PROJECT_FILTERS } from "../model/types";
import { Stack } from "@/shared/ui/Stack/Stack";
import { Text } from "@/shared/ui/Text/Text";
import styles from "./projectFilter.module.scss";
import { FilterIcon } from "@/shared/assets/svg/FilterIcons";
import { CheckIcon } from "../../../../shared/assets/svg/CheckIcon";
import Button from "../../../../shared/ui/Button/Button";
import { useTranslation } from "react-i18next"
import { useBoolean } from "../../../../shared/hooks/useBoolean";


export const ProjectFilter = ({ value, onChange }) => {
    const { value: isFilterModalOpen, toggle: toggleFilterModal, setFalse: closeFilterModal } = useBoolean(false);
    const ref = useRef(null);
    const { t, i18n } = useTranslation("common");

    const filters = [
        { id: PROJECT_FILTERS.ALL.id, icon: PROJECT_FILTERS.ALL.icon, label: t("filter.All Projects") },
        { id: PROJECT_FILTERS.REACT.id, icon: PROJECT_FILTERS.REACT.icon, label: t("filter.React") },
        { id: PROJECT_FILTERS.FRONTEND.id, icon: PROJECT_FILTERS.FRONTEND.icon, label: t("filter.Frontend") },
        { id: PROJECT_FILTERS.FULLSTACK.id, icon: PROJECT_FILTERS.FULLSTACK.icon, label: t("filter.Fullstack") },
    ];

    // Находим label текущего фильтра
    const currentLabel = useMemo(
        () => filters.find(f => f.id === value)?.label ?? "Select",
        [value, i18n.language]
    );

    // Закрытие модалки при клике вне блока
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (ref.current && !ref.current.contains(e.target)) {
                closeFilterModal();
            }
        };
        if (isFilterModalOpen) document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, [isFilterModalOpen, closeFilterModal]);

    return (
        <Stack ref={ref} className={styles.wrapper} fullWidth>
            {/* Триггер */}
            <Stack className={styles.trigger} direction="row" justify="between" align="end" fullWidth gap="8">
                <Text color="whiteSoft" className={styles.label} size="18"> {t(currentLabel)}</Text>
                <Button size="small" onClick={toggleFilterModal} >
                    {t("buttons.filter")}
                    <FilterIcon  color="whiteSoft" size="19"  className={styles.icon}/>
                </Button>
            </Stack>

            {/* Выподающее окно */}
            {isFilterModalOpen && (
                <Stack className={styles.containerFilter} direction="column">
                    {filters.map((f) => (
                        <Stack 
                            align="center" 
                            justify="between" 
                            fullWidth 
                            className={styles.filterBtn}
                            onClick={() => {onChange(f.id); closeFilterModal()}}
                            >
                            <Stack 
                                align="center" 
                                gap="12"
                            >
                                {f.icon && f.icon("blackSoft", 16)}
                                <Text
                                    key={f.id}
                                    color={"blackSoft"}
                                    size={13}
                                    className={styles.filterBtnText}
                                >
                                    {f.label}
                                    
                                </Text>
                            </Stack>
                            {value === f.id && <CheckIcon className={styles.checkIcon} color="blue" size={16}/>}
                        </Stack>
                    ))}
                </Stack>
            )}
        </Stack>
    );
};
