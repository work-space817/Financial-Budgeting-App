import { AuthUserActionType, IAuthUser } from "./types";

const initState: IAuthUser = {
    isAuth: false,
}

export const AuthReducer = (state = initState, action: any) =>{
    switch(action.type){
        case AuthUserActionType.LOGIN_USER:{
            return {
                ...state,
                isAuth: true
            };
        }
        case AuthUserActionType.LOGOUT_USER:{
            return {
                ...state,
                isAuth: false
            };
        }
    }
    return state
}