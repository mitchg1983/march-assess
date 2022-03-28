const parseedError = (err) => {
    let objKeys = Object.keys(err.keyValue);
    let objValues = Object.values(err.keyValue);
    console.log("key", objKeys[0])
    console.log("value", objValues[0]);
    return `${objKeys[0]} ${objValues[0]} is already in use.`
}

const errorHandler = (err) => {
  let message = "";

  if(err.code){
    switch (err.code){
        case 11000:
        message = parseedError(err)
        break;
        default:
            message = "Something is wrong, contact tech support."
    }
  }
    return message;
  
};

module.exports = {
  errorHandler,
};
