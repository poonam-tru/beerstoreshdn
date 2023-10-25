import Image from "next/image";
import Link from "next/link";
import BannerHeader from "@/modules/bannerHeader";
import {
  ContainerLayout,
  SidebarLayout,
  ContentLayout,
} from "@/modules/containerLayout";
import SidebarList from "@/modules/sidebarList";

const OmbudsmanConatiner = () => {
  return (
    <>
      <BannerHeader
        title="Ombudsman"
        backgroundImage="https://tbsecoms.wpengine.com/wp-content/uploads/2020/02/about-desk.jpg"
      />

      <ContainerLayout>
        <SidebarLayout bordered>
          <SidebarList />
        </SidebarLayout>
        <ContentLayout>
          <div className="flex flex-col py-[60px] px-[15px] md:pr-0 md:pl-[60px] lg:pl-[80px]">
            <div className="flex flex-col-reverse md:flex-row gap-[30px]">
              <div className="basis-4/6">
                <h2>Ombudsman</h2>

                <h3 className="text-[24px] font-bold font-sans mb-[25px] leading-[1.1] tracking-[0.16px]">
                  Who is the Ontario Beer Ombudsman?
                </h3>
                <p className="text-[#4A4F55] mb-[25px]">
                  On January 2nd, 2017, Charles Dougall was appointed the first
                  Beer Ombudsman in Ontario. Before assuming this role, he had a
                  long career in customer complaint handling at Scotiabank,
                  having designed and managed the Office of the President (the
                  Bank’s central complaint resolution office) before serving as
                  the Ombudsman at Scotiabank from 2007 to 2016.
                </p>
                <p className="text-[#4A4F55] mb-[25px]">
                  The Ombudsman’s office is an independent function of The Beer
                  Store and the Ombudsman reports to the four independent
                  directors on the Beer Store’s Board of Directors. The
                  Ombudsman is not an employee of the Beer Store.
                </p>
                <h3 className="text-[24px] font-bold font-sans mb-[25px] leading-[1.1] tracking-[0.16px]">
                  What does the Beer Ombudsman do?
                </h3>
                <p className="text-[#4A4F55] mb-[25px]">
                  The Beer Ombudsman is empowered to undertake an impartial and
                  independent review of complaints from retail clients,
                  licensees and brewers about operational matters at The Beer
                  Store that have not been resolved through{" "}
                  <Link
                    href="/"
                    className="tbs-link-text underline"
                    rel="noopener noreferrer"
                    target={"_blank"}
                  >
                    The Beer Store’s Complaint Resolution Process{" "}
                  </Link>
                  . If an investigation is opened, the Ombudsman will contact
                  all parties to the dispute and collect evidence in an attempt
                  to arrive at a mutually agreeable resolution. If a mutually
                  agreeable resolution is not reached, the Ombudsman will
                  provide a written recommendation that is non-binding on either
                  party.
                </p>
                <p className="text-[#4A4F55] mb-[25px]">
                  A retail client, licensee or brewer can submit their complaint
                  in writing to The Beer Ombudsman. The Ombudsman will undertake
                  an initial review of the complaint and will respond to the
                  client, licensee or brewer in writing explaining the next
                  steps in the process.
                </p>
                <p className="text-[#4A4F55] mb-[25px]">
                  If a client, licensee or brewer submits a complaint to The
                  Beer Ombudsman before The Beer Store has had an opportunity to
                  complete all the steps of its complaint resolution process,
                  the Ombudsman will refer the complaint back to The Beer Store
                  – if the client, licensee or brewer remains dissatisfied after
                  The Beer Store has completed its investigation, the complaint
                  can be referred back to the Ombudsman.
                </p>
                <p className="text-[#4A4F55] mb-[25px]">
                  If the client, licensee or brewer has completed the steps in
                  The Beer Store’s complaint resolution process and the matter
                  in question does fall within the mandate of the Beer
                  Ombudsman, the Ombudsman will respond indicating that he will
                  be undertaking an investigation and explaining the process.
                </p>
                <p className="text-[#4A4F55] mb-[25px]">
                  If the matter in question does not fall within his mandate
                  (non-operational issues such as prices, store hours and other
                  standard policies and procedures of The Beer Store do not fall
                  within the mandate), the Ombudsman will respond in writing to
                  the client, licensee or brewer explaining why the matter does
                  not fall within the mandate.
                </p>
                <h3 className="text-[24px] font-bold font-sans mb-[25px] leading-[1.1] tracking-[0.16px]">
                  How do I contact the Beer Ombudsman?
                </h3>
                <p className="text-[#4A4F55] mb-[25px]">
                  You can contact the Beer Ombudsman by writing to him at:
                </p>
                <p className="text-[#4A4F55] mb-[25px]">
                  <Link
                    className="tbs-link-text"
                    href={"mailto:ombudsman@thebeerstore.ca"}
                  >
                    ombudsman@thebeerstore.ca
                  </Link>{" "}
                  <br />
                  or
                  <br />
                  Beer Ombudsman
                  <br />
                  Brewers Retail Inc.
                  <br />
                  12258 Coleraine Drive
                  <br />
                  Bolton, ON
                  <br />
                  L7E 3A9
                  <br />
                  <Link
                    className="tbs-link-text underline"
                    href="https://tbsecoms.wpengine.com/wp-content/uploads/2020/09/Mandate-of-the-Beer-Ombudsperson-2017.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Mandate of the Beer Ombudsman
                  </Link>
                  <br />
                  <br />
                  <Link
                    href="https://tbsecoms.wpengine.com/wp-content/uploads/2022/03/OmbudsmanReport2021_FINAL.pdf"
                    target="_blank"
                    className="tbs-link-text underline"
                    rel="noopener"
                  >
                    Ombudsman Annual Report 2021
                  </Link>
                </p>
              </div>
              <div className="basis-2/6 min-h-0 min-w-0">
                <div className="flex justify-center align-items-center rounded-[5px]">
                  <Image
                    alt={""}
                    src="https://tbsecoms.wpengine.com/wp-content/uploads/2019/05/Govern.jpg"
                    width={381}
                    height={437}
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </ContentLayout>
      </ContainerLayout>
    </>
  );
};

export default OmbudsmanConatiner;
