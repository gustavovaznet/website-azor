//FEATURES PAGE

//IMPORTING
import featureImg01 from '../../assets/illustration-features-tab-1.png';
import featureImg02 from '../../assets/illustration-features-tab-2.png';
import featureImg03 from '../../assets/illustration-features-tab-3.png';
import './styles.css';

//FEATURES
const Features = () => {
    return (
      <div className="bg-bookmark-white py-20 mt-20 lg:mt-60 relative">
        <div class="sm:w-3/4 lg:w-5/12 mx-auto px-2">
          <h1 className="text-3xl text-center features-color">Nossa solução</h1>
          <p className="text-center text-bookmark-grey mt-4">
            Aqui você pode conhecer um pouco mais sobre a nossas soluções que atualmente é considerada
            a maior e melhor plataforma do mercado para promoção de produtos e serviços, contando com 
            grandes parcerias das maiores e melhores empresas de tecnologia de todo o mundo.
          </p>
        </div>
        <div className="relative mt-20 lg:mt-24">
          <div className="container flex flex-col lg:flex-row items-center justify-center gap-x-24">
            <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
              <img
                className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
                src={featureImg01}
                alt="Feature01"
              />
            </div>
            <div className="flex flex-1 flex-col items-center lg:items-start">
              <h1 className="text-3xl features-color">
                Informações Gerenciais
              </h1>
              <p class="text-bookmark-grey my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
                Tenha e gerencie todas as informações importantes de todos os cliente que já compraram
                os seus produtos ou já utilizaram os seus serviços, organização e praticidade para ter
                a informação sempre que necessário de maneira organizada.
              </p>
              <button
                type="button"
                className="btn features-button hover:bg-bookmark-white hover:text-black"
              >
                Saiba mais
              </button>
            </div>
          </div>
          <div className="hidden lg:block overflow-hidden features-bg-color rounded-r-full absolute h-80 w-2/4 -bottom-24 -left-36"></div>
        </div>
        <div className="relative mt-20 lg:mt-52">
          <div className="container flex flex-col lg:flex-row-reverse items-center justify-center gap-x-24">
            <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
              <img
                className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
                src={featureImg02}
                alt="Feature02"
              />
            </div>
            <div className="flex flex-1 flex-col items-center lg:items-start">
              <h1 className="text-3xl features-color">
                Captação de Clientes
              </h1>
              <p class="text-bookmark-grey my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
                Encontre clientes que precisam dos seus produtos ou serviços, principalmente aqueles
                próximos de você, uma boa captação dos clientes certos é muito importante para venda
                de produtos e serviços.
              </p>
              <button
                type="button"
                className="btn features-button hover:bg-bookmark-white hover:text-black"
              >
                Saiba mais
              </button>
            </div>
          </div>
          <div className="hidden lg:block overflow-hidden features-bg-color rounded-l-full absolute h-80 w-2/4 -bottom-24 -right-36 "></div>
        </div>
        <div className="relative mt-20 lg:mt-52">
          <div className="container flex flex-col lg:flex-row items-center justify-center gap-x-24">
            <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
              <img
                className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
                src={featureImg03}
                alt="Feature03"
              />
            </div>
            <div className="flex flex-1 flex-col items-center lg:items-start">
              <h1 className="text-3xl features-color">
                Acesse Quando e Onde Quiser
              </h1>
              <p class="text-bookmark-grey my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
                Informações importantes para o seu negócio na hora que quiser, basta ter uma conexão com
                a internet e um aparelho como um smartphone por exemplo, e você poderá operar o sistema
                utilizando de todas as funções facilitando assim também o compartilhamento das informações,
                tudo isso logicamente sem esquecer da segurança dos dados, que é um de nossos pilares.
              </p>
              <button
                type="button"
                className="btn features-button hover:bg-bookmark-white hover:text-black"
              >
                Saiba mais
              </button>
            </div>
          </div>
          <div className="hidden lg:block overflow-hidden features-bg-color rounded-r-full absolute h-80 w-2/4 -bottom-24 --36"></div>
        </div>
      </div>
    );
}

export default Features;
