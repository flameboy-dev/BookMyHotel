export const authModel = {
  getCurrentUser: () => {
    const userStr = localStorage.getItem('bmh_user');
    return userStr ? JSON.parse(userStr) : null;
  },

  login: (credentials) => {
    // Client-side authentication model handler
    const mockUser = {
      id: 'usr_' + Date.now(),
      email: credentials.email,
      name: credentials.name || credentials.email.split('@')[0],
      role: credentials.role || 'user'
    };
    localStorage.setItem('bmh_user', JSON.stringify(mockUser));
    return mockUser;
  },

  logout: () => {
    localStorage.removeItem('bmh_user');
  }
};

export default authModel;
