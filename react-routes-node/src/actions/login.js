export const login = (user) => {
    return {
        type: 'ADD',
        loggedIn: user.isLogged,
        name: user.name,
        id: user.id
    };
  }