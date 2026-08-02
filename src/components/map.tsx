'use client'

import { useEffect, useRef, } from "react";
import * as mapboxgl from 'mapbox-gl/esm'
import 'mapbox-gl/dist/mapbox-gl.css'

type location = {
    longitude: number
    latitude: number
}

type MapProps = {
    coordinatesChange: (longitude: number, latitude: number) => void
    locations: location[]
}

export default function Map({ coordinatesChange, locations = [] }: MapProps) {
    const mapRef = useRef<mapboxgl.Map | null>(null)
    const mapContainerRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const map = (mapRef.current = new mapboxgl.Map({
            accessToken: process.env.NEXT_PUBLIC_MAPBOX_TOKEN,
            container: mapContainerRef.current!,
            center: [-51.07496185155131, -21.688074138235734],
            zoom: 14
        }))

        map.on('load', () => {
            locations.forEach((loc) => {
                new mapboxgl.Marker({ color: '#3b82f6'})
                .setLngLat([loc.longitude, loc.latitude])
                .addTo(map)
            })
        })

        const handleClick = (e: mapboxgl.MapMouseEvent) => {
            const { lng, lat } = e.lngLat

            new mapboxgl.Marker()
                .setLngLat([lng, lat])
                .addTo(map)
        }

    
        map.on('click', handleClick)

        return () => {
            map.remove()
        }

    }, [coordinatesChange, locations])

        return (
            <div id='map-container' ref={mapContainerRef} className="w-full h-full rounded-2xl"></div>
        )
    }