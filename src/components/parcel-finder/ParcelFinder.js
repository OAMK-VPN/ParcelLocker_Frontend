import React, { useState } from 'react';
import styles from './ParcelFinder.module.css'
import LocationsView from "../pickup-location/LocationsView";
import { baseUrl } from '../../utils/constants';

const ParcelFinder = () => {
  const [zipCode, setZipCode] = useState('');
  const [locations, setLocations] = useState([]);
  const [searchStatus, setSearchStatus] = useState('');
  
  const isInputOk = zipCode.length === 5

  const limitInput = (event) => {
    var key = event.keyCode || event.charCode;

    // 8 is the backspace key, 46 is the delete key allow user to delete the last character
    if (key === 8 || key === 46) {
      return false;
    }
    if (event.target.value.length >= 5) {
      event.preventDefault();
      event.stopPropagation()
    }
  }

  const findZIPCode = () => {
    fetch(`${baseUrl}/api/lockers/zipcode/${zipCode}`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      },
    })
      .then(response => response.json())
      .then(data => {
        if (data.length > 0) {
          setSearchStatus("ok");
          setLocations(data)
        } else {
          setSearchStatus('No locker found close to the entered postal code')
        }
      })
      .catch(console.error)
  }

  return (
    <div className={styles.container}>
      <div className={styles.parent_mainText}>
        <div role="welcomeText" className={styles.mainText}>
          <p><span className={styles.trackWord}>Pickup</span></p>
          <p><span className={styles.andWord}>your</span></p>
          <p><span className={styles.traceWord}>Parcel</span></p>
        </div>

        <div className={styles.searchBox} data-testid="searchBox">
          <input aria-label="zip" name="zip" type="number" placeholder="ZIP Code" className={styles.searchinput} onKeyDown={limitInput} onChange={(event) => setZipCode(event.target.value)} value={zipCode} />
          <button onClick={findZIPCode} disabled={!isInputOk}>Find</button>
        </div>
        {(locations.length > 0 && searchStatus == 'ok') ? (<LocationsView locations={locations} />) : (<p>{searchStatus}</p>)}
      </div>
    </div>
  );
}

export default ParcelFinder;
