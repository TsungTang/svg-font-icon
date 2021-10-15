const svgtofont = require("svgtofont")
const path = require("path")
const fs = require("fs")
const fsPromises = require("fs").promises

svgtofont({
  src: path.join(process.cwd(), "/svg/fix"), // svg path
  dist: path.join(process.cwd(), "font-icons"), // output path
  fontName: "icon", // font name
  css: true, // Create CSS files.
  startUnicode: 0xea01, // unicode start number
  svgicons2svgfont: {
    fontHeight: 1000,
    normalize: true,
  },
  // website = null, no demo html files
  website: {
    title: "tang personal icon",
    // Must be a .svg format image.
    logo: path.resolve(process.cwd(), "svg", "git.svg"),
    version: "0.1",
    meta: {
      description: "Converts SVG fonts to TTF/EOT/WOFF/WOFF2/SVG format.",
      keywords: "svgtofont,TTF,EOT,WOFF,WOFF2,SVG",
    },
    description: ``,
    // Add a Github corner to your website
    // Like: https://github.com/uiwjs/react-github-corners
    corners: {
      url: "https://github.com/jaywcjlove/svgtofont",
      width: 62, // default: 60
      height: 62, // default: 60
      bgColor: "#dc3545", // default: '#151513'
    },
    links: [
      {
        title: "GitHub",
        url: "https://github.com/jaywcjlove/svgtofont",
      },
      {
        title: "Feedback",
        url: "https://github.com/jaywcjlove/svgtofont/issues",
      },
      {
        title: "Font Class",
        url: "index.html",
      },
      {
        title: "Unicode",
        url: "unicode.html",
      },
    ],
    footerInfo: `Licensed under MIT. (Yes it's free and <a href="https://github.com/jaywcjlove/svgtofont">open-sourced</a>`,
  },
})
  .then(() => {
    return fsPromises.readFile(
      path.join(process.cwd(), "font-icons/index.html")
    )
  })
  .then((fileBuffer) => {
    const newFile = fileBuffer
      .toString()
      .replace(
        `<link rel="stylesheet" href="icon.css" />`,
        `<link rel="stylesheet" href="./font-icons/icon.css" />`
      )
    return fsPromises.writeFile(path.join(process.cwd(), "index.html"), newFile)
  })
  .then(() => {
    console.log("Font icon Done!")
  })
