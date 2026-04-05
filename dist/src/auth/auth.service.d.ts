import { UsersService } from '../users/users.service';
export declare class AuthService {
    private usersService;
    constructor(usersService: UsersService);
    validateUser(email: string, pass: string): Promise<any>;
    login(user: any): Promise<{
        id: any;
        email: any;
        name: any;
    }>;
}
