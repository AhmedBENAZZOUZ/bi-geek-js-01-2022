exports.getCurrentYear = function(){
    const date = new Date();

    return date.getFullYear();
}

exports.getCurrentMonth = function(){
    const date = new Date();

    return date.getMonth()+1;
}


exports.getCurrentDate = function(){
    const date = new Date();

    return date.getDate();
}


