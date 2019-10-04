import axios from 'axios'
import { push } from 'connected-react-router'
import { sendResetPasswordLink } from '../api/index'

export const register = newUser => {
  return axios
    .post('users/register', {
      email: newUser.email,
      password: newUser.password
    })
    .then(function (response) {
      console.log('Registered!')
    })
    .catch(err => {
      console.log(err.response)
    })
}

export const login = user => {
  return axios
    .post('users/login', {
      email: user.email,
      password: user.password
    })
    .then(response => {
      localStorage.setItem('usertoken', response.data)
      return response.data
    })
    .catch(err => {
      console.log(err.response)
    })
}

export const attemptSendResetPasswordLink = email => async dispatch => {
  return await sendResetPasswordLink(email).catch(
    dispatch(push('/forgot'))
  );
};
 