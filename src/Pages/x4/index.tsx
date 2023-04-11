import * as C from './styles';
import {useState} from 'react';
import IMGMAIN from '../../assets/bmwg02/IMG1.jpg';
import IMGFIRST from '../../assets/bmwg02/IMG-1.jpg';
import IMG2 from '../../assets/bmwg02/IMG2.jpg';
import IMGTWO from '../../assets/bmwg02/IMG-2.jpg';
import IMG3 from '../../assets/bmwg02/IMG3.jpg';
import IMG4 from '../../assets/bmwg02/IMG4.jpg';
import IMG7 from '../../assets/bmwg02/IMG7.jpg';
import INTERIOR from '../../assets/bmwg02/INTERIOR.jpg';
import INTERIOR1 from '../../assets/bmwg02/INTERIOR1.jpg';
import INTERIOR2 from '../../assets/bmwg02/INTERIOR2.jpg';
import INTERIOR3 from '../../assets/bmwg02/INTERIOR3.jpg';
import INTERIOR4 from '../../assets/bmwg02/INTERIOR4.jpg';
import INTERIOR5 from '../../assets/bmwg02/INTERIOR5.jpg';
import sliderIMG1 from '../../assets/bmwg02/slider1.jpg';
import sliderIMG2 from '../../assets/bmwg02/slider7.jpg';
import SERVICES1 from '../../assets/bmwg02/AMAZONALEXA.jpg';
import SERVICES4 from '../../assets/bmwg02/DRIVINGASSISTANT.jpg';
import SERVICES3 from '../../assets/bmwg02/XDRIVE.jpg';
import SERVICES2 from '../../assets/bmwg02/PERSONALASSISTANT.jpg';
import SERVICES5 from '../../assets/bmwg02/PARKING.jpg';
import FILM from '../../assets/bmwg02/FILMINTRO.mp4';
import CarBannerHeader from '../../Components/CarBannerHeader';
import BannerAndSlider from '../../Components/BannerAndSlider';
import useMediaQuery from '../../Hooks/MediaQuery';
import ContactArea from '../../Components/ContactsArea';
import Footer from '../../Components/Footer';
import { motion } from 'framer-motion';
import {IoIosArrowForward} from 'react-icons/io';
import {IoIosArrowBack} from 'react-icons/io';

const BMWX4 = () => {
  const [currentSlider, setCurrentSlider] = useState(0);
  
  const isDesktopScreen = useMediaQuery("(min-width: 1060px)");

  const breakPoints = [
    {width: 1, itemsToShow: 1},
    {width: 500, itemsToShow: 1}
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
  }

  const SliderImgs = [
    {url: sliderIMG1},
    {url: sliderIMG2},
    {url: IMG2},
    {url: IMG4,}
  ]
  
  const InteriorDesignInfos = [
    {img: INTERIOR1, title: 'BMW Live Cockpit.'},
    {img: INTERIOR2, title: 'Bancos M sport.'},
    {img: INTERIOR3, title: 'Enfeite decorativo cromado nos controles.'},
    {img: INTERIOR4, title: 'Espaço feito para o melhor conforto.'},
    {img: INTERIOR5, title: 'Painel de controle totalmente inovador.'},
  ]

  const AssistanceServicesInfos = [
    {img:SERVICES1, title: 'Integração com Amazon Alexa.'},
    {img:SERVICES2, title: 'BMW Intelligent Personal Assistant.'},
    {img:SERVICES3, title: 'BMW xDrive.'},
    {img:SERVICES4, title: 'Driving Assistant.'},
    {img:SERVICES5, title: 'Parking Assistant.'}
  ]

  const goToPrevious = (e:React.MouseEvent<HTMLDivElement>) => {
    const isFirstSlide = currentSlider === 0;
    const newIndex = isFirstSlide ? SliderImgs.length - 1 : currentSlider -1;
    setCurrentSlider(newIndex);
  }

  const goToNext = (e:React.MouseEvent<HTMLDivElement>) => {
    const isLastSlide = currentSlider === SliderImgs.length -1
    const newIndex = isLastSlide ? 0 : currentSlider +1;
    setCurrentSlider(newIndex);
  }

  return (
    <div>
       <main>
        <CarBannerHeader 
          backgroundIMG={IMGMAIN}
          title="BMWG02"
          subtitle="O BMW X4"
          price="R$ 475.950"
          fabrication="Gasolina"
        />
        <C.Container80PctWidth>
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
        </C.Container80PctWidth>

        {/*INTERIOR DESIGN AREA*/}
        <C.Container80PctWidth>
          <h1 style={{marginBottom:'20px'}}>DESIGN INTERIOR DO BMW X4:</h1>
        </C.Container80PctWidth>
        <BannerAndSlider SlidesInfos={InteriorDesignInfos} IMGBG={INTERIOR} marginBottomIsNeed={false}/>

        <C.Container80PctWidth>
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
        </C.Container80PctWidth>
        <BannerAndSlider SlidesInfos={AssistanceServicesInfos} marginBottomIsNeed={true}/>

        {/*SLIDER IMAGES*/}
        <C.SliderIMGS>
          <div className='left-arrow-slider' onClick={goToPrevious}>
            <IoIosArrowBack/>
          </div>
          <div className='right-arrow-slider' onClick={goToNext}>
            <IoIosArrowForward/>
          </div>
          
          <C.Slider margin={currentSlider}>
         
            {SliderImgs.map((item, index) => (
                <C.ItemSlider key={index} style={{backgroundImage:`url(${item.url})`}}>
                </C.ItemSlider>
            ))}
          </C.Slider>

        </C.SliderIMGS>

        {/*BMW FINANCE SERVICES*/}
        <C.Container80PctWidth>
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
        </C.Container80PctWidth>

        {/*CONTACT AREA*/}
        <ContactArea carTitle='BMWG02'/>
        
        </main>
        <Footer/>
    </div>
  )
}

export default BMWX4;