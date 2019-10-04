import http from '../services/httpService';

export const resendConfirmation = email => http.post('/auth/resend', { email });

export const sendResetPasswordLink = email =>
  http.post('/login/forgot', { email });