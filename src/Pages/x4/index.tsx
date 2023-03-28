import * as C from './styles';
import IMGMAIN from '../../assets/bmwg02/IMG1.jpg';
import IMG1 from '../../assets/bmwg02/IMG1.jpg';
import IMGFIRST from '../../assets/bmwg02/IMG-1.jpg';
import IMG2 from '../../assets/bmwg02/IMG2.jpg';
import IMGTWO from '../../assets/bmwg02/IMG-2.jpg';
import IMG3 from '../../assets/bmwg02/IMG3.jpg';
import IMG4 from '../../assets/bmwg02/IMG4.jpg';
import IMG5 from '../../assets/bmwg02/IMG5.jpg';
import IMG6 from '../../assets/bmwg02/IMG6.jpg';
import IMG7 from '../../assets/bmwg02/IMG7.jpg';
import INTERIOR from '../../assets/bmwg02/INTERIOR.jpg';
import INTERIOR1 from '../../assets/bmwg02/INTERIOR1.jpg';
import INTERIOR2 from '../../assets/bmwg02/INTERIOR2.jpg';
import INTERIOR3 from '../../assets/bmwg02/INTERIOR3.jpg';
import AMAZONIMG from '../../assets/bmwg02/AMAZONALEXA.jpg';
import DRIVINGASSISTANT from '../../assets/bmwg02/DRIVINGASSISTANT.jpg';
import XDRIVE from '../../assets/bmwg02/XDRIVE.jpg';
import IMGBG from '../../assets/bmwg02/IMGMAIN.jpg';
import PERSONALIMG from '../../assets/bmwg02/PERSONALASSISTANT.jpg';
import FILM from '../../assets/bmwg02/FILMINTRO.mp4';
import PrinceAndSLoganArea from '../../Components/PriceAndSloganArea';
import useMediaQuery from '../../Hooks/MediaQuery';
import ContactArea from '../../Components/ContactsArea';
import Footer from '../../Components/Footer';
import Carousel from 'react-elastic-carousel';
import { motion } from 'framer-motion';

type Props = {}

