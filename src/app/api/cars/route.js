import { prisma } from '@/libs/prisma'
import { NextResponse } from 'next/server'
import { headers } from 'next/headers'
import { validateToken } from '@/utils/functions'

export async function GET () {
  try {
    const cars = await prisma.car.findMany({
      include: {
        brand: true
      }
    })

    const carsWithBrand = cars.map(car => ({
      ...car,
      brand: car.brand.name
    }))

    return NextResponse.json(carsWithBrand)
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 })
  }
}

export async function POST (request) {
  try {
    const token = headers().get('auth-token')

    if (!validateToken(token)) return NextResponse.json({ message: token ? 'Invalid token' : 'No token provided' }, { status: 401 })

    const body = await request.json()

    const car = {
      ...body,
      brandId: Number(body.brandId)
    }

    const newCar = await prisma.car.create({ data: car, include: { brand: true } })

    return NextResponse.json({ ...newCar, brand: newCar.brand.name })
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 })
  }
}
