import Link from 'next/link'
import BannerHeader from "@/modules/bannerHeader"
import ContainerLayout from "@/modules/containerLayout"

const FormerEmployees = () => {
  return (
    <>
      <BannerHeader
        title="Former Employees"
        backgroundImage="https://tbsecoms.wpengine.com/wp-content/uploads/2020/02/about-desk.jpg"
      />

      <ContainerLayout 
        sidebarContent={
         <>text left</>
        } 
        content={
            <div className="py-[70px]">
                <h2>Former Employees</h2>
                <p className="text-[#4A4F55] mb-[25px]">If you were a member of the Brewers Retail Inc. Salaried Pension Plan in the period 1974 to 2012, or a person who received benefits as a result of the death or incapacity of such a member, and you have not received notice of a dispute between FSRA and Brewers Retail Inc. arising out of a Notice of Intended Decision issued by FSRA dated November 24, 2020, please provide your contact information by e-mail or telephone to:</p>

                <p className="mb-[25px]">
                  <strong className="text-[#4A4F55] font-medium block">Pension and Benefits Department</strong>
                  <Link href="mailto:mybenefits@thebeerstore.ca" className="text-[#B95804] block">mybenefits@thebeerstore.ca</Link>
                  <Link href="tel:1-800-277-4392" className="text-[#B95804] block">1-800-277-4392</Link>
                </p>

                <p className="text-[#4A4F55] mb-[25px]">{`Upon providing reasonable evidence of participation in the Salaried Plan, we will provide a copy of FSRA’s notice of the dispute. We will also update our records to ensure you receive future plan communications that may be relevant to you.`}</p>
            </div>
        }
      />
    </>
  )
}

export default FormerEmployees