var recipes = {};

function updateObjectWithKeyAndValue(object, key, value){
  return object.assign({},object{[key],[value]});

}

function destructivelyUpdateObjectWithKeyAndValue (object,key,value){
  object.key=value;
  }
