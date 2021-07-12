import { createContext, useCallback, useState, useContext } from "react";
import { api } from "../services/api";

interface User {
    id: string;
    name: string;
    email: string;
}

interface AuthState {
    token: string;
    user: User;
}

interface SignInCredentials {
    email: string;
    password: string;
}

interface AuthContextData {
    user: User;
    signIn(credentials: SignInCredentials): Promise<void>;
    signOut(): void;
    updateUser(user: User): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
    const [data, setData] = useState<AuthState>(() => {
        const token = localStorage.getItem('@DtMoney:token');
        const user = localStorage.getItem('@DtMoney:user');

        if (token && user) {
            api.defaults.headers.authorization = `Bearer ${token}`;

            return { token, user: JSON.parse(user) };
        }

        return {} as AuthState;
    });

    const signIn = useCallback(async ({ email, password }) => {
        console.log(api);
        console.log(process.env.API_URL);
        
        const response = await api.post('sessions', {
            email,
            password
        });


        const { token, user } = response.data;

        localStorage.setItem('@DtMoney:token', token);
        localStorage.setItem('@DtMoney:user', JSON.stringify(user));

        api.defaults.headers.authorization = `Bearer ${token}`;

        setData({ token, user });
    }, []);

    const signOut = useCallback(() => {
        localStorage.removeItem('@DtMoney:token');
        localStorage.removeItem('@DtMoney:user');

        setData({} as AuthState);
    }, []);

    const updateUser = useCallback((user: User) => {
        localStorage.setItem('@DtMoney:user', JSON.stringify(user));

        setData({
            token: data.token,
            user
        });
    }, [setData, data.token]);

    return (
        <AuthContext.Provider value={{
            user: data.user, signIn, signOut, updateUser
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export function useAuth(): AuthContextData {
    const context = useContext(AuthContext);

    return context;
}