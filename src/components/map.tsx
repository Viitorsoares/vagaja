'use client'

import { useEffect, useRef } from "react";
import * as mapboxgl from 'mapbox-gl/esm'
import 'mapbox-gl/dist/mapbox-gl.css'
import validateCoordinates from "@/lib/validations/locationValidation";



export default function Map() {
    const mapRef = useRef<mapboxgl.Map>()
    const mapContainerRef = useRef<HTMLDivElement>()

    useEffect(() => {
        const map = (mapRef.current = new mapboxgl.Map({
            accessToken: process.env.NEXT_PUBLIC_MAPBOX_TOKEN,
            container: mapContainerRef.current,
            center: [-51.07496185155131, -21.688074138235734],
            zoom: 14
        }))
        
        map.addInteraction('map-click', {
            type: 'click',
            handler: (e) => {
                
                console.log(`Clicked at: ${e.lngLat.lng}, ${e.lngLat.lat}`);

                const longitude = e.lngLat.lng;
                const latitude = e.lngLat.lat;

                const validation = validateCoordinates({
                    longitude,
                    latitude
                })
                
                if (!validation.valid) { 
                    return alert(validation.message);
                }

                console.log(`${typeof validation.valid}`)

                new mapboxgl.Marker()
                    .setLngLat([longitude, latitude])
                    .addTo(mapRef.current);
            }  
        });

        return () => {
            mapRef.current.remove()
        }

    }, [])

    return (
        <div id='map-container' ref={mapContainerRef} className="w-full h-full rounded-2xl"></div>
    )
}