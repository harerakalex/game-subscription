import JWT from 'expo-jwt';

export const decodeToken = (token: string) => {
  // TODO; FIND A WAY TO HIDE THE KEY
  return JWT.decode(token, 'kigali');
};
