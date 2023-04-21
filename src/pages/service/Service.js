import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import GardenCleaningService from "./Dondep";
import HouseCleaningService from "./Nauan";
import OfficeCleaningService from "./Dicho";
import BasicTabs from "./BasicTabs";

const Services = () => {
  const [show, SetShow] = useState(false);
  const [service, setService] = useState('HouseCleaningService')
  const arrService = [
    'HouseCleaningService',
    'OfficeCleaningService',
    'GardenCleaningService'
  ]

  
  return (
    <Layout>
      
        <BasicTabs/>
    </Layout>
  );
};

export default Services;

{/* <h1>vui lòng chọn dịch vụ</h1>
<button onClick={() => SetShow(!show)}>DV vệ sinh nhà ở</button>
{show && <HouseCleaningService />}
<button onClick={() => SetShow(!show)}>DV vệ sinh nhà ở</button>
{show && <OfficeCleaningService />}
<button onClick={() => SetShow(!show)}>DV vệ sinh nhà ở</button>
{show && <OfficeCleaningService />} */}