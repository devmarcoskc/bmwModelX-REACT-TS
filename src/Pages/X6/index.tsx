import BMWE71BG from '../../assets/bmwe71/bmwe71-main.jpg';
import DESIGNBG from '../../assets/bmwe71/bmwe71-bg.jpg';
import IMG1 from '../../assets/bmwe71/bmwe71-first.jpg';
import IMG3 from '../../assets/bmwe71/bmwe71-second.jpg';
import IMG5 from '../../assets/bmwe71/bmwe71-third.jpg';
import IMG4 from '../../assets/bmwe71/bmwe71-fourth.jpg';
import IMG2 from '../../assets/bmwe71/img6.jpg';
import IMG6 from '../../assets/bmwe71/IMG7.jpg';
import IMG7 from '../../assets/bmwe71/IMG8.jpg';
import FILM1 from '../../assets/bmwe71/FILM1.mp4';
import FILM2 from '../../assets/bmwe71/FILM2.mp4';
import FILM3 from '../../assets/bmwe71/FILM3.mp4';
import FILM4 from '../../assets/bmwe71/FILM4.mp4';
import FILM5 from '../../assets/bmwe71/FILM5.mp4';
import FILM6 from '../../assets/bmwe71/FILM6.mp4';
import HIMAGE1 from '../../assets/bmwe71/Highlights/IMG1.jpg';
import HIMAGE2 from '../../assets/bmwe71/Highlights/IMG2.jpg';
import HIMAGE3 from '../../assets/bmwe71/Highlights/IMG3.jpg';
import HIMAGE4 from '../../assets/bmwe71/Highlights/IMG4.jpg';
import HIMAGE5 from '../../assets/bmwe71/Highlights/IMG5.jpg';
import HIMAGE6 from '../../assets/bmwe71/Highlights/IMG6.jpg';
import DESIGN1 from '../../assets/bmwe71/DESIGN1.jpg';
import DESIGN2 from '../../assets/bmwe71/DESIGN2.jpg';
import DESIGN3 from '../../assets/bmwe71/DESIGN3.jpg';
import DESIGN4 from '../../assets/bmwe71/DESIGN4.jpg';
import DESIGN5 from '../../assets/bmwe71/DESIGN5.jpg';
import TECH1 from '../../assets/bmwe71/TECH1.jpg';
import TECH2 from '../../assets/bmwe71/TECH2.jpg';
import TECH3 from '../../assets/bmwe71/TECH3.jpg';
import TECH4 from '../../assets/bmwe71/TECH4.jpg';
import CarBannerHeader from '../../Components/CarBannerHeader';
import InfoCarContainer from '../../Components/InfoCarContainer';
import ContactArea from '../../Components/ContactsArea';
import Footer from '../../Components/Footer';
import HighlightArea from '../../Components/HightlightsArea';
import ResumArea from '../../Components/ResumCarText';
import * as C from './styles';
import TitleAndText from '../../Components/TitleAndText';
import Carousel from 'react-elastic-carousel';


