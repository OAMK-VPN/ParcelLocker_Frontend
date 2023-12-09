import React from "react";
import styles from "./LocationsView.module.css";
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
