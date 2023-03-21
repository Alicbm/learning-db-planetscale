import { Router } from 'express'
import { getCountries, getCountry, createCountry, updateCountries, deleteCountries } from '../controllers/country.controller.js'

const countryRouter = Router()

countryRouter.get("/", getCountries)

countryRouter.get("/:id", getCountry)

countryRouter.post("/", createCountry)

countryRouter.patch("/:id", updateCountries)

countryRouter.delete("/:id", deleteCountries)

export default countryRouter



