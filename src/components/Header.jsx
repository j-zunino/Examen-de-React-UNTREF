export default function Header() {
    return (
        <header>
            <div className="title">
                <h1 className="red-text logo-title">TRAILERFLIX</h1>
            </div>
            <div className="login-container">
                <form id="loginForm" style={{ display: 'none' }}>
                    <input
                        type="text"
                        id="username"
                        placeholder="Usuario"
                        required
                    />
                    <input
                        type="password"
                        id="password"
                        placeholder="Contraseña"
                        required
                    />
                    <button type="submit">Ingresar</button>
                </form>
                <div id="userInfo" style={{ display: 'none' }}>
                    <span id="userNameDisplay"></span>
                    <button id="logoutBtn">Cerrar sesión</button>
                </div>
            </div>
        </header>
    );
}
