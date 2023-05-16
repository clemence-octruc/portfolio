import {NextFont} from "next/dist/compiled/@next/font";
import {Project} from "@/pages"
import {useState} from "react";

export function ProjectBox({project, inter}: { project: Project, inter: NextFont }) {
    const [isOpened, setIsOpened] = useState(false)
    const extendedDescList = project.extendedDesc.map((e, i) => <><p
        className={inter.className + " mt-6 lg:w-[40%] w-full"}>{e}</p><img alt="Illustration projet" src={project.assets[i]} className="lg:w-[40%] w-full max-h-[17rem] object-scale-down"/></>)
    return (<div key={project.title}
                 className="shadow-xl rounded-[1.75rem] mt-2 lg:mr-10 bg-white lg:px-16 px-12 py-11 text-gray">
        <a href={project.href} className="hover:underline decoration-2">
            <div className="flex items-center">
                <h2 className="   text-3xl text-black mb-1.5 font-bold">{project.title}</h2>
                <p className="text-gray font-bold ml-5 mt-1">{project.date}</p>
            </div>
            <p className="font-semibold">{project.type}</p>
        </a>
        <p className={inter.className + " mt-6 cursor-pointer"} onClick={() => setIsOpened(!isOpened)}
           dangerouslySetInnerHTML={{__html: project.description + `... <span class='font-bold text-black hover:underline'>Lire ${isOpened? "moins" : "plus"}</span>`}}></p>
        {isOpened && <div className="flex flex-wrap justify-center gap-x-8 gap-y-8 mt-12 items-center">{extendedDescList}</div>}
        <p className={`font-semibold ${isOpened ? "mt-12" : "mt-4"}`}>Stack: {project.stack}</p>
        <p className="">et {project.extendedStack}</p>
    </div>)
}

