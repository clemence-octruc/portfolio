import {Inter, Open_Sans} from 'next/font/google'
import {Line} from "@/components/line"
import {ProjectBox} from "@/components/projectBox";
import {Fragment, useState} from "react";
import Head from "next/head";
import {frameworks, hrefs, languages, myselfText, myselfText2, outils, projects, technos} from "@/components/consts";
import {animated, useSpring} from '@react-spring/web'
import {Waypoint} from "react-waypoint";
import FadeIn from "@/components/animatedComponents";

const inter = Inter({subsets: ['latin']})
const open_sans = Open_Sans({subsets: ['latin']})

const list = hrefs.map(e =>
    <a key={e.text} className='lg:px-20 px-4 flex items-center' href={`#${e.text}`}>
        <div className="mr-2 lg:mr-3">{e.icon}</div>
        <div className="lg:block hidden">{e.text}</div>
    </a>
)


const languagesList = languages.map(e =>
    <div key={e} className="flex items-center"><img className="mr-4 h-9" alt={e}
                                                    src={"icons/" + e.toLowerCase() + ".png"}/><p>{e}</p></div>
)
const frameworksList = frameworks.map(e =>
    <div key={e[0]} className="flex items items-center"><img className="mr-4 h-10" src={"icons/" + e[0]} alt={e[0]}/>
        <p>{e[1]}</p>
    </div>
)
const outilsList = outils.map((e) => <img alt={e} key={e} src={`icons/${e}.png`}
                                          className="object-scale-down h-9 max-w-[10rem]"/>)
const technosList = technos.map(e => <p key={e} className="">{e}</p>)

