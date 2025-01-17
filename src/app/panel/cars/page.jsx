'use client'

import Image from 'next/image'
import CreateCar from '@/components/panel/CreateCar'
import { useEffect, useState } from 'react'
import UpdateCar from '@/components/panel/UpdateCar'
import { tableHeaders } from '@/helpers/data'
import DeleteCar from '@/components/panel/DeleteCar'
import useCarsStore from '@/hooks/useCarsStore'
import AddBrand from '@/components/panel/Brands'
import Button from '@/components/Button'
import Link from 'next/link'
import Spinner from '@/components/Spinner'
import CarFilter from '@/components/panel/CarFilter'

export default function page () {
  const { cars, loading } = useCarsStore()
  const [selectedCar, setSelectedCar] = useState(null)
  const [carToDelete, setCarToDelete] = useState(null)
  const [filteredCars, setFilteredCars] = useState([])

  useEffect(() => {
    setFilteredCars(cars)
  }, [cars])

  if (loading) return <Spinner />

  return (
    <section className='bg-neutral-800 w-full h-full m-2 p-5'>
      <h2 className='text-white md:hidden font-bold opacity-75 text-3xl text-center'>Autos</h2>

      <div className='my-4 gap-3 md:h-[5%] h-[12%] flex-col md:flex-row flex items-start '>
        <div className='gap-2 flex '>
          <CreateCar />
          <AddBrand />
        </div>
        <CarFilter cars={cars} setCars={setFilteredCars} />
      </div>

      <div className='relative overflow-auto max-h-[80%] md:max-h-[90%]'>
        <table className='w-full max-w-full overflow-x-auto text-sm text-center text-gray-400'>
          <thead className='text-xs uppercase bg-gray-700 text-gray-400'>
            <tr>

              {tableHeaders.map((header, index) => (
                <th key={index} scope='col' className='px-6 py-3'>
                  {header.label}
                </th>
              ))}

            </tr>
          </thead>
          <tbody>

            {cars.length === 0 && !loading && (
              <tr className='border-b bg-gray-800 border-gray-700'>
                <td colSpan='11' className='px-6 py-4 font-medium whitespace-nowrap text-white'>
                  No hay autos
                </td>
              </tr>
            )}

            {filteredCars.length === 0 && !loading && (
              <tr className='border-b bg-gray-800 border-gray-700'>
                <td colSpan='11' className='px-6 py-4 font-medium whitespace-nowrap text-white'>
                  No hay autos que coincidan con el filtro
                </td>
              </tr>
            )}

            {filteredCars.map(car => (
              <tr key={car.id} className='border-b bg-gray-800 border-gray-700'>
                <th scope='row' className='px-6 py-4 font-medium whitespace-nowrap text-white'>
                  {car.id}
                </th>
                <td className='capitalize px-6 py-4'>
                  {car.plate}
                </td>
                <td className='capitalize px-6 py-4'>
                  {car.brand}
                </td>
                <td className='capitalize px-6 py-4'>
                  {car.model}
                </td>
                <td className='capitalize px-6 py-4'>
                  {car.line}
                </td>
                <td className='capitalize px-6 py-4'>
                  {car.kilometers} km
                </td>
                <td className='capitalize px-6 py-4'>
                  {car.cc}
                </td>
                <td className='capitalize px-6 py-4'>
                  {car.color}
                </td>
                <td className='capitalize px-6 py-4'>
                  $ {Math.round(car.price).toLocaleString()}
                </td>
                <td className='px-6 py-4'>
                  <Link href={car.image} target='_blank' rel='noreferrer'>
                    <Image src={car.image} priority alt='carro' width={170} height={170} className='rounded-lg object-cover cursor-pointer m-auto w-auto h-auto ring-2 max-w-[160px] max-h-[160px]' />
                  </Link>
                </td>
                <td className='px-6 py-4 h-full m-auto'>
                  <Button onClick={() => setSelectedCar(car)} className='w-full mb-1 bg-green-500 hover:bg-green-700 font-bold '>
                    Editar
                  </Button>
                  <Button onClick={() => setCarToDelete(car)} className='w-full mt-1 bg-red-500 hover:bg-red-700 font-bold py-2 px-4'>
                    Eliminar
                  </Button>
                </td>
              </tr>
            ))}

          </tbody>
        </table>
      </div>

      {selectedCar && <UpdateCar selectedCar={selectedCar} setSelectedCar={setSelectedCar} />}
      {carToDelete && <DeleteCar carToDelete={carToDelete} setCarToDelete={setCarToDelete} />}
    </section>
  )
}
