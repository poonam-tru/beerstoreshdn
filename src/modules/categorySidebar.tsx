interface categorySidebarProps {
  title: string;
  list: [];
}

const CategorySidebar = ({ title, list }: categorySidebarProps) => {
  return (
    <div className="flex flex-col py-[60px] pr-[15px]">
      <h2 className="text-[24px] font-sans mb-2.5 font-bold">{title}</h2>
      {list &&
        list.length > 0 &&
        list.map((item: any) => (
          <div className="flex flex-col" key={`${item.title}`}>
            <h3 className="text-[16px] pt-[25px]   font-sans  font-bold">
              {item.title}
            </h3>
            <ul className="mt-[10px]">
              {item?.list.map((item: any, idx: any) => (
                <li
                  key={`${idx}`}
                  className="cursor-pointer  font-sans  font-normal py-[15px] text-[#4A4F55] text-[14px] border-b border-solid border-[#d6d6d6] hover:text-[#B95804]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
    </div>
  );
};
