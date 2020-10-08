import React from 'react';
import TAlerts from './components/Alerts/alerts';
import AdditionalAlerts from './components/Alerts/additionalcontent';
import AlertExample from './components/Alerts/dismissingalert';
import Example from './components/Badges/scale';
import Notify from './components/Badges/notification';
import ConstVariation from './components/Badges/Contextual variations';
import Pills from './components/Badges/pills';
import Breadcrumbs1 from './components/BreadCrumbs/breadcrump1';
import NoList from './components/BreadCrumbs/NoList';
import Drpbtn from './components/Dropdown/Button Dropdown';
import SingleButtonDropdown from './components/Dropdown/Single button dropdowns';
import SplitButtonDropdown from './components/Dropdown/Split Button Dropdown';
import SizingButton from './components/Dropdown/Sizing Dropdown'; 


function App() {
  return (
    <div>
      <div className="Alerts">
        <TAlerts/>
        <AdditionalAlerts/>
        <AlertExample/>
      </div>

      <div className="Badges">
        <Example/>
        <Notify/>
        <ConstVariation/>
        <Pills/>
        <Breadcrumbs1/>
        <NoList/>
      </div>

      <div>
        <Drpbtn/>
        <SingleButtonDropdown/>
        <SplitButtonDropdown />
        <SizingButton/>
      </div>
    </div>

    
  );
}

export default App;
