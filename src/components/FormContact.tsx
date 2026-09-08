function FormContact() {
    return (
        <form className="flex flex-col gap-4 w-50% md:w-1/2 lg:w-1/3 p-4 bg-[var(--color-bg-ligth)]  rounded-lg shadow-lg">
            <input
                type="text"
                placeholder="Seu nome"
                className="bg-transparent border-b border-[#7045b1] focus:outline-none focus:ring-2 focus:ring-[#7045b1]"
            />
            <input
                type="email"
                placeholder="Seu email"
                className="bg-transparent border-b border-[#7045b1] focus:outline-none focus:ring-2 focus:ring-[#7045b1]"
            />
            <textarea
                placeholder="Sua mensagem"
                className="bg-transparent border-b border-[#7045b1] focus:outline-none focus:ring-2 focus:ring-[#7045b1]"
            />
        </form>
    );
}
export default FormContact;