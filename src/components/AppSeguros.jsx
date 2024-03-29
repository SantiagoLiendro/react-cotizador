import Formulario from "./Formulario"
import Spiner from "./Spiner"
import Resultado from "./Resultado"
import useCotizador from "../hooks/useCotizador"

const AppSeguros = () => {
    const { resultado, cargando } = useCotizador()
    return (
        <>
            <header className="my-10">
                <h1 className="text-white text-center text-4xl font-black">Cotizador de Seguros de Auto</h1>
            </header>

            <main className="bg-white md:2/3 lg:w-2/4 mx-auto shadow rounded-lg p-10">
                <Formulario />

                {cargando ? <Spiner /> : <Resultado />}
            </main>
        </>
    )
}

export default AppSeguros