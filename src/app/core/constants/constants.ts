export const constants =
{
    CURRENT_TOKEN: "CURRENT_TOKEN"
}

const apiUrl = "http://localhost:4000";

export const apiEndpoint =
{
    AuthEndpoint:
    {
        login: `${apiUrl}/user/login`,
        logout: `${apiUrl}/logout`,
        loggedUser: `${apiUrl}/loggedUser`,
    },
    TodoEndpoint:
    {
        getAllTodo: `${apiUrl}/getAllTodo`,
        addTodo: `${apiUrl}/addTodo`,
        updateTodo: `${apiUrl}/updateTodo`,
    }
}