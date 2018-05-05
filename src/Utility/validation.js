const validate =(val ,connectedValue, rules)=>{
    let isValid=true;
    for(let rule in rules){
        switch(rule){
            case'isEmail':
           isValid =isValid && emailValidator(val);
           break;
           case'miLength':
           isValid = isValid && miLengthValidator(val,rules[rule]);
           break;
           case'equalTo':
           isValid=isValid && equalToValidator(val, ruconnectedValue[rule]);
           break;
           default :
           isValid=true;
        }


    }
    return isValid;
}

const emailValidator = val =>{
    return /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(val);



}

const miLengthValidator = (val, miLength) =>{
    return val.length >= miLength;
}

const equalToValidator = (val,checkValue) =>{
    return val === checkValue; 
}


export default validate;
