import React, { useState } from 'react';
import styles from './ParcelFinder.module.css'
import LocationsView from "../pickup-location/LocationsView";


const ParcelFinder = () => {
  const [zipCode, setZipCode] = useState('');
  const [locations, setLocations] = useState([]);
  const [searchStatus, setSearchStatus] = useState('');
  const baseURL = import.meta.env.VITE_APP_BASEURL
  



  const findZIPCode = (e) => {
    e.preventDefault();
    fetch(`${baseURL}/api/lockers/zipcode/${zipCode}`, {
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
          setSearchStatus('No lockers found here. Please enter a different ZIP')
        }
      })
      .catch(console.error)
  }

  return (
    <div className={styles.container}>
        <div className = {styles.parent_mainText}>
          <div role = "welcomeText" className = {styles.mainText}>
            <p><span className = {styles.trackWord}>Pickup</span></p>
            <p><span className = {styles.andWord}>Your</span></p>
            <p><span className = {styles.traceWord}>Parcel</span></p>
          </div>


          


        <div className={styles.searchBox} data-testid="searchBox">
          <form onSubmit={findZIPCode}  className={styles.searchBox}>
          <input 
              aria-label="zip" 
              name="zip" 
              type="text" 
              placeholder="ZIP Code" 
              className={styles.searchinput} 
              onChange={(event) => setZipCode(event.target.value)} 
              value={zipCode}
              pattern="[0-9]{5}" 
              required
            />
          <button type = "submit">Find</button>
          </form>
        </div>
        {(locations.length > 0 && searchStatus === 'ok') ? (<LocationsView locations={locations} />) : (<p className={styles.status}>{searchStatus}</p>)}
        </div>
      </div>
  );
}

export default ParcelFinder;
