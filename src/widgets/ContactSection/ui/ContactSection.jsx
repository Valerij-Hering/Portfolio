import { Stack } from "@/shared/ui/Stack/Stack"
import { Text } from "@/shared/ui/Text/Text"
import styles from "./ContactSection.module.scss"
import { Input } from "@/shared/ui/Input/Input"
import { InputPhone } from "@/shared/ui/InputPhone/InputPhone"
import { Textarea } from "@/shared/ui/Textarea/Textarea"
import Button from "@/shared/ui/Button/Button"
import { useResize } from "@/shared/hooks/useResize"
import { ContactSocial } from "../../../app/entities/SocialMedia/ui/ContactSocial.jsx/ContactSocial"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { MailIcon, UserIcon, LocationIcon } from "../../../shared/assets/svg/TechStackIcons"
import { useTranslation } from "react-i18next"
import { useBoolean } from "../../../shared/hooks/useBoolean"
import { Loader } from "../../../shared/ui/Loader/Loader"



export const ContactSection = ({idSection}) => {

    const { isMobile, isTablet } = useResize();
    const [isSending, setIsSending] = useState(false);
    const [formKey, setFormKey] = useState(0);
    const { t } = useTranslation("common");
    const sending = useBoolean(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        sending.setTrue();

        const formData = new FormData(e.target);

        try {
            const response = await fetch("https://formspree.io/f/xbjbydqz", {
            method: "POST",
            body: formData,
            headers: {
                Accept: "application/json",
            },
            });

            if (response.ok) {
            toast.success("Message sent successfully!");
            e.target.reset();
            setFormKey(prev => prev + 1);
            } else {
            toast.error("Something went wrong.");
            }
        } catch {
            toast.error("Network error.");
        } finally {
            sending.setFalse();
        }
    };


    return(
        <Stack className={styles.contactSection} id={idSection} data-section={idSection} tag="section" direction="column" align="center" gap="48" fullWidth>
            <Stack direction="column" align="center">
                <Text tag="h2" fontStyle="poppins700" size={isMobile ? "34" : "42"} color="blackSoft" >{t("contact.Contact me")}</Text>
                <Stack className={styles.containerHeader} align="center" gap="4">
                    < hr/>
                    <Text color="blue" fontStyle="poppins500" size={isMobile ? "18" : "20"}>{t("contact.get in touch")}</Text>
                    <hr/> 
                </Stack>
            </Stack>
            <Stack direction={isTablet || isMobile ? "column" : "row"} justify={isTablet || isMobile ? "center" : "around"} align={isTablet || isMobile ? "center" : "start"} gap="48" fullWidth>
                <Stack className={styles.containerContent} direction="column" align="start" gap="24">
                    <Stack direction="column" align={isTablet || isMobile ? "start" : "start"} gap="16">
                        <Text color="blackSoft" fontStyle="poppins600" size="24">{t("contact.Get in Touch")}</Text>
                        <Text  color="grey" fontStyle="poppins300" lineHeight={1.6} align="justify">{t("contact.contact_text")}</Text>
                    </Stack>
                    <Stack direction="column" gap="16">
                        <Stack align="center" gap="32">
                            <UserIcon color="blue" size="29"/>
                            <Stack direction="column" gap="">
                                <Text color="blackSoft" fontStyle="poppins600">{t("contact.Name")}</Text>
                                <Text color="grey" fontStyle="poppins300" lineHeight={1.6}>{t("me.my_name")}</Text>
                            </Stack>
                        </Stack>
                        <Stack align="center" gap="32">
                            <LocationIcon color="blue" size="28"/>
                            <Stack direction="column" gap="">
                                <Text color="blackSoft" fontStyle="poppins600">{t("contact.Address")}</Text>
                                <Text color="grey" fontStyle="poppins300" lineHeight={1.6}>{t("me.my_address")}</Text>
                            </Stack>
                        </Stack>
                        <Stack align="center" gap="32">
                            {/* <EnvelopeIcon color="blue" size="24"/> */}
                            <MailIcon color="blue" size={26}/>
                            <Stack direction="column" gap="">
                                <Text color="blackSoft" fontStyle="poppins600">{t("contact.Email")}</Text>
                                <Text color="grey" fontStyle="poppins300" lineHeight={1.6}>valerij88hering@gmail.com</Text>
                            </Stack>
                        </Stack>
                    </Stack>
                    <ContactSocial size={20}/>
                </Stack>

                <Stack 
                    tag="form"
                    key={formKey}
                    onSubmit={handleSubmit}
                    action="https://formspree.io/f/xbjbydqz"
                    method="POST" 
                    className={styles.containerForm} 
                    direction="column" 
                    align="start" 
                    gap="24" fullWidth>
                    <Text color="blackSoft" fontStyle="poppins600" size="24">{t("contact.Message Me")}</Text>
                    <Stack direction="column" gap="16" fullWidth>
                        <Stack gap="12" fullWidth>
                            <Input label={t("contact.Name")} name="name" placeholder={t("input.Ex. John Doe")} required/>
                            <Input label={t("contact.Email")} type="email" name="email" placeholder="name@example.com" required/>
                        </Stack>
                        <InputPhone label={t("contact.Phone")}  name="phone" required/>
                        <Textarea label={t("contact.Message")} name="message" placeholder={t("input.Enter here...")} maxLength="5000" required/>
                    </Stack>
                    <Button type="submit" disabled={sending.value}>
                        {sending.value ? (
                            <>
                                <Loader />
                                {t("buttons.sending")}
                            </>
                        ) : (
                            t("buttons.send_message")
                        )}
                    </Button>
                </Stack>
            </Stack>
            <ToastContainer
                position="top-right"
                theme="light" // варианты: "light" | "dark" | "colored"
                autoClose={3000}
            />
            
        </Stack>
    )
}