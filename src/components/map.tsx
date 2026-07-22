'use client'

import { useEffect, useRef } from "react";
import * as mapboxgl from 'mapbox-gl/esm'
import 'mapbox-gl/dist/mapbox-gl.css'

export default function Map() {
    const mapRef = useRef<mapboxgl.Map | null>(null)
    const mapContainerRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        mapRef.current = new mapboxgl.Map({
            accessToken: process.env.NEXT_PUBLIC_MAPBOX_TOKEN,
            container: mapContainerRef.current,
            center: [-71.06776, 42.35816],
            zoom: 9
        })

        return () => {
            mapRef.current.remove()
        }
    }, [])

    return (
        <div id='map-container' ref={mapContainerRef}className="w-full h-screen"></div>
    )
}