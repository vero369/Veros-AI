import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";
import { Button } from "../shared/Button";
import email from "../../assets/email.png";
import ToonMe from "../../assets/ToonMe.jpg";
import { Numbers } from "./Numbers";


export const Hero = () => {
  return (
  <section className="relative pt-32 lg:pt-36">
    {" "}
    <Container className="flex flex-col lg:flex-row gap-10 lg:gap-12">
      <div className="absolute w-full lg:w-1/2 inset-y-0 lg:right-0"> 
        <span className="absolute -left-6 md:left-4 top-24 lg:top-28 w-24 h-24 rotate-90 skew-x-12 rounded-3xl bg-gradient-to-r from-blue-600 to-violet-600 blur-xl opacity-60 lg:opacity-95 lg:block-hidden">
        </span>
        <span className="absolute right-4 bottom-12 w-24 h-24 rounded-3xl bg-primary blur-xl opacity-80"></span>
      </div>

      <div className="relative flex flex-col items-center lg:text-left lg:py-8 lg:items-start lg:max-w-none max-w-3xl mx-auto lg:mx-0 lg:flex-1 lg:w-1/2">
        <h1 className="text-heading-1 text-3xl sm:text-4xl md:text-5xl font-bold">
          Empower Your Business Today{" "}
          <span className="text-transparent bg-clip-text   
            bg-gradient-to-r from-blue-600 to-violet-600 ml-2">with Vero's AI{" "}
          </span>
        </h1>

        <Paragraph className="mt-8">
          ⭐ Hi, I'm Veronica — <span className="text-transparent bg-clip-text   
            bg-gradient-to-r from-blue-600 to-violet-600 ml-2">a Frontend Developer specializing in building fast, responsive, and scalable user interfaces. I focus on clean architecture, performance, and delivering seamless user experiences.</span>
        </Paragraph>
        <div className="mt-10 w-full flex max-w-md mx-auto lg:mx-0">
          <div className="flex sm:flex-row flex-col gap-5 w-full">
            <form action="#" className="py-1 pl-6 w-full pr-1 flex gap-3 item-center text-heading-3 shadow-lg shadow-box-shadow border border-box-border bg-box-bg rounded-full ease-linear focus-within:bg-body focus-within:border-primary">
              <span className="min-w-max pr-2 border-r boder-box-border">
                <img src={email} alt="mail" className="w-6 h-6 position-center" />
              </span>
              <input type="email" placeholder="michealbeauty@gmail.com"
              className="w-full py-3 outline-none bg-transparent"
               />
               <Button className="min-w-max text-white">
                <span className=" relative z-[5]">Get Started
                </span>
               </Button>
            </form>
          </div>
        </div>
      </div>

      <div className="relative flex flex-1 lg:w-1/2 lg:h-auto mx-auto max-w-3xl lg:mx-0 lg:max-w-none">
      <img
       src={ToonMe}
       alt="hero"
      width={2350}
      height={2359}
      className="rounded-3xl object-cover max-h-96 lg:max-h-none lg:absolute lg:w-full lg:h-full"
      />
      </div>


    </Container>
    <Numbers />
  </section>
  );
};