import React, { useState } from 'react';
import { Tab, Tabs, withStyles } from '@material-ui/core';
import './PatientsBloodReportTabs.css';
import AllReportsTable from './AllReportsTable';

const PatientsBloodReportTabs=()=>{
    const [index, setIndex] = useState(0);
   
  const handleChange = (index) => {
    setIndex(index);
  };
  return (
   <div>
      <Tabs className="tab-container"
        value={index}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}        
      >
        <Tab  label={<span className="tab-header">Complete Blood Count-All(11 Tests)</span>} onClick={()=>handleChange(0)} />
        <Tab  label={<span className="tab-header">Abnormal(9)</span>}  onClick={()=>handleChange(1)}/>
      </Tabs>
      {index===0?<AllReportsTable/>:<span>Hello</span>}
   </div>
  );
}
export default PatientsBloodReportTabs;
