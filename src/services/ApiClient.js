const portFrom = {
  'http:': ':8080',
  'https:': ':8443'
}

const url = location.protocol + '//' + location.hostname + portFrom[location.protocol] + process.env.BASE_URL + 'api'

const fetchDefaults = {
  mode: 'cors',
  cache: 'no-cache',
  credentials: 'same-origin',
  headers: {
    'Content-Type': 'application/json'
  },
  redirect: 'follow',
  referrer: 'client'
}

export default {
  loadCategories(options = {}) {
    console.log('fetching ' + url + '/categories')
    let fetchSettings = Object.assign({}, fetchDefaults, options)
    return fetch(`${url}/categories`, fetchSettings)
      .then(stream => {
        if (stream.ok) {
          return stream.json()
        }
        throw new Error('Network response was not ok.')
      })
      .catch(reason => {
        console.log('Error fetching category data', reason)
      })
  },

  loadProductsForCategory(categoryName = null, options = {}) {
    let fetchSettings = Object.assign({}, fetchDefaults, options)

    return fetch(`${url}/products/category?name=${categoryName}`, fetchSettings)
      .then(stream => {
        if (stream.ok) {
          return stream.json()
        }
        throw new Error('Network response was not ok.')
      })
      .catch(reason => {
        console.log('Error fetching product data', reason)
      })
  },
  placeOrder(order) {
    let options = {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(order) // data can be `string` or {object}!
    }
    return fetch(`${url}/orders`, {
      ...fetchDefaults,
      ...options
    }).then(stream => {
      if (stream.ok) {
        return stream.json()
      }
      throw new Error('Network response was not ok.')
    })
  }
}
