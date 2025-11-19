import { Button } from "../shared/Button";
import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";

export const CTA = () => {
  return(
    <section className="pb-20 relative">
      {" "}
      <Container>
        <div className="relative rounded-2xl overflow-hidden">
          <div className="relative z-10 mx-auto text-center max-w-xl md:max-w-2xl py-8 md:py-10 md:px-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xlnfont-bold text-headng-1">
              {" "}
              Quick Start Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600"> AI Journey with Vero's AI </span>
              Today! {" "}
            </h1>
            <Paragraph className="pt-10">
              {" "}
              Experience <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">the future of AI with Vero's AI. </span> Our cutting-edge platform offers seamless integration, user-friendly tools, and unparalleled support to help you harness the power of artificial intelligence. Whether you're a developer, business owner, or enthusiast, <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Vero's AI is your gateway to innovation. </span>Join us today and transform your ideas into reality!
            </Paragraph>
            <div className="mx-auto max-w-md sm:max-w-xl pt-10 dark:text-white">
              <Button>Get Started</Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}