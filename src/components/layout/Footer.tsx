import { BsFacebook, BsLinkedin, BsTwitterX, BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <div>
      <div className="text-sm text-slate-50 font-medium grid lg:grid-cols-5 grid-cols-3 bg-teal-500 lg:px-24 px-5 lg:py-8 py-3 gap-3">
        <div>
          <p>About Us</p>
          <p>Current Member</p>
          <p>Annual Programs</p>
          <p>Research</p>
        </div>
        <div>
          <p>Library</p>
          <p>Recreation</p>
          <p>Admin</p>
        </div>
        <div>
          <p>Other Staff</p>
          <p>Book Store</p>
          <p>MemberShip</p>
          <p>Careers</p>
        </div>
        <div>
          <p>Desclaimer</p>
          <p>Give Now</p>
          <p>Free Offer</p>
        </div>

        <div className=" flex col-span-2  gap-4 items-center lg:text-lg text-md">
          Join with us
          <div className="flex gap-2 items-center lg:text-lg text-md">
            <BsFacebook></BsFacebook>
            <BsTwitterX></BsTwitterX>
            <BsYoutube></BsYoutube>
            <BsLinkedin></BsLinkedin>
          </div>
        </div>
      </div>
      <div className="p-2 font-medium flex justify-center text-sm items-center text-slate-900 bg-linear-to-r from-teal-300 to-slate-400 gap-2">
        <img className="w-6" src="https://i.ibb.co/nPPf9RJ/logo-lm.png" />
        <p>City Library © 2025-26</p>
      </div>
    </div>
  );
};

export default Footer;
