import axios from 'axios'
import { setCookie } from 'cookies-next'

const api = axios.create({
  baseURL: '/api'
})

export const login = async (values) => {
  const response = await api.post('/admins/login', values)
  setCookie('token', response.data.token, {
    maxAge: 60 * 60 * 24 * 7
  })
  return response.data
}

export const getCars = async () => {
  const response = await api.get('/cars')
  return response.data
}

export const createCar = async (values) => {
  const response = await api.post('/cars', values)
  return response.data
}

export const updateCar = async (id, values) => {
  const response = await api.put(`/cars/${id}`, values)
  return response.data
}

export const deleteCar = async (id) => {
  const response = await api.delete(`/cars/${id}`)
  return response.data
}

export const getUsers = async () => {
  const response = await api.get('/admins')
  return response.data
}

export const createUser = async (values) => {
  const response = await api.post('/admins', values)
  return response.data
}

export const deleteUser = async (id) => {
  const response = await api.delete(`/admins/${id}`)
  return response.data
}

export const getBrands = async () => {
  const response = await api.get('/brands')
  return response.data
}

export const createBrand = async (brand) => {
  const response = await api.post('/brands', { name: brand })
  return response.data
}
