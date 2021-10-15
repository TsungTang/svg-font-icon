const SVGFixer = require("oslllo-svg-fixer")
const path = require("path")

var options = {
  showProgressBar: true,
  throwIfDestinationDoesNotExist: false,
}

SVGFixer(
  path.join(process.cwd(), "/svg/original"),
  path.join(process.cwd(), "/svg/fix"),
  options
)
  .fix()
  .then(() => {
    console.log("done")
  })
  .catch((err) => {
    throw err
  })
