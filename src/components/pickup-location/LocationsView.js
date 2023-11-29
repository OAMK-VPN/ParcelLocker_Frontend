import React from "react";
import { Link } from "react-router-dom";
import styles from "./LocationsView.module.css";
import { getAllLocations } from "./locations";
import PickupLocation from "./PickupLocation";

const LocationsView = ({locations}) => {
  return (
    <div className={styles.locations} data-testid="location">
      {locations.map((location) => (
        <PickupLocation
          key={location.id}
          name={location.name}
          id={location.id}
          address={location.address}
        />
      ))}
    </div>
  );
};

export default LocationsView;
