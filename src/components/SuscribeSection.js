import React from "react";

const SuscribeSection = () => {
  return (
    <section className="subscription">
      <h3>NEWSLETTER</h3>
      <p className="subscription-heading">SUSCRIBETE</p>
      <p className="subscription-text">Y entérate de todas las novedades</p>
      <div className="input-areas">
        <form>
          <input
            className="input"
            name="email"
            type="email"
            placeholder="Ingresa tu Email"
          />
        </form>
      </div>
    </section>
  );
};

export default SuscribeSection;
