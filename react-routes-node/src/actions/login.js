export const login = (user) => {
    console.log('adding item:', user);
    return {
        type: 'ADD',
        loggedIn: user.isLogged,
        name: user.name,
        id: user.id
    };
  }