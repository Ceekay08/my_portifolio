import {Button} from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="h-full">
<div className="container mx-auto h-full">
    <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
      {/*text */}
      <div className="text-center xl:text-left order-2 xl:order-none">
        <span className="text-xl jetbrainsMono"> Software Developer</span>
        <h3 className="h3 mb-6">
          Hello I'm <br/> <span className="text-accent"> Knowledge Matambura</span>
        </h3>
        <p className="max-w-[500px] mb-9 jetbrainsMono ">
        I am a qualified Software Developer with 2+ years of experience, most recently as a Business Support Analyst. My area of expertise is software development
        </p>
        {/* btn and socials */}
        <div className="flex flex-col text-accent xl:flex-row items-center gap-8">
          <a 
          href="./Matambura_Knowledge _Resume.pdf"download="resume.pdf"
          size="lg"
          className="uppercase flex items-center gap-2 jetbrainsMono">
              <Button >Download CV
              <FiDownload className="text-xl "/>
              </Button>
             
          </a>
          <div className="mb-8 xl:mb-0">
           <Social containerStyles="flex gap-6 " iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"/>
          </div>
        </div>
      </div>
      {/*photo */}
      <div className="order-1 xl:order-none mb-8 xl:mb-0 border-radius: 35%">
        <Photo/>
        </div>
    </div>
</div>
<Stats/>





    </section>
   
  )
}

export default Home;