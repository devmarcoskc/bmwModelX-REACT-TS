import X1BG from '../assets/bmwe84/X1BG.mp4';
import X4BG from '../assets/bmwg02/X4BG.mp4';
import X6BG from '../assets/bmwe71/X6BG.mp4';

type ItemsDataType = {
    title: string;
    videoBG: string;
}

export const ItensData: ItemsDataType[] = [
    {
        title: 'BMWE 71',
        videoBG: X6BG
    },
    {
        title: 'BMWG 02',
        videoBG: X4BG
    },
    {
        title: 'BMWE 84',
        videoBG: X1BG
    }
]