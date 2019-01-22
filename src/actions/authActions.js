import axios from 'axios';
import { 
    USER_LOGIN_SUCCESS, 
    AUTH_SYSTEM_ERROR, 
    AUTH_LOADING,
} from './types';

export const onUserRegister = ({ username, email, phone, password }) => {
    return (dispatch) => {
        dispatch({ type: AUTH_LOADING })
        if(username === '' || email === '' || phone === '' || password === '') {
            dispatch({ type: AUTH_SYSTEM_ERROR, payload: 'Semua form diatas wajib diisi!' })
        }
        else {
            axios.get('http://localhost:1997/users', { 
                params: {
                    username
                }
            }).then((res) => {
                if(res.data.length === 0) {
                    axios.post('http://localhost:1997/users', {
                        username, email, password, phone
                    }).then((res) => {
                        console.log(res)
                        // dispatch({ type : USER_LOGIN_SUCCESS, payload: res.data.username })
                        dispatch({ type: USER_LOGIN_SUCCESS, payload: { username: res.data.username, email: res.data.email }  })
                    }).catch((err) => {
                        console.log(err);
                        dispatch({ type: AUTH_SYSTEM_ERROR, payload: 'System Error' })
                    })
                }
                else {
                    dispatch({ type: AUTH_SYSTEM_ERROR, payload: 'Username has been taken'})
                }
                
            }).catch((err) => {
                dispatch({ type: AUTH_SYSTEM_ERROR, payload: 'System Error'})
            })
            
        }
    }
}