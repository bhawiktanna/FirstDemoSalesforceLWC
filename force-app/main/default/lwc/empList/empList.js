import { LightningElement, track,api } from 'lwc';

export default class EmpList extends LightningElement {

    showChlid=false;
    showUpd;
    empId;
    empName;
    empSal;
    updateIndex;
    updId;
    updName;
    updSal;
    
    @track  //private and reactive only for this component 
            //@api is a public and reactive decorator from one component to another component
    employeeList = [
        {"empId":1002,"empName":"ABC","empSal":10211},
        {"empId":1003,"empName":"XYZ","empSal":10318},
        {"empId":1004,"empName":"PQR","empSal":10119},
        {"empId":1005,"empName":"TUV","empSal":10210},
    ];

    addEmployee(){
        //alert(this.empId+' '+this.empName+' '+this.empSal);
        this.employeeList.push({"empId":this.empId,"empName":this.empName,"empSal":this.empSal});        
    }

    delEmp(event){
        //alert(event.target.value);
        var ind = event.target.value;

        console.log('old '+this.employeeList);
        this.employeeList.splice(ind,1);
        console.log('new '+this.employeeList);
    }

    updEmp(event){
        //alert('Hi ');
        this.showUpd = true;
        var ind = event.target.value;
        this.updateIndex = ind;
        this.updId = this.employeeList[ind].empId;
        this.updName = this.employeeList[ind].empName;
        this.updSal = this.employeeList[ind].empSal;
        console.log('After update ');
    }

    updEmployee(){
        this.employeeList[this.updateIndex]={"empId":this.updId,"empName":this.updName,"empSal":this.updSal};
        console.log(this.updateIndex+' '+this.employeeList[this.updateIndex].empSal);
        this.showUpd = false;
    }

    idChanged(event) {  
        //alert('working');
        this.empId = event.target.value;
    }
    nameChanged(event) {  
        this.empName = event.target.value;
    }
    salChanged(event) {  
        this.empSal = event.target.value;
    }

    updIdChanged(event) {  
        this.updId = event.target.value;
    }
    updNameChanged(event) {  
        this.updName = event.target.value;
    }
    updSalChanged(event) {  
        this.updSal = event.target.value;
    }

    newfun1(){
        //Calling child component from parent
        alert('Calling in progess..');
        this.showChlid = true;
        this.template.querySelector('c-child-list').newfun();
    }
}