import db from '../config/db.js'

export const getCountriesServices = () => {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM country';
    db.execute(query)
    .then((result) => {
      resolve(result)
    })
    .catch((err) => {
      reject(err);
    })

  })
}

export const getCountryServiceId = (id) => {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM country WHERE id = ?';
    db.execute(query, [id])
    .then((result) => {
      resolve(result)
    })
    .catch((err) => {
      reject(err);
    })

  })
}

export const createCountryService = (country) => {
  return new Promise((resolve, reject) => {
    const query = 'INSERT INTO country (name, capital, currency) VALUES (?, ?, ?)';
    
    const { name, capital, currency } = country;
    
    db.execute(query, [name, capital, currency])
    .then((result) => {
      resolve(result)
    })
    .catch((err) => {
      reject(err);
    })

  })
}

export const updateCountryService = (id, country) => {
  return new Promise((resolve, reject) => {
    const query = 'UPDATE country SET name = ?, capital = ?, currency = ? WHERE id = ?';
    
    const { name, capital, currency } = country;
    
    db.execute(query, [name, capital, currency, id])
    .then((result) => {
      resolve(result)
    })
    .catch((err) => {
      reject(err);
    })

  })
}

export const deleteCountryService = (id) => {
  return new Promise((resolve, reject) => {
    const query = 'DELETE FROM country WHERE id = ?';
    db.execute(query, [id])
    .then((result) => {
      resolve(result)
    })
    .catch((err) => {
      reject(err);
    })

  })
}