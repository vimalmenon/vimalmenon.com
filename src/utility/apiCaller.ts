import { IApi } from '@types';

export const apiCaller = async <T>(data: IApi): Promise<T> => {
  const response = await fetch(data.url, {
    method: data.method,
    body: data.body,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
  return await response.json();
};
