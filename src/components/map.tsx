'use client'

import { useEffect, useRef } from "react";
import * as mapboxgl from 'mapbox-gl/esm'
import 'mapbox-gl/dist/mapbox-gl.css'

export default function Map() {
    const mapRef = useRef<mapboxgl.Map>()
    const mapContainerRef = useRef<HTMLDivElement>()

    useEffect(() => {
        mapRef.current = new mapboxgl.Map({
            accessToken: process.env.NEXT_PUBLIC_MAPBOX_TOKEN,
            container: mapContainerRef.current,
            center: [-71.06776, 42.35816],
            zoom: 15
        })

        return () => {
            mapRef.current.remove()
        }
    }, [])

    return (
        <div id='map-container' ref={mapContainerRef} className="w-full h-130 rounded-2xl"></div>
    )
}