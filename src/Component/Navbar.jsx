import { NavLink } from "react-router-dom";

const Navbar = () => {

const navLink=({isActive})=>{

return{
color:isActive?"#23BE0A":""

}}

    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><NavLink style={navLink} to="/">Home</NavLink></li>
        <li><NavLink style={navLink} to="/listedBooks">Listed Books</NavLink> </li>
        <li><NavLink style={navLink} to="/pagesToRead">Page To Read</NavLink> </li>
      </ul>
    </div>
    <NavLink   to="/" className="btn btn-ghost workFair text-2xl font-bold">Book Hut</NavLink>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className=" menu-horizontal gap-9 px-1 workFair opacity-90  bg-transparent">
        <li className="border border-transparent font-normal hover:border-[#23BE0A] p-2 overflow-hidden mx-3 rounded-md hover:font-semibold hover:text-[#23BE0A]"><NavLink style={navLink} to="/">Home</NavLink></li>

        <li className="border border-transparent font-normal hover:border-[#23BE0A] p-2 overflow-hidden mx-3 rounded-md hover:font-semibold hover:text-[#23BE0A]"><NavLink style={navLink} to="/listedBooks">Listed Books</NavLink> </li>
        <li className="border border-transparent font-normal hover:border-[#23BE0A] p-2 overflow-hidden mx-3 rounded-md hover:font-semibold hover:text-[#23BE0A]"><NavLink style={navLink} to="/pagesToRead">Page To Read</NavLink></li>
    </ul>
  </div>
  <div className="navbar-end ">
    <div className="hidden md:block space-x-5">
    <a className="btn bg-[#23BE0A] text-white hover:text-black hover:border-[#23BE0A] hover:bg-transparent">Sign In</a>
    <a className="btn border-[#23BE0A]">Sign Up</a>
    </div>
  </div>
</div>

        </div>
    );
};

export default Navbar;