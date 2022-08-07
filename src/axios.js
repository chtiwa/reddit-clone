import axios from 'axios'

axios.interceptors.request.use(function (req) {
  const user = localStorage.getItem('profile')

  if (user) {
    const { token } = JSON.parse(localStorage.getItem('profile'))
    req.headers.authorization = `Bearer ${token}`;
    return req
  }
  return req
})