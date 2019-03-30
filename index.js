var recipes = {};

function updateObjectWithKeyAndValue(obj, key, value){
    Object.assign({},obj[key]=value);
    return {};
    
  }

function destructivelyUpdateObjectWithKeyAndValue (object,key,value){
  object[key]=value;
  return object;
  }
