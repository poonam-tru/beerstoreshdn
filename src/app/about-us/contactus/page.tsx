import { HeadingAndDesc } from '@/modules/headingdesc'
import BannerHeader from "@/modules/bannerHeader";
import ContainerLayout from "@/modules/containerLayout";

const ContactUS = () => {
  return (
    <div className="container">
      <BannerHeader
        title="About Us"
        backgroundImage="https://tbsecomd.wpengine.com/wp-content/uploads/2020/02/about-desk.jpg"
      />
      <ContainerLayout sidebarContent={<>p</>} content={<>p</>} />

      <div className="py-[70px]">
        <HeadingAndDesc 
          title="Contact Us"
          desc={<p>{`We’re interested in what you have to say – about our products, our stores, our website. Tell us the good stuff and the not-so-good stuff (we can take it…your feedback only makes us better.) You can contact us using any of these options:`}</p>}
        />
      </div>
    </div>
  )
}

export default ContactUS
