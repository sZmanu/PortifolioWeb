import FormContact from "../components/FormContact";

function Contact() {
    return (
        <section id="contact" className="h-svh flex items-center justify-center bg-[#f1e5ff] dark:bg-[var(--color-bg-dark)]">
            <div className="absolute inset-0 min-h-screen bg-[url('/fundoLuzes.svg')] bg-cover bg-center bg-no-repeat"></div>
            <FormContact />
        </section>
    );
}
export default Contact;