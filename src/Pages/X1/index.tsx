import IMGMAIN from "../../assets/bmwe84/IMG-MAIN.jpg";
import IMG1 from "../../assets/bmwe84/IMG1.jpg";
import IMG2 from "../../assets/bmwe84/IMG2.jpg";
import IMG3 from "../../assets/bmwe84/IMG3.jpg";
import IMG4 from "../../assets/bmwe84/IMG4.png";
import IMG5 from "../../assets/bmwe84/IMG5.jpeg";
import IMG6 from "../../assets/bmwe84/IMG6.jpg";
import IMG7 from "../../assets/bmwe84/IMG7.jpg";
import FILM1 from '../../assets/bmwe84/FILM1.mp4';
import FILM2 from '../../assets/bmwe84/FILM2.mp4';
import FILM3 from '../../assets/bmwe84/FILM3.mp4';
import FILM4 from '../../assets/bmwe84/FILM4.mp4';
import FILM5 from '../../assets/bmwe84/FILM5.mp4';
import FILM6 from '../../assets/bmwe84/FILM6.mp4';
import HIMAGE1 from '../../assets/bmwe84/Highlights/IMG1.jpg';
import HIMAGE2 from '../../assets/bmwe84/Highlights/IMG2.jpeg';
import HIMAGE3 from '../../assets/bmwe84/Highlights/IMG3.jpg';
import HIMAGE4 from '../../assets/bmwe84/Highlights/IMG4.jpg';
import HIMAGE5 from '../../assets/bmwe84/Highlights/IMG5.jpg';
import HIMAGE6 from '../../assets/bmwe84/Highlights/IMG6.jpg';

import CarBannerHeader from "../../Components/CarBannerHeader";
import InfoCarContainer from "../../Components/InfoCarContainer";
import ContactArea from "../../Components/ContactsArea";
import Footer from "../../Components/Footer";
import ResumArea from "../../Components/ResumCarText";
import HighlightArea from "../../Components/HightlightsArea";

const BMWX1 = () => {

  const ItemToShow = {
    design: 'No centro da frente do veículo, se localiza a grade curva dupla da BMW, distinta e abrangente, em um formato quase retangular. Juntamente com os faróis em LED adaptativos, que se estendem até a extemidade do veículo, que se estendem até à extremidade do veículo, o novo BMW X1 apresenta uma presença marcante. Com sua frente avantajada, design integrado das superfícies e proporções verticais, o novo BMW X1 apresenta uma silhueta que é extremamente dinâmica. Graças a interação entre o vidro escuro e transparente e o padrão hexagonal existente na lateral do veículo, bem como os faróis traseiros e tridimensionais, com seu formato em L, apresentam uma presença morderna, sem dúvida.',
    description: 'Sua robusta versatilidade posiciona este veículo em uma outra categoria - a calibração de sua mecânica, voltada para o desempenho esportivo, constitui uma garantia de dinâmica e agilidade, sob todas as condições. E com a tração BMW xDrive inteligente nas quatro rodas, tanto a tração como a dinâmica ao dirigir atingem níveis empolgantes, pois a potência de tração é continuamente distribuída para as rodas dianteiras e para o eixo traseiro. Isto assegura o seu prazer ao dirigir, em todos os momentos. O design atraente exibe sua aparência poderosa e esportiva. Ao mesmo tempo, o interior de alta qualidade é realçado a partir dos acabamentos interiores que harmonizam tons de cores, dotados de detalhes em aço inoxidável.', 
    fabrication: '2009 – 2015', 
    resum: 'Elegância, sofisticação e versatilidade definem o novo BMW X1. Aos que curtem carros com estilo marcante e moderno, o exterior do modelo agrada pela linguagem de design estruturada, faróis em LED adaptativos que se estendem até a extremidade, frente avantajada e silhueta dinâmica. Além de elementos estéticos que o tornam mais robusto e imponente; sendo maior, mais largo e mais espaçoso que outras versões.',
    modalTitles: {
      title1: 'VIAJE PRA TODO LUGAR',
      resum1: 'Feito para você, toda sua família e amigos. Viaje para todos os lugares',
      title2: 'PERFEITO PARA VOCÊ',
      resum2: `O carro que você sempre sonhou em todas as utilidades.`,
      title3: 'INTERIOR IMPECÁVEL',
      resum3: 'O moderno interior se encontra equipado com materiais inovadores e de alta qualidade, tais como o BMW Curved Display.',
      title4: 'EXCELENTE DESEMPENHO',
      resum4: 'O novo BMW X1 se destaca em seu desempenho pelas estradas.',
      title5: 'ALTO, RÁPIDO E VELOZ',
      resum5: 'Suas viagens jamais serão as mesmas depois de experimentar o novo BMW X1.',
      title6: 'PORTA-MALAS ESPAÇOSO',
      resum6: 'Porta-malas feito para caber todas as malas para as viagens.',
      title7: 'O MELHOR',
      resum7: 'Se você busca tudo em carro, irá encontrar no novo BMW X1.'
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
    {img: HIMAGE1, title: 'TEXTURA PERFEITA',},
    {img: HIMAGE2, title: 'FARÓIS LED ADAPTATIVOS'},
    {img: HIMAGE3, title: 'SUSPENSÃO PERFEITA'},
    {img: HIMAGE4, title: 'INTERIOR INOVADOR'},
    {img: HIMAGE5, title: 'FEITO PRA TUDO'},
    {img: HIMAGE6, title: 'EXPERIÊNCIA ÚNICA'},
  ]

  return (
    <div>
      <CarBannerHeader
        backgroundIMG={IMGMAIN}
        title="BMW84 X1"
        subtitle="VIVA NOSSO SONHOS"
        price="R$ 296.950"
        fabrication="Gasolina"
      />

      <ResumArea resum={ItemToShow.resum} title="BMWE 71"/>

      <HighlightArea ImagesAndTitle={HighlightInfos}
      VideosToModal={ItemToShow.VideosToShow}
      /> 

      <InfoCarContainer
        title="BMWE84 X1"
        resum={ItemToShow.resum}
        modalTitles={ItemToShow.modalTitles}
        description={ItemToShow.description}
        design={ItemToShow.design}
        pageSubTitle="INOVAÇÃO E CONFORTO, NO NOVO BMW SÉRIE X1."
        imagesToModal={ItemToShow.ImagesTomodal}
      />

      <ContactArea carTitle="BMW X1"/>
      <Footer/>
    </div>
  )
}

export default BMWX1