import PropTypes from 'prop-types';

const Banner = ({ src, text }) => {
    return (
        <div className="banner">
            <img src={src} alt="Baniere du site" />  
            <h1>{text}</h1>
        </div>
    )
}

Banner.propTypes = {
    src: PropTypes.string.isRequired,
    text: PropTypes.string
}

export default Banner;