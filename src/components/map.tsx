'use client'

import { useEffect, useRef, useState, } from "react";
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

const meu_Token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN

export default function Map({ coordinatesChange, locations = [] }: MapProps) {
    const mapRef = useRef<mapboxgl.Map | null>(null)
    const mapContainerRef = useRef<HTMLDivElement | null>(null)

    const [address, setAddress] = useState(null)
    const [loading, setLoading] = useState(false)

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
                console.log(locations)
            })
        })

        const handleClick = (e: mapboxgl.MapMouseEvent) => {
            const { lng, lat } = e.lngLat

            new mapboxgl.Marker()
                .setLngLat([lng, lat])
                .addTo(map)

            coordinatesChange(lng, lat) 
        }

    
        map.on('click', handleClick)

        return () => {
            map.remove()
        }

    }, [coordinatesChange, locations])

    async function lookUpAddress({longitude, latitude}: location) {
        setLoading(true)
        try {
            const url = `https://api.mapbox.com/search/geocode/v6/reverse?longitude=${longitude}&latitude=${latitude}&access_token=${meu_Token}`
            const response = await fetch(url)
            const data = await response.json()

            const feature = data.features?.[0]
            setAddress(
                feature ?
                {
                    fullAddress: feature.properties.full.address,
                    name: feature.properties.name,
                    placeFormatted: feature.properties.place.formatted,
                }
                : null
            )
        } catch {

        }    
    }

    return (
        <div id='map-container' ref={mapContainerRef} className="w-full h-full rounded-2xl"></div>
    )
}