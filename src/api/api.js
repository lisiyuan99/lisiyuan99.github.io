
import axios from 'axios'

function userLogin(email ,password){

  axios.defaults.withCredentials=true
  axios.defaults.crossDomain=true
  
  return axios.post("http://localhost:8083/user/login",{email,password})

}

export { userLogin }