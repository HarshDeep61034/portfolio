import { GithubIcon, LinkedinIcon, TwitterIcon} from "lucide-react";
import { Separator } from "./ui/separator";
import Link from "next/link";
const socialLinks = {
    twitter: "https://x.com/harshdeep61034",
    github: "https://github.com/harshdeep61034",
    linkedin: "https://www.linkedin.com/in/harsh-deep-bb564b262/"
}
export default function(){
    return (
        <div className="w-full my-10">
            <h1 className="dark:text-zinc-300 text-zinc-800  font-semibold my-6">FIND ME ON</h1>
            <Link href={socialLinks.twitter}>
            <div className="w-full hover:text-zinc-500 cursor-pointer transition-all duration-200 flex justify-between">
                <div>Twitter</div>
                <div><TwitterIcon /></div>
            </div>
            </Link>
            <Separator className="my-4" />
            <Link href={socialLinks.github}>
            <div className="w-full hover:text-zinc-500 cursor-pointer transition-all duration-200 flex justify-between">
                <div>Github</div>
                <div><GithubIcon /></div>
            </div>
            </Link>
            <Separator className="my-4" />
            <Link href={socialLinks.linkedin}>
            <div className="w-full hover:text-zinc-500 cursor-pointer transition-all duration-200 flex justify-between">
                <div>LinkedIn</div>
                <div><LinkedinIcon /></div>
            </div>
            </Link>
        </div>
    );
}