import React,{useState , useEffect} from "react";
import { Link } from "react-router-dom";
import { SiAlchemy } from "react-icons/si";
import { FaSortDown } from "react-icons/fa";
import "../Navbar/Navbar.css";

function Navbar() {

  const [dropdownOpen, setDropdownOpen] = useState(false);

  let timer;

  const handleMouseEnter = () => {
    clearTimeout(timer);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timer = setTimeout(() => setDropdownOpen(false), 200); // 200ms delay before hiding
  };

  useEffect(() => {
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
    <nav className="shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 ">
        <ul className="navbar-links flex gap-11 items-center">
          <li className="navbar-logo text-3xl text-[#00EACE]">
            <Link to="/">
              <SiAlchemy />
            </Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className="navbar-dropdown flex"
             onMouseEnter={handleMouseEnter}
             onMouseLeave={handleMouseLeave}
          >
            <div className="flex">
            <Link to="/about">Courses</Link>
            <span><FaSortDown /></span>
            </div>
            {dropdownOpen && (
           <div className="dropdown-menu">
           <ul className="dropdown-list">
             <li><Link to="/category/development">Development</Link></li>
             <li><Link to="/category/business">Business</Link></li>
             <li><Link to="/category/finance">Finance & Accounting</Link></li>
             <li><Link to="/category/it-software">IT & Software</Link></li>
             <li><Link to="/category/productivity">Office Productivity</Link></li>
             <li><Link to="/category/personal-development">Personal Development</Link></li>
             <li><Link to="/category/design">Design</Link></li>
             <li><Link to="/category/marketing">Marketing</Link></li>
             <li><Link to="/category/lifestyle">Lifestyle</Link></li>
             <li><Link to="/category/photography-video">Photography & Video</Link></li>
             <li><Link to="/category/health-fitness">Health & Fitness</Link></li>
             <li><Link to="/category/music">Music</Link></li>
             <li><Link to="/category/teaching-academics">Teaching & Academics</Link></li>
           </ul>
         </div>
          )}
          </li>
          <li>
            <Link to="/contact">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <div className="Login flex gap-5">
          <button className="px-3 py-1">Signup</button>
          <button className="bg-[#00EACE] px-3 py-1 rounded-md">Login</button>
          {/* <Link to="/profile">
            <img
              className="h-8 rounded-full"
              src="https://th.bing.com/th/id/OIP.-ZJQJ7Fk0WGhlxrD_SqkQQHaHa?rs=1&pid=ImgDetMain"
              alt=""
            />
          </Link> */}
        </div>
      </div>
    </nav>
    </>
  );
}

export default Navbar;
