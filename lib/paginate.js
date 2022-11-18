import { useEffect, useState } from "react";

export default function PaginateData({ data, onPassPaginationResult }) {
  const [pages, setPages] = useState(1);

  const lengthOfArr = data.length;
  const displayPerPage = 14;
  const totalPages = lengthOfArr / displayPerPage;
  const start = (pages - 1) * displayPerPage;
  let end = start + displayPerPage;

  const setPerPage = () => {
    return data.slice(start, end);
  };

  useEffect(() => {
    if (data.length !== 0) {
      onPassPaginationResult(setPerPage());
    }
  }, [pages, data]); // "data" must be included since the data can be sorted

  return (
    <div className="grid gap-4 grid-cols-2 p-4">
      <button
        className="rounded-lg p-2 border-2 hover:bg-green-700 hover:text-white"
        onClick={() => (pages != 1 ? setPages(pages - 1) : setPages(1))}
      >
        Prev
      </button>
      <button
        className="rounded-lg p-2 border-2"
        onClick={() =>
          totalPages < pages ? setPages(parseInt(pages)) : setPages(pages + 1)
        }
      >
        Next
      </button>
    </div>
  );
}
