import { Stack } from "@/shared/ui/Stack/Stack"
import styles from "./InputPhone.module.scss"
import { useState } from "react";
import { getStyles } from "../../lib/getStyles"
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/high-res.css';
import { useTranslation } from "react-i18next"



const mapLangToCountry = {
  en: "us",
  ru: "ru",
  de: "de",
};

export const InputPhone = ({
    name = "phone",
    label,
    error,
    className,
    onChange,
    defaultCountry,
    ...otherProps
    }) => {

  const [value, setValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const { i18n } = useTranslation();

  const handleChange = (phone) => {
    setValue(phone);
    onChange?.(phone);
  };

  const mode = {
    [styles.focused]: isFocused,
    [styles.filled]: value.length > 0,
    [styles.error]: !!error,
  };

    const containerClass = getStyles(styles.containerInputPhone, mode, [className]);
    const country = defaultCountry || mapLangToCountry[i18n.language] || "ru";

    return (
        <Stack className={containerClass} justify="center" align="center" fullWidth>
            <PhoneInput
                value={value}                // ← обязательно
                onChange={handleChange}      // ← обязательно
                inputProps={{ name }}
                country={country}
                countryCodeEditable={false}
                disableDropdown={false}
                enableSearch={true}
                onFocus={() => setIsFocused(true)}   // ← добавляем фокус
                onBlur={() => setIsFocused(false)} 
                searchPlaceholder="Search country" 
                searchClass={styles.searchInput}
                buttonClass={styles.my_flag}
                inputClass={styles.inputPhone}
                containerClass={styles.my_wrapper}
                {...otherProps}
                dropdownStyle={{
                borderRadius: '12px',        // закругленные углы
                overflowY: 'scroll',         // нужен для прокрутки
                scrollbarWidth: 'none',      // Firefox: убирает скроллбар
                msOverflowStyle: 'none', 
                backgroundColor: '#fbfbfbff', /* твой цвет фона */
                boxShadow: 'none ',
                border: '1px solid #2424241a',
                padding: '5px',
                paddingTop: '0px'
            }}
            />
            <input type="hidden" name={name} />
            <label className={styles.myLabel}>{label}</label>
        </Stack>
    )
};
