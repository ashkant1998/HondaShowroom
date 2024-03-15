import { LightningElement } from 'lwc';
import Image from "@salesforce/resourceUrl/ProductEnquiryTopLogo";
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import TESTRIDE_OBJECT from '@salesforce/schema/Test_Ride__c';
import Model_FIELD from '@salesforce/schema/Test_Ride__c.Model_Interested_In__c';
import YOURNAME_FIELD from '@salesforce/schema/Test_Ride__c.Name';
import EMAIL_FIELD from '@salesforce/schema/Test_Ride__c.Email_ID__c';
import State_FIELD from '@salesforce/schema/Test_Ride__c.State__c';
import City_FIELD from '@salesforce/schema/Test_Ride__c.City__c';
import Dealer_FIELD from '@salesforce/schema/Test_Ride__c.Dealer__c';
import MOBILE_FIELD from '@salesforce/schema/Test_Ride__c.Mobile__c';
import REMARK_FIELD from '@salesforce/schema/Test_Ride__c.Remarks__c';
import I_AGREE_CB_FIELD from '@salesforce/schema/Test_Ride__c.I_agree_to_the_terms_and_conditions__c';
import { createRecord } from 'lightning/uiRecordApi';

export default class TestRideLWC extends LightningElement {
    Imageview = Image;
    fields = [
        'Model_Interested_In__c',
        'City__c',
        'State__c',
        'Dealer__c',
        'Name',
        'Mobile__c',
        'Email_ID__c',
        'Remarks__c',
        'I_agree_to_the_terms_and_conditions__c'
    ];
        
    handleTestSubmit(event) {
        event.preventDefault();
        const fields = event.detail.fields;
        
        const modelName = fields.Model_Interested_In__c;
        const cityName = fields.City__c;
        const stateName = fields.State__c;
        const dealerName = fields.Dealer__c;
        const userName = fields.Name;
        const mobileNumber = fields.Mobile__c;
        const email = fields.Email_ID__c;
        const remarks = fields.Remarks__c;
        const IAgreeCB = fields.I_agree_to_the_terms_and_conditions__c;

        
        fields[Model_FIELD.fieldApiName] = modelName;
        fields[YOURNAME_FIELD.fieldApiName] = userName;
        fields[EMAIL_FIELD.fieldApiName] = email;
        fields[State_FIELD.fieldApiName] = stateName;
        fields[City_FIELD.fieldApiName] = cityName;
        fields[Dealer_FIELD.fieldApiName] = dealerName;
        fields[MOBILE_FIELD.fieldApiName] = mobileNumber;
        fields[REMARK_FIELD.fieldApiName] = remarks;
        fields[I_AGREE_CB_FIELD.fieldApiName] = IAgreeCB;
        const recordInput = { apiName: TESTRIDE_OBJECT.objectApiName, fields };
        createRecord(recordInput)
            .then(result => {
                console.log('Test Ride Data '+JSON.stringify(result.id));
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
}