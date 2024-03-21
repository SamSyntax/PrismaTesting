import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import hero from "../public/images/hero.png";

export default function Home() {
  return (
    <main className="w-full flex gap-24 flex-col items-center justify-center py-24 mt-2">
      <div className="flex flex-col justify-center max-w-[45vw] items-center gap-6">
        <h1 className="font-bold text-6xl overflow-hidden text-center">
          Track issues and bugs in your company
        </h1>
        <div className="flex">
          <p className="text-muted-foreground text-2xl text-wrap text-center ">
            Easy to use web service to track issues submitted
            <br /> by users of your applications from the entire world.
          </p>
        </div>
        <div className="flex gap-2 w-full items-center justify-center">
          <Link href="/issues/new">
            <Button className="flex-1 max-w-[125px] rounded-[5px] text-primary font-light bg-background hover:bg-white ">
              Get Started
            </Button>
          </Link>
          <Link href="https://github.com/SamSyntax">
            <Button
              variant={"outline"}
              className="flex-1 flex gap-2 max-w-[125px] bg-transparent border-accent-foreground hover:bg-accent-foreground text-primary-foreground hover:text-primary-foreground rounded-sm"
            >
              <FaGithub />
              GitHub
            </Button>
          </Link>
        </div>
      </div>
      <Image src={hero} alt="hero image" width={1300} />
    </main>
  );
}
