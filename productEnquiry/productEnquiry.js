import { LightningElement,track,wire } from 'lwc';
import Image from "@salesforce/resourceUrl/ProductEnquiryTopLogo";
import { getPicklistValues,getObjectInfo } from 'lightning/uiObjectInfoApi';
import productEnquiry_OBJECT from '@salesforce/schema/Product_Enquiry__c';
import Model_FIELD from '@salesforce/schema/Product_Enquiry__c.Model__c';
import YOURNAME_FIELD from '@salesforce/schema/Product_Enquiry__c.Your_Name__c';
import EMAIL_FIELD from '@salesforce/schema/Product_Enquiry__c.Email_ID__c';
import State_FIELD from '@salesforce/schema/Product_Enquiry__c.State__c';
import City_FIELD from '@salesforce/schema/Product_Enquiry__c.City__c';
import Dealer_FIELD from '@salesforce/schema/Product_Enquiry__c.Dealer__c';
import MOBILE_FIELD from '@salesforce/schema/Product_Enquiry__c.Mobile__c';
//import I_AGREE_CB_FIELD from '@salesforce/schema/Product_Enquiry__c.I_agree_to_the_terms_and_conditions__c';
import { createRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
//import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class ProductEnquiry extends LightningElement {
    Imageview = Image;
    
    selectedModel;
    selectedState;
    selectedCity;
    selectedDealer;
    ModelPicklistValues =[];
    StatePicklistValues=[];
    CityPicklistValues = [];
    DealerPicklistValues = [];
    //checkboxvalue =false;
    name = '';
    email = '';
    mobile = '';
    
    @wire(getObjectInfo, { objectApiName: productEnquiry_OBJECT })
    objectInfo;

    @wire(getPicklistValues, { recordTypeId: '$objectInfo.data.defaultRecordTypeId', fieldApiName: Model_FIELD})
    ModelData({error, data}){
        if(data){
            this.ModelPicklistValues= data.values.map((picklist)=>({
                label:picklist.label,
                value:picklist.value,
            }));
            this.error = undefined;
        } else if(error){
            this.error = error;
            this.ModelPicklistValues = undefined;
        }
    }
    handleModel(event){
        this.selectedModel = event.target.value;
    }

    @wire(getPicklistValues, { recordTypeId: '$objectInfo.data.defaultRecordTypeId', fieldApiName: State_FIELD})
    StateData({error, data}){
        if(data){
            this.StatePicklistValues= data.values.map((picklist1)=>({
                label:picklist1.label,
                value:picklist1.value,
            }));
            this.error = undefined;
        } else if(error){
            this.error = error;
            this.StatePicklistValues = undefined;
        }
    }
    handleState(event){
        this.selectedState = event.target.value;
        }

    @wire(getPicklistValues, { recordTypeId: '$objectInfo.data.defaultRecordTypeId', fieldApiName: City_FIELD})
    CityData({error, data}){
        if(data){
            this.CityPicklistValues= data.values.map((picklist2)=>({
                label:picklist2.label,
                value:picklist2.value,
            }));
            this.error = undefined;
        } else if(error){
            this.error = error;
            this.CityPicklistValues = undefined;
        }
    }
    handleCity(event){
        this.selectedCity = event.target.value;
    }
    @wire(getPicklistValues, { recordTypeId: '$objectInfo.data.defaultRecordTypeId', fieldApiName: Dealer_FIELD})
    DealerData({error, data}){
        if(data){
            this.DealerPicklistValues= data.values.map((picklist3)=>({
                label:picklist3.label,
                value:picklist3.value,
            }));
            this.error = undefined;
        } else if(error){
            this.error = error;
            this.DealerPicklistValues = undefined;
        }
    }
    handleDealer(event){
         this.selectedDealer = event.target.value;
    }
    
    // options = [
    //     { label: 'I agree to the terms and conditions', value: 'I agree to the terms and conditions' },
        
    // ];

    nameInputMethod(event){
        this.name = event.target.value;
    }
    emailInputMethod(event){
        this.email = event.target.value;
    }
    mobileInputMethod(event){
        this.mobile = event.target.value;
    }
    // IAgreeCBMethod(event){
    //     this.checkboxvalue = event.target.checked;
    // }
    handleSubmit() {
        const fields = {};
        fields[Model_FIELD.fieldApiName] = this.selectedModel;
        fields[YOURNAME_FIELD.fieldApiName] = this.name;
        fields[EMAIL_FIELD.fieldApiName] = this.email;
        fields[State_FIELD.fieldApiName] = this.selectedState;
        fields[City_FIELD.fieldApiName] = this.selectedCity;
        fields[Dealer_FIELD.fieldApiName] = this.selectedDealer;
        fields[MOBILE_FIELD.fieldApiName] = this.mobile;
        //fields[I_AGREE_CB_FIELD.fieldApiName] = this.checkboxvalue;
        const recordInput = { apiName: productEnquiry_OBJECT.objectApiName, fields };
        createRecord(recordInput)
            .then(result => {
                console.log('ProductEnquiry Created '+JSON.stringify(result.id));
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Success',
                        message: 'Record created',
                        variant: 'success',
                    }),
                );
            })
            .catch(error => {
                console.log('Record Not Created '+JSON.stringify(error));
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Error creating record',
                        message: error.body.message,
                        variant: 'error',
                    }),
                );
            });
    }

    handleReset() {
        
    }
}