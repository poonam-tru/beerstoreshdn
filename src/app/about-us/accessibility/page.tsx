import Image from 'next/image' 
import Link from 'next/link'
import BannerHeader from "@/modules/bannerHeader"
import ContainerLayout from "@/modules/containerLayout"
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const Accessibility = () => {
  return (
    <>
      <BannerHeader
        title="Accessibility"
        backgroundImage="https://tbsecoms.wpengine.com/wp-content/uploads/2020/02/about-desk.jpg"
      />

      <ContainerLayout 
        sidebarContent={
         <>text left</>
        } 
        content={
            <div className="py-[70px]">
                <div className="flex flex-col-reverse md:flex-row">
                    <div className="basis-4/6">
                    <h2>Accessibility</h2>
                    <p className="text-[#4A4F55] mb-[25px]">The Beer Store (TBS) is committed to providing accessible service to all persons with disabilities and to meet the standards outlined within the Accessibility for Ontarians with Disabilities Act (AODA) 2005 and the Integrated Accessibility Standards, Ontario Regulation 191/11.</p>

                    <p className="text-[#4A4F55] mb-[25px]">TBS has established a policy committing to treating all people in a way that allows them to maintain their dignity and independence. We believe in integration and equal opportunity and are committed to meeting the needs of people with disabilities in a timely manner TBS will continue to evolve its policies and procedures in compliance with the AODA and its standards for customer service, employment, transportation, environment, information and communication.</p>

                    <ul className="dot-list">
                        <li><Link href="#">AODA Customer Service Standard (PDF)</Link></li>
                        <li><Link href="#">AODA Integrated Standard Policy (PDF)</Link></li>
                        <li><Link href="#">TBS Multi-Year plan (PDF)</Link></li>
                        <li><Link href="#">2020 Accessibility Compliance Report</Link>
                            (report must be downloaded and opened in a PDF reader)
                        </li>
                    </ul>

                    <Button
                        asChild
                        className="h-auto leading-normal text-[14px] font-sans font-bold pt-[7px] pb-[4px] px-[8px] rounded-[5px] uppercase"
                        >
                        <Link href="/">Contact Us</Link>
                    </Button>
                    </div>
                    <div className="basis-2/6 min-h-0 min-w-0">
                        <div className="flex justify-center align-items-center">
                            <Image
                                alt={''}
                                src="https://tbsecoms.wpengine.com/wp-content/uploads/2019/04/TBS-AODA.jpg"
                                width={254}
                                height={254}
                            />
                        </div>
                    </div>
                </div>
                
            </div>
        }
      />
    </>
  )
}


export default Accessibility