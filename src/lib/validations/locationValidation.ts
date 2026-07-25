type location = {
    longitude: number;
    latitude: number;
}

function validateCoordinates(location: location) {
    const {longitude, latitude } = location

    if (longitude === undefined || latitude === undefined ) {     
        return {
            valid: false,
            message: "Localização não encontrada"
        }
    }

    if (longitude < -180 || longitude > 180) {
        return {
            valid: false,
            message: "Coordenadas fora do padrão global"
        }
    }

    if (latitude < -90 || latitude > 90) {
        return {
            valid: false,
            message: "Coordenadas fora do padrão global"
        }
    }

    if (typeof longitude || typeof latitude !== "number") {
        return {
            valid: false,
            message: "Coordenadas inválidas"
        }
    }

    return {
        valid: true,
        message: "Coordenadas válidas"
    }
}




