export const TOKEN_KEY = 'dummy-token';

export const login = () => {
  localStorage.setItem(TOKEN_KEY, '1234567890abcdef');
};

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};

export const isLoggedIn = () => {
  return !!localStorage.getItem(TOKEN_KEY);
};
