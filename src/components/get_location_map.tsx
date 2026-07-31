import { useState } from "react";
import getLocation from "@/actions/get_location_from_db"
import { location } from "@/generated/prisma/client";

async function buscarLocation() {
    const [location, setLocation] = useState<location[]>([])

    const locationMap = await getLocation()

    if (!locationMap) return
    setLocation(locationMap)

    
}