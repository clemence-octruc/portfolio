import {Inter, Open_Sans} from 'next/font/google'
import {Line} from "@/components/line"
import {ProjectBox} from "@/components/projectBox";
import {Fragment, useState} from "react";
import Head from "next/head";

const inter = Inter({subsets: ['latin']})
const open_sans = Open_Sans({subsets: ['latin']})
const hrefs = [{
    text: "Qui suis-je",
    icon: `<svg class="w-8 h-8 lg:w-6 lg:h-6" viewBox="0 0 25 25" fill="white" xmlns="http://www.w3.org/2000/svg">
<path d="M12.5002 3.75001C14.1043 3.75001 15.4168 5.06251 15.4168 6.66668C15.4168 8.27084 14.1043 9.58334 12.5002 9.58334C10.896 9.58334 9.5835 8.27084 9.5835 6.66668C9.5835 5.06251 10.896 3.75001 12.5002 3.75001ZM12.5002 18.3333C16.4377 18.3333 20.9585 20.2146 21.2502 21.25H3.75016C4.08558 20.2 8.57725 18.3333 12.5002 18.3333ZM12.5002 0.833344C9.27725 0.833344 6.66683 3.44376 6.66683 6.66668C6.66683 9.88959 9.27725 12.5 12.5002 12.5C15.7231 12.5 18.3335 9.88959 18.3335 6.66668C18.3335 3.44376 15.7231 0.833344 12.5002 0.833344ZM12.5002 15.4167C8.60641 15.4167 0.833496 17.3708 0.833496 21.25V24.1667H24.1668V21.25C24.1668 17.3708 16.3939 15.4167 12.5002 15.4167Z"/>
</svg>

`
}, {
    text: "Compétences",
    icon: `<svg class="w-8 h-8 lg:w-6 lg:h-6" viewBox="0 0 33 33" fill="white" xmlns="http://www.w3.org/2000/svg">
<path d="M3.37516 6.29168H0.458496V29.625C0.458496 31.2292 1.771 32.5417 3.37516 32.5417H26.7085V29.625H3.37516V6.29168ZM29.6252 0.458344H9.2085C7.60433 0.458344 6.29183 1.77084 6.29183 3.37501V23.7917C6.29183 25.3958 7.60433 26.7083 9.2085 26.7083H29.6252C31.2293 26.7083 32.5418 25.3958 32.5418 23.7917V3.37501C32.5418 1.77084 31.2293 0.458344 29.6252 0.458344ZM29.6252 23.7917H9.2085V3.37501H29.6252V23.7917Z"/>
</svg>


`

},
    {
        text: "Parcours & projets",
        icon: `<svg class="w-8 h-8 lg:w-6 lg:h-6" fill="white" viewBox="0 0 33 33" xmlns="http://www.w3.org/2000/svg">
<path d="M31.7106 14.4437L18.571 1.30415C17.4773 0.210403 15.5523 0.19582 14.4439 1.30415L1.31895 14.4292C0.181445 15.5667 0.181445 17.4042 1.31895 18.5417L14.4439 31.6667C15.0127 32.2354 15.7564 32.5125 16.5002 32.5125C17.2439 32.5125 17.9877 32.2354 18.5564 31.6667L31.6669 18.5562C32.8189 17.4479 32.8335 15.6104 31.7106 14.4437V14.4437ZM16.5148 29.6104L3.38978 16.4854L16.5148 3.3604L29.6398 16.4854L16.5148 29.6104V29.6104ZM10.6669 15.0417V20.875H13.5835V16.5H19.4169V20.1458L24.521 15.0417L19.4169 9.93749V13.5833H12.1252C11.3231 13.5833 10.6669 14.2396 10.6669 15.0417Z"/>
</svg>

`
    },
    {
        text: "Contact",
        icon: `<svg class="w-8 h-8 lg:w-6 lg:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_6_8811)">
<path d="M2.01 21L23 12L2.01 3L2 10L17 12L2 14L2.01 21Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_6_8811">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`
    }
]
const myselfText = `Développeur web/mobile junior, je cherche un premier emploi après plusieurs années de projets concrets réalisés par moi même et en groupe. Au cours de ces expériences j'ai compris que la programmation était là où je voulais établir ma carrière. Je cherche donc aujourd'hui un emploi qui me permettrait de m'intégrer dans des projets de plus grande envergure et enjeux `
const myselfText2 = `Ma manière de travailler est très autonome puisque j'ai longtemps été livré à moi même, je n'ai besoin d'aide que rarement et ait l'habitude de m'adapter à de nouvelles technologies ou codebases. Je cherche toujours à optimiser mon temps et être rigoureux, mais je sais faire des compromis quand les deadlines approchent.`
const list = hrefs.map(e =>
    <a key={e.text} className='lg:px-20 px-4 flex items-center' href={`#${e.text}`}>
        <div className="mr-2 lg:mr-3" dangerouslySetInnerHTML={{__html: e.icon}}></div>
        <div className="lg:block hidden">{e.text}</div>
    </a>
)


