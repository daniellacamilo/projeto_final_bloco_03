import { EnvelopeIcon, GithubLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react";
function Footer() {

    let data = new Date().getFullYear()

    return (
        <>
            <div className="flex justify-center bg-indigo-900 text-white">
                <div className="container flex flex-col items-center py-4">
                    <p className="text-xl font-bold">
                        Farmácia - Desenvolvido por Daniella Camilo | Copyright: {data}
                    </p>
                    <p className="text-lg"> Redes Sociais</p>
                    <div className="flex gap-2">
                        <a href="https://www.linkedin.com/in/daniella-camilo-3b64b0393/" target="_blank" rel="noreferrer">
                            <LinkedinLogoIcon size={32} />
                        </a>
                        <a href="https://github.com/daniellacamilo" target="_blank" rel="noreferrer">
                            <GithubLogoIcon size={32} />
                        </a>
                        <a href="mailto:daniella.camilos@gmail.com" target="_blank" rel="noreferrer">
                            <EnvelopeIcon size={32}/>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
