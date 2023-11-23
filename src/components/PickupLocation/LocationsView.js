import React from "react";
import { Link } from "react-router-dom";
import styles from "./LocationsView.module.css";
import { getAllLocations } from "./locations";
import PickupLocation from "./PickupLocation";

const LocationsView = () => {
  const locations = getAllLocations();

  return (
    <div>
      <div className={styles.locations}>
        {locations.map((location) => (
          <PickupLocation
            key={location.id}
            name={location.name}
            id={location.id}
            address={location.address}
          />
        ))}
      </div>
    </div>
  );
};

export default LocationsView;
