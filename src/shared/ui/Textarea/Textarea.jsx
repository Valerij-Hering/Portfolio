import { Stack } from "@/shared/ui/Stack/Stack"
import { Text } from "@/shared/ui/Text/Text"
import styles from "./Textarea.module.scss"
import { forwardRef, useState } from "react";
import {getStyles } from "../../lib/getStyles"

export const Textarea = forwardRef(({
    placeholder="",
    label,
    type = 'text',
    required,
    error,
    className,
    onChange,
    fullWidth,
    ...otherProps
}, ref) => {

    const [text, setText] = useState(otherProps.value || '');

    const handleChange = (e) => {
        setText(e.target.value);
        if (onChange) {
            onChange(e);
        }
    };

    const mode = {
        [styles.error]: !!error,
    };

    const additional = [
        className,
    ];

    const textareaClass = getStyles(styles.myTextarea, mode, additional);

    return(
        <Stack className={styles.containerTextarea} justify="center" align="center" fullWidth>
            <textarea
                    placeholder={placeholder}
                    ref={ref}
                    className={textareaClass}
                    onChange={handleChange}
                    required={required}
                    {...otherProps}
                />
                <label className={styles.myLabel}>{label}</label>
                {otherProps.maxLength && (
                    <Text size={12} color='grey' className={styles.maxLength}>
                        {text.length} / {otherProps.maxLength}
                    </Text>
                )}
            
        </Stack>
    )
});