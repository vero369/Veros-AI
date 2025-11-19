import { Container } from "../shared/Container";
import { Title } from "../shared/Title";


{/*const assets = [
  "link",
  "gbt",
  "github",
  "VITE",
  "VScode",
];*/}

export const Brands = () =>{
  return (
    <section>
      {" "}
      <Container className="space-y-8">
        <div className="text-center max-w-3xl mx-auto">
          <Title> Trusted by Industry leader's</Title>
        </div>
        {/*<div className="flex justify-center flex-wrap gap-4">
          {assets.map((assets, key) => (
            <div
              key={key} className="p-4 sm:p-5 rounded-xl bg-body box-border border group">
              <img 
                src={`/assets/${assets}.png`} 
                alt={assets} 
                width="100" 
                height="60" 
                className="h-7 sm:h-10 w-auto ease-linear duration-300 grayscale group-hover:!grayscale-0 group-hover:scale-105"
                />
            </div>
          ))}
        </div>*/}
      </Container>
    </section>
  );
}