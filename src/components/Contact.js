const Contact = () => {
    return (
      <section>
        <h2>Contacto</h2>
        <form>
          <label htmlFor="name">Nombre:</label>
          <input type="text" id="name" name="name" required />
          <label htmlFor="email">Correo electrónico:</label>
          <input type="email" id="email" name="email" required />
          <button type="submit">Enviar</button>
        </form>
      </section>
    );
  };
  
  export default Contact;