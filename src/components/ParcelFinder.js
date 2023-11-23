import React from 'react';
import styles from './ParcelFinder.module.css'
import LocationsView from "./PickupLocation/LocationsView";

const ParcelFinder = () => {
  return (
    <div className={styles.container}>
      <div className={styles.parent_mainText}>
        <div className={styles.mainText}>
          <p><span className={styles.trackWord}>Pickup</span></p>
          <p><span className={styles.andWord}>your</span></p>
          <p><span className={styles.traceWord}>Parcel</span></p>
        </div>

        <div className={styles.searchBox}>
          <input type="text" placeholder="Parcel id" className={styles.searchinput} />
          <button>Find</button>
        </div>
        <LocationsView />
      </div>
    </div>
  );
}

export default ParcelFinder;
