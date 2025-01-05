import { LightningElement, wire} from 'lwc';
import getInvitationAddress from '@salesforce/apex/InvitationController.getInvitationAddress'
export default class InvitationAddress extends LightningElement {
    recordId =''
    addressDetails={}

    connectedCallback(){
        let invitationId = new URL(location.href).searchParams.get('invitationid')
        if(invitationId){
            this.recordId = invitationId
        }
    }
    
    @wire(getInvitationAddress, {Id:'$recordId'})
    addressHandler({data, error}){
        if(data){
            console.log("addressHandler data", JSON.stringify(data))
            this.addressDetails = data
        }
        if(error){
            console.error("addressHandler error", error)
        }
    }
}