import BMWE71BG from '../assets/bmwe71/bmwe71-bg.jpg';
import BMWE84BG from '../assets/bmwe84/bmwe84-bg.jpg';
import BMWG02BG from '../assets/bmwg02/IMGBG.jpg';

type ItemsDataType = {
    title: string;
    backgroundIMG: string;
}

export const ItensData: ItemsDataType[] = [
    {
        title: 'BMWE71',
        backgroundIMG: BMWE71BG,
    },
    {
        title: 'BMWG02',
        backgroundIMG: BMWG02BG,
    },
    {
        title: 'BMWE84',
        backgroundIMG: BMWE84BG,
    }
]