import { LightningElement } from 'lwc';
import Motorcycle  from "@salesforce/resourceUrl/CB200X";
import Motorcycle1  from "@salesforce/resourceUrl/Hornet2_0";
import Motorcycle2  from "@salesforce/resourceUrl/Livo";
import Motorcycle3  from "@salesforce/resourceUrl/CD110Deluxe";
import Motorcycle4  from "@salesforce/resourceUrl/unicorn";
import Motorcycle5  from "@salesforce/resourceUrl/shine125";
import Motorcycle6  from "@salesforce/resourceUrl/SP160";
import Motorcycle7 from "@salesforce/resourceUrl/SP125"; 

export default class MotorcycleOne extends LightningElement {
    CB200X = Motorcycle;
    Hornet2_0 = Motorcycle1;
    Livo = Motorcycle2;
    CD110Deluxe = Motorcycle3;
    unicorn = Motorcycle4;
    shine125 = Motorcycle5;
    SP160 =  Motorcycle6;
    SP125 =  Motorcycle7 ;

   /* CB200X = Motorcycle +'/CB200X.jpg';
    Hornet2_0 = Motorcycle1 +'/Hornet2_0.jpg';
    Livo = Motorcycle2 +'/Livo.jpg';
    CD110Deluxe = Motorcycle3 +'/CD110Deluxe.jpg';
    unicorn = Motorcycle4 +'/unicorn.jpg';
    shine125 = Motorcycle5 +'/shine125.jpg';
    SP160 =  Motorcycle6+'/SP160.jpg';
    SP125 =  Motorcycle7 +'/SP125.jpg';*/


}