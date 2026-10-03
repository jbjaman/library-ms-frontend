import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router";
const items = [
  { title: "Fiction", image: "https://i.ibb.co/PMPhZKr/horror3.png" },
  { title: "Science", image: "https://i.ibb.co/NVVTctv/scitec1.png" },
  { title: "History", image: "https://i.ibb.co/TtJs29R/history3.png" },
  { title: "Comics", image: "https://i.ibb.co/HFwbBNq/comic2.png" },
];
export default function Category() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((x) => (
        <Link
          key={x.title}
          to="/books"
          className="group overflow-hidden rounded-2xl bg-white ring-1 ring-[#e7eaf0]"
        >
          <img
            src={x.image}
            alt=""
            className="h-36 w-full object-cover transition duration-500 group-hover:scale-105"
          />
          <div className="flex items-center justify-between p-4">
            <span className="font-extrabold">{x.title}</span>
            <FiArrowRight className="text-[#3157d5]" />
          </div>
        </Link>
      ))}
    </div>
  );
}