const BMWX6 = () => {

  const breakPoints = [
    {width: 1, itemsToShow: 1},
    {width: 500, itemsToShow: 1},
    {width: 768, itemsToShow: 3.5},
    {width: 1200, itemsToShow: 3.5},
  ]

  const ItemToShow= {
    design: 'Atrai os olhares: o novo BMW X6 nem precisa se mover para se destacar na multidão. Ele o faz mesmo parado, graças às suas poderosas proporções e ao seu design expressivo, em combinação com os frisos Shadow Line brilhantes da linha BMW Individual. Após o pôr do sol é quando este aventureiro revela a sua verdadeira natureza. É nessa altura que a exclusiva grade BWM "Iconic Glow" torna visível a verdadeira natureza extrovertida do veículo. E quando as impressionantes rodas de liga leve de 22” começam a rodar, o sangue corre nas veias. Em contraste, o interior, graças aos materiais exclusivos e à atenção voltada ao condutor, oferece níveis equilibrados de emoção e de tranquilidade.',
    description: 'Em 2008, surgiu nas ruas um carro que desafiava classificações: Seria um cupê? Um SUV? Não se trata de  nenhum dos dois, na verdade, embora combinasse as melhores qualidades das duas classes de veículos. É um carro para os individualistas, que valorizam o desempenho sobre todos os aspectos: Dotado de motores de 6 e 8 cilindros, o BMW X6 dispõe de muita potência, perfeitamente distribuída através do Dynamic Performance Control. O DPC, juntamente com a tração inteligente xDrive nas quatro rodas, aumenta a precisão ao dirigir, a estabilidade direcional e também a tração, uma vez que o torque da tração pode agora ser continuamente distribuído individualmente a cada roda.', 
    fabrication: '2008 - 2014', 
    resum: 'Incomparável e não conformista – o novo BMW X6 representa uma assertividade provocadora. Isso é particularmente evidente na carroceria extremamente esportiva e com novo e distinto conceito de design, demonstrado por tecnologias visionárias e absolutamente exclusivas, como a impressionante grade BMW "Iconic Glow"’. Tudo isso aponta para um fato: o domínio absoluto que o novo BMW X6 demonstra em cada percurso, graças ao potente motor, à precisão da suspensão e equipamentos. Experimente uma forma totalmente nova de superar as expectativas com o novo BMW X6.',
    modalTitles: {
        title1: 'EM DIREÇÃO A DIFERENTES DIMENSÕES',
        resum1: 'A cabine orientada para o condutor com bancos esportivos e amplos displays de 12.3" garantem um uso perfeito e conforto máximo.',
        title2: 'DE DISPARAR O CORAÇÃO',
        resum2: `A arrojada grade BMW 'Iconic Glow' e o novo para-choques do bMW X6`,
        title3: 'CADA VISTA É UMA PAISAGEM',
        resum3: 'O teto solar panorâmico Sky Lounge permite uma sensação de espaço ilimitado',
        title4: 'DOMINTA TUDO, ATÉ OS MÍNIMOS DETALHES',
        resum4: 'O interiro se destaca pelos materiais exclusivos e pelas elegantes aplicações em vidro',
        title5: 'MAIS ALTO, MAIS RÁPIDO E MAIS AMPLO',
        resum5: 'Os estreitos faróis traseiros LED e os escapamentos distintos reforçam a poderosa traseira',
        title6: 'PERFEITO EM TODOS OS LUGARES',
        resum6: 'Sua suspensão perfeita garente que o carro tenha um excelente desempenho. Garantindo conforto para o motorista e passageiros.',
        title7: 'VISUAL DE DESTAQUE',
        resum7: 'As proporções dinâmicas e as poderosas superfícies lhe conferem uma estética marcante e tornam visíveis as qualidades que o distinguem.'
        },
    ImagesTomodal: {
       IMG1: IMG1,
       IMG2: IMG2,
       IMG3: IMG3,
       IMG4: IMG4,
       IMG5: IMG5,
       IMG6: IMG6,
       IMG7: IMG7
    },
    VideosToShow: {
      FILM1: FILM1,
      FILM2: FILM2,
      FILM3: FILM3,
      FILM4: FILM4,
      FILM5: FILM5,
      FILM6: FILM6
    }
  }

  const HighlightInfos = [
    {img: HIMAGE1, title: 'DESIGN DOMINANTE',},
    {img: HIMAGE2, title: 'PURA PÔTENCIA RADIANTE'},
    {img: HIMAGE3, title: 'SUSPENSÃO PERFEITA'},
    {img: HIMAGE4, title: 'VERDADEIRAMENTE ESPORTIVO'},
    {img: HIMAGE5, title: 'VERDADEIRA GRANDEZA'},
    {img: HIMAGE6, title: 'PIONEIRO'},
  ]

  return (
    <div>
       <CarBannerHeader
          backgroundIMG={BMWE71BG}
          title="BMWE71"
          subtitle="O NOVO BMW X6"
          price="R$ 744.340"
          fabrication="Gasolina"
       />

       <ResumArea resum={ItemToShow.resum} title="BMWE 71"/>

       <HighlightArea 
        VideosToModal={ItemToShow.VideosToShow}
        ImagesAndTitle={HighlightInfos}
       /> 
       
       <InfoCarContainer
        title="BMWE71"
        resum={ItemToShow.resum}
        modalTitles={ItemToShow.modalTitles}
        description={ItemToShow.description}
        design={ItemToShow.design}
        pageSubTitle="POTÊNCIA QUE ATRAI"
        imagesToModal={ItemToShow.ImagesTomodal}
       >
        <div>
          {/*DESIGN AREA HIGHLIGHTS*/}
          <C.DeisgnTextContainer>
            <TitleAndText title='OS DESTAQUES DE DESIGN DO NOVO BMW X6.' text='À primeira vista, a carroçaria forte do novo BMW X6 sugere uma potência absoluta com o poderoso motor a gasolina BMW TwinPower Turbo. 
              Seu design esportivo é coroado pelas robustas rodas de liga leve de 22” M, laser light, além de outros detalhes esportivos. 
              Opções de equipamento como a grade frontal da BMW ‘Iconic Glow’, a luz laser em design X e o teto de vidro panorâmico Sky Lounge são detalhes adicionais distintos. 
              O interior é igualmente impressionante, com detalhes exclusivos de design, como o câmbio de vidro ‘CraftedClarity’, os bancos esportivos e a luz ambiente.'/>
          </C.DeisgnTextContainer>
          
          <C.DesignIMGArea style={{backgroundImage:`url(${DESIGNBG})`}}></C.DesignIMGArea>
          <C.HighlightsDesign>
            <Carousel breakPoints={breakPoints}>
              <div className='design-and-text'>
                <img src={DESIGN1}/>
                <h4>Grade BMW Iconic Glow</h4>
                <p>Pellentesque habitant morbi tristique 
                  senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, 
                  ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. 
                  Aenean ultricies mi vitae est. Mauris placerat eleifend leo
                </p>
              </div>
                <div className='design-and-text'>
                  <img src={DESIGN2}/>
                  <h4>Luz laser do BMW.</h4>
                  <p>Pellentesque habitant morbi tristique 
                  senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, 
                  ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. 
                  Aenean ultricies mi vitae est. Mauris placerat eleifend leo
                  </p>
                </div>
              <div className='design-and-text'>
                <img src={DESIGN3}/>
                <h4>Luz de boas vindas.</h4>
                <p>Pellentesque habitant morbi tristique 
                  senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, 
                  ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. 
                  Aenean ultricies mi vitae est. Mauris placerat eleifend leo
                </p>
              </div>
              <div className='design-and-text'>
                <img src={DESIGN4}/>
                <h4>Teto Solar panorâmico</h4>
                  <p>Pellentesque habitant morbi tristique 
                  senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, 
                  ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. 
                  Aenean ultricies mi vitae est. Mauris placerat eleifend leo
                  </p>
              </div>
              <div className='design-and-text' style={{paddingRight: '15px'}}>
                  <img src={DESIGN5}/>
                  <h4>Rodas em liga leve Doube-Spoke de 22"polegadas</h4>
                  <p>Pellentesque habitant morbi tristique 
                  senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, 
                  ultricies eget, tempor sit amet, ante. 
                  </p>
              </div>
            </Carousel>
          </C.HighlightsDesign>

          {/*TECHNOLOGY AREA*/}
          <C.TechnologyContainer>
            <TitleAndText title='AS TECNOLOGIAS INOVADORAS DO NOVO BMW X6.' text='No BMW X6, dirigir parece mais fácil: as várias tecnologias e recursos ultramodernos permitem o máximo conforto possível em cada viagem. 
            Recursos inovadores, como os suportes para copos com controle de temperatura ou o impressionante Control Display, um monitor de controle de 12,3” e sensível ao toque, ajudam você em todas as situações. 
            E, graças aos recursos do banco traseiro Entertainment Professional, assentos confortáveis com função de massagem e 
            ventilação ao lado do pacote Ambient Air, é possível ter o máximo entretenimento e descanso.'/>
          </C.TechnologyContainer>

            <C.TechnologySlider>
              <Carousel breakPoints={breakPoints}>
                <div className='techArea'>
                  <img src={TECH1}/>
                  <h4>Conjunto do compartimento de bagagem.</h4>
                  <p>Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, 
                    euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.
                  </p>
                </div>

                <div className='techArea'>
                  <img src={TECH2}/>
                  <h4>Porta-copos com controle de temperatura.</h4>
                  <p>Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, 
                    euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.
                  </p>
                </div>

                <div className='techArea' style={{paddingRight: '15px'}}>
                  <img src={TECH3}/>
                  <h4>BMW Live Cockpit Professional.</h4>
                  <p>Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, 
                    euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.
                  </p>
                </div>

                <div className='techArea' style={{paddingRight: '15px'}}>
                  <img src={TECH4}/>
                  <h4>Banco traseiro Entertainment Professional.</h4>
                    <p>Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, 
                    euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.
                    </p>
                </div>
              </Carousel>
            </C.TechnologySlider>
            
        </div>
      </InfoCarContainer>

       <ContactArea carTitle="BMWE71"/>
       <Footer/>
    </div>
  )
}

export default BMWX6;