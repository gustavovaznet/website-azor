//FOOTER PAGE

//IMPORTING
import logoFooterImg from '../../assets/logo-footer.svg';
import './styles.css';

//FOOTER
const Footer = () => {
    return (
      <footer className="footer-bg py-8">
        <div className="container flex flex-col md:flex-row items-center">
          <div className="flex flex-1 flex-wrap items-center justify-center md:justify-start gap-12">
            <img src={logoFooterImg} alt="Bookmark" />
            <ul className="flex text-white uppercase gap-12 text-md">
              <li className="cursor-pointer">Home</li>
              <li className="cursor-pointer">Soluções</li>
              <li className="cursor-pointer">Blog</li>
              <li className="cursor-pointer">Contato</li>
            </ul>
          </div>
          <div className="flex gap-10 mt-12 md:mt-auto">
            <ul className="list-none flex gap-10">
            <li className="cursor-pointer">
                <i className=" text-white text-2xl list-none fab fa-google"></i>
              </li>
              <li className="cursor-pointer">
                <i className=" text-white text-2xl list-none fab fa-facebook-square"></i>
              </li>
              <li className="cursor-pointer">
                <i className="text-white text-2xl list-none fab fa-instagram"></i>
              </li>
              <li className="cursor-pointer">
                <i className="text-white text-2xl list-none fab fa-twitter"></i>
              </li>
              <li className="cursor-pointer">
                <i className="text-white text-2xl list-none fab fa-linkedin"></i>
              </li>
              <li className="cursor-pointer">
                <i className="text-white text-2xl list-none fab fa-snapchat"></i>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    );
}

export default Footer;
