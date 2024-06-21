import PropTypes from 'prop-types';

const Banner = ({ src, text, style }) => {



    return (
        <div className="banner">
            <img style={style} src={src} alt="Baniere du site" />  
            <h1>{text}</h1>
        </div>
    )
}

Banner.propTypes = {
    src: PropTypes.string.isRequired,
    text: PropTypes.string,
    style: PropTypes.object
}

export default Banner;