import { services } from "../../utils/store/services-data";
import { Service } from "../cards/Service";
import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";
import { Title } from "../shared/Title";


export const Services = () => {
  return (
    <section id="Services">
      {" "}
     <Container className="space-y-10 md:space-y-12">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <Title> Vero's AI</Title>
        <Paragraph>
          Unlock the potential of advanced AI solutions with Vero's AI. Our cutting-edge technology is designed to revolutionize your business operations, enhance productivity, and drive innovation. Experience seamless integration, unparalleled performance, and transformative results with our state-of-the-art AI services. Our services include:
        </Paragraph>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {services.map((service, key) =>( 
          <Service 
          key={key}
          title={service.title} 
          description={service.description} 
          icon={service.icon} 
          />
        ))}
        
      </div>
     </Container>
    </section>
  );
}