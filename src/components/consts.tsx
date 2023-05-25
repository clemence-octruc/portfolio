import {Project} from "@/pages";

export const myselfText = `Développeur web/mobile junior, je cherche un premier emploi après plusieurs années de projets concrets réalisés par moi même et en groupe. Au cours de ces expériences j'ai compris que la programmation était là où je voulais établir ma carrière. Je cherche donc aujourd'hui un emploi qui me permettrait de m'intégrer dans des projets de plus grande envergure et enjeux `
export const myselfText2 = `Je sais travailler par moi même, mais j’ai aussi eu de nombreux projets en collaboration avec d’autres développeurs et sait collaborer que ce soit humainement et par les outils de collaboration. Je maîtrise l'anglais à l'écrit comme à l'oral.`

export const languages = ["Javascript", "Python", "Typescript", "HTML5", "Dart", "CSS3"]
export const technos = ["JSON, HTTP, WebSocket", "Email, SSH, Responsive", "Méthodologie agile", 'Programmation fonctionelle et orientée objet ',]
export const frameworks = [["svelte.png", "Svelte, Sveltekit"], ["flutter.png", "Flutter"], ["nodejs.png", "Nodejs"], ["react.png", "React"]]
export const outils = ["vscode", "github", "git", "gcp", "figma", "playconsole", "analytics", "admob", "mongodb", "tailwind", "firebase"]
export const projects: Project[] = [
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
        description: `Application permettant d'optimiser les processus d'organisation et de déroulement d'évènements nécessitant billets d'entrée et vestiaires. Au départ, était destiné à l'organisation de bals de promo, maintenant adapté pour des évènements plus diversifiés.
        Fonctionne en LAN entre un serveur sous ExpressJS et un nombre (quasi) illimité de smartphones sous Flutter`,
        stack: "NodeJS, HTML, Flutter",
        extendedStack: "MongoDB, ExpressJS, Figma, Websocket",
        extendedDesc: ["Génère, enregistre et vérifie des billets par QRcode. Permet recherche et modification des billets depuis les téléphones", "Enregistre et restitue des objets laissés aux vestiaires.", "Intègre un mode hors ligne en cas de défaut du réseau local et un dashboard pour une administration sans connaissance du code depuis le serveur"],
        assets: ["screens/billets+search.png", "screens/vestiaire.png", "screens/dashboard.png"]
    },
]

export const hrefs = [{
    text: "Qui suis-je",
    icon: <svg className="w-8 h-8 lg:w-6 lg:h-6" viewBox="0 0 25 25" fill="white" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M12.5002 3.75001C14.1043 3.75001 15.4168 5.06251 15.4168 6.66668C15.4168 8.27084 14.1043 9.58334 12.5002 9.58334C10.896 9.58334 9.5835 8.27084 9.5835 6.66668C9.5835 5.06251 10.896 3.75001 12.5002 3.75001ZM12.5002 18.3333C16.4377 18.3333 20.9585 20.2146 21.2502 21.25H3.75016C4.08558 20.2 8.57725 18.3333 12.5002 18.3333ZM12.5002 0.833344C9.27725 0.833344 6.66683 3.44376 6.66683 6.66668C6.66683 9.88959 9.27725 12.5 12.5002 12.5C15.7231 12.5 18.3335 9.88959 18.3335 6.66668C18.3335 3.44376 15.7231 0.833344 12.5002 0.833344ZM12.5002 15.4167C8.60641 15.4167 0.833496 17.3708 0.833496 21.25V24.1667H24.1668V21.25C24.1668 17.3708 16.3939 15.4167 12.5002 15.4167Z"/>
    </svg>


}, {
    text: "Compétences",
    icon: <svg className="w-8 h-8 lg:w-6 lg:h-6" viewBox="0 0 33 33" fill="white" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M3.37516 6.29168H0.458496V29.625C0.458496 31.2292 1.771 32.5417 3.37516 32.5417H26.7085V29.625H3.37516V6.29168ZM29.6252 0.458344H9.2085C7.60433 0.458344 6.29183 1.77084 6.29183 3.37501V23.7917C6.29183 25.3958 7.60433 26.7083 9.2085 26.7083H29.6252C31.2293 26.7083 32.5418 25.3958 32.5418 23.7917V3.37501C32.5418 1.77084 31.2293 0.458344 29.6252 0.458344ZM29.6252 23.7917H9.2085V3.37501H29.6252V23.7917Z"/>
    </svg>


}, {
    text: "Parcours & projets",
    icon: <svg className="w-8 h-8 lg:w-6 lg:h-6" fill="white" viewBox="0 0 33 33"
               xmlns="http://www.w3.org/2000/svg">
        <path
            d="M31.7106 14.4437L18.571 1.30415C17.4773 0.210403 15.5523 0.19582 14.4439 1.30415L1.31895 14.4292C0.181445 15.5667 0.181445 17.4042 1.31895 18.5417L14.4439 31.6667C15.0127 32.2354 15.7564 32.5125 16.5002 32.5125C17.2439 32.5125 17.9877 32.2354 18.5564 31.6667L31.6669 18.5562C32.8189 17.4479 32.8335 15.6104 31.7106 14.4437V14.4437ZM16.5148 29.6104L3.38978 16.4854L16.5148 3.3604L29.6398 16.4854L16.5148 29.6104V29.6104ZM10.6669 15.0417V20.875H13.5835V16.5H19.4169V20.1458L24.521 15.0417L19.4169 9.93749V13.5833H12.1252C11.3231 13.5833 10.6669 14.2396 10.6669 15.0417Z"/>
    </svg>
}, {
    text: "Contact",
    icon: <svg className="w-8 h-8 lg:w-6 lg:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_6_8811)">
            <path d="M2.01 21L23 12L2.01 3L2 10L17 12L2 14L2.01 21Z" fill="white"/>
        </g>
        <defs>
            <clipPath id="clip0_6_8811">
                <rect width="24" height="24" fill="white"/>
            </clipPath>
        </defs>
    </svg>

}
]