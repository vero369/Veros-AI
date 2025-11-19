import { Container } from "../shared/Container";
import { NavItem } from "../shared/NavItem";
import { navItems } from "./Navbar";


export const Footer = () => {
  return (
   <footer className="relative pt-28 rounded-t-3xl bg-box-bg">
     <Container className="pb-8">
       <div className="flex flex-col md:flex-row justify-between items-center">
         <div className="flex items-center gap-3 mb-4 md:mb-0">
           <img src="/assets/ToonMe.jpg" alt="Me" className="w-7 h-7"/>
           <span className="text-lg font-semibold text-heading-1">Vero Ai</span>
         </div>
       
       <ul className="flex gap-6 text-heading-1"> 
         {navItems.map((item, key) => (
           <NavItem href={item.href} text={item.text} key={key} />
         ))}
       </ul>
      </div>
     </Container>
   </footer>
  );
};