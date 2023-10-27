import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";

const aboutUsList = [
  {
    title: "About Us",
    listItems: [
      "Did You Know?",
      "  Accessibility",
      "Operational Report",
      " Ombudsman",
      "  Meet New Beer Store",
      " Upcoming Openings",
      " Meet the President",
      "Contest Winners",
      "Online Ordering FAQ",
      "Media Centre",
      "Contact Us",
    ],
  },
  {
    title: "Careers",
    listItems: [
      "Careers at The Beer Store",
      "Core Values",
      "Divisions",
      "DEIB",
    ],
  },
  {
    title: "Environmental Leadership",
    listItems: [
      "Overview",
      "Stewardship Report",
      "Every Container Counts",
      "*NEW* Returning Empties",
      "Ontario Deposit Return Program (ODRP)",
      "Awards & Recognition",
    ],
  },
  {
    title: "Social Responsibility",
    listItems: ["Responsibility Programs", "Alcohol Retailing Deregulation"],
  },
  {
    title: "Community Involvement",
    listItems: [
      " Community Programs",
      " Disability Community Involvement",
      "Organizing a Bottle Drive",
      "Community Donation Drive",
    ],
  },
  {
    title: "Licensees",
    listItems: [
      "Licensees",
      " Inventory Levels",
      "Ordering",
      "PickUp Orders",
      " Delivery",
      " Prices & Surcharges",
      "Payment Options",
      " Deposit Returns",
      "Contact Info",
    ],
  },
  {
    title: "Retail Partners Program",
    listItems: [
      "Inventory Levels",
      " PickUp Orders",
      "Delivery",
      "Prices & Surcharges",
      " Payment Options",
      "Deposit Returns",
      "Contact Info",
      " Manuals and Forms",
    ],
  },
  {
    title: "Ownership",
    listItems: [
      " Ownership Governance",
      " Open Ownership",
      "Governance",
      "Corporate Policy & Financial Information",
    ],
  },
  {
    title: "Draught Services",
    listItems: [
      "About Draught Services",
      "Keg Sizing",
      " Ordering Information",
      "Contact Info",
    ],
  },
];

const SidebarList = () => {
  return (
    <div className="py-[40px] pr-[15px] lg:pr-[30px] ">
      <Accordion type="single" collapsible className="w-full">
        <>
          {aboutUsList.map((item: any) => (
            <AccordionItem value={item.title} key={`aboutus_item${item.title}`}>
              <AccordionTrigger className="text-left py-[25px] hover:no-underline text-[14px] font-sans w-full font-bold flex">
                {item.title}
                <Plus className="h-4 w-4 shrink-0 transition-transform duration-500 group-data-[state=open]:hidden" />
                <Minus className="h-4 w-4 shrink-0 transition-transform duration-500 group-data-[state=closed]:hidden" />
              </AccordionTrigger>
              <AccordionContent>
                <>
                  {item.listItems.map((listitem: any) => {
                    return (
                      <a
                        href="/"
                        className="flex text-[#4A4F55] hover:text-[#D06F1A] hover:bg-[#f4f4f4]   px-[5px] py-[3px]  text-[12px] font-sans  font-normal"
                        key={`key_${listitem}`}
                      >
                        {listitem}
                      </a>
                    );
                  })}
                </>
              </AccordionContent>
            </AccordionItem>
          ))}
        </>
      </Accordion>
    </div>
  );
};

export default SidebarList;
