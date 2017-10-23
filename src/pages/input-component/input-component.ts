import { Component,Input,OnChanges,OnInit,AfterViewInit,Output,EventEmitter,NgZone,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,Content } from 'ionic-angular';
import { inputModel, buttonModel, formModel, slideModel, titleModel, bodyModel, htmlModel } from '../../model/componentElement.model';
import { DynamicComponentService } from '../../service/dynamicComponent.service';
import { Page1Page } from '../page1/page1';


/**
 * Generated class for the InputComponentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-input-component',
  templateUrl: 'input-component.html',
})
export class InputComponentPage implements OnInit,OnChanges,AfterViewInit {
  private formBind:formModel =  new formModel();
  private tabsBind:any;
  private buttonBind:buttonModel[] =  new Array<buttonModel>();
  private inputBind:inputModel[] =  new Array<inputModel>();
  private slideBind:slideModel =  new slideModel();
  private titleBind:titleModel = new titleModel();
  private bodyBind:bodyModel = new bodyModel();
  private loading:any;
  private qrtItem:number;
  private currentTab = 0;
  @Input('data') data:any;
  @ViewChild(Content) content: Content;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public dynamicComponentService:DynamicComponentService,
    public loadingCtrl:LoadingController,
    private ngZone: NgZone
  ) {
  }
  ionViewDidLoad() {

    console.log('ionViewDidLoad InputComponentPage');
  }
  ngOnChanges() {
    
  }
  ngAfterViewInit() {


  
    
     
      
  }
  ngOnInit(){
    console.log(this.data);
    if(this.data){
      this.processMakeHtml();
    }else{
      this.data = this.navParams.get("data");
      console.log(this.data);
      this.processMakeHtml();
    }

  }
  processMakeHtml(){
    if(this.data.html.hasOwnProperty('form')){
      this.dynamicComponentService.mapDataToFormModel(this.data.html.form).then((res:formModel)=>{
        this.formBind = res;
        res.contents.forEach((element)=>{
            if(element.inputType=='input'||
              element.inputType == "checkbox"||
              element.inputType == "radio"||
              element.inputType == "select"||
              element.inputType == "dateTime"
            ){
              this.inputBind.push(element);
            }
            else if(element.inputType=='button'){
              this.buttonBind.push(element);
            }
        })
        // console.log(this.inputBind);
        // console.log(this.buttonBind);
      });
    }else if(this.data.html.hasOwnProperty('tabs')){
        this.tabsBind = this.data.html.tabs;
        console.log(this.tabsBind.tabs);
    }
    this.content.resize();
    
    // if(this.data.hasOwnProperty('form')){
    //   this.dynamicComponentService.mapDataToButtonModel(this.data.form).then((res:htmlModel)=>{
    //     this.buttonBind = res.button;
    //     console.log(res.button);
    //   });
    // }
    // if(this.data.hasOwnProperty('slide')){
    //   this.dynamicComponentService.mapDataToSlideModel(this.data.slide).then((res:formModel)=>{
        
    //     this.slideBind = res.slide;
    //     console.log(res.slide);
    //   });
    // }
    // if(this.data.hasOwnProperty('title')){
    //   this.dynamicComponentService.mapDataToTitleModel(this.data.title).then((res:formModel)=>{
    //     this.titleBind = res.title;
    //   });
    // }
    // if(this.data.hasOwnProperty('body')){
    //   this.dynamicComponentService.mapDataToBodyModel(this.data.body).then((res:formModel)=>{
    //     this.bodyBind = res.body;
    //     console.log(res.body);
    //   });
    // }
  }
  clickItem(tab,group,groupContent){
    if(groupContent.content.hasOwnProperty('subContents')&&groupContent.content.subContents.hasOwnProperty('contents')){
      console.log(groupContent.content.subContents);
      this.navCtrl.push(InputComponentPage,{
        data:{
          html:{
            form:groupContent.content.subContents,
          }
        }
      });
    }else{
      console.log(groupContent.content);
    }
  }
  submit(value){
    console.log(this.data);
    if(this.data.html.form.hasOwnProperty('subContents')){
      this.navCtrl.push(InputComponentPage,{
        data:{
          html:{
            form:this.data.html.form.subContents
          }
        }
      });
    }else{
      // this.loading = this.loadingCtrl.create({
      //   spinner: 'crescent',
      //   content: 'Loading...'
      // });
      // this.loading.present();
      // setTimeout(()=>{
      //   this.loading.dismiss();
      // },500);
      // let result = {};
      // let form =[];
      // this.formBind.contents.forEach((element)=>{
      //   form.push(element.content);
      // });
      // result = {
      //   value:form,
      //   action:value
      // };
      // console.log(result);
    }

  }
  addItem(qrtItem:number){
    console.log(qrtItem);

  }
  removeItem(qrtItem:number){
    console.log(qrtItem);
  }
  updateRadio(){
    console.log("test");
  }



}
