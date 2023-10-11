import BannerHeader from "@/modules/bannerHeader";
import ContainerLayout from "@/modules/containerLayout";

const AboutUs = () => {
  return (
    <>
      <BannerHeader
        title="About Us"
        backgroundImage="https://tbsecomd.wpengine.com/wp-content/uploads/2020/02/about-desk.jpg"
      />
      <ContainerLayout sidebarContent={<>p</>} content={<>p</>} />
    </>
  );
};

export default AboutUs;
