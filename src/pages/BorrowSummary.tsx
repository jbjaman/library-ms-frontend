import { FiBookOpen, FiTrendingUp } from "react-icons/fi";
import { useGetBorrowSummaryQuery } from "../api/borrowApi";
import Loader from "../components/ui/Loader";
export default function BorrowSummary() {
  const { data, isLoading, isError } = useGetBorrowSummaryQuery();
  if (isLoading) return <Loader />;
  if (isError)
    return (
      <div className="page-shell">
        <div className="surface p-8 text-center text-[#c73737]">
          Unable to load borrowing records.
        </div>
      </div>
    );
  const summary = data || [];
  const total = summary.reduce((s, x) => s + x.totalQuantity, 0);
  return (
    <div className="page-shell">
      <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[.18em] text-[#3157d5]">
            Activity
          </p>
          <h1 className="mt-1 text-3xl font-black">Borrowing summary</h1>
          <p className="mt-1 text-sm text-[#667085]">
            See how many copies have been borrowed across your collection.
          </p>
        </div>
        <div className="surface flex items-center gap-3 px-4 py-3">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#eef2ff] text-[#3157d5]">
            <FiTrendingUp />
          </span>
          <div>
            <p className="text-xs text-[#8a93a6]">Total borrowed</p>
            <p className="font-black">{total} copies</p>
          </div>
        </div>
      </div>
      {summary.length === 0 ? (
        <div className="surface grid min-h-60 place-items-center p-8 text-center">
          <div>
            <FiBookOpen className="mx-auto text-[#98a2b3]" size={32} />
            <h3 className="mt-3 font-extrabold">No borrowing records yet</h3>
            <p className="mt-1 text-sm text-[#667085]">
              Borrowed copies will appear here.
            </p>
          </div>
        </div>
      ) : (
        <div className="surface overflow-hidden">
          <div className="hidden overflow-x-auto md:block">
            <table className="min-w-full">
              <thead>
                <tr className="border-b border-[#e7eaf0] bg-[#fafbfc] text-left text-xs uppercase tracking-wide text-[#8a93a6]">
                  <th className="px-5 py-4">Book</th>
                  <th className="px-4 py-4">ISBN</th>
                  <th className="px-4 py-4">Total borrowed</th>
                </tr>
              </thead>
              <tbody>
                {summary.map((x) => (
                  <tr
                    key={x._id}
                    className="border-b border-[#eef0f4] last:border-0"
                  >
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#eef2ff] text-[#3157d5]">
                          <FiBookOpen />
                        </span>
                        <span className="font-extrabold">{x.book.title}</span>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-sm text-[#667085]">
                      {x.book.isbn}
                    </td>
                    <td className="px-4 py-4">
                      <span className="rounded-full bg-[#eefbf6] px-3 py-1 text-xs font-extrabold text-[#087f5b]">
                        {x.totalQuantity} copies
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="divide-y divide-[#eef0f4] md:hidden">
            {summary.map((x) => (
              <div key={x._id} className="p-4">
                <p className="font-extrabold">{x.book.title}</p>
                <p className="mt-1 text-xs text-[#8a93a6]">
                  ISBN {x.book.isbn}
                </p>
                <span className="mt-3 inline-block rounded-full bg-[#eefbf6] px-3 py-1 text-xs font-extrabold text-[#087f5b]">
                  {x.totalQuantity} copies borrowed
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
