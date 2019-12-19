import UserService from './UserService'


const setUser = (user) => {
    return {type: 'SET_USER', user}
}

export const signup = (user) => {
    console.log(user);
    return async (dispatch) => {
        const newUser = await UserService.signup(user)
        return dispatch(setUser(newUser))
    }
}
export const getUser = () => {
    return async (dispatch) => {
        const user = await UserService.getUser()
        console.log(user);
        if(!user)return user
        return dispatch(setUser(user))
    }
}