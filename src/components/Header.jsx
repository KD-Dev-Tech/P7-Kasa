const Header = () => {
    return (
        <header>
            <div>
                <img className="logo" src="./src/assets/logo/Logo.png" alt="Logo Kasa" />
            </div>
            <nav>
                <ul className="nav-bar">
                    <li><a href="/"><strong>Accueil</strong></a></li>
                    <li><a href="/about"><strong>A Propos</strong></a></li>
                </ul>
            </nav>
        </header>
    );
}
export default Header;