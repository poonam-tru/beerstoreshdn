import Image from 'next/image' 
import Link from 'next/link'
import { HeadingAndDesc } from '@/modules/headingdesc'
import BannerHeader from "@/modules/bannerHeader"
import ContainerLayout from "@/modules/containerLayout"
import { Separator } from '@/components/ui/separator'
import { AddressTile } from '@/modules/contact/addresstile'

const ContactUS = () => {
  return (
    <>
      <BannerHeader
        title="Contact Us"
        backgroundImage="https://tbsecoms.wpengine.com/wp-content/uploads/2020/02/contact-desktop.jpg"
      />

      <ContainerLayout 
        sidebarContent={<>p</>} 
        content={
          <div className="py-[70px]">
            <HeadingAndDesc 
              title="Contact Us"
              desc={<p>{`We’re interested in what you have to say – about our products, our stores, our website. Tell us the good stuff and the not-so-good stuff (we can take it…your feedback only makes us better.) You can contact us using any of these options:`}</p>}
            />
            <Separator className='my-[50px] bg-[#d6d6d6]' />
            <p>Customer Contact Centre <Link href="tel:+18889482337" className="text-[#B95804]">1-888-948-2337</Link> or <Link href="mailto:customerservice@thebeerstore.ca" className="text-[#B95804]"> customerservice@thebeerstore.ca</Link></p>
            <h2 className="mt-[30px]">Hours of Operation:</h2>
            <p>{`Monday to Friday 8am – 8pm EST`}</p>
            <p>{`Saturday to Sunday 9am – 5pm EST`}</p>
            <p>{`Statutory Holidays – CLOSED`}</p>
            <Separator className='my-[50px] bg-[#d6d6d6]' />
            <p className="text-[#4A4F55] mb-[30px]">You can contact us using any of these options:</p>
            <div className="flex flex-wrap">
              <AddressTile
                icon={`https://tbsecoms.wpengine.com/wp-content/themes/Beer-Store/images/mail.svg`}
                iconAlt={`By Mail Icon`}
                title={`By Mail`}
                content={<p>280 Sovereign Road London, Ontario N6M 1B3 Attn: Customer Service</p>}
              />
              <AddressTile
                icon={`https://tbsecoms.wpengine.com/wp-content/themes/Beer-Store/images/corporate.svg`}
                iconAlt={`Corporate Office`}
                title={`Corporate Office`}
                content={
                    <>
                      <p className="mb-[10px]">12258 Coleraine Drive Bolton, Ontario, L7E 3A9</p>
                      <p>T: (905) 361-1005</p>
                      <p>F: (905) 361-4289</p>
                    </>  
                }
              />
              <AddressTile
                icon={`https://tbsecoms.wpengine.com/wp-content/themes/Beer-Store/images/media-contact.svg`}
                iconAlt={`Media Contact`}
                title={`Media Contact`}
                content={
                  <Link href="mailto:">Email Media Inquiries</Link>
                }
              />
            </div>
            <Separator className='my-[60px] bg-[#d6d6d6]' />
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
        }
      />
    </>
  )
  



}

export default ContactUS
