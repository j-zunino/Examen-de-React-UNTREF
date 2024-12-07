import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth';

export default function Header() {
    const { user, login, logout } = useAuth();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();

        if (!login(username, password)) {
            alert('Usuario y/o contraseña invalidas.');
        }
    };

    const handleLogout = () => {
        logout();
    };

    return (
        <header>
            <div className="title">
                <h1 className="red-text logo-title">TRAILERFLIX</h1>
            </div>
            <div className="login-container">
                {user ? (
                    <div id="userInfo">
                        <span id="userNameDisplay">
                            Bienvenido, {user.username}
                        </span>
                        <button id="logoutBtn" onClick={handleLogout}>
                            Cerrar sesión
                        </button>
                    </div>
                ) : (
                    <form id="loginForm" onSubmit={handleLogin}>
                        <input
                            type="text"
                            id="username"
                            placeholder="Usuario"
                            // value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                        <input
                            type="password"
                            id="password"
                            placeholder="Contraseña"
                            // value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <button type="submit">Ingresar</button>
                    </form>
                )}
            </div>
        </header>
    );
}
