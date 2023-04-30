import Image from 'next/image'
import {Inter, Open_Sans} from 'next/font/google'
import {SmoothCorners} from 'react-smooth-corners'

const inter = Inter({subsets: ['latin']})
const open_sans = Open_Sans({subsets: ['latin']})
const hrefs = [{
    text: "Qui suis-je",
    icon: `<svg width="25" height="25" viewBox="0 0 25 25" fill="white" xmlns="http://www.w3.org/2000/svg">
<path d="M12.5002 3.75001C14.1043 3.75001 15.4168 5.06251 15.4168 6.66668C15.4168 8.27084 14.1043 9.58334 12.5002 9.58334C10.896 9.58334 9.5835 8.27084 9.5835 6.66668C9.5835 5.06251 10.896 3.75001 12.5002 3.75001ZM12.5002 18.3333C16.4377 18.3333 20.9585 20.2146 21.2502 21.25H3.75016C4.08558 20.2 8.57725 18.3333 12.5002 18.3333ZM12.5002 0.833344C9.27725 0.833344 6.66683 3.44376 6.66683 6.66668C6.66683 9.88959 9.27725 12.5 12.5002 12.5C15.7231 12.5 18.3335 9.88959 18.3335 6.66668C18.3335 3.44376 15.7231 0.833344 12.5002 0.833344ZM12.5002 15.4167C8.60641 15.4167 0.833496 17.3708 0.833496 21.25V24.1667H24.1668V21.25C24.1668 17.3708 16.3939 15.4167 12.5002 15.4167Z"/>
</svg>

`
}, {
    text: "Compétences",
    icon: `<svg width="25" height="25" viewBox="0 0 33 33" fill="white" xmlns="http://www.w3.org/2000/svg">
<path d="M3.37516 6.29168H0.458496V29.625C0.458496 31.2292 1.771 32.5417 3.37516 32.5417H26.7085V29.625H3.37516V6.29168ZM29.6252 0.458344H9.2085C7.60433 0.458344 6.29183 1.77084 6.29183 3.37501V23.7917C6.29183 25.3958 7.60433 26.7083 9.2085 26.7083H29.6252C31.2293 26.7083 32.5418 25.3958 32.5418 23.7917V3.37501C32.5418 1.77084 31.2293 0.458344 29.6252 0.458344ZM29.6252 23.7917H9.2085V3.37501H29.6252V23.7917Z"/>
</svg>


`

},
    {
        text: "Parcours & projets",
        icon: `<svg width="25" height="25" fill="white" viewBox="0 0 33 33" xmlns="http://www.w3.org/2000/svg">
<path d="M31.7106 14.4437L18.571 1.30415C17.4773 0.210403 15.5523 0.19582 14.4439 1.30415L1.31895 14.4292C0.181445 15.5667 0.181445 17.4042 1.31895 18.5417L14.4439 31.6667C15.0127 32.2354 15.7564 32.5125 16.5002 32.5125C17.2439 32.5125 17.9877 32.2354 18.5564 31.6667L31.6669 18.5562C32.8189 17.4479 32.8335 15.6104 31.7106 14.4437V14.4437ZM16.5148 29.6104L3.38978 16.4854L16.5148 3.3604L29.6398 16.4854L16.5148 29.6104V29.6104ZM10.6669 15.0417V20.875H13.5835V16.5H19.4169V20.1458L24.521 15.0417L19.4169 9.93749V13.5833H12.1252C11.3231 13.5833 10.6669 14.2396 10.6669 15.0417Z"/>
</svg>

`
    }
]
const myselfText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam vulputate ut pharetra sit. Integer eget aliquet nibh praesent tristique magna sit amet purus. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt. Non curabitur gravida arcu ac tortor dignissim convallis aenean et. Lobortis elementum nibh tellus molestie nunc non blandit. Nulla facilisi etiam dignissim diam.`
const myselfText2 = `Consequat ac felis donec et odio pellentesque diam volutpat. Integer fe ugiat scelerisque varius morbi enim. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Fermentum odio eu feugiat pretium nibh ipsum consequat. Sit amet tellus cras adipiscing enim eu. Vestibulum morbi blandit cursus risus at ultrices mi tempus. Nunc consequat interdum varius sit amet. Nisl condimentum id venenatis a.`
const list = hrefs.map(e =>
    <div key={e.text} className='px-20 flex items-center'>
        <div className="mr-3" dangerouslySetInnerHTML={{__html: e.icon}}></div>
        {e.text}</div>
)

// Languages
const languages = ["Javascript", "Python", "Typescript", "HTML5", "Dart", "CSS3"]
const technos = ["JSON, HTTP, WebSocket", "Email, SSH, Responsive", "REST API, implémentation d'APIs", '3rd party sign in',]
const frameworks = [["svelte.png", "Svelte, Sveltekit"], ["flutter.png", "Flutter"], ["nodejs.png", "Nodejs"], ["react.png", "React"]]
const outils = ["vscode", "github", "git", "gcp", "figma", "playconsole", "analytics", "admob", "mongodb", "tailwind", "firebase"]
const languagesList = languages.map(e =>
    <div key={e} className="flex items-center"><img className="mr-4 h-10" src={"icons/" + e + ".png"}/><p>{e}</p></div>
)
const frameworksList = frameworks.map(e =>
    <div key={e[0]} className="flex items items-center"><img className="mr-4 h-12" src={"icons/" + e[0]}/><p>{e[1]}</p></div>
)
const outilsList = outils.map((e, i) => <img key={e} src={`icons/${e}.png`} className="object-scale-down h-10 max-w-[12rem]"/>)
const technosList = technos.map(e=> <p key={e} className="">{e}</p>)
export default function Home() {
    return (<div className={inter.className}>
        <nav className="fixed bg-black px-10 w-full text-white flex justify-center text-sm py-4">
            {list}
        </nav>
        <main className="pt-28 px-60 mb-20">
            <div className="flex justify-center space-x-36">
                <div className={open_sans.className}>
                    <h1 className="text-[3.4rem] leading-[1.1] font-extrabold mt-20">Clement <br/> Octruc</h1>
                    <h3 className="mt-8 text-gray text-3xl font-bold">Développeur <span
                        className="text-primary">web</span> <br/> et <span className="text-primary">mobile</span></h3>
                    <p className="text-gray mt-12 max-w-lg">{myselfText}</p>
                    <p className="text-gray mt-4 max-w-lg">{myselfText2}</p>
                </div>
                <img src="screens.png" className="h-1/2 w-auto"/>
            </div>
            <div className={open_sans.className+" mx-20"}>
                <h2 className="text-3xl mt-20 font-bold">Compétences</h2>
                <div className="flex items-start flex-wrap gap-x-20">

                    <div
                        className="bg-white shadow-2xl pt-10 pb-11 px-16 mt-9 rounded-3xl">
                        <h3 className="font-bold text-2xl">Langages :</h3>
                        <div className="grid-cols-2 px-3 grid-rows-3 grid gap-x-16 gap-y-6 text-lg mt-8 text-gray font-semibold">{languagesList}</div>
                    </div>
                    <div
                        className="bg-white shadow-2xl py-10 px-16 mt-9 w-1/4 rounded-3xl">
                        <h3 className="font-bold text-2xl">Technologies et pratiques :</h3>
                        <div className="flex flex-col mt-7 gap-y-4 font-semibold text-gray">{technosList}</div>
                    </div>
                    <div
                        className="bg-white shadow-2xl py-8 px-12 mt-9 rounded-3xl">
                        <h3 className="font-bold text-2xl">Frameworks :</h3>
                        <div className="grid-cols-1 grid-rows-3 grid gap-6 mt-4 text-lg font-semibold text-gray">{frameworksList}</div>
                    </div>
                    <div
                        className="bg-white  shadow-2xl pt-8 pb-12 px-12 mt-9  rounded-3xl w-1/2">
                        <h3 className="font-bold text-2xl">Outils :</h3>
                        <div className="flex-wrap flex gap-x-6 gap-y-6 mt-4">{outilsList}</div>
                    </div>

                </div>
            </div>
        </main>
    </div>)
};