const projectsList = projects.map((e, i) => <Fragment key={e.title}>
    <ProjectBox project={e} inter={inter}></ProjectBox>
    {i < projects.length - 1 ?
        <FadeIn speedFactor={2} direction={"top"}><div className="flex flex-col items-center w-min ml-6 my-1"><Line></Line><Line></Line><p
            className="font-bold my-1.5 text-gray">2022</p> <Line></Line><Line></Line></div></FadeIn> : ""}</Fragment>)

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

    const [inView, setInview] = useState(false);
    const springs = useSpring({
        from: {x: -100, opacity: 0},
        to: {
            x: !inView ? -100 : 0,
            opacity: !inView ? 0 : 1,
        },
    })


    return (<>
        <Head>
            <title>Clémence Octruc - CV/portfolio Développeuse</title>
            <meta name="description"
                  content="Mon CV/portfolio retraçant mes expériences, compétences et projets en développement informatique."/>
            <link rel="icon" href="/favicon.png"/>
        </Head>
        <div className={inter.className}>

            <nav
                className="fixed z-10 bg-black px-10 w-full text-white flex lg:justify-center justify-around text-sm py-4">
                {list}
            </nav>
            <main className="pt-28 px-8 lg:px-60 mb-20" id="Qui suis-je">
                <div className="lg:flex block justify-center lg:ml-4 space-x-12 lg:space-x-28 lg:mt-10">
                    <div className={open_sans.className} >
                        <div className="flex items-center lg:mt-10 mt-5 gap-x-6">
                            <div>
                                <h1 className="lg:text-[3.4rem] text-[2.5rem] leading-[1.1] font-extrabold ">Clémence <br/> Octruc
                                </h1>
                                <h2 className="mt-6 lg:mt-8 text-gray text-2xl font-bold">Étudiante ingénieure à <span
                                    className="text-primary">CentraleSupélec, </span>développeuse <span
                                    className="text-primary">web</span> et <span
                                    className="text-primary">mobile</span>, </h2></div>
                            <div className="lg:hidden"><img alt="" src="screens.png" className="w-auto"/></div>
                        </div>

                        <p className="text-gray mt-12 max-w-lg mx-2 lg:mx-0">{myselfText}</p>
                        <p className="text-gray mt-4 max-w-lg mx-2 lg:mx-0">{myselfText2}</p>
                    </div>
                    <FadeIn direction={"right"} classes={"h-2/3 hidden lg:block w-2/3"}><img src="screens.png" alt="" className=""/></FadeIn>
                </div>
                <div className={open_sans.className + " mx-2 lg:mx-20"} id="Compétences">
                    <h2 className="text-3xl pt-36 font-bold">Compétences</h2>
                    <div className="flex items-start flex-wrap gap-x-10 lg:gap-x-20">

                        <FadeIn direction={"left"}
                            classes={"bg-white shadow-xl flex-grow lg:flex-grow-0 pt-10 pb-11 px-10 lg:px-12 mt-9 rounded-[1.75rem]"}>
                            <h3 className="font-bold text-xl">Langages :</h3>
                            <div
                                className="grid-cols-2 px-3 grid-rows-2 grid gap-x-16 gap-y-6 mt-8 text-gray font-semibold">{languagesList}</div>
                        </FadeIn>

                        <FadeIn direction={"right"}
                            classes="bg-white shadow-xl pt-10 pb-11 px-10 flex-grow lg:flex-grow-0 lg:px-12 mt-9 lg:w-1/3 rounded-[1.75rem]">
                            <h3 className="font-bold text-xl">Technologies et pratiques :</h3>
                            <div className="flex flex-col px-3 mt-7 gap-y-4 font-semibold text-gray">{technosList}</div>
                        </FadeIn>
                        <FadeIn direction={"bottom"}
                            classes={"bg-white shadow-xl pt-10 pb-11 flex-grow lg:flex-grow-0 px-10 lg:px-12 mt-9 lg:w-[30%] rounded-[1.75rem]"}>
                            <h3 className="font-bold text-xl">Frameworks :</h3>
                            <div
                                className="grid-cols-1 grid-rows-3 px-3 grid gap-6 flex-grow lg:flex-grow-0 mt-6 font-semibold text-gray">{frameworksList}</div>
                        </FadeIn>
                        <FadeIn direction={"bottom"}
                            classes="bg-white  shadow-xl pt-10 pb-11 px-10 lg:px-12 mt-9  rounded-[1.75rem] lg:w-[40%]">
                            <h3 className="font-bold text-xl">Outils :</h3>
                            <div className="flex-wrap flex px-3 gap-x-6 gap-y-6 mt-4">{outilsList}</div>
                        </FadeIn>

                    </div>
                </div>
                <div className={open_sans.className + " mx-2 lg:mx-20"} id="Parcours & projets">
                    <h2 className="text-3xl pt-36 font-bold">Projets</h2>
                    <div className="text-lg ml-5 flex font-bold  text-gray mt-8">
                       <FadeIn speedFactor={2} direction={"top"} classes={"flex items-center flex-col"}>
                            <p className="mb-1.5">2018</p>
                            <Line></Line>
                            <Line></Line>
                            <Line></Line>
                            <p className="my-1.5">2020</p>
                            <Line></Line>
                            <Line></Line></FadeIn>
                        <p className="text-xl lg:mt-12 mt-4 font-bold ml-16">Divers projets informatiques (arduino, bots
                            discord,
                            ect...)</p>
                    </div>

                    <div>{projectsList}</div>
                </div>
                <div className="lg:flex justify-evenly lg:pt-28 pt-12 lg:mx-24 lg:gap-x-10" style={open_sans.style}
                     id="Contact">
                    <div className="mt-24 mx-5 lg:mx-0 lg:w-3/5">
                        <h2 className="text-[1.75rem] lg:text-3xl font-bold">Travaillons ensemble !</h2>

                        <p className="font-bold mt-8">Développeuse back-end/front-end/mobile</p>

                        <p className="font-bold  mt-8">Email:<span
                            className="text-gray text-sm ml-2">clemence.octruc@gmail.com</span></p>
                        <p className="font-bold ">Téléphone:<span
                            className="text-gray text-sm ml-2">07 83 55 99 86</span>
                        </p>
                    </div>
                    <div className="shadow-xl rounded-[1.75rem] lg:mr-10 bg-white px-16 py-11 mt-10 lg:mt-0 lg:w-2/5">
                        <label htmlFor="nom" className="text-lg font-bold">Nom:</label>
                        <input id="nom" className="w-full mb-4 mt-1.5" value={nom}
                               onChange={e => setNom(e.target.value)}/>
                        <label htmlFor="email" className="text-lg font-bold mb-2">Email:</label>
                        <input id="email" type="email" className="w-full mb-4 mt-1.5" value={email}
                               onChange={e => setEmail(e.target.value)}/>
                        <label htmlFor="message" className="text-lg font-bold ">Message:</label>
                        <textarea id="message" className="h-36 w-full mt-1.5" value={message}
                                  onChange={e => setMessage(e.target.value)}/>
                        <div className="flex justify-center items-center flex-col">
                            <input type="button" onClick={sendMessage} value="Envoyer"
                                   className="cursor-pointer mt-8 bg-black text-background font-bold px-9 mb-2 py-3"/>
                            {sendStatus &&
                                <p className={sendStatus === "success" ? "text-green-600" : "text-red-600"}>{sendStatus === "success" ? "Message envoyé !" : "Erreur dans l'envoi du message."}</p>}
                        </div>

                    </div>
                </div>
            </main>
        </div>
    </>)
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