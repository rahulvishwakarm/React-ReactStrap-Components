import React from 'react';
import TAlerts from './components/Alerts/alerts';
import AdditionalAlerts from './components/Alerts/additionalcontent';
import AlertExample from './components/Alerts/dismissingalert';

function App() {
  return (
    <div className="App">
      <TAlerts/>
      <AdditionalAlerts/>
      <AlertExample/>
    </div>
  );
}

export default App;
