import { User } from '@/entities/User';
import { JwtPayload, verify } from 'jsonwebtoken';
import { cookies } from 'next/headers';
import { env } from 'process';
import apiService from '../server/apiService';

async function getAccessToken() {
  const cookie = (await cookies()).get('accessToken');
  return cookie?.value;
}

async function verifyJwt(): Promise<null | string> {
  const accessToken = await getAccessToken();

  if (!accessToken) return null;

  try {
    const { sub: userId } = verify(accessToken, env.JWT_SECRET!) as JwtPayload;

    if (!userId) return null;

    return userId;
  } catch {
    return null;
  }
}

export async function isAuthenticated(): Promise<boolean> {
  const userId = await verifyJwt();
  return !!userId;
}

export async function auth(): Promise<null | User> {
  const userId = await verifyJwt();

  if (!userId) return null;

  try {
    await new Promise((resolve) => setTimeout(resolve, 600));
    const accessToken = await getAccessToken();

    const user = await apiService.get<User>(
      `/users/${userId}`,
      apiService.addAuthHeader(accessToken),
    );

    return user;
  } catch {
    return null;
  }
}
