import { createContext, useState } from "react";
import { diferenciaYears, porsentajeYears, porsentajeMarca, porsentajePlan, formatearDinero } from "../../helpers";


const CotizadorContext = createContext();


const CotizadorProvider = ({ children }) => {
    const [datos, setDatos] = useState({
        year: '',
        marca: '',
        plan: ''
    })
    const [error, setError] = useState('')
    const [resultado, setResultado] = useState(0)
    const [cargando, setCargando] = useState(false)

    const handleChange = e => {
        setDatos({
            ...datos,
            [e.target.name]: e.target.value
        })
    }

    const cotizarSeguro = () => {
        //Una base
        let resultado = 2000;

        const diferencia = diferenciaYears(datos.year)

        resultado -= porsentajeYears(resultado, diferencia)

        resultado = porsentajeMarca(resultado, datos.marca)

        resultado = porsentajePlan(resultado, datos.plan)

        setCargando(true)

        setTimeout(() => {
            setResultado(formatearDinero(resultado))
            setCargando(false)
        }, 2000)
    }



    return (
        <CotizadorContext.Provider
            value={{
                datos,
                handleChange,
                setError,
                error,
                cotizarSeguro,
                resultado,
                cargando
            }}
        >
            {children}
        </CotizadorContext.Provider>
    )
}

export {
    CotizadorProvider
}

export default CotizadorContext