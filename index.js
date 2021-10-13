const SVGFixer = require('oslllo-svg-fixer');

var options = {
  showProgressBar: true,
  throwIfDestinationDoesNotExist: false,
};


// SVGFixer('original/numericIcon', 'new/fixed-svgs', options); // Returns instance


SVGFixer('./original', './new', options).fix()
  .then(() => {
    console.log("done");
  })
  .catch((err) => {
    throw err;
  });
