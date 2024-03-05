import { LightningElement,api,wire,track } from 'lwc';
import getBikeImg from "@salesforce/resourceUrl/TwoWheelerBikeImg";
import logo from '@salesforce/resourceUrl/HondaLogoSs';
import getBikeImge from '@salesforce/resourceUrl/TwoWheelerBikeImg';

export default class HeaderHomePageLwc extends LightningElement {
   honLogo = logo;
    bikeImg = getBikeImg + '/bikefour/bikefour.png';
    bikeImg2 = getBikeImg + '/bikefour/bikefive.png';
 @track data = false;

 handleClickOn(event){
   href="https://solarsystemcom-dev-ed.develop.builder.salesforce-experience.com/sfsites/picasso/core/config/commeditor.jsp?exitURL=https%3A%2F%2Fsolarsystemcom-dev-ed.develop.my.salesforce.com%2Fservlet%2Fnetworks%2Fswitch%3FnetworkId%3D0DB5j000000WSg5%26startURL%3D%252FcommunitySetup%252FcwApp.app%2523%252Fc%252Fhome";
 }
 
 
   handleclickMot(){      

      this.data = [{
         id:"1",
         image: getBikeImge + '/bikefour/bikefive.png'
         },
         {
             id:"2",
             image: getBikeImge + '/bikefour/bikefour.png'
         },
         {
             id:"3",
             image: getBikeImge + '/bikefour/bikesix.png'
         },
         {
            id:"4",
            image: getBikeImge + '/bikefour/UniconBikeImg.png'
        },
        {
         id:"5",
         image: getBikeImge + '/bikefour/ShineBikeImg.png'
     },
     {
      id:"6",
      image: getBikeImge + '/bikefour/HondaBikeImg.png'
  },
  {
   id:"7",
   image: getBikeImge + '/bikefour/HonBikeImg.png'
},
{
   id:"8",
   image: getBikeImge + '/bikefour/CDbikeImgTwo.png'
},
{
   id:"9",
   image: getBikeImge + '/bikefour/sp160_header_thumb_imgbikeimage.png'
},
      
      ]};
      

//this.bike= getBikeImg+'/bikefour/bikefive.png';
//this.bike= getBikeImg+'/bikefour/bikefour.png';
//this.bike= getBikeImg+'/bikefour/bikesix.png';
   
}
