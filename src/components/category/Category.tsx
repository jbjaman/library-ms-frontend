import { PiBooksDuotone } from "react-icons/pi";
import { Link } from "react-router";

const Category = () => {
  return (
    <div className="grid grid-cols-4 py-3 gap-3">
      <div className="relative p-2 rounded-lg grid bg-teal-400 shadow-slate-400 shadow-md ">
        <img
          className="rounded-lg"
          src="https://i.ibb.co/PMPhZKr/horror3.png"
          alt=""
        />
        <div className="absolute bottom-0 right-0 h-1/3 w-4/6 rounded-tl-xl items-center rounded-br-lg text-slate-950 p-2 pb-0 grid bg-teal-400">
          <h3 className="text-3xl p-2 font-bold flex items-center gap-2 text-center">
            <PiBooksDuotone></PiBooksDuotone>Horror !?
          </h3>
          <Link to="/horror">
            <button className="border mt-3 text-slate-100 rounded-lg font-semibold p-3 hover:text-slate-950 hover:bg-violet-500 hover:border-slate-950 w-full">
              SEE MORE
            </button>
          </Link>
        </div>
      </div>
      <div className="relative p-2 rounded-lg grid bg-teal-400 shadow-slate-400 shadow-md ">
        <img
          className="rounded-lg"
          src="https://i.ibb.co/NVVTctv/scitec1.png"
          alt=""
        />
        <div className="absolute bottom-0 right-0 h-1/3 w-4/6 rounded-tl-xl items-center rounded-br-lg text-slate-950 p-2 pb-0 grid bg-teal-400">
          <h3 className="text-3xl p-2 font-bold flex items-center gap-2 text-center">
            <PiBooksDuotone></PiBooksDuotone>Sci-Tec !!
          </h3>
          <Link to="/scitec">
            <button className="border mt-3 text-slate-100 rounded-lg font-semibold p-3 hover:text-slate-950 hover:bg-violet-500 hover:border-slate-950 w-full">
              SEE MORE
            </button>
          </Link>
        </div>
      </div>
      <div className="relative p-2 rounded-lg grid bg-teal-400 shadow-slate-400 shadow-md ">
        <img
          className="rounded-lg"
          src="https://i.ibb.co/TtJs29R/history3.png"
          alt=""
        />
        <div className="absolute bottom-0 right-0 h-1/3 w-4/6 rounded-tl-xl items-center rounded-br-lg text-slate-950 p-2 pb-0 grid bg-teal-400">
          <h3 className="text-3xl p-2 font-bold flex items-center gap-2 text-center">
            <PiBooksDuotone></PiBooksDuotone>History ?
          </h3>
          <Link to="/history">
            <button className="border mt-3 text-slate-100 rounded-lg font-semibold p-3 hover:text-slate-950 hover:bg-violet-500 hover:border-slate-950 w-full">
              SEE MORE
            </button>
          </Link>
        </div>
      </div>
      <div className="relative p-2 rounded-lg grid bg-teal-400 shadow-slate-400 shadow-md ">
        <img
          className="rounded-lg"
          src="https://i.ibb.co/HFwbBNq/comic2.png"
          alt=""
        />
        <div className="absolute bottom-0 right-0 h-1/3 w-4/6 rounded-tl-xl items-center rounded-br-lg text-slate-950 p-2 pb-0 grid bg-teal-400">
          <h3 className="text-3xl p-2 font-bold flex items-center gap-2 text-center">
            <PiBooksDuotone></PiBooksDuotone>Comic !!
          </h3>
          <Link to="/comic">
            <button className="border mt-3 text-slate-100 rounded-lg font-semibold p-3 hover:text-slate-950 hover:bg-violet-500 hover:border-slate-950 w-full">
              SEE MORE
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Category;
