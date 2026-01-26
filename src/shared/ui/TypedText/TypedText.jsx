import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import styles from './TypedText.module.scss';
import { useTranslation } from "react-i18next";

export const TypedText = () => {
    const el = useRef(null);   // ссылка на span
    const typed = useRef(null); // ссылка на инстанс Typed
    const { t, i18n } = useTranslation("common");

    const roles = t('home.roles', { returnObjects: true });

    useEffect(() => {
        // уничтожаем старый инстанс, если есть
        if (typed.current) {
            typed.current.destroy();
        }

        // создаём новый инстанс с обновлёнными строками
        typed.current = new Typed(el.current, {
            strings: roles,
            typeSpeed: 100,
            backSpeed: 60,
            loop: true,
        });

        // уничтожаем при размонтировании
        return () => {
            typed.current.destroy();
        };
    }, [roles, i18n.language]); // зависимость от ролей и языка

    return <span ref={el} className={styles.typedText}/>;
};
