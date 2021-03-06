import axios from 'axios'

axios.defaults.baseURL = 'localhost:5000'

export default {
  // api get request to get nearby station
  getNearbyStations (params) {
    params.API_KEY = '4c4fdb68-49d7-11e9-8928-88e9fe70a0a1'
    return axios.get(`https://api-dot-united-triode-233023.appspot.com/api/stations/nearby`, { params: params })
  },
  // api get request to get nearby crimes
  getNearbyCrimes (params) {
    params.API_KEY = '4c4fdb68-49d7-11e9-8928-88e9fe70a0a1'
    return axios.get(`https://api-dot-united-triode-233023.appspot.com/api/crimes/nearby`, { params: params })
  },
  // api get request to get coordinate by address
  getCoordinatesByAddress (params) {
    params.key = 'AIzaSyD5LlWvE-1JFXMOsw0kyLutXObCfJk5ndc'
    return axios.get('https://maps.googleapis.com/maps/api/geocode/json', { params: params })
  },
  // api get request to get routes
  getRoutes (params) {
    params.API_KEY = '4c4fdb68-49d7-11e9-8928-88e9fe70a0a1'
    return axios.get(`https://api-dot-united-triode-233023.appspot.com/api/route`, { params: params })
  }
}
