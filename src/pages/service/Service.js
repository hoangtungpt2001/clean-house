import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import GardenCleaningService from "./GardenCleaningService";
import HouseCleaningService from "./HouseCleaningService";
import OfficeCleaningService from "./OfficeCleaningService";
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
      {/* <h1>vui lòng chọn dịch vụ</h1>
      {arrService.map(item => {
        return(
            <button onClick={() => setService(item)}>DV vệ sinh nhà ở</button>
        )
      })}
      {service === 'HouseCleaningService' && <HouseCleaningService />}
      {service === 'OfficeCleaningService' && <OfficeCleaningService />}
      {service === 'GardenCleaningService' && <GardenCleaningService />}  */}
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