//FAQ PAGE

//IMPORTING
import './styles.css';

//FAQ
const FAQ = () => {
  return (
      <div className="bg-bookmark-white py-20">
        <div className="container">
          <div class="sm:w-3/4 lg:w-5/12 mx-auto px-2">
            <h1 className="faq-color text-3xl text-center">
              Perguntas frequentes
            </h1>
            <p className="text-center text-bookmark-grey mt-4">
              Aqui algumas das perguntas que mais frequentemente recebemos por parte dos nossos clientes.
            </p>
          </div>
          <div className="flex flex-col sm:w-3/4 lg:w-5/12 mt-12 mx-auto">
            <div className="flex items-center border-b py-4">
              <span className="flex-1">É possível fazer um teste da plataforma?</span>
              <i className="fas fa-chevron-down faq-color"></i>
            </div>
            <div className="flex items-center border-b py-4">
              <span className="flex-1">O teste é realmente 100% grátis?</span>
              <i className="fas fa-chevron-down faq-color"></i>
            </div>
            <div className="flex items-center border-b py-4">
              <span className="flex-1">Por quanto tempo posso utilizar a versão grátis?</span>
              <i className="fas fa-chevron-down faq-color"></i>
            </div>
            <div className="flex items-center border-b py-4">
              <span className="flex-1">Como funciona a captação dos clientes?</span>
              <i className="fas fa-chevron-down faq-color"></i>
            </div>
            <div className="flex items-center border-b py-4">
              <span className="flex-1">Posso assinar um plano para minha MEI?</span>
              <i className="fas fa-chevron-down faq-color"></i>
            </div>
            <button
              type="button"
              className="btn mt-10 flex self-center faq-button"
            >
              Saiba mais
            </button>
          </div>
        </div>
      </div>
    );}

export default FAQ;
