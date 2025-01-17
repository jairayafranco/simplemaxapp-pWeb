import { tableHeaders } from '@/helpers/data'
import Input from '../Input'
import { useState } from 'react'
import { filterCars } from '@/utils/functions'
import { useDebouncedCallback } from 'use-debounce'
import Select from '../Select'

export default function CarFilter ({ cars, setCars }) {
  const headersToFilter = tableHeaders.filter(header => header.label !== 'Acciones' && header.label !== 'Imagen')
  const [filters, setFilter] = useState({
    value: '',
    option: headersToFilter[0].value
  })

  const carDebounced = useDebouncedCallback(() => {
    const newCars = filterCars(cars, filters)
    setCars(newCars)
  }, 500)

  const handleChange = (e) => {
    if (e.target.value === ' ') return

    setFilter(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))

    carDebounced()
  }

  return (
    <div className='flex py-1 gap-2 px-2 items-center'>
      <h2>Filtrar por</h2>
      <div className='flex gap-1 items-center'>

        <Select onChange={handleChange} name='option' value={filters.option} className='h-full outline-none px-1 bg-transparent'>
          {headersToFilter.map((header, index) => (
            <option key={index} className='bg-neutral-800' value={header.value}>
              {header.label}
            </option>
          ))}
        </Select>

        <Input onChange={handleChange} name='value' value={filters.value} placeholder='...' className='h-full w-2/3 border-gray-400 self-end' />
      </div>
    </div>
  )
}
