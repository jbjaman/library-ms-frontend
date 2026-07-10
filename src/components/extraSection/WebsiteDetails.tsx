// import { useContext } from "react";
// import { Link } from "react-router";
// import { Authcontxt } from "../Providers/AuthProviders";

const WebsiteDetails = () => {
  //   const { user } = useContext(Authcontxt);
  return (
    <div className=" bg-gradient-to-r from-teal-600 to-teal-700 rounded-lg">
      <div className="grid grid-cols-2">
        <div className="text-center p-10">
          <h3 className="text-3xl font-bold text-slate-900">About Us</h3>
          <p className="py-5 text-slate-100">
            Learning is a lifetime journey. Reading is the best way to pass time
            and what better way than to borrow/purchase books from our library
            and liberate your mind altogether.We provide a safe, comfortable and
            friendly environment that enables learning and advancement of
            knowledge, and promotes discovery and scholarship. Sit down with a
            cup of coffee and unwind at our book store with a book of your
            choice!
          </p>
          {/* <Link to={user ? "/all" : "/signup"}> */}
          <button className="border p-3 rounded-lg text-slate-100 border-slate-900 hover:bg-violet-500 hover:text-slate-900">
            MemberShip
          </button>
          {/* </Link> */}
        </div>
        <div className="p-5">
          <img
            className="rounded-3xl"
            src="https://i.ibb.co/GtMS0x5/bg2.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default WebsiteDetails;
