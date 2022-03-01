import JWT from 'expo-jwt';
import { JWT_SECRETE_KEY } from '../constants/environment';

export const decodeToken = (token: string) => {
  return JWT.decode(token, JWT_SECRETE_KEY);
};