const languages = ["Javascript", "Python", "Typescript", "HTML5", "Dart", "CSS3"]
const technos = ["JSON, HTTP, WebSocket", "Email, SSH, Responsive", "REST API, implémentation d'APIs", '3rd party sign in',]
const frameworks = [["svelte.png", "Svelte, Sveltekit"], ["flutter.png", "Flutter"], ["nodejs.png", "Nodejs"], ["react.png", "React"]]
const outils = ["vscode", "github", "git", "gcp", "figma", "playconsole", "analytics", "admob", "mongodb", "tailwind", "firebase"]
const languagesList = languages.map(e =>
    <div key={e} className="flex items-center"><img className="mr-4 h-9" alt={e} src={"icons/" + e.toLowerCase() + ".png"}/><p>{e}</p></div>
)
const frameworksList = frameworks.map(e =>
    <div key={e[0]} className="flex items items-center"><img className="mr-4 h-10" src={"icons/" + e[0]} alt={e[0]}/><p>{e[1]}</p>
    </div>
)
const outilsList = outils.map((e) => <img alt={e} key={e} src={`icons/${e}.png`}
                                          className="object-scale-down h-9 max-w-[10rem]"/>)
const technosList = technos.map(e => <p key={e} className="">{e}</p>)

const projects: Project[] = [
    {
        title: "Winhalla",
        date: "2020-2022",
        type: "Site web, application mobile, backend",
        href: "https://winhalla.app",
        description: `Un produit destiné aux joueurs du jeu Brawlhalla, dont le principe est d'offrir des récompenses en jeu en échange de temps passé sur l'application. Les récompenses sont financées par la publicité. Le projet est passé par tous les states pré-production et production, comptabilisant à son apogée 5000 UAM`,
        stack: "NodeJS, Svelte, Flutter",
        extendedDesc: [
            `D'abord un site web codé avec svelte/sapper. La fonctionalité principale est d'organiser des "matchs" entre les joueurs, plus leur taux de victoire est élevé sur les 7 prochaines parties, plus ils gagnent de monnaie. qu'ils peuvent ensuite échanger contre des récompenses en jeu en environ 100h de jeu.`,
            "Svelte ne supportant pas de compilation vers une application native (à l'instar de react), nous avons choisi de recoder le produit sous forme d'application avec Flutter. Nous en avons profité pour redesigner le produit avec l'aide des retours que nous avons reçus sur le site. Le backend ayant une codebase séparée de celle du site, nous n'avons pas eu à le modifier"
        ],
        extendedStack: "ExpressJS, MongoDB, GCP, Figma, TailwindCSS, Firebase, Google Analytics",
        assets: ["screens/website.png", "screens/app.png"]
    }, {
        title: "Balapp",
        href: "https://github.com/MDL-Jules-Verne/balapp",
        date: "2022-2023",
        type: "Application mobile, backend en local",
        description: `Application permettant d'optimiser les processus d'organisation et de déroulement d'évènements nécessitant billets d'entrée et vestiaires. Au départ, était destiné à l'organisation de bals de promo, maintenant adapté pour des évènements plus diversifiés
        Fonctionne en LAN entre un serveur sous ExpressJS et un nombre (quasi) illimité de smartphones sous Flutter`,
        stack: "NodeJS, HTML, Flutter",
        extendedStack: "MongoDB, ExpressJS, Figma, Websocket",
        extendedDesc: ["Génère, enregistre et vérifie des billets par QRcode. Permet recherche et modification des billets depuis les téléphones", "Enregistre et restitue des objets laissés aux vestiaires.", "Intègre un mode hors ligne en cas de défaut du réseau local et un dashboard pour une administration sans connaissance du code depuis le serveur"],
        assets: ["screens/billets+search.png", "screens/vestiaire.png", "screens/dashboard.png"]
    },
]
const projectsList = projects.map((e, i) => <Fragment key={e.title}>
    <ProjectBox project={e}  inter={inter}></ProjectBox>
    {i < projects.length - 1 ?
        <div className="flex flex-col items-center w-min ml-6 my-1"><Line></Line><Line></Line><p
            className="font-bold my-1.5 text-gray">2022</p> <Line></Line><Line></Line></div> : ""}</Fragment>)

