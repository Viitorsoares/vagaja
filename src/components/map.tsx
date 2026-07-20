import { useEffect, useRef } from "react";

export default function Map() {
    const mapRef = useRef()
    const mapContainerRef = useRef()

    useEffect(() => {
        mapRef.current = new mapboxgl.Map({
            acessToken: '',
            container: mapContainerRef.current
        })
    })
}