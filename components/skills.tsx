
import { Separator } from "./ui/separator";
import Link from "next/link";
const skills = [
    "Recoil",
    "Serverless",
    "CloudFront",
    "TypeScript",
    "Cloudflare",
    "hono",
    "ReactNative",
    "Socket.io",
    "WebSocket",
    "Nginx",
    "ApolloGraphQL",
    "GraphQL",
    "PrismaORM",
    "PostgreSQL",
    "SQL",
    "YAML",
    "Ansible",
    "Terraform",
    "Linux",
    "AWS",
    "C Lang",
    "Java",
    "Networking",
    "Docker",
    "Postman",
    "API",
    "GitHub",
    "JSON",
    "Next.js",
    "Git",
    "Firebase",
    "Node.js",
    "Express.js",
    "React.js",
    "JavaScript",
    "Python",
    "Tailwind CSS",
    "CSS",
    "HTML5"
];

export default function () {
    return (
        <div className="w-full my-10">
            <h1 className="dark:text-zinc-300 text-zinc-800  font-semibold my-6">SKILLS</h1>
            <div className="flex flex-wrap justify-between">
                {skills.map((skill) => (
                        <div className="md:w-1/4 w-1/3 truncate hover:scale-110 px-4 py-2 rounded-lg m-1 border-[1px] border-white hover:text-zinc-300 cursor-pointer transition-all duration-200 flex justify-between">
                            {skill}
                        </div>
                ))}
            </div>
        </div>
    );
}