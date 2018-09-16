import * as jwt_decode from 'jwt-decode';
import { User, AuthToken } from '../../models';
import { Constants } from '../constants/constant';

/*export const getTokenExpirationDate = (token: string) => {
    const decoded = jwt_decode(token);

    if (decoded.exp === undefined) {
        return null;
    }

    const date = new Date(0);
    date.setUTCSeconds(decoded.exp);
    return date;
};*/

export const isTokenExpired = (token?: string) => {
    if (!token) {
        token = localStorage.getItem(Constants.TOKEN);
    }

    if (!token || (token === undefined)) {
        return true;
    }

    if (token === 'undefined' || token === null) {
        return true;
    }

    const decoded = jwt_decode(token);

    if (decoded.exp === undefined) {
        return null;
    }

    const date = new Date(0);
    date.setUTCSeconds(decoded.exp);

    if (date === undefined) {
        return false;
    }

    return !(date.valueOf() > new Date().valueOf());
};

export const CurrentUser = (token?: string) => {
    try {
        if (!isTokenExpired) {
            return null;
        }

        const currentUser = localStorage.getItem(Constants.CURRENT_USER);

        if (!currentUser) {
            return null;
        }

        return JSON.parse(currentUser);

        /*// tslint:disable-next-line:no-debugger
        debugger;
        if (!token) {
            token = localStorage.getItem(Constants.TOKEN);
        }

        if (!token) {
            return null;
        }

       // const tokenObject: AuthToken = JSON.parse(token);

        const decodedToken = jwt_decode(token);
        const currentUser = {} as User;*/
        /* currentUser.email = decodedToken.username;
         currentUser.firstName = decodedToken.firstName;
         currentUser.surname = decodedToken.surname;
         currentUser.roleName = decodedToken.role ? decodedToken.role.toLowerCase() : '';
         currentUser.roleId = decodedToken.roleId;
         return currentUser;*/

    } catch (Error) {
        return null;
    }
};



