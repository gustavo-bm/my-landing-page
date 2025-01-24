const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2>Entre em Contato</h2>
      <form className="contact-form">
        <input type="text" placeholder="Nome" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Mensagem"></textarea>
        <button type="submit">Enviar</button>
      </form>
    </section>
  )
}

export default Contact 