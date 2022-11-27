import React from "react";
import GoogleMapReact from "google-map-react";
import mapStyles from "../map.style";

interface IMarker {
  readonly lat: number;
  readonly lng: number;
  readonly text: string;
}

const Marker: React.FC<IMarker> = () => <p>šrrrrrrrr</p>;

const Map = () => {
  const defaultProps = {
    center: {
      lat: 49.1989227,
      lng: 16.6181145,
    },
    zoom: 12,
  };

  return (
    <div style={{ height: "450px", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAd_syyNQPveNau1xpD9WTzBMOX1l3c3V0" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        options={{
          styles: mapStyles,
        }}
      >
        <Marker lat={49.1989227} lng={16.6181145} text="My Marker" />
      </GoogleMapReact>
    </div>
  );
};

export default Map;
