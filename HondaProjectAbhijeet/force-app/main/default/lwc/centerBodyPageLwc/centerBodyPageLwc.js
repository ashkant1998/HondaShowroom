import { LightningElement,api } from 'lwc';
import getCarouselImages from '@salesforce/resourceUrl/CarouselImg';
import getBikeImg from '@salesforce/resourceUrl/TwoWheelerBikeImg';
export default class CenterBodyPageLwc extends LightningElement {
   
   CarouselImg = [
        {
            id:"1",
            src : getCarouselImages+'/Imgcaursol/ImageOne.png',
        },
        {
            id:"2",
            src: getCarouselImages+'/Imgcaursol/ImageTwo.png'
        },
        {
            id:"3",
            src: getCarouselImages+'/Imgcaursol/ImageThree.png'
        },
        {
            id:"4",
            src: getCarouselImages+'/Imgcaursol/ImageFour.png'
        },
        {
            id:"5",
            src: getCarouselImages+'/Imgcaursol/ImageFive.png'
        },
        {
            id:"6",
            src: getCarouselImages+'/Imgcaursol/ImageSix.png'
        },
        {
            id:"7",
            src: getCarouselImages+'/Imgcaursol/ImageSeven.png'
        },
        {
            id:"8",
            src: getCarouselImages+'/Imgcaursol/ImageEight.png'
        }

    ]
    
    data = [{
        id:"1",
        image: getBikeImg + '/bikefour/bikefive.png'
        },
        {
            id:"2",
            image: getBikeImg + '/bikefour/bikefour.png'
        },
        {
            id:"3",
            image: getBikeImg + '/bikefour/bikesix.png'
        },
    
]


}