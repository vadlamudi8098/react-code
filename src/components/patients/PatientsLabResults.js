import React from "react";
import PageHeader from "../header/PageHeader";
import SelectDropDownWithoutBorder from "../SelectDropDownWithoutBorder";
import AllReportsTable from "./AllReportsTable/AllReportsTable";
import HistoricalResultTable from "./HistoricalResultTable/HistoricalResultTable";
import "./PatientsLabResults.css";
import PatientsLabResultsDateComponents from "./PatientsLabResultsDateComponent";

const PATIENTS_LAB_RESULTS_HEADING = "Molly's Lab results";

const PatientsLabResults = ({ patientData }) => {
  return (
    <div className="patients-lab-results-container">
      <div className="patients-lab-results-nav-bar">
        <span className="navigation-back-span">
          Back to Test Orders and Results
        </span>
        <div className="refresh-div">
          <span>Refresh</span>
          <SelectDropDownWithoutBorder />
        </div>
      </div>
      <div className="patients-info-header-container">
        <div className="patients-lab-results-header">
          <PageHeader heading={PATIENTS_LAB_RESULTS_HEADING} />
        </div>

        <div className="patient-info-container">
          <div className="patient-info-data-column">
            <label className="patient-info-label">Patient Name</label>
            <span className="patient-data-span">Molly</span>
          </div>
          <div className="patient-info-data-column">
            <label className="patient-info-label">Owner</label>
            <span className="patient-data-span">Todd Patterson</span>
          </div>
          <div className="patient-info-data-column">
            <label className="patient-info-label">Species</label>
            <span className="patient-data-span">Canine</span>
          </div>
          <div className="patient-info-data-column">
            <label className="patient-info-label">Breed</label>
            <span className="patient-data-span">Other</span>
          </div>
          <div className="patient-info-data-column">
            <label className="patient-info-label">Age</label>
            <span className="patient-data-span">11M</span>
          </div>
          <div className="patient-info-data-column">
            <label className="patient-info-label">Sex</label>
            <span className="patient-data-span">F</span>
          </div>
          <div className="patient-info-data-column">
            <label className="patient-info-label">Doctor</label>
            <span className="patient-data-span">Dr. Samuel Smith</span>
          </div>
        </div>
      </div>
      <PatientsLabResultsDateComponents />
      <div className="buttons-container">
      <div className="test-tab-buttons-container">
        <button className="test-tab-buttons" style={{borderRight:'none'}}>Complete Blood Count</button>
        <button className="test-tab-buttons" style={{borderRight:'none', borderLeft:'none'}}>Urinalysis Complete Profile</button>
        <button className="test-tab-buttons" style={{borderLeft:'none'}}>View All</button>
      </div>
      <button className="additional-test-button"> + Add Additional Tests</button>      
      </div>
      <div>
      <AllReportsTable/>
      <HistoricalResultTable/>
      </div>
     
    </div>
  );
};
export default PatientsLabResults;
