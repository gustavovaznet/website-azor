//HERO PAGE

//IMPORTING
import heroImg from '../../assets/hero-bg.png';
import './styles.css';

//HERO
const Hero = () => {
    return (
      <div className="relative">
        <div className="container flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 lg:mt-28 ">
          <div className="flex flex-1 flex-col items-center lg:items-start">
            <h2 className="hero-color text-3xl md:text-4xl lg:text-5xl text-center lg:text-left mb-6">
              Soluções digitais para sua empresa{" "}
            </h2>
            <p className="text-bookmark-grey text-lg text-center lg:text-left mb-6">
              Utilizamos as melhores tecnologias da nossa plataforma para alavancar a venda 
              dos seus produtos ou para oferecer os seus serviços para quem realmente precisa deles.
            </p>
            <div className="flex justify-center flex-wrap gap-6">
              <button
                type="button"
                className="btn hero-button-01"
              >
                Saiba mais
              </button>
              <button
                type="button"
                className="btn hero-button-02"
              >
                Tour virtual
              </button>
            </div>
          </div>

          <div className="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10">
            <img
              className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
              src={heroImg}
              alt="Hero"
            />
          </div>
        </div>
        <div className="hidden md:block overflow-hidden hero-bg-color rounded-l-full absolute h-80 w-2/4 top-32 right-0 lg:-bottom-28 lg:-right-36">

        </div>

      </div>
    );
}

export default Hero;
