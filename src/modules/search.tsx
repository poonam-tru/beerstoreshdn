import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import searchIcon from "../../public/images/search.svg";
import Image from "next/image";
import { cn } from "@/lib/utils";
interface searchProps {
  className?: React.ReactNode;
  value: string;
  onInputChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit?: (e: any) => void;
}
const Search = ({ className, value, onInputChange, onSubmit }: searchProps) => {
  return (
    <div
      className={cn(
        "relative max-w-4xl w-full mt-[20px] sm:mt-[48px]",
        className
      )}
    >
      <Image src={searchIcon} alt="search" width={23} height={23} />
      <Input
        type="text"
        placeholder="Search articles..."
        className="border-none pl-[50px] py-[10px] h-[45px] md:h-[55px] pr-4 bg-white rounded-[100px] placeholder:text-[#4A4F55] "
        onChange={onInputChange}
        value={value}
      />
      <Button
        onClick={onSubmit}
        className="px-3 py-2 uppercase text-[14px] h-[45px]  sm:text-[18px] absolute right-0 top-0 md:h-[55px] rounded-r-[100px] w-[100px] sm:w-[170px]"
      >
        Search
      </Button>
    </div>
  );
};

export default Search;
