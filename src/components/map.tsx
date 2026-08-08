'use client'

import { useEffect, useRef } from "react";
import * as mapboxgl from 'mapbox-gl/esm'
import 'mapbox-gl/dist/mapbox-gl.css'

type Location = {
    longitude: number
    latitude: number
}

type MapProps = {
    interactive?: boolean
    coordinatesChange: (longitude: number, latitude: number) => void
    selectedCoodinates?: Location | null
    locations: Location[]
}

export default function Map({
    interactive,
    coordinatesChange,
    selectedCoodinates,
    locations = [] }: MapProps) {
    const mapRef = useRef<mapboxgl.Map | null>(null)
    const mapContainerRef = useRef<HTMLDivElement | null>(null)
    const savedMarkersRef = useRef<mapboxgl.Marker[]>([])
    const selectionMarkerRef = useRef<mapboxgl.Marker | null>(null)

    useEffect(() => {
        const map = (mapRef.current = new mapboxgl.Map({
            accessToken: process.env.NEXT_PUBLIC_MAPBOX_TOKEN,
            container: mapContainerRef.current!,
            center: [-51.07496185155131, -21.688074138235734],
            zoom: 14
        }))

        return () => {
            map.remove()
        }
    }, [])

    useEffect(() => {
        const map = mapRef.current
        if (!map) return

        const drawMarkes = () => {
            savedMarkersRef.current.forEach((m) => m.remove())
            savedMarkersRef.current = locations.map((loc) => 
                new mapboxgl.Marker({color: '#3b82f6'})
                .setLngLat([loc.longitude, loc.latitude])
                .addTo(map)
            )
        }

        if (map.loaded()) {
            drawMarkes()
        }
        else {
            map.once('load', drawMarkes)
        }
    }, [locations])

    useEffect(() => {
        const map = mapRef.current
        if (!map || !interactive || !coordinatesChange) return

        const handleClick = (e: mapboxgl.MapMouseEvent) => {
            const { lng, lat } = e.lngLat

            selectionMarkerRef.current?.remove()
            selectionMarkerRef.current = new mapboxgl.Marker()
            .setLngLat([lng, lat])
            .addTo(map)

            coordinatesChange(lng, lat)
        }

        map.on('click', handleClick)
        return () => {
            map.off('click', handleClick)
        }
    }, [interactive, coordinatesChange])

    return (
        <div id='map-container' ref={mapContainerRef} className="w-full h-full rounded-2xl"></div>
    )
}