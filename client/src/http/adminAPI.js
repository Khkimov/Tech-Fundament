import { $host } from "."

export const login = async (email, password) => {
  const response = await $host.post('api/user/login', {email, password});
  return response;
}
