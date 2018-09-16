import { Role } from './role';

export interface User {
    id: string;
    firstName: string;
    lastName: string;
    username: string;
    practiceNo: string;
    isEmailConfirmed: boolean;
    roles: Array<Role>;
}
