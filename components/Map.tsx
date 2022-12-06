import React from "react";
import GoogleMapReact from "google-map-react";
import mapStyles from "../map.style";

interface IMarker {
  readonly lat: number;
  readonly lng: number;
  readonly text: string;
}

const Marker: React.FC<IMarker> = () => (
  <div className="map-pinpoint">
    <img src="/e_black.svg" alt="marker" className="map-pinpoint-content" />
  </div>
);

const Map = () => {
  const defaultProps = {
    center: {
      lat: 49.20179,
      lng: 16.60712,
    },
    zoom: 12,
  };

  return (
    <div style={{ height: "450px", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.GOOGLE_MAPS_API_KEY }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        options={{
          styles: mapStyles,
        }}
      >
        <Marker lat={49.20179} lng={16.60712} text="My Marker" />
      </GoogleMapReact>
    </div>
  );
};

export default Map;
