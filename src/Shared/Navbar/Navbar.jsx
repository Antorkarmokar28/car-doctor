import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo/logo.svg"
import { HiOutlineShoppingBag } from "react-icons/hi";
import { CiMenuFries, CiSearch } from "react-icons/ci";
import { useState } from "react";
import { MdClose } from "react-icons/md";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <nav className="w-full bg-white font-Inter fixed top-0 left-0">
            <div className="container px-4 mx-auto flex justify-between items-center">
                <div>
                    <Link to="/">
                        <img className="w-16 h-16" src={logo} alt={`logo`} />
                    </Link>
                </div>
                <ul className={`p-5 md:p-0 md:flex md:items-center gap-6 absolute md:static top-16 left-0 w-full md:w-auto bg-blue-50 transition-all duration-500 ease-in ${isOpen ? 'block' : 'hidden'}`}>
                    <li className="mb-6 md:mb-0">
                        <NavLink className="font-semibold hover:text-[#FF3811] duration-100 hover:ease-in" to="/">
                            Home
                        </NavLink>
                    </li>
                    <li className="mb-6 md:mb-0">
                        <NavLink className="font-semibold hover:text-[#FF3811] duration-100 hover:ease-in" to="/about">
                            About
                        </NavLink>
                    </li>
                    <li className="mb-6 md:mb-0">
                        <NavLink className="font-semibold hover:text-[#FF3811] duration-100 hover:ease-in" to="/services">
                            Services
                        </NavLink>
                    </li>
                    <li className="mb-6 md:mb-0">
                        <NavLink className="font-semibold hover:text-[#FF3811] duration-100 hover:ease-in" to="/blog">
                            Blog
                        </NavLink>
                    </li>
                    <li className="mb-6 md:mb-0">
                        <NavLink className="font-semibold hover:text-[#FF3811] duration-100 hover:ease-in" to="/contact">
                            Contact
                        </NavLink>
                    </li>
                </ul>
                <div className="flex items-center gap-2 md:gap-6">
                    <div className="flex gap-2 md:gap-4">
                        <HiOutlineShoppingBag className="hover:text-[#FF3811] hover:ease-in h-6 w-6" />
                        <CiSearch className="hover:text-[#FF3811] hover:ease-in w-6 h-6" />
                    </div>
                    <button className="font-Inter text-sm font-semibold px-2 md:px-4 py-2 rounded border-[1px] text-[#FF3811] border-[#FF3811] hover:bg-primary-bg hover:text-white duration-500 hover:ease-in-out">Appointment</button>
                </div>
                <button onClick={() => setIsOpen(!isOpen)} className="block md:hidden">
                    {
                        isOpen ? <MdClose className="w-7 h-7 font-semibold" /> : <CiMenuFries className="w-7 h-7 font-semibold" />
                    }
                </button>
            </div>
        </nav>
    );
};
export default Navbar;