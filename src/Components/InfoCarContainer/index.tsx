import * as C from './styles';
import ModalImg from '../Modal';
import TitleAndText from '../TitleAndText';

type Props = {
    title: string;
    resum: string;
    pageSubTitle: string;
    design: string;
    description: string;
    modalTitles: {
        title1: string,
        resum1: string,
        title2: string,
        resum2: string,
        title3: string,
        resum3: string,
        title4: string,
        resum4: string,
        title5: string,
        resum5: string,
        title6: string,
        resum6: string,
        title7: string,
        resum7: string
    },
    imagesToModal: {
      IMG1: string;
      IMG2: string;
      IMG3: string;
      IMG4: string;
      IMG5: string;
      IMG6: string;
      IMG7: string;
    },
    children?: JSX.Element;
}

const InfoCarContainer = ({design, imagesToModal, modalTitles, description, pageSubTitle, children}: Props) => {
  return (
    <main>
        <C.InfoCarContainer>
         
            <C.GridDesignArea>
              <TitleAndText title={`O SEU DESIGN:`} text={design}/>
              <ModalImg 
                imagesToModal={
                  [
                    {IMG: imagesToModal.IMG1, title: modalTitles.title1, resum: modalTitles.resum1},
                    {IMG: imagesToModal.IMG2, title: modalTitles.title2, resum: modalTitles.resum2},
                    {IMG: imagesToModal.IMG3, title: modalTitles.title3, resum: modalTitles.resum3},
                    {IMG: imagesToModal.IMG4, title: modalTitles.title4, resum: modalTitles.resum4},
                    {IMG: imagesToModal.IMG5, title: modalTitles.title5, resum: modalTitles.resum5},
                    {IMG: imagesToModal.IMG6, title: modalTitles.title6, resum: modalTitles.resum6},
                    {IMG: imagesToModal.IMG7, title: modalTitles.title7, resum: modalTitles.resum7},
                  ] 
                } 
              />
              <ModalImg 
                imagesToModal={
                  [
                    {IMG: imagesToModal.IMG2, title: modalTitles.title2, resum: modalTitles.resum2},
                    {IMG: imagesToModal.IMG3, title: modalTitles.title3, resum: modalTitles.resum3},
                    {IMG: imagesToModal.IMG4, title: modalTitles.title4, resum: modalTitles.resum4},
                    {IMG: imagesToModal.IMG5, title: modalTitles.title5, resum: modalTitles.resum5},
                    {IMG: imagesToModal.IMG6, title: modalTitles.title6, resum: modalTitles.resum6},
                    {IMG: imagesToModal.IMG7, title: modalTitles.title7, resum: modalTitles.resum7},
                    {IMG: imagesToModal.IMG1, title: modalTitles.title1, resum: modalTitles.resum1}
                  ]
                } 
              />
              <ModalImg 
                imagesToModal={
                  [
                    {IMG: imagesToModal.IMG3, title: modalTitles.title3, resum: modalTitles.resum3},
                    {IMG: imagesToModal.IMG4, title: modalTitles.title4, resum: modalTitles.resum4},
                    {IMG: imagesToModal.IMG5, title: modalTitles.title5, resum: modalTitles.resum5},
                    {IMG: imagesToModal.IMG6, title: modalTitles.title6, resum: modalTitles.resum6},
                    {IMG: imagesToModal.IMG7, title: modalTitles.title7, resum: modalTitles.resum7},
                    {IMG: imagesToModal.IMG1, title: modalTitles.title1, resum: modalTitles.resum1},
                    {IMG: imagesToModal.IMG2, title: modalTitles.title2, resum: modalTitles.resum2}
                  ] 
                } 
                marginNeeded={true}
              />
            </C.GridDesignArea>
        </C.InfoCarContainer>

          {children}
          
          <C.InfoCarContainer>
            <TitleAndText title={pageSubTitle} text={description}/>
              <C.LastImagesArea>
                <ModalImg 
                  imagesToModal={
                    [
                      {IMG: imagesToModal.IMG4, title: modalTitles.title4, resum: modalTitles.resum4},
                      {IMG: imagesToModal.IMG5, title: modalTitles.title5, resum: modalTitles.resum5},
                      {IMG: imagesToModal.IMG6, title: modalTitles.title6, resum: modalTitles.resum6},
                      {IMG: imagesToModal.IMG7, title: modalTitles.title7, resum: modalTitles.resum7},
                      {IMG: imagesToModal.IMG1, title: modalTitles.title1, resum: modalTitles.resum1},
                      {IMG: imagesToModal.IMG2, title: modalTitles.title2, resum: modalTitles.resum2},
                      {IMG: imagesToModal.IMG3, title: modalTitles.title3, resum: modalTitles.resum3}
                    ] 
                  } 
                />
                <ModalImg 
                  imagesToModal={
                    [
                      {IMG: imagesToModal.IMG5, title: modalTitles.title5, resum: modalTitles.resum5},
                      {IMG: imagesToModal.IMG6, title: modalTitles.title6, resum: modalTitles.resum6},
                      {IMG: imagesToModal.IMG7, title: modalTitles.title7, resum: modalTitles.resum7},
                      {IMG: imagesToModal.IMG1, title: modalTitles.title1, resum: modalTitles.resum1},
                      {IMG: imagesToModal.IMG2, title: modalTitles.title2, resum: modalTitles.resum2},
                      {IMG: imagesToModal.IMG3, title: modalTitles.title3, resum: modalTitles.resum3},
                      {IMG: imagesToModal.IMG4, title: modalTitles.title4, resum: modalTitles.resum4}
                    ]
                  } 
                  marginNeeded={true}
                />
                <ModalImg 
                  imagesToModal={
                    [
                      {IMG: imagesToModal.IMG6, title: modalTitles.title6, resum: modalTitles.resum6},
                      {IMG: imagesToModal.IMG7, title: modalTitles.title7, resum: modalTitles.resum7},
                      {IMG: imagesToModal.IMG1, title: modalTitles.title1, resum: modalTitles.resum1},
                      {IMG: imagesToModal.IMG2, title: modalTitles.title2, resum: modalTitles.resum2},
                      {IMG: imagesToModal.IMG3, title: modalTitles.title3, resum: modalTitles.resum3},
                      {IMG: imagesToModal.IMG4, title: modalTitles.title4, resum: modalTitles.resum4},
                      {IMG: imagesToModal.IMG5, title: modalTitles.title5, resum: modalTitles.resum5}
                    ]
                  } 
                />
                <ModalImg 
                  imagesToModal={
                    [
                      {IMG: imagesToModal.IMG7, title: modalTitles.title7, resum: modalTitles.resum7},
                      {IMG: imagesToModal.IMG1, title: modalTitles.title1, resum: modalTitles.resum1},
                      {IMG: imagesToModal.IMG2, title: modalTitles.title2, resum: modalTitles.resum2},
                      {IMG: imagesToModal.IMG3, title: modalTitles.title3, resum: modalTitles.resum3},
                      {IMG: imagesToModal.IMG4, title: modalTitles.title4, resum: modalTitles.resum4},
                      {IMG: imagesToModal.IMG5, title: modalTitles.title5, resum: modalTitles.resum5},
                      {IMG: imagesToModal.IMG6, title: modalTitles.title6, resum: modalTitles.resum6},
                    ]
                  } 
                  marginNeeded={true}
                />
            </C.LastImagesArea>
          </C.InfoCarContainer>
      </main>
  )
}

export default InfoCarContainer;