'use strict';

// configuration
module.exports = {
    
    specs: ["./features/*.feature"],
cucumberOpts: {
    require: ["./steps/restapi.steps.js"]
}
};