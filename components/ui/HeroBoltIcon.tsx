import { FaBolt } from "react-icons/fa6";

export function HeroBoltIcon() {
  return (
    <span
      className="flex h-8 w-8 shrink-0 rotate-170 items-center justify-center rounded-full bg-[#ffdb00]"
      aria-hidden="true"
    >
      <FaBolt className="h-3 w-3 text-black md:h-5 md:w-5" />
    </span>
  );
}
