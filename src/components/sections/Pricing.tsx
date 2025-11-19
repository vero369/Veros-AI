import { pricingPlans } from "../../utils/store/pricing-plan";
import { Button } from "../shared/Button";
import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";
import { Title } from "../shared/Title";


export const Pricing = () => {
  return (
  <section id="pricing" className="py-5">
    {" "}
    <Container className="text-center">
      <Title>Pricing</Title>
      <Paragraph className="mt-4">Choose the plan that best fits your needs.</Paragraph>
    </Container>
    <Container className="mt-12">

    <div className="grid grid-cols-1 md:grid-cols gap-8">
      {pricingPlans.map((plan, key) => (
        <div key={key} className=/*"max-w-md mx-auto mt-8 p-6 border border-box-border rounded-3xl bg-box-bg shadow-lg shadow-box-shadow"*/
           "relative group h-full">

            <div className="bg-gradient-to-r from-purple-600 
            to-violet-300 p-1 rounded-3xl h-full">
              <div className="bg-box-bg border-box-border rounded-3xl shadow-lg shadow-box-shadow h-full p-8 flex flex-col relative">

                {plan.isRecommended &&(
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full bg-gradient-to-r from-purple-600 
                   to-violet-300 pointer">
                    Recommended
                  </div>

                  )}
                    <h3 className="text-2xl font-semibold text-heading-1">
                      {" "}
                      {plan.title}</h3>

                    <p className="mt-4text-4xl font-bold text-heading-1">
                      {" "}
                      {plan.price}</p>

                      <ul className="mt-6 flex-1 space-y-3 text-left text-heading-3">
                        {plan.feature.map((feature, keyFeatures) => (
                          <li key={keyFeatures} className="flex items-center gap-2">
                            <span className="bg-purple-500 text-primary">✓</span>
                            <span>{feature}</span>
                          </li>
                        ))} 
                      </ul>
                      <div className="mt-8">
                        <Button className="w-full transform transition-transform duration-300 hover:scale-105 text-blue-500 ">Choose Plan</Button>
                      </div>

                  {plan.bestValue && (
                    <div className="flex flex-col items-center justify-center 
                    bg-gradient-to-b from-purple-600 to-violet-300 
                    rounded-2xl w-14 h-17 px-1 py-2 pt-5 mt-5">
                      <span className="text-black font-bold   leading-tight">Best</span>
                      <span className="text-white bg-violet-400/60 font-bold px-1 rounded">
                         Value
                      </span>
                     </div>

                  )}

              </div>
            </div>

          {/*<h2 className="text-2xl font-semibold mb-4">{plan.title}</h2>
          <p className="text-xl font-bold mb-4">{plan.price}</p>
          <ul className="mb-4">
            {plan.features.map((feature, index) => (
              <li key={index} className="mb-2">{feature}</li>
            ))}
          </ul>
          {plan.bestValue && <span className="inline-block px-3 py-1 text-sm font-semibold text-white bg-green-500 rounded-full">Best Value</span>}*/}
        </div>
      ))}
    </div>
    </Container>
  </section>
  );
};