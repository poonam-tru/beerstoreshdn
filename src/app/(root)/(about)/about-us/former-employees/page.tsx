import parse from 'html-react-parser';
import { MainTemplate } from '@/template';
import { getFormerEmployeesData } from '@/fetch/aboutus/formeremployees'

const FormerEmployees = async() => {
  const data = await getFormerEmployeesData();
  const breadcrumb = [
    { title: 'Home', url: '#' },
    { title: 'About Us', url: '#' },
    { title: 'Former Employees', url: '#' }
  ];

  return (
    <>
       <MainTemplate
      bannerTitle={data?.mainTitle}
      breadcrumbList={breadcrumb}
      bannerBg={`https://tbsecoms.wpengine.com/wp-content/uploads/2020/02/about-desk.jpg`}
    >
            <div className="py-[30px] md:py-[60px] px-[10px] md-[15px] md:pr-0 md:pl-[40px] lg:pl-[60px] 2xl:pl-[100px]">
                <h2>{data?.mainTitle}</h2>
                <div className="[&>p]:mb-[25px] [&>p>strong]:font-medium [&>p>strong]:block [&>p>a]:text-[#B95804] [&>p>a]:block" >
                  {parse(data?.description)}
                </div>
            </div>
        </MainTemplate>
    </>
  )
}

export default FormerEmployees