export default function Home() {

    const [nom, setNom] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [sendStatus, setSendStatus] = useState('')

    function sendMessage() {
        fetch('https://discord.com/api/webhooks/1107336132523474944/Wv-68vu_h6wBFwdj9iMA1pr-0zocWRb8fat48pkNSkOMr-DjaqNc0GvjtHFTE9agTbQv', {
            method: 'POST',
            body: JSON.stringify({
                embeds: [{
                    title: `Nouveau message de ${nom}`,
                    description: message,
                    fields: [{name: "Email", value: email}]
                }]
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }).then((response) => response.text())
            .then((data) => {
                console.log(data);
                setSendStatus("success")
                // Handle data
            })
            .catch((err) => {
                setSendStatus("error")
                console.log(err.message);
            });
    }



    return (<>
        <Head>
            <title>Clément Octruc - CV/portfolio développeur</title>
            <meta name="description" content="Mon CV/portfolio retraçant mes expériences, compétences et projets en développement informatique." />
        </Head>
        <div className={inter.className}>

        <nav className="fixed bg-black px-10 w-full text-white flex lg:justify-center justify-around text-sm py-4">
            {list}
        </nav>
        <main className="pt-28 px-8 lg:px-60 mb-20" id="Qui suis-je">
            <div className="lg:flex block justify-center space-x-12 lg:space-x-36">
                <div className={open_sans.className}>
                    <div className="flex items-center lg:mt-20 mt-5 gap-x-6">
                        <div>
                            <h1 className="lg:text-[3.4rem] text-[2.5rem] leading-[1.1] font-extrabold ">Clement <br/> Octruc
                            </h1>
                            <h2 className="mt-6 lg:mt-8 text-gray text-2xl font-bold">Développeur <span
                                className="text-primary">web</span> <br className="hidden lg:block"/> et <span
                                className="text-primary">mobile</span></h2></div>
                        <div className="lg:hidden"><img alt="" src="screens.png" className="w-auto"/></div>
                    </div>

                    <p className="text-gray mt-12 max-w-lg mx-2 lg:mx-0">{myselfText}</p>
                    <p className="text-gray mt-4 max-w-lg mx-2 lg:mx-0">{myselfText2}</p>
                </div>
                <img src="screens.png" alt="" className="h-1/2 hidden lg:block w-auto"/>
            </div>
            <div className={open_sans.className + " mx-2 lg:mx-28"} id="Compétences">
                <h2 className="text-3xl pt-28 font-bold">Compétences</h2>
                <div className="flex items-start flex-wrap gap-x-10 lg:gap-x-20">

                    <div
                        className="bg-white shadow-xl flex-grow lg:flex-grow-0 pt-10 pb-11 px-10 lg:px-12 mt-9 rounded-[1.75rem]">
                        <h3 className="font-bold text-xl">Langages :</h3>
                        <div
                            className="grid-cols-2 px-3 grid-rows-3 grid gap-x-16 gap-y-6 mt-8 text-gray font-semibold">{languagesList}</div>
                    </div>
                    <div
                        className="bg-white shadow-xl pt-10 pb-11 px-10 flex-grow lg:flex-grow-0 lg:px-12 mt-9 lg:w-1/3 rounded-[1.75rem]">
                        <h3 className="font-bold text-xl">Technologies et pratiques :</h3>
                        <div className="flex flex-col px-3 mt-7 gap-y-4 font-semibold text-gray">{technosList}</div>
                    </div>
                    <div
                        className="bg-white shadow-xl pt-10 pb-11 flex-grow lg:flex-grow-0 px-10 lg:px-12 mt-9 lg:w-[30%] rounded-[1.75rem]">
                        <h3 className="font-bold text-xl">Frameworks :</h3>
                        <div
                            className="grid-cols-1 grid-rows-3 px-3 grid gap-6 flex-grow lg:flex-grow-0 mt-6 font-semibold text-gray">{frameworksList}</div>
                    </div>
                    <div
                        className="bg-white  shadow-xl pt-10 pb-11 px-10 lg:px-12 mt-9  rounded-[1.75rem] lg:w-[50%]">
                        <h3 className="font-bold text-xl">Outils :</h3>
                        <div className="flex-wrap flex px-3 gap-x-6 gap-y-6 mt-4">{outilsList}</div>
                    </div>

                </div>
            </div>
            <div className={open_sans.className + " mx-2 lg:mx-28"} id="Parcours & projets">
                <h2 className="text-3xl pt-36 font-bold">Projets</h2>
                <div className="text-lg ml-5 flex font-bold  text-gray mt-8">
                    <div className="flex items-center flex-col">
                        <p className="mb-1.5">2018</p>
                        <Line></Line>
                        <Line></Line>
                        <Line></Line>
                        <p className="my-1.5">2020</p>
                        <Line></Line>
                        <Line></Line>
                    </div>
                    <p className="text-xl lg:mt-12 mt-4 font-bold ml-16">Divers projets informatiques (arduino, bots
                        discord,
                        ect...)</p>
                </div>

                <div>{projectsList}</div>
            </div>
            <div className="lg:flex justify-evenly lg:pt-28 pt-12 lg:mx-32 lg:gap-x-10" style={open_sans.style} id="Contact">
                <div className="mt-24 mx-5 lg:mx-0 lg:w-3/5">
                    <h2 className="text-[1.75rem] lg:text-3xl font-bold">Travaillons ensemble !</h2>

                    <p className="text-lg text-gray mt-4" style={inter.style}>Je suis disponible à partir de Juillet 2023 dans toute la France (de préférence région parisienne). D&apos;ici là, je suis ouvert à apprendre de nouvelles technologies si vous en utilisez que je ne maîtrise pas encore</p>

                    <p className="font-bold mt-3">Développeur back-end - Développeur front-end - Intégrateur web -
                        Développeur mobile</p>

                    <p className="font-bold  mt-8">Email:<span
                        className="text-gray text-sm ml-2">clement.octruc@gmail.com</span></p>
                    <p className="font-bold ">Téléphone:<span className="text-gray text-sm ml-2">07 83 55 99 86</span>
                    </p>
                </div>
                <div className="shadow-xl rounded-[1.75rem] lg:mr-10 bg-white px-16 py-11 mt-10 lg:mt-0 lg:w-2/5">
                    <label htmlFor="nom" className="text-lg font-bold mb-2">Nom:</label>
                    <input id="nom" className="w-full" value={nom} onChange={e => setNom(e.target.value)}/>
                    <label htmlFor="email" className="text-lg font-bold mt-4 mb-2">Email:</label>
                    <input id="email" type="email" className="w-full" value={email} onChange={e => setEmail(e.target.value)}/>
                    <label htmlFor="message" className="text-lg font-bold mt-4 mb-2">Message:</label>
                    <textarea id="message" className="h-36 w-full" value={message} onChange={e => setMessage(e.target.value)}/>
                    <div className="flex justify-center items-center flex-col">
                        <input type="button" onClick={sendMessage} value="Envoyer"
                               className="cursor-pointer mt-8 bg-black text-background font-bold px-9 mb-2 py-3"/>
                        {sendStatus &&
                            <p className={sendStatus === "success" ? "text-green-600" : "text-red-600"}>{sendStatus === "success" ? "Message envoyé !" : "Erreur dans l'envoi du message."}</p>}
                    </div>

                </div>
            </div>
        </main>
    </div></>)
};

export interface Project {
    title: string,
    href: string,
    type: string,
    description: string,
    stack: string,
    date: string,
    extendedDesc: string[],
    assets: string[],
    extendedStack: string
}