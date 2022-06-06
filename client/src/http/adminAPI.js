import { $host, $authHost } from "."

export const login = async (email, password) => {
  const response = await $host.post('api/user/login', {email, password});
  return response;
}

export const check = async () => {
  const {data} = await $authHost.get('api/user/auth' )
  return (data)
}
