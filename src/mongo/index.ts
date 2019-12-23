import { connect as mongoConnect } from 'mongoose';

export default async function connect(url: string, user: string, password: string, authSource = 'admin') {
  const result = await mongoConnect(url, {
    auth: {
      user,
      password
    },
    authSource
  });

  console.log('connected');

  return result;
}

