import { Stack } from "@/shared/ui/Stack/Stack"
import { Text } from "@/shared/ui/Text/Text"
import styles from "./Input.module.scss"
import { forwardRef } from "react";
import {getStyles } from "../../lib/getStyles"



export const Input = forwardRef(({
    placeholder="",
    label,
    type = 'text',
    required,
    error,
    className,
    // onChange,
    fullWidth,
    ...otherProps
}, ref) => {

    const mode = {
        [styles.error]: !!error,
        [styles.fullWidth]: fullWidth,
    };

    const additional = [
        className,
    ];

    const inputClass = getStyles(styles.input, mode, additional);
    const stackClass = fullWidth ? styles.fullWidth : '';

    return (
        <Stack className={styles.containerInput} justify="center" align="center" fullWidth>
            <input 
                placeholder={placeholder}
                ref={ref}
                type={type}
                required={required}
                // onChange={onChange}
                className={inputClass}
                {...otherProps}
            />
            <label className={styles.myLabel}>{label}</label>
        </Stack>
    )
});