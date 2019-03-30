var recipes = {};

function updateObjectWithKeyAndValue(object, key, value){
  newobj=object.assign();
newobj[key]=[value];
return newobj;

}

function destructivelyUpdateObjectWithKeyAndValue (object,key,value){
  object.key=value;
  }
