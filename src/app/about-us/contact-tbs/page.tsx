import Image from "next/image";
import BannerHeader from "@/modules/bannerHeader";
import { ContainerLayout, SidebarLayout } from "@/modules/containerLayout";
import { Separator } from "@/components/ui/separator";
import { AddressTile } from "@/modules/contact/addresstile";
import SidebarList from "@/modules/sidebarList";
import parse from 'html-react-parser';

export const getUsers = async()=> {
  try {
      const response = await fetch('http://localhost:3000/api/contact/contact.json');
      return response.json();
  } catch (error:any) {
      // You can log the error or handle it in some way
      console.error('Error fetching data:', error.message);
      throw error; // Re-throw the error to let the calling code handle it
  }
};   

const ContactUS = async () => {
  const data = await getUsers();
  console.log(data);
  return (
    <>
      <BannerHeader
        title={data?.mainTitle}
        backgroundImage="https://tbsecoms.wpengine.com/wp-content/uploads/2020/02/contact-desktop.jpg"
      />

      <ContainerLayout>
        <SidebarLayout>
          <SidebarList />
        </SidebarLayout>
        <ContainerLayout>
          {" "}
          <div className="py-[70px]">
            <h2>{data?.mainTitle}</h2>
            <p>{data?.description}</p>
            <Separator className="my-[50px] bg-[#d6d6d6]" />

            {parse(data?.contactinfo)}
            <h2 className="mt-[30px]">{data?.hourofoperation}</h2>
            {parse(data?.hourofoperationdesc)}
            <Separator className="my-[50px] bg-[#d6d6d6]" />

            {parse(data?.contactlistheading)}
            <div className="grid grid-cols-3 gap-6">

              {
                data?.contactcards?.map((item:any) => (
                  <AddressTile
                    key={item?.cardTitle}
                    icon={item?.cardIcon}
                    iconAlt={`By Mail Icon`}
                    title={item?.cardTitle}
                    content={parse(item?.cardText)}
                  />
                ))
              }
            </div>
            <Separator className="my-[60px] bg-[#d6d6d6]" />
            <div>
              <Image
                src="/contact/staticmap.png"
                alt="Beer Store Map"
                width={500}
                height={300}
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
            </div>
          </div>
        </ContainerLayout>
      </ContainerLayout>
    </>
  );
};

export default ContactUS;
