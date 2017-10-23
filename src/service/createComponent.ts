import { PostItem } from '../model/PostItem';
import { MyPost } from '../model/MyPost';
import {
  ComponentFactoryResolver,
  Injectable,
  Inject,
  ReflectiveInjector,
  ViewContainerRef
} from '@angular/core'

@Injectable()
export class CreateComponent {
  constructor(private componentFactoryResolver: ComponentFactoryResolver) {

  }

  makeData7(): Promise<any> {
    let tabs = {
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
                  content: {
                    url: "assets/hamburger.jpg",
                    title: "แฮมเบอร์เกอร์",
                    description: "ราคา 29 บาท",
                    id: "24",
                    name: "แฮมเบอร์เกอร์",
                    subContents: {
                      inputType: "form",
                      contents: [
                        {
                          inputType: "input",
                          content: {
                            placeholder: "คำนำหน้าชื่อ",
                          }
                        },
                        {
                          inputType: "select",
                          content: {
                            labelName: "เพศ",
                            actionSheetValue: [{ name: "ชาย" }, { name: "หญิง" }],
                          }
                        },
                        {
                          inputType: "button",
                          content: {
                            value: "ต่อไป",
                          },
                        },
                      ],
                      subContents: {
                        inputType: "form",
                        contents: [
                          {
                            inputType: "button",
                            content: {
                              value: "จบ",
                            }
                          }
                        ]
                      }

                    }
                  },
                },
                {
                  inputType: "image",
                  content: {
                    url: "assets/nuggets.jpg",
                    title: "ชุดนักเก็ต",
                    description: "ราคา 119 บาท",
                    button: "buy",
                    id: "24",
                    name: "แฮมเบอร์เกอร์",
                    subContents: {

                    }
                  }
                }
              ]
            }

          ]




        },
        {
          tabName: "ปฎิบัติธรรม",
          contents: [
            {
              title: "",
              inputType: "image",
              url: "assets/simpleImg.jpg",
              description: "yyyyyyyyyyyyyyy"
            }
          ]
        },
        {
          tabName: "กิจกรรม",
          contents: [
            {
              title: "",
              inputType: "image",
              url: "assets/simpleImg.jpg",
              description: "yyyyyyyyyyyyyyy"
            }
          ]
        },
        {
          tabName: "สมาชิก",
          contents: [
            {
              title: "",
              inputType: "image",
              url: "assets/simpleImg.jpg",
              description: "yyyyyyyyyyyyyyy"
            }
          ]
        },
        {
          tabName: "ร่วมบุญ",
          contents: [
            {
              title: "",
              inputType: "image",
              url: "assets/simpleImg.jpg",
              description: "yyyyyyyyyyyyyyy"
            }
          ]
        }

      ]

    }

    let data = {
      html: {
        tabs: tabs
      }
    }
    return new Promise((resolve, reject) => {
      resolve(data);
    });
  }





  makeData6(): Promise<any> {
    let form = {
      inputType: "form",
      contents: [
        {
          inputType: "input",
          content: {
            placeholder: "คำนำหน้าชื่อ",
          }
        },
        {
          inputType: "select",
          content: {
            labelName: "เพศ",
            actionSheetValue: [{ name: "ชาย" }, { name: "หญิง" }],
          }
        },
        // {
        //   inputType: "radioGroup",
        //   contents: [
        //     {
        //       inputType:"radio",
        //       labelName: "โปรแกรมเมอร์",
        //       value:"โปรแกรมเมอร์",
        //     }
        //   ]

        // },
        {
          inputType: "checkbox",
          content: {
            labelName: "ปริญญาตรี",
          },
          options: {
            checked: true
          }
        },
        {
          inputType: "checkbox",
          content: {
            labelName: "ปริญญาโท",
          },
          options: {
            checked: true
          }
        },
        {
          inputType: "dateTime",
          content: {
            labelName: "วันเดือนปีเกิด",
            placeholder: "กรุณาเลือก"
          }
        },
        {
          inputType: "button",
          content: {
            name: "ตกลง",
          }
        }

        // {
        //   inputType:'button',
        //   content:{
        //       value:"ยกเลิก",
        //       name:null
        //   },
        //   styles:{
        //       providers:{
        //           color:'primary',
        //           outline:false,
        //       }
        //   }
        // }
      ]
    };
    let data = {
      html: {
        form: form
      }
    }
    return new Promise((resolve, reject) => {
      resolve(data);
    });
  }
  makeData5(): Promise<any> {
    let slide = {
      inputType: "slide",
      contents: [
        {
          slideName: "1",
          contents: [
            {
              inputType: "image",
              content: {
                url: "assets/hamburger.jpg",
                description: "ราคา 29 บาท",
              }
            },
            {
              inputType: "image",
              content: {
                url: "assets/hamburger.jpg",
                description: "ราคา 29 บาท",
              }
            }
          ],
        },
        {
          slideName: "2",
          contents: [
            {
              inputType: "image",
              content: {
                url: "assets/hamburger.jpg",
                description: "ราคา 29 บาท",
              }
            },
            {
              inputType: "image",
              content: {
                url: "assets/hamburger.jpg",
                description: "ราคา 29 บาท",
              }
            }
          ]
        }
      ],
      options: {
        zoom: true,
        pager: true,
        loop: true,
      },
      styles: null
    };
    let form = {
      slide: slide
    }
    return new Promise((resolve, reject) => {
      resolve(form);
    });
  }
  makeData4(): Promise<any> {
    let body = {
      background: "#273E6A"
    }
    let title = {
      text: "Register",
      color: "white"
    }
    let input = [
      {
        inputType: "input",
        color: "white",
        iconColor: "white",
        placeholder: "คำนำหน้าชื่อ",
        placeholderColor: "white",
        type: "text",
        value: "",
        name: "firstName",
        icon: "ios-person-outline"

      },
      {
        inputType: "input",
        color: "white",
        iconColor: "white",
        placeholder: "ชื่อ",
        placeholderColor: "white",
        type: "text",
        value: "",
        name: "firstName",
        icon: "ios-person-outline"

      },
      {
        inputType: "input",
        color: "white",
        iconColor: "white",
        placeholder: "นามสกุล",
        placeholderColor: "white",
        type: "text",
        value: "",
        name: "firstName",
        icon: "ios-person-outline"

      },
      {
        inputType: "input",
        color: "white",
        iconColor: "white",
        placeholder: "ชื่อเล่น",
        placeholderColor: "white",
        type: "text",
        value: "",
        name: "firstName",
        icon: "ios-person-outline"
      },
      {
        inputType: "select",
        labelColor: "light",
        labelName: "เพศ",
        placeholder: "",
        actionSheetButtonSumitName: "Ok",
        actionSheetButtonCancelName: "Cancel",
        actionSheetMutiValue: false,
        actionSheetValue: [{ name: "ชาย" }, { name: "หญิง" }],
        value: '',
        name: "selectEducation",
        iconColor: "white",
        icon: "ios-male-outline"
      },
      {
        inputType: "select",
        labelColor: "light",
        labelName: "สัญชาติ",
        placeholder: "",
        actionSheetButtonSumitName: "Ok",
        actionSheetButtonCancelName: "Cancel",
        actionSheetMutiValue: false,
        actionSheetValue: [{ name: "ไทย" }, { name: "อังกฤษ" }],
        value: '',
        name: "selectEducation",
        iconColor: "white",
        icon: "ios-flag-outline"
      },
      {
        inputType: "dateTime",
        labelName: "วันเดือนปีเกิด",
        labelColor: "light",
        // placeholder:"Please Select",
        displayFormat: "DD/MMM/YYYY",
        name: "birthDay",
        iconColor: "white",
        icon: "ios-pizza-outline"
      },
      {
        inputType: "input",
        color: "white",
        iconColor: "white",
        placeholder: "เลขบัตรประชาชน",
        placeholderColor: "white",
        type: "text",
        value: "",
        name: "firstName",
        icon: "ios-card-outline"
      },

    ]
    let button = [
      {
        color: "primary",
        value: "Register",
        name: "Register",
        outline: false
      },
    ]
    let form = {
      body: body,
      title: title,
      input: input,
      button: button
    }
    return new Promise((resolve, reject) => {
      resolve(form);
    })

  }
  makeData3(): Promise<any> {
    let body = {
      background: "#03A9F5"
    }
    let title = {
      text: "ลงทะเบียน",
      color: "white"
    }
    let input = [
      {
        inputType: "input",
        color: "white",
        iconColor: "white",
        placeholder: "ชื่อ",
        placeholderColor: "white",
        type: "text",
        value: "",
        name: "firstName",
        icon: "ios-person-outline"

      },
      {
        inputType: "input",
        color: "white",
        iconColor: "white",
        placeholder: "นามสกุล",
        placeholderColor: "white",
        type: "text",
        value: "",
        name: "firstName",
        icon: "ios-person-outline"

      },
      {
        inputType: "input",
        color: "white",
        iconColor: "white",
        placeholder: "ผู้ใช้",
        placeholderColor: "white",
        type: "text",
        value: "",
        name: "firstName",
        icon: "ios-person-outline"

      },
      {
        inputType: "input",
        color: "white",
        iconColor: "white",
        placeholder: "อีเมล์",
        placeholderColor: "white",
        type: "text",
        value: "",
        name: "firstName",
        icon: "ios-mail-outline"
      },
      {
        inputType: "input",
        color: "white",
        iconColor: "white",
        placeholder: "รหัสผ่าน",
        placeholderColor: "white",
        type: "password",
        value: "",
        name: "password",
        icon: "ios-lock-outline"
      },
      {
        inputType: "input",
        color: "white",
        iconColor: "white",
        placeholder: "ยืนยันรหัสผ่าน",
        placeholderColor: "white",
        type: "password",
        value: "",
        name: "password",
        icon: "ios-lock-outline"
      },
      {
        inputType: "radio",
        labelName: "ยืนยันตัวตนด้วยอีเมลล์",
        labelColor: "light",
        value: "male",
        color: "light",
        checked: true,
        name: "radioMale"

      },
      {
        inputType: "radio",
        labelName: "ยืนยันตัวตัวผ่านโทรศัพท์ด้วย รหัส OTP",
        labelColor: "light",
        value: "female",
        color: "light",
        checked: false,
        name: "radioFemale"
      },
      {
        inputType: "checkbox",
        labelName: "ฉันยอมรับข้อตกลง",
        labelColor: "light",
        value: "xxx",
        color: "light",
        checked: false,
        name: "checkboxProgrammer"
      },
      {
        inputType: "input",
        color: "white",
        iconColor: "white",
        placeholder: "กรอกรหัสบริษัทเพื่อยืนยันการใช้งาน",
        placeholderColor: "white",
        type: "password",
        value: "",
        name: "password",
        icon: "ios-more-outline"
      }

    ];
    let button = [
      {
        color: "light",
        value: "SIGNUP",
        name: "SIGNUP",
        outline: true
      },
    ]
    let form = {
      body: body,
      title: title,
      input: input,
      button: button
    }
    return new Promise((resolve, reject) => {
      resolve(form);
    })
  }
  makeData2(): Promise<any> {
    let slide = {
      zoom: true,
      pager: true,
      loop: true,
      source: [
        {
          inputType: "image",
          url: "assets/simpleImg.jpg"
        },
        {
          inputType: "video",
          url: "https://www.youtube.com/embed/QlKhs9uhZ1E"
        }]

    };

    let form = {
      slide: slide
    }
    return new Promise((resolve, reject) => {
      resolve(form);
    });
  }
  makeData1(): Promise<any> {
    let slide = {
      zoom: true,
      pager: true,
      loop: true,
      source: [
        {
          inputType: "image",
          url: "assets/simpleImg.jpg"
        },
        {
          inputType: "video",
          url: "https://www.youtube.com/embed/QlKhs9uhZ1E"
        }]

    };
    let input = [
      {
        inputType: "input",
        labelName: "FirstName",
        labelColor: "primary",
        placeholder: "",
        type: "text",
        value: "",
        name: "firstName"

      }, {
        inputType: "input",
        labelName: "LastName",
        labelColor: "primary",
        placeholder: "",
        type: "text",
        value: "",
        name: "lastName"
      },
      {
        inputType: "radio",
        labelName: "male",
        labelColor: "dark",
        value: "male",
        color: "dark",
        checked: true,
        name: "radioMale"

      },
      {
        inputType: "radio",
        labelName: "female",
        labelColor: "dark",
        value: "female",
        color: "dark",
        checked: false,
        name: "radioFemale"

      },
      {
        inputType: "dateTime",
        labelName: "BirthDay",
        labelColor: "secondary",
        placeholder: "Please Select",
        displayFormat: "DD/MMM/YYYY",
        name: "birthDay"
      },
      {
        labelName: "Occupation",
        labelColor: "secondary",
      },
      {
        inputType: "checkbox",
        labelName: "programmer",
        labelColor: "dark",
        value: true,
        color: "danger",
        checked: true,
        name: "checkboxProgrammer"

      },
      {
        inputType: "checkbox",
        labelName: "doctor",
        labelColor: "dark",
        value: false,
        color: "danger",
        name: "checkboxDoctor"
      },
      {
        inputType: "select",
        labelColor: "secondary",
        labelName: "education",
        placeholder: "Please Select",
        actionSheetButtonSumitName: "Ok",
        actionSheetButtonCancelName: "Cancel",
        actionSheetMutiValue: false,
        actionSheetValue: [{ name: "Bachelor’s degree" }, { name: "Master’s degree" }, { name: "Ph.D." }],
        value: '',
        name: "selectEducation"
      }
    ];
    let button = [
      {
        color: "primary",
        value: "SUBMIT",
        name: "SUBMIT"
      },
      {
        color: "danger",
        value: "CANCEL",
        name: "CANCEL"
      }
    ];


    let form = {
      input: input,
      button: button,
      slide: slide
    }
    return new Promise((resolve, reject) => {
      resolve(form);
    })
  }

}