const BMWX4 = (props: Props) => {
  const isDesktopScreen = useMediaQuery("(min-width: 1060px)");

  const breakPoints = [
    {width: 1, itemsToShow: 1},
    {width: 500, itemsToShow: 1},
    {width: 768, itemsToShow: 3},
    {width: 1200, itemsToShow: 4},
  ]
  const breakPoints2 = [
    {width: 1, itemsToShow: 1},
    {width: 500, itemsToShow: 1},
    {width: 768, itemsToShow: 3},
    {width: 1200, itemsToShow: 3},
  ]

  const ItemToShow = {
    design: 'Graças à sua dianteira completamente renovada, o BMW X4 apresenta uma presença mais progressiva do que nunca. A grade duplo rim dotada de ângulos, o para-choque redesenhado com entradas de ar verticais e faróis totalmente em LED, rebaixados em 10 mm, conferem ao carro o máximo grau em termos de modernidade e capacidade esportiva, sob todos os ângulos. A traseira do BMW X4 comunica autoridade e esportividade. As luzes traseiras com seu novo estilo, totalmente em LED, garantem uma presença ainda maior, enquanto os amplos canos do escapamento, situados ao nível da carroceria e com formas livres, enfatizam a modernidade do BMW coupé. A traseira do BMW X4 apresenta uma visão clara e poderosa da estrada. Garante proteção com a parte inferior da carroceria redesenhada,  localizada entre os tubos do escapamento.',
    description: 'Os contornos robustos por sobre as rodas com larga banda de rodagem, aliadas à linha do teto, semelhante ao de um cupê, enfatizam as características típicas do modelo X: potência, supremacia e esportividade. As estreitas luzes de LED traseiras alongam visualmente a traseira do carro, assim como a linha ascendente sobre os para-lamas traseiros. A frente é dominada pela grade curva da BMW com suas duas partes, equipada com faróis de LED estreitos, que conferem ao SUV cupê uma aparência esportiva e dinâmica. O sistema padrão de tração inteligente BMW xDrive nas quatro rodas permite um incomparável dinamismo ao dirigir, juntamente com a transmissão automática de 8 velocidades, a qual também se encontra disponível para todos os modelos BMW X4. Internamente, o veículo agora inclui telas sensíveis ao toque de maior tamanho, controle por meio de gestos e modernos sistemas para assistência ao motorista.', 
    fabrication: 'GASOLINA',
    resum: 'Foi com o X6 que a BMW inaugurou o segmento de SUVs cupês, em 2009. Seis anos depois, chegou a vez de o segundo membro dessa linhagem estrear no mercado brasileiro. O recém-lançado X4 segue os passoss passos de seu irmão maior, aliando o porte imponente dos utilitários esportivos com o design esportivo de um cupê – só que em embalagem mais compacta.',
    ImagesTomodal: {
       IMG1: IMG1,
       IMG2: IMG2,
       IMG3: IMG3,
       IMG4: IMG4,
       IMG5: IMG5,
       IMG6: IMG6,
       IMG7: IMG7
    }
  }

  return (
    <div>
       <main>
        <PrinceAndSLoganArea 
        backgroundIMG={IMGMAIN}
        title="BMWG02"
        subtitle="O BMW X4"
        price="R$ 475.950"
        fabrication="Gasolina"
        />
        <C.Container>
          <motion.p 
            id='resum'
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.5}}
            transition={{delay:0.5, duration: 0.5}}
            variants={{
            hidden: {opacity:0},
            visible: {opacity:1}
            }}         
          >
            {ItemToShow.resum}
          </motion.p>
          <h1>SUA INTRODUÇÃO AO BMW X4:</h1>
         
          <video controls controlsList="nodownload" 
          poster={IMG2} src={FILM}>
          </video>

            {/*DESIGN EXTERIOR*/}
            <C.ImageAndText>
              <motion.div 
                className='left-side'
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5}}
                transition={{delay:0.2, duration: 0.5}}
                variants={{
                  hidden: {opacity:0, x:-50},
                  visible: {opacity:1, x:0}
                }}  
              >
                {!isDesktopScreen &&
                  <h1>DESIGN DA DIANTEIRA DO BMW X4 COM A NOVA GRADE DUPLO RIM DA BMW.</h1>
                }
                <img src={IMGFIRST}/>

              </motion.div>

              <motion.div 
                className='right-side'
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5}}
                transition={{delay:0.2, duration: 0.5}}
                variants={{
                  hidden: {opacity:0, x:50},
                  visible: {opacity:1, x:0}
                }}   
              >
                {isDesktopScreen &&
                  <h1>DESIGN DA DIANTEIRA DO BMW X4 COM A NOVA GRADE DUPLO RIM DA BMW.</h1>
                }
                <br/>
                <p>Graças à sua dianteira completamente renovada, o BMW X4 apresenta uma presença mais progressiva do que nunca. 
                A grade duplo rim dotada de ângulos, o para-choque redesenhado com entradas de ar verticais e faróis totalmente em LED, 
                rebaixados em 10 mm, conferem ao carro o máximo grau em termos de modernidade e capacidade esportiva, sob todos os ângulos.
                </p>       
              </motion.div>
            </C.ImageAndText>

            <C.ImageAndText style={{marginBottom: '60px'}}>
            <motion.div 
              className='left-side'
              initial="hidden"
              whileInView="visible"
              viewport={{once: true, amount: 0.5}}
              transition={{delay:0.2, duration: 0.5}}
              variants={{
                hidden: {opacity:0, x:-50, y:-50},
                visible: {opacity:1, x:0, y:0}
              }} 
            >
                <h1>DESIGN DA TRASEIRA DO BMW X4 COM OS FARÓIS TRASEIROS TOTALMENTE EM LED.</h1>
                <br/>
                <p>A traseira do BMW X4 comunica autoridade e esportividade. As luzes traseiras com seu novo estilo, totalmente em LED, garantem uma presença ainda maior, enquanto os amplos canos do escapamento, 
                  situados ao nível da carroceria e com formas livres, enfatizam a modernidade do BMW coupé. A traseira do BMW X4 apresenta uma visão clara e poderosa da estrada. Garante proteção com a parte inferior da carroceria redesenhada,  
                  localizada entre os tubos do escapamento.
                </p>
              </motion.div>

              <motion.div 
                className='right-side'
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5}}
                transition={{delay:0.2, duration: 0.5}}
                variants={{
                  hidden: {opacity:0, x:50, y:-50},
                  visible: {opacity:1, x:0, y:0}
                }} 
              >
                <img src={IMGTWO}/>
              </motion.div>
            </C.ImageAndText>
        </C.Container>

        {/*INTERIOR DESIGN AREA*/}
        <C.Container>
          <h1 style={{marginBottom:'20px'}}>DESIGN INTERIOR DO BMW X4:</h1>
        </C.Container>

        <C.InteriorDesignIMG style={{backgroundImage: `url(${INTERIOR})`}}>

        </C.InteriorDesignIMG>

        <C.Container>
          {isDesktopScreen &&
            <C.InteriorDesignArea>
              <div className='IMGinterior-and-text'>
                  <img src={INTERIOR1}/>
                  <h4>BMW Live Cockpit.</h4>
                  <p>O BMW Live Cockpit, com função de navegação, 
                    inclui um painel de instrumentos de 5,1 polegadas, 
                    com controle por toque de alta resolução de 10,25 polegadas.
                  </p>
              </div>

              <div className='IMGinterior-and-text'>
                  <img src={INTERIOR2}/>
                  <h4>Bancos M sport.</h4>
                  <p>Os Bancos M sport com ajuste para o motorista e o passageiro dianteiro
                    apresentam várias opções de ajuste manual, incluindo a posição longitudinal, o encosto e a angulação do banco.
                    Adicionalmente, para o motorista é possível ajustar a largura do encosto.
                  </p>
              </div>

              <div className='IMGinterior-and-text' style={{paddingRight: '15px'}}>
                  <img src={INTERIOR3}/>
                  <h4>Enfeite decorativo cromado nos controles.</h4>
                  <p>Os enfeites cromados opcionais e exclusivos sobre os botões de controle dos vidros elétricos
                    e os botões multifuncionais do volante, e também no painel de controle da porta e em seu botão de travamento
                    criam uma sensação de alta qualidade.
                  </p>
              </div>
            </C.InteriorDesignArea>
          }
          
          {!isDesktopScreen &&
          <C.MobileDesignArea>
            <Carousel breakPoints={breakPoints}>
              <div className='IMGinterior-and-text-mobile'>
                  <img src={INTERIOR1}/>
                  <h4>BMW Live Cockpit.</h4>
                  <p>O BMW Live Cockpit, com função de navegação, 
                    inclui um painel de instrumentos de 5,1 polegadas, 
                    com controle por toque de alta resolução de 10,25 polegadas.
                  </p>
              </div>

              <div className='IMGinterior-and-text-mobile'>
                  <img src={INTERIOR2}/>
                  <h4>Bancos M sport.</h4>
                  <p>Os Bancos M sport com ajuste para o motorista e o passageiro dianteiro
                    apresentam várias opções de ajuste manual, incluindo a posição longitudinal, o encosto e a angulação do banco.
                    Adicionalmente, para o motorista é possível ajustar a largura do encosto.
                  </p>
              </div>

              <div className='IMGinterior-and-text-mobile'>
                  <img src={INTERIOR3}/>
                  <h4>Enfeite decorativo cromado nos controles.</h4>
                  <p>Os enfeites cromados opcionais e exclusivos sobre os botões de controle dos vidros elétricos
                    e os botões multifuncionais do volante, e também no painel de controle da porta e em seu botão de travamento
                    criam uma sensação de alta qualidade.
                  </p>
              </div>
            </Carousel>
            </C.MobileDesignArea>
          }

        {/*SERVICES AREA*/}
        <motion.h1
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, amount: 0.5}}
          transition={{delay:0.2, duration: 0.5}}
          variants={{
            hidden: {opacity:0, x:-50},
            visible: {opacity:1, x:0}
          }}         
        >
          SERVIÇOS DIGITAIS E SISTEMAS DE ASSISTÊNCIA AO MOTORISTA NO BMW X4
        </motion.h1>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, amount: 0.5}}
          transition={{delay:0.2, duration: 0.5}}
          variants={{
            hidden: {opacity:0, x:50},
            visible: {opacity:1, x:0}
          }}         
        >
          As tecnologias inovadoras, tais como a integração do smartphone e os ultramodernos sistemas 
          para assistência ao motorista, como o Driving Assistant, aumentam ainda mais a sua experiência ao dirigir, 
          proporcionando mais segurança em seu BMW X4.
        </motion.p>
        </C.Container>

        <C.ServicesContainer>
        <Carousel breakPoints={breakPoints2}>
          <C.ServicesAssistantArea>
            <img src={AMAZONIMG}/>
            <h4>Integração com Amazon Alexa.</h4>
            <p>"Alexa, como está o tempo em São Paulo?" Com o 
              Amazon Alexa Car Integration, se torna mais fácil 
              utilizar o serviço de voz no interior do seu carrro, assim
              como você está acostumado a fazer dentro de casa.
            </p>
          </C.ServicesAssistantArea>

          <C.ServicesAssistantArea>
            <img src={PERSONALIMG}/>
            <h4>BMW Intelligent Personal Assistant.</h4>
            <p>Comunique-se com o seu veículo utilizando o BMW Intelligent Personal Assistant.
              Pronuncie comandos de voz naturais e opere várias funções em seu veículo. 
              Ele também pode explicar tópicos sobre o seu veículo e
              ajudá-lo a conhecer ainda melhor o seu BMW.
            </p>
          </C.ServicesAssistantArea>

          <C.ServicesAssistantArea>
            <img src={XDRIVE}/>
            <h4>BMW xDrive.</h4>
            <p>O sistema inteligente BMW xDrive, de tração nas quatro
              rodas, distruibui de maneira suave e variável a força de
              tração para as rodas dianteiras e traseiras, obtendo maior
              tração, dinâmica ao dirigir e também segurança, sob
              todas as condições.
            </p>
          </C.ServicesAssistantArea>

          <C.ServicesAssistantArea>
            <img src={DRIVINGASSISTANT}/>
            <h4>Driving Assistant.</h4>
            <p>O Driving Assistant oferece o melhor em termos de conforto e
              segurança, durante as situações de trânsito que se mostram
              críticas ou monótonas. Além do conteúdo do Assistente de
              Direção, ele também inclui o Assistente nas Curvas e o
              Assistente de Controle de Faixas, com funções estendidas.
            </p>
          </C.ServicesAssistantArea>
        </Carousel>
        </C.ServicesContainer>

        {/*BACKGROUND AND ADD*/}
        <C.ImageBGAndText style={{backgroundImage:`url(${IMGBG})`}}>
          <div className="ad-title-and-text">
            <h1>
              QUALIDADE, DESIGN E DESEMPENHO, OFERECENDO O MÁXIMO EM VALOR AGREGADO.
            </h1>
          </div>
        </C.ImageBGAndText>

        {/*BMW FINANCE SERVICES*/}
        <C.Container>
          <motion.h1
            className='left-side'
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.5}}
            transition={{delay:0.2, duration: 0.5}}
            variants={{
              hidden: {opacity:0},
              visible: {opacity:1}
            }}           
          >
            CONQUISTE O SEU BMW 0KM COM A BMW SERVIÇOS FINANCEIROS.
          </motion.h1>
          <C.ImageAndText>
              <motion.div 
                className='left-side'
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5}}
                transition={{delay:0.2, duration: 0.5}}
                variants={{
                  hidden: {opacity:0, x:-50, y:-50},
                  visible: {opacity:1, x:0, y:0}
                }}               
              >
                <img src={IMG7}/>
              </motion.div>

              <motion.div 
              className='right-side' 
              style={{marginLeft: '20px'}}
              initial="hidden"
              whileInView="visible"
              viewport={{once: true, amount: 0.5}}
              transition={{delay:0.2, duration: 0.5}}
              variants={{
                hidden: {opacity:0, x:50, y:-50},
                visible: {opacity:1, x:0, y:0}
              }}               
              >
                <h1>O SEU BMW X4 ESTÁ MAIS PERTO DO QUE VOCÊ IMAGINA.</h1>
                <br/>
                <p>Com a BMW Serviços Financeiros você conta com planos de financiamento flexíveis 
                  para facilitar a conquista do seu BMW 0 km. Conheça as opções e descubra o 
                  puro prazer de dirigir seu BMW.
                </p>
              </motion.div>
            </C.ImageAndText>

            <C.ImageAndText>
              <motion.div 
                className='left-side'
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5}}
                transition={{delay:0.2, duration: 0.5}}
                variants={{
                  hidden: {opacity:0, x:-50},
                  visible: {opacity:1, x:0}
                }}                
              >
                  <h1>MY BMW APP : TODOS OS MODELOS BMW, COM OS SEUS DESTAQUES.</h1>
                  <br/>
                  <p>Descubra todos os modelos BMW e os seus destaques, utilizando o aplicativo My BMW APP.
                  </p>
              </motion.div>

              <motion.div 
                className='right-side'
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5}}
                transition={{delay:0.2, duration: 0.5}}
                variants={{
                  hidden: {opacity:0, x:50},
                  visible: {opacity:1, x:0}
                }}                 
              >
                <img src={IMG3}/>
              </motion.div>
            </C.ImageAndText>
        </C.Container>

        {/*CONTACT AREA*/}
        <ContactArea/>

        </main>

        <Footer/>
    </div>
  )
}

export default BMWX4