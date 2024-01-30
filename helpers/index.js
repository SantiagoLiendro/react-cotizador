export const diferenciaYears = (year) => {
    return new Date().getFullYear() - Number(year)
}

export const porsentajeYears = (base, diferencia) => {
    return ((diferencia * 3) / 100) * base
}

export const porsentajeMarca = (resultado, marca) => {
    const modelo = [
        0,
        1.3,
        1.15,
        1.05
    ]

    return resultado * modelo[Number(marca)]
}

export const porsentajePlan = (resultado, plan) => {
    const planes = [
        0,
        1.2,
        1.5
    ]

    return resultado * planes[Number(plan)]
}

export const formatearDinero = (cantidad) => {
    return cantidad.toLocaleString('en-US', {
        style: 'currency',
        currency: "USD"
    })
}