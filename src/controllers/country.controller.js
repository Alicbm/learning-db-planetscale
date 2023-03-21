import * as countryServices from '../services/country.service.js'

export const getCountries = (req, res) => {
  countryServices.getCountriesServices()
  .then((result) => {
    res.status(200).json({
      message: "Countries retrieved successfully",
      data: result[0]
    })
  }).catch((err) => {
    res.status(500).send(err)
  }) 
}

export const getCountry = (req, res) => {
  const { id } = req.params;

  countryServices.getCountryServiceId(id)
  .then((result) => {
    res.status(200).json({
      message: "Country found",
      data: result[0]
    })
  }).catch((err) => {
    res.status(500).send(err)
  }) 
}

export const createCountry = (req, res) => {
  const country = req.body;

  countryServices.createCountryService(country)
  .then((result) => {
    res.status(200).json({
      message: "Country created",
      data: country
    })
  }).catch((err) => {
    res.status(500).send(err)
  })  
}

export const updateCountries = (req, res) => {
  const country = req.body;
  const { id } = req.params;

  countryServices.updateCountryService(id, country)
  .then((result) => {
    res.status(200).json({
      message: "Country updated",
      data: country
    })
  }).catch((err) => {
    res.status(500).send(err)
  })  
}

export const deleteCountries = (req, res) => {
  const { id } = req.params;

  countryServices.deleteCountryService(id)
  .then(() => {
    res.status(200).json({
      message: "Country deleted",
    })
  }).catch((err) => {
    res.status(500).send(err)
  }) 
}