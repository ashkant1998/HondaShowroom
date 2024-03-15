import { LightningElement } from 'lwc';
import Activa from '@salesforce/resourceUrl/Activa';
import Activa125 from '@salesforce/resourceUrl/Activa125';
import Dio from '@salesforce/resourceUrl/dio';
import Dio125 from '@salesforce/resourceUrl/dio125';

export default class Scooters extends LightningElement {

    activaImg=Activa;
    activa125Img=Activa125;
    dioImg=Dio;
    dio125Img=Dio125;
}