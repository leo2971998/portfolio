import jwt from 'jsonwebtoken';

export function authenticate(request) {
  const header = request.headers.get('authorization');
  const token = header?.replace('Bearer ', '');
  if (!token) return null;
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch {
    return null;
  }
}
