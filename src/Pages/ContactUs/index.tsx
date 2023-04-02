import * as C from './styles';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';

const ContactUs = () => {
  return (
    <div>
      <Header positionIsFixed={false} colorNeedToChange={true} borderBottom={false}/>
      <C.Container>
        <h1>Fale Conosco:</h1>

        <C.GridContactArea>
          <C.ContactItems>
            <h3>SAC BMW</h3>
            <h4>Telefone</h4>
            <span>0000 000 0000</span>
            <h4>Segunda - Sexta-feira</h4>
            <span>9:00 - 18:00</span>
          </C.ContactItems>

          <C.ContactItems>
            <h3>Escritório administrativo</h3>
            <p>Av. Dr. Chucri Zaidan, 1.240
              Bairro: Vila São Francisco
              CEP 04711-130
              São Paulo – SP
            </p>
          </C.ContactItems>

          <C.ContactItems>
            <h3>Fábrica</h3>
            <p>BR 101, n. 15.055, KM 66 Sentido Sul
              Bairro Corveta
              CEP 89.245-000
              Araquari – SC – Brasil
              Caixa Postal 7373
              89202-973 – Joinville – SC
            </p>
          </C.ContactItems>

          <C.ContactItems>
            <h3>SAC BMW Serviços Financeiros</h3>
            <h4>Atendimento Consumidor BMW</h4>
            <span>0000 000 0000</span>
            <h4>Ouvidoria Serviços Financeiros</h4>
            <span>0000 000 0000</span>
          </C.ContactItems>
        </C.GridContactArea>

        <C.WppContactArea>
          <h2>WhatsApp BMW Brasil</h2>
          <h3>Fale conosco por WhatsApp</h3>
        </C.WppContactArea>
      </C.Container>

        <Footer/>


    </div>
  )
}

export default ContactUs