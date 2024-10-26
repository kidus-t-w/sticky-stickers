import jwt from 'jsonwebtoken';

export function generateToken(payload: object) {
  const token = jwt.sign(payload, 'secret', { expiresIn: '1h' });
  return token;
}
