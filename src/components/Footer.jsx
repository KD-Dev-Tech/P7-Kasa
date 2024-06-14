import logo from '../assets/logo/logofooter.png';

function Footer() {
  return (
    <footer>
        <div className="footer">
            <img className='logo-footer' src={logo} alt="" />
            <p>© 2020 Kasa. All rights reserved </p>
        </div>    
    </footer>
  );
}export default Footer;