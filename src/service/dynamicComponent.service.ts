import { Injectable } from '@angular/core';
import { inputModel, buttonModel, formModel, slideModel, htmlModel } from '../model/componentElement.model';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
@Injectable()
export class DynamicComponentService {
    constructor(
        private sanitizer: DomSanitizer,
    ) {

    }
    mapDataToFormModel(data: any): Promise<any> {
        return new Promise((resolve, reject) => {
            let mainModel = new formModel();
            mainModel.inputType = data.inputType
            data.contents.forEach(element => {
                console.log(element);
                if(element.hasOwnProperty('inputType')){
                    if (element.inputType == "input"||
                        element.inputType == "checkbox"||
                        element.inputType == "radio"||
                        element.inputType == "select"||
                        element.inputType == "dateTime"
                    ) {
                        this.mapDataToInputSubModel(element).then((res)=>{
                            mainModel.contents.push(res)
                        });
                    }else if(element.inputType == "button"){
                        this.mapDataToButtonSubModel(element).then((res)=>{
                            mainModel.contents.push(res)
                        });
                    }
                }else{

                }
            });
            console.log(mainModel);
            resolve(mainModel);
        })
    }
    mapDataToInputSubModel(element:any): Promise<any> {
        let subModel = new inputModel();
        return new Promise((resolve, reject) => {
                subModel.inputType = element.inputType;
                if (element.hasOwnProperty('content')) {
                    if (element.content.hasOwnProperty('value')) {
                        subModel.content.value = element.content.value;
                    }else{
                        if(subModel.inputType=="checkbox"||subModel.inputType=="radio"){
                            if(element.hasOwnProperty('options')&&element.options.hasOwnProperty('checked')){
                                subModel.content.value = element.options.checked
                            }else{
                                subModel.content.value = false;
                            }
                        }      
                    }
                    if (element.content.hasOwnProperty('id')) {
                        subModel.content.id = element.content.id;
                    }
                    if (element.content.hasOwnProperty('actionSheetValue')) {
                        subModel.content.actionSheetValue = element.content.actionSheetValue;
                    }
                    if (element.content.hasOwnProperty('labelName')) {
                        subModel.content.labelName = element.content.labelName;
                    }
                    if (element.content.hasOwnProperty('placeholder')) {
                        subModel.content.placeholder = element.content.placeholder;
                    }
                    if (element.content.hasOwnProperty('name')) {
                        subModel.content.name = element.content.name;
                    }
                }
                if (element.hasOwnProperty('options')) {
                    if (element.options.hasOwnProperty('type')) {
                        subModel.options.type = element.options.type;
                    }
                    if (element.options.hasOwnProperty('actionSheetMutiValue')) {
                        subModel.options.actionSheetMutiValue = element.options.actionSheetMutiValue;
                    }
                    if (element.options.hasOwnProperty('checked')) {
                        subModel.options.checked = element.options.checked;
                    }
                    if (element.options.hasOwnProperty('displayFormat')) {
                        subModel.options.displayFormat = element.options.displayFormat;
                    }
                    if (element.options.hasOwnProperty('actionSheetButtonSumitName')) {
                        subModel.options.actionSheetButtonSumitName = element.options.actionSheetButtonSumitName;
                    }
                    if (element.options.hasOwnProperty('actionSheetButtonCancelName')) {
                        subModel.options.actionSheetButtonCancelName = element.options.actionSheetButtonCancelName;
                    }
                }
                if (element.hasOwnProperty('styles')) {
                    if (element.styles.hasOwnProperty('providers')) {
                        if (element.styles.providers.hasOwnProperty('labelColor')) {
                            subModel.styles.providers.labelColor = element.labelColor;
                        }
                        if (element.styles.providers.hasOwnProperty('placeholderColor')) {
                            if (element.styles.providers.placeholderColor == "white") {
                                subModel.styles.providers.placeholderColor = 'placeholderWhiteColor'
                            }
                        }
                        if (element.styles.providers.hasOwnProperty('color')) {
                            subModel.styles.providers.color = element.styles.providers.color;
                        }
                        if (element.styles.providers.hasOwnProperty('iconColor')) {
                            subModel.styles.providers.iconColor = element.styles.providers.iconColor;
                        }
                        if (element.styles.providers.hasOwnProperty('icon')) {
                            subModel.styles.providers.icon = element.styles.providers.icon;
                        }
                    }
                    if (element.styles.hasOwnProperty('customize')) {
                        if (element.styles.customize.hasOwnProperty('icon')) {
                            subModel.styles.customize.classUrl = element.styles.customize.classUrl;
                        }
                    }
                }
                resolve(subModel);
        });
    }
    mapDataToButtonSubModel(element: any): Promise<any> {
        let subModel = new buttonModel();
        return new Promise((resolve, reject) => {
                subModel.inputType = element.inputType;
                console.log(element);
                if(element.hasOwnProperty('styles')&&element.styles.hasOwnProperty('providers')){
                    if (element.styles.providers.hasOwnProperty('color')) {
                        subModel.styles.providers.color = element.styles.providers.color;
                    }
                    if (subModel.styles.providers.hasOwnProperty('outline')) {
                        subModel.styles.providers.outline = subModel.styles.providers.outline;
                    }
                }
                if(element.hasOwnProperty('content')){
                    if (element.content.hasOwnProperty('name')) {
                        subModel.content.name = element.content.name;
                    }
                    if (element.content.hasOwnProperty('value')) {
                        subModel.content.value = element.content.value;
                    }
                }
                resolve(subModel);
            });
    }
    mapDataToSlideModel(data: any): Promise<any> {
        return new Promise((resolve, reject) => {
            let model = new htmlModel();
            if (data.options.hasOwnProperty('zoom')) {
                model.slide.options.zoom = data.options.zoom;
            }
            if (data.hasOwnProperty('pager')) {
                model.slide.options.pager = data.options.pager;
            }
            if (data.hasOwnProperty('loop')) {
                model.slide.options.loop = data.options.loop;
            }
            if (data.hasOwnProperty('contents')) {
                model.slide.contents = data.contents;
            }
            resolve(model);
        });
    }
    // mapDataToTitleModel(data: any): Promise<any> {
    //     return new Promise((resolve, reject) => {
    //         let model = new htmlModel();
    //         if (data.hasOwnProperty('text')) {
    //             model.title.text = data.text;
    //         }
    //         if (data.hasOwnProperty('color')) {
    //             model.title.color = data.color;
    //         }
    //         resolve(model);
    //     });
    // }
    // mapDataToBodyModel(data: any): Promise<any> {
    //     return new Promise((resolve, reject) => {
    //         let model = new htmlModel();
    //         if (data.hasOwnProperty('background')) {
    //             model.body.background = data.background;
    //         }
    //         resolve(model);
    //     });
    // }

    // mapDataToModel(data:any,type:any):Promise<any>{
    //     return new Promise((resolve,reject)=>{
    //         data.hasOwnProperty('input')
    //         if(data.hasOwnProperty('input')){
    //             data.input.forEach(element => {
    //               let model = new inputModel();
    //               if(element.hasOwnProperty('labelName')){
    //                 model.labelName = element.labelName;
    //               }
    //               if(element.hasOwnProperty('labelColor')){
    //                 model.labelColor = element.labelColor;
    //               }
    //               if(element.hasOwnProperty('inputPlaceholder')){
    //                 model.inputPlaceholder = element.inputPlaceholder;
    //               }
    //               if(element.hasOwnProperty('inputType')){
    //                 model.inputType = element.inputType;
    //               }
    //               if(element.hasOwnProperty('inputValue')){
    //                 model.inputValue = element.inputValue;
    //               }
    //               if(element.hasOwnProperty('inputName')){
    //                 model.inputName = element.inputName;
    //               }
    //               this.inputBind.push(model);

    //             });
    //           }

    //     });
    // }

}