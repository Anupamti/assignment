import React from 'react'
import GoogleMapReact from 'google-map-react';
function MapComponents({ lat, lng }) {

    const center = {

        lat: parseInt(lat), lng: parseInt(lng)

    }

    return (
        <div style={{ height: '60vh', width: '100%', zIndex: 16, borderRadius: '60px' }
        }>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyArgDWQKaP9uZhimEckk7lhJPt1W - YgMU8" }}
                defaultCenter={center}
                defaultZoom={11}
            >
                <div
                    lat={lat}
                    lng={lng}
                    text="My Marker"
                />
            </GoogleMapReact>
        </div>
    )
}

export default MapComponents
