//CONTACT PAGE

//IMPORTING
import React from 'react';
import './styles.css';

//CONTACTUS
function ContactUs() {
  return (
      <div className="contactus-bg text-white py-20">
        <div className="container">
          <div className="sm:w-3/4 lg:w-2/4 mx-auto">
            <p className="font-light uppercase text-center mb-8">
              Newsletter
            </p>
            <h1 className="text-3xl text-center">
              Se inscreva e fique por dentro das nossas novidades
            </h1>
            <div className="flex flex-col sm:flex-row gap-6 mt-8">
              <input
                type="text"
                placeholder="Digite seu melhor email"
                className="focus:outline-none flex-1 px-2 py-3 rounded-md text-black"
              />
              <button
                type="button"
                className="button-color color text-white rounded-md px-7 py-3"
              >
                Inscrever-se
              </button>
            </div>
          </div>
        </div>
      </div>
    );
}

export default ContactUs;
