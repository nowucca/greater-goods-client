const url = (function() {
  return (
    window.location.origin.replace(/:\d+$/gi, ':8080') +
    window.location.pathname.substring(
      0,
      window.location.pathname.indexOf('/', 2)
    )
  )
})()

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
    console.log('fetching ' + url + '/api/categories')
    var fetchSettings = Object.assign({}, fetchDefaults, options)
    return fetch(`${url}/api/categories`, fetchSettings)
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
    var fetchSettings = Object.assign({}, fetchDefaults, options)

    return fetch(
      `${url}/api/products/category?name=${categoryName}`,
      fetchSettings
    )
      .then(stream => {
        if (stream.ok) {
          return stream.json()
        }
        throw new Error('Network response was not ok.')
      })
      .catch(reason => {
        console.log('Error fetching product data', reason)
      })
  }
}
