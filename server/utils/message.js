var moment = require('moment');

var generateMessage = (from ,text) =>{
    return{
        from,
        text,
        createdAt: moment().valueOf()
    }
}

var generateLocationMessage = (from, latitude, longitdue)=>{
    return {
        from,
        url: `https://www.google.com/maps?q=${latitude},${longitdue}`,
        createdAt: moment().valueOf()
    }
}

module.exports = { generateMessage , generateLocationMessage}