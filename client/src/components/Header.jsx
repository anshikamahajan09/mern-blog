import { Button, Navbar, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
import {AiOutlineSearch} from 'react-icons/ai'
import { FaMoon } from 'react-icons/fa' 
import { useLocation } from "react-router-dom";

export default function Header() {
    const path=useLocation().pathname;
  return (
    <Navbar className="border-b-2">
        <Link to="/" className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white">
            <span className="px-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">Your</span>
            Blog
        </Link>
        <form>
            <TextInput 
                type="text"
                placeholder="Search..." 
                rightIcon={AiOutlineSearch}
                className="hidden lg:inline"
            />
        </form>
        <Button className="w-12 h-10 lg:hidden" color="gray" pill>
            <AiOutlineSearch/>
        </Button>
        <div className="flex gap-2 md:order-2">
            <Button className="w-12 h-10 hidden sm:inline" color="gray" pill>
                <FaMoon />
            </Button>
            <Link to="/sign-in">
                <Button gradientDuoTone='purpleToBlue' >
                    Sign In
                </Button>
            </Link>
            <Navbar.Toggle/>
        </div>
        <Navbar.Collapse>
            
                <Link to="/" className={path==='/'? "bg-cyan-700 text-white dark:text-white md:bg-transparent md:text-cyan-700 block py-2 pl-3 pr-4 md:p-0":"block py-2 pl-3 pr-4 md:p-0"}>
                    Home
                </Link>
            
            
                <Link to="/about" className={path==='/about'? "bg-cyan-700 text-white dark:text-white md:bg-transparent md:text-cyan-700 block py-2 pl-3 pr-4 md:p-0":"block py-2 pl-3 pr-4 md:p-0"}>
                    About
                </Link>
            
            
                <Link to="/projects" className={path==='/projects'? "bg-cyan-700 text-white dark:text-white md:bg-transparent md:text-cyan-700 block py-2 pl-3 pr-4 md:p-0":"block py-2 pl-3 pr-4 md:p-0"}>
                    Projects
                </Link>
            
        </Navbar.Collapse>
        
    </Navbar>
  )
}
