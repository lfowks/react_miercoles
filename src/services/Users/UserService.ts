const urlUsersBase = 'https://jsonplaceholder.typicode.com/users';

const getAllUsers = async () => {
    const response = await fetch(urlUsersBase);
    const result = await response.json();
    return result;
};

const getUserById = async (id: number) => {
    const response = await fetch(`${urlUsersBase}/${id}`);
    const result = await response.json();
    return result;
}

export {
    getAllUsers,
    getUserById
}