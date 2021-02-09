import API from "../../utils/api";

export const login = (email, pass) => {
    return (dispatch) => {
        API.login(email, pass, res => {
            console.log("Result", res.data);
            dispatch ({
                type: 'LOGIN',
                payload: {
                    email: email,
                    token: res.data.id,
                    userId: res.data.userId
                }
            })
        })
    }
    // return {
    //     type: 'LOGIN',
    //     payload: {email, pass}
    // }
}

export const register = (name, email, pass) => {
    return dispatch => {
        API.register(name, email, pass, res => {
            if(res.status === 200){
                dispatch(login(email, pass));
            } else {
                if(res) {
                    dispatch({
                        type: 'SHOW_ERROR',
                        payload: 'There was an error. This email is already exists!'
                    })
                }
            }
        })
    }
    
    
    // {
    //     type: 'REGISTER',
    //     payload: {email, pass}
    // }
}