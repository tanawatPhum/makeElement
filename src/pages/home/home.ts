import { Component,OnInit,ViewChild,ViewContainerRef,ComponentFactoryResolver,ComponentFactory,ComponentRef,AfterViewInit,Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { InputComponentPage } from '../input-component/input-component';
import { DynamicComponentService } from '../../service/dynamicComponent.service';
import { CreateComponent } from '../../service/createComponent';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage implements OnInit,AfterViewInit {
  private loadHtml;
  @ViewChild('dynamicInsert', { read: ViewContainerRef }) dynamicInsert: ViewContainerRef;
  @ViewChild('sildeInsert', { read: ViewContainerRef }) sildeInsert: ViewContainerRef;
  @Input('item') item:any;
  constructor(
    public navCtrl: NavController,
    private sanitizer: DomSanitizer,
    private resolver: ComponentFactoryResolver,
    private viewContainerRef:ViewContainerRef,
    public dynamicComponentService:DynamicComponentService,
    public createCom:CreateComponent

    
  ) {

  }
  ngOnInit(){
    console.log(this.item);
  }
  ngAfterViewInit() {
    // const componentFactory = this.resolver.resolveComponentFactory(InputComponentPage);
    // this.dynamicInsert.clear();
    // const dyynamicComponent = <InputComponentPage>this.dynamicInsert.createComponent(componentFactory).instance;

    // if(this.item==1){
    //   this.dynamicComponentService.makeData1().then((res)=>{
    //     dyynamicComponent.data = res;
    //   })
    // }else if(this.item==2){
    //   this.dynamicComponentService.makeData3().then((res)=>{
    //     dyynamicComponent.data = res;
    //   })
    // }
    // else if(this.item==3){
    //   this.dynamicComponentService.makeData4().then((res)=>{
    //     dyynamicComponent.data = res;
    //   })
    // }

 
  
  }
  createComponent(){
    const componentFactory = this.resolver.resolveComponentFactory(InputComponentPage);
    this.dynamicInsert.clear();
    const dyynamicComponent = <InputComponentPage>this.dynamicInsert.createComponent(componentFactory).instance;
    // let slide = {
    //   zoom:true,
    //   pager:true,
    //   loop:true,
    //   source:[
    //     {
    //     inputType:"image",
    //     url:"assets/simpleImg.jpg"
    //     },
    //     {
    //     inputType:"video",
    //     url:"https://www.youtube.com/embed/QlKhs9uhZ1E"
    //   }]

    // };
    // let input = [
    //   {
    //     inputType:"input",
    //     labelName:"FirstName",
    //     labelColor:"primary",
    //     placeholder:"",
    //     type:"text",
    //     value:"",
    //     name:"firstName"
        
    //   },{
    //     inputType:"input",
    //     labelName:"LastName",
    //     labelColor:"primary",
    //     placeholder:"",
    //     type:"text",
    //     value:"",
    //     name:"lastName"
    //   },
    //   {
    //     inputType:"radio",
    //     labelName:"male",
    //     labelColor:"dark",
    //     value:"male",
    //     color:"dark",
    //     checked:true,
    //     name:"radioMale"
        
    //   },
    //   {
    //     inputType:"radio",
    //     labelName:"female",
    //     labelColor:"dark",
    //     value:"female",
    //     color:"dark",
    //     checked:false,
    //     name:"radioFemale"
        
    //   },
    //   {
    //     inputType:"dateTime",
    //     labelName:"BirthDay",
    //     labelColor:"secondary",
    //     placeholder:"Please Select",
    //     displayFormat:"DD/MMM/YYYY",
    //     name:"birthDay"
    //   },
    //   {
    //     labelName:"Occupation",
    //     labelColor:"secondary",
    //   },
    //   {
    //     inputType:"checkbox",
    //     labelName:"programmer",
    //     labelColor:"dark",
    //     value:true,
    //     color:"danger",
    //     checked:true,
    //     name:"checkboxProgrammer"
        
    //   },
    //   {
    //     inputType:"checkbox",
    //     labelName:"doctor",
    //     labelColor:"dark",
    //     value:false,
    //     color:"danger",  
    //     name:"checkboxDoctor"
    //   },
    //   {
    //     inputType:"select",
    //     labelColor:"secondary",  
    //     labelName:"education",
    //     placeholder:"Please Select",
    //     actionSheetButtonSumitName:"Ok",
    //     actionSheetButtonCancelName:"Cancel",
    //     actionSheetMutiValue:false,
    //     actionSheetValue:[{name:"Bachelor’s degree"},{name:"Master’s degree"},{name:"Ph.D."}],
    //     value:'',
    //     name:"selectEducation"
    //   }
    // ];
    // let button = [
    //   {
    //     color:"primary",
    //     value:"SUBMIT",
    //     name:"SUBMIT"
    //   },
    //   {
    //     color:"danger",
    //     value:"CANCEL",
    //     name:"CANCEL"
    //   }
    // ];


    // let form = {
    //   input:input,
    //   button:button,
    //   slide:slide
    // }
    this.createCom.makeData7().then((res)=>{
      dyynamicComponent.data = res;
    })
    


  }
  // createComponent(type) {
  //   this.container.clear(); 
  //   let componentFactory = this.resolver.resolveComponentFactory(InputComponentPage);
  //   let componentRef = this.viewContainerRef.createComponent(componentFactory);
  //   console.log(componentRef);
  //   componentRef.instance.type = type;
  // }

}
