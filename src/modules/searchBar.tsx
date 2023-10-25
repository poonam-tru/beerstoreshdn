import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface searchProps {
  placeholder: string;
  onChange?: () => void;
  onHandleClick?: () => void;
}

const SearchBar = ({ placeholder, onChange, onHandleClick }: searchProps) => {
  return (
    <div className="relative max-w-4xl w-full mt-[20px] sm:mt-[48px]">
      <Search className="absolute top-[50%] translate-y-[-50%] left-3 text-[#4A4F55]" />
      <Input
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        className="border-none pl-[50px] py-[10px] h-[45px] md:h-[55px] pr-4 bg-white rounded-[100px] placeholder:text-[#4A4F55] "
      />
      <Button
        onClick={onHandleClick}
        className="px-3 py-2 uppercase text-[14px] h-[45px]  sm:text-[18px] absolute right-0 top-0 md:h-[55px] rounded-r-[100px] w-[100px] sm:w-[170px]"
      >
        Search
      </Button>
    </div>
  );
};
export default SearchBar;
