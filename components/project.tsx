import Link from "next/link"

export default function () {
    const data = {
        name: "Twenty",
        github: "https://github.com/harshdeep61034",
        description: "The #1 Open-Source CRM Tool. Actively contributing to the issues raised in GH.",
        stack: ["Next.js", "PostgreSQL", "Monorepo"]
    }
    return (<div className="w-[250px] m-4 h-[230px] p-4 bg-zinc-900 rounded-lg">
        <Link href={data.github}><h1 className="dark:text-white hover:underline cursor-pointer underline-offset-4  text-xl font-semibold my-3">{data.name}</h1></Link>
        <p className="dark:text-zinc-300 my-4">{data.description}</p>
        <p className="flex flex-wrap my-4">{data.stack.map((tech) => (<p className="mr-2 text-sm font-bold">{tech}</p>))}</p>
    </div>)
}