import Image from "next/image";

interface filterTagProps {
  title: string;
  onClick?: () => void;
}

const FilterTag = ({ title, onClick }: filterTagProps) => {
  return (
    <div className="flex flex-wrap  gap-[5px]">
      <div className="flex px-2.5 py-[5px] flex-row  items-center gap-[5px] border border-solid border-[#d6d6d6] bg-[#f4f4f4] rounded-[5px]">
        <span className="text-[14px] text-black font-sans">{title}</span>
        <div onClick={onClick}>
          <Image
            src="https://tbsecoms.wpengine.com/wp-content/uploads/2019/10/close.svg"
            alt="remove"
            width="15"
            height="15"
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};
export default FilterTag;
