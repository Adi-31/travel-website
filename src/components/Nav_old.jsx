// import { logo } from "../assets";

// import { navLinks } from "../constants";
// import { CgProfile } from "react-icons/cg";

// const Navbar = () => {
//   const style = { color: "white", fontSize: "38px" };

//   // const [isScrolled, setIsScrolled] = useState(false);

//   // useEffect(() => {
//   //   const handleScroll = () => {
//   //     if (window.scrollY > 0) {
//   //       setIsScrolled(true);
//   //     } else {
//   //       setIsScrolled(false);
//   //     }
//   //   };

//   //   window.addEventListener("scroll", handleScroll);

//   //   return () => {
//   //     window.removeEventListener("scroll", handleScroll);
//   //   };
//   // }, []);

//   return (
//     <div className={`${isScrolled && "bg-[#141414]"}`}>
//       <div
//         className={`px-2 w-full flex fixed py-6 justify-between items-center navbar`}
//       >
//         <img src={logo} alt="travelgoo" className="w-[76px] h-[60px] ml-2" />

        // <ul className="list-none sm:flex hidden justify-center items-center flex-1 w-32">
        //   {navLinks.map((nav, index) => (
        //     <li
        //       key={nav.id}
        //       className={`font-poppins font-normal cursor-pointer text-[16px] ${
        //         index === navLinks.length - 1 ? "mr-0" : "mr-10"
        //       } text-white`}
        //     >
        //       <a href={`#${nav.id}`}>{nav.title}</a>
        //     </li>
        //   ))}
        // </ul>

//         {/* <button className="px-5 p-2 bg-blue-300 rounded-full "> */}
//         <div className="p-2 flex justify-center items-center cursor-pointer">
//           <CgProfile style={style} />
//         </div>
//         {/* </button> */}
//       </div>
//       //{" "}
//     </div>
//   );
// };

// export default Navbar;
