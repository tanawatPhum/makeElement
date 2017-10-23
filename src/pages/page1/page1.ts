import { Component, OnInit, Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { inputModel } from '../../model/componentElement.model';
import { InputComponentPage } from '../input-component/input-component';

/**
 * Generated class for the Page1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html',
})
export class Page1Page implements OnInit {
  private icons;
  private tabs;
  private content;
  private a = [];
  private b = [];
  private c = [];
  @Input()
  forceOneColumn: boolean = false;
  private hasTab: boolean =true;
  private inputBind:inputModel[] =  new Array<inputModel>();
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  ngOnInit() {
    let input = [
      {
        inputType: "input",
        contents: {
            id: "firstName",
            value: "",
            placeholder: "คำนำหน้าชื่อ",
            name: "firstName",
        },
        options:{
          type: "text"
        },
        styles: {
          providers:{ 
            icon: "ios-person-outline"
          },
          customize: {
            classUrl: ""
          }
        }
      }
    ];
    // this.a.push(
    //   {a:"namea"},
    //   {b:"nameb"},
    //   {c:"namec"}
    // );

    // this.a.forEach((value)=>{
    //   let keyjson = Object.keys(value);
    //   let valuejson = value[keyjson[0]];
    //   let newjson = {
    //     [keyjson[0]]:[valuejson]
    //   }
    //   this.c.push(newjson);
    //   console.log(this.c);
    // })
    // this.c.push(
      
    // )
    // this.b.push(
    //   {a:"nameaa"},
    //   {b:"namebb"},
    //   {d:"named"}
    // );




    this.icons = 0;
    this.tabs =
      {
        inputType: "tabs",
        tabs: [
          {
            tabName: "หน้าหลัก",
            groups: [
              {
                groupName: "อาหาร",
                contents: [
                  {

                    inputType: "image",
                    url: "assets/hamburger.jpg",
                    title:"แฮมเบอร์เกอร์",
                    description: "ราคา 29 บาท",
                    button: "buy",
                    id: "24",
                    name: "แฮมเบอร์เกอร์",
                    subContents: [
                      {
                          input:{
                              inputType: "spinnerNumber",
                              contents: {
                                labelName: "จำนวน",
                                value:""
                              }
                            
                          },
                      } 
                    ]
                    
                  },
                  {
                    inputType: "image",
                    url: "assets/nuggets.jpg",
                    title:"ชุดนักเก็ต",
                    description: "ราคา 119 บาท",
                    button: "buy",
                    id: "24",
                    name: "แฮมเบอร์เกอร์",
                    subContents: {

                    }   
                  }
                ]
              }

            ]




          },
          {
            tabName:"ปฎิบัติธรรม",
            contents:[
                {
                  title:"",
                  inputType: "image",
                  url: "assets/simpleImg.jpg",
                  description:"yyyyyyyyyyyyyyy"
                }
            ]
          },
          {
            tabName:"กิจกรรม",
            contents:[
                {
                  title:"",
                  inputType: "image",
                  url: "assets/simpleImg.jpg",
                  description:"yyyyyyyyyyyyyyy"
                }
            ]
          },
          {
            tabName:"สมาชิก",
            contents:[
                {
                  title:"",
                  inputType: "image",
                  url: "assets/simpleImg.jpg",
                  description:"yyyyyyyyyyyyyyy"
                }
            ]
          },
          {
            tabName:"ร่วมบุญ",
            contents:[
                {
                  title:"",
                  inputType: "image",
                  url: "assets/simpleImg.jpg",
                  description:"yyyyyyyyyyyyyyy"
                }
            ]
          }

        ]

      }


    console.log('ionViewDidLoad Page1Page');


  }
  ionViewDidLoad() {
  }
  showContent(index) {
    // this.content = this.tab.contents[index].contents;
    // console.log(this.tab.contents[index]);

  }
  submit(tab,group,groupContent){
    this.hasTab  =false;
    console.log(groupContent);
    if(groupContent.hasOwnProperty('subContents')){
      this.navCtrl.push(InputComponentPage,{
        data:groupContent.subContents
      });
    }

  }


}
