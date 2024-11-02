"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Filter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const activeFilter = searchParams.get("capacity") ?? "all";
  function handleClick(filter) {
    const params = new URLSearchParams(searchParams);
    params.set("capacity", filter);
    router.replace(`${pathname}?${params.toString()}`, { scroll: "false" });
  }

  return (
    <div className="border border-primary-800  flex">
      <Button
        filter="all"
        activeFilter={activeFilter}
        handleClick={handleClick}
      >
        All Cabins
      </Button>
      <Button
        filter="small"
        handleClick={handleClick}
        activeFilter={activeFilter}
      >
        2&mdash;3 guests
      </Button>
      <Button
        filter="medium"
        handleClick={handleClick}
        activeFilter={activeFilter}
      >
        4&mdash;7 guests
      </Button>
      <Button
        filter="large"
        handleClick={handleClick}
        activeFilter={activeFilter}
      >
        8&mdash;12 guests
      </Button>
    </div>
  );
}

function Button({ filter, children, handleClick, activeFilter }) {
  return (
    <button
      className={`px-5 py-3 hover:bg-primary-700 ${
        activeFilter === filter ? " bg-primary-700 text-primary-50" : ""
      }`}
      onClick={() => handleClick(filter)}
    >
      {children}
    </button>
  );
}
