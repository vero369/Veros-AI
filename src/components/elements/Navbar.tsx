import { Container } from "../shared/Container";
import ToonMe from "../../assets/ToonMe.jpg";
import { NavItem } from "../shared/NavItem";
import { BtnLink } from "../shared/BtnLink";
import { useThemeStore } from "../../utils/store/ThemeStore";

export const navItems =[
  {href: "#", text: "Home"},
  {href: "#Services", text: "Services"},
  {href: "#about-us", text: "About Us"},
  {href: "#pricing", text: "Pricing"},
]

export const Navbar = () => {
  const { toggleTheme, theme } = useThemeStore();
  return <header className="absolute inset-x-0 top-0 z-50 py-6">
    <Container>
      <nav className="w-full flex justify-between gap-6 relative">
        {/* Logo*/}
        <div className="min-w-max inline-flex relative">
          <a href="/" className="relative flex items-center gap-3">
            <img src={ToonMe} alt="Logo" className="w-10 h-10" />
            <div className="inline-flex text-lg font-semibold text-heading-1 bg-clip-text bg-gradient-to-r from-purple-600   to-gray-600">Vero's <span className="text-transparent bg-clip-text   
              bg-gradient-to-r from-blue-600 to-violet-600 ml-2">AI</span></div>
          </a>
        </div>

        <div className="flex flex-col lg:flex-row w-full lg:justify-between lg:items-center absolute top-full left-0 lg:static lg:top-0 bg-body lg:bg-transparent border-x border-x-border lg:border-x-0 lg:h-auto h-0 overflow-hidden">

          <ul className="border-t border-box-border lg:border-t-0 px-6 lg:px-0 pt-6 lg:pt-0 flex flex-col lg:flex-row gap-y-4 gap-x-3 text-lg text-heading-2 w-full lg:justify-center lg:items-center">
            {navItems.map((item, key) => (
              <NavItem href={item.href} text={item.text} key={key} />
              ))}
          </ul>
          <div className="lg:min-w-max flex items-center sm:w-max pb-6 lg:pb-0 border-b border-box-border lg:border-0 px-6 lg:px-0">
            <BtnLink text="Get Started" href="#cta" className=""/>
          </div>
        </div>

        <div className="min-w-max flex items-center px-3">
          <button onClick={toggleTheme} className="outline-hidden flex relative text-heading-2 rounded-full p-2 lg:p-3 border border-box-border cursor-pointer">

             {theme === "dark" ? (
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M6.083 13a6 6 0 1 1 11.834 0h-2.043a4 4 0 1 0-7.748 0zM2 15h10v2H2zm12 0h8v2h-8zm2 4h4v2h-4zM4 19h10v2H4zm7-18h2v3h-2zM3.515 4.929l1.414-1.414L7.05 5.636L5.636 7.05zM19.07 3.515l1.414 1.414l-2.121 2.121l-1.414-1.414zM23 11v2h-3v-2zM4 11v2H1v-2z"/></svg>
             ) : (
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M6.083 13a6 6 0 1 1 11.834 0zM2 15h10v2H2zm12 0h8v2h-8zm2 4h4v2h-4zM4 19h10v2H4zm7-18h2v3h-2zM3.515 4.929l1.414-1.414L7.05 5.636L5.636 7.05zM19.07 3.515l1.414 1.414l-2.121 2.121l-1.414-1.414zM23 11v2h-3v-2zM4 11v2H1v-2z"/></svg>
             )}

          </button>
        </div>
      </nav>
    </Container>
  </header>
};