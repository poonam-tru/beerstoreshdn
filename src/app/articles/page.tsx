import BannerHeader from "@/modules/bannerHeader";
import ContainerLayout from "@/modules/containerLayout";
import Link from "next/link";

const sidebarList = [
  {
    title: " By Category",

    list: [
      "Articles",
      "Beer & Food Pairing",
      " Beer 101",
      " Checklists",
      "Party Planning",
      "Recipe Collections",
    ],
  },
  {
    title: "By Season",
    list: ["Fall", "Spring", "Summer", "Winter"],
  },
  {
    title: "By Occasions",
    list: [
      "Cottaging Guide",
      "Halloween",
      "Holiday",
      "Thanksgiving",
      "Valentines Day",
    ],
  },
];
const AboutUs = () => {
  return (
    <>
      <BannerHeader
        title="About Us"
        backgroundImage="https://tbsecomd.wpengine.com/wp-content/uploads/2020/02/about-desk.jpg"
      />
      <ContainerLayout
        bordered={false}
        sidebarContent={
          <div className="flex flex-col pt-[40px] pr-[15px]">
            <h2 className="text-[24px]">Sort by</h2>
            {sidebarList.map((item) => (
              <div className="flex flex-col" key={`${item.title}`}>
                <h3 className="text-[16px] py-[25px]">{item.title}</h3>
                <ul>
                  {item?.list.map((item, idx) => (
                    <li
                      key={`${idx}`}
                      className="cursor-pointer py-[15px] text-[#4A4F55] text-[14px] border-b border-solid border-[#d6d6d6] hover:text-[#B95804]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        }
        content={<div className="flex">test</div>}
      />
    </>
  );
};

export default AboutUs;
