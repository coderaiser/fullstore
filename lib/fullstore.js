'use strict';

module.exports = () => {
    const data = {};
    
    return function(value) {
        if (!arguments.length)
            return data.value;
         
         data.value = value;
         
         return value;
    };
};

