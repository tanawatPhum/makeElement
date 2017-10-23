
export class htmlModel{
    form:formModel = new formModel();
    slide:slideModel = new slideModel();
}
export class formModel{
    inputType:string;
    contents=[];  
}
export class inputModel{
    inputType:string;
    content = {
        labelName:null,
        placeholder:null,
        value:null,
        id:null,
        name:null,
        actionSheetValue:[]
    }
    options = {
        checked:false,
        type:'text',
        actionSheetButtonSumitName:"OK",
        actionSheetButtonCancelName:"CANCEL",
        actionSheetMutiValue:false,   
        displayFormat:"DD/MMM/YYYY"
    }
    styles={
        providers:{
            labelColor:'dark',
            placeholderColor:null,
            icon:null,
            iconColor:"black",
            color:'primary',
        },
        customize:{
            classUrl: null
        }
    }

}
export class slideModel{
    inputType:string;
    contents = [];
    options = {
        zoom:false,
        pager:false,
        loop: false,
    }
}
export class imageModel{
    inputType:string;
    content ={
        url:null,
        description:null,
    }
}
export class buttonModel{
    inputType:string;
    content ={
        value:null,
        name:null
    }
    styles={
        providers:{
            color:'primary',
            outline:false,
        }
    }
}
export class titleModel{
    text:string;
    color:string;
}
export class bodyModel{
    background:string = "white";
}


// @checkbox
// inputType
// labelName
// labelColor
// color