import Skills from "@/components/skills";
import Socials from "@/components/socials";
import Link from "next/link"
import Image from "next/image";
import { Heart } from "lucide-react";

export default function Home() {
  return (
    <div>
      <Image className="rounded-[50%] outline-none m-0 p-0 hover:outline-4 outline-slate-100 dark:outline-slate-950 cursor-pointer transition-all duration-300" src={"/profile.jpg"} width={70} height={70} alt="profile-img" />
      <h1 className="text-2xl my-4 font-bold">Hello!</h1>
      <p className="about text-balance dark:text-zinc-300">
        I'm Harsh, I am CS-undergrad, freelancer, fullstack dev (kinda a overstatement) from Chandigarh, India. I specialize in building web applications and sites using Javascript, React, Nextjs, node.
        trying to upskill everyday & build cool shit &#128293;.
      </p>
      <Socials />
      <Skills />
      <div className="text-zinc-400 my-4">
      <p className="flex text-center justify-center  tracking-widest">Built with <Heart className="mx-2" /> by  <Link href="https://github.com/harshdeep61034">@harshdeep61034</Link></p>
      </div>
    </div>
  );
}
