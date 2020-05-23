import { LightningElement, api, track } from 'lwc';

export default class ChildList extends LightningElement {
    @api childvar;
    @api sal;

    @api
    newfun(event){
        alert('hi child');
        // console.log(this.childvar+' '+this.sal);
        this.sal = this.sal*1.1;
    }
}