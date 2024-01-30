import { Fragment } from 'react'
import { MARCAS, YEARS, PLANES } from '../constans'
import useCotizador from '../hooks/useCotizador'
import Error from './Error'


const Formulario = () => {
    const { datos, handleChange, setError, error, cotizarSeguro } = useCotizador()

    const handelSubmit = (e) => {
        e.preventDefault()

        if (Object.values(datos).includes('')) {
            setError("Todos los campos obligatorios")
            return;
        }
        setError('')

        cotizarSeguro()
        console.log(cotizarSeguro())
    }


    return (
        <>
            {error && <Error />}
            <form action="" onSubmit={handelSubmit}>
                <div className="my-5">
                    <label htmlFor="marca" className="block mb-3 font-bold text-gray-400 uppercase">
                        Marca
                    </label>

                    <select
                        name="marca"
                        id="marca"
                        className='w-full p-3 bg-white border border-gray-200 '
                        onChange={e => handleChange(e)}
                        value={datos.marca}
                    >

                        <option value="" selected disabled >Selecciona Marca</option>
                        {
                            MARCAS.map(marca => (
                                <option value={marca.id} key={marca.id}>
                                    {marca.nombre}
                                </option>
                            ))
                        }

                    </select>
                </div>

                <div className="my-5">
                    <label htmlFor="year" className="block mb-3 font-bold text-gray-400 uppercase">
                        Año
                    </label>

                    <select
                        name="year"
                        id="year"
                        className='w-full p-3 bg-white border border-gray-200 '
                        onChange={e => handleChange(e)}
                        value={datos.year}
                    >

                        <option value="" selected disabled >Selecciona Año</option>
                        {
                            YEARS.map(year => (
                                <option value={year} key={year}>
                                    {year}
                                </option>
                            ))
                        }

                    </select>
                </div>

                <div className="my-5">
                    <label htmlFor="" className="block mb-3 font-bold text-gray-400 uppercase">
                        Elige un Plan
                    </label>
                    <div className="flex gap-3 items-center">
                        {
                            PLANES.map(plan => (
                                <Fragment key={plan.id}>
                                    <label htmlFor="">
                                        {plan.nombre}
                                    </label>
                                    <input
                                        type="radio"
                                        name='plan'
                                        value={plan.id}
                                        className='cursor-pointer'
                                        onChange={e => handleChange(e)}
                                    />
                                </Fragment>
                            ))
                        }
                    </div>
                </div>

                <input
                    type="submit"
                    className='w-full bg-indigo-500 hover:bg-indigo-600 transition-colors text-white cursor-pointer p-3 uppercase font-bold'
                    value="Cotizar"
                />
            </form>
        </>
    )
}

export default Formulario 