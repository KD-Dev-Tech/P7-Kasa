import { Link } from 'react-router-dom';
function Error404() {

    return (
        <div className="error">
            <h1>404</h1>
            <p>Oups! La page que vous demandez n&apos;existe pas.</p>
            <Link to="/">Retournez sur la page d acceuil</Link>

        </div>
    );
}
export default Error404;