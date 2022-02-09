//HEADER PAGE

//IMPORTING
import logoImg from '../../assets/logo.svg'
import './styles.css';

//HEADER
const Header = () => {
    return (
      <header>
        <nav className="container flex items-center py-4 mt-4 sm:mt-12">
          <div className="py-1">
            <img src={logoImg} alt="Logo" />
          </div>
          <ul className="hidden sm:flex flex-1 justify-end items-center gap-12 text-bookmark-blue uppercase text-md">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Soluções</a>
            </li>
            <li>
              <a href="/">Blog</a>
            </li>
            <li>
              <a href="/">Contato</a>
            </li>
            <button type="button" className="header-button header-color text-white rounded-md px-7 py-3 uppercase">Teste Grátis</button>
          </ul>
          <div className="flex sm:hidden flex-1 justify-end">
            <i className="fas fa-bars text-xl"></i>
          </div>
        </nav>
      </header>
    );
}

export default Header;
