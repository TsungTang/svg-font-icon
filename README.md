# Fix SVG file and Convert to font-icon

1. Attempts to fix your svg by turning it into a fill / single path (and making it font compatible as a bonus)
2. Read a set of SVG icons and ouput a TTF/EOT/WOFF/WOFF2/SVG font, Generator of fonts from SVG icons.

## Setup

```
git clone git@github.com:TsungTang/svg-font-icon.git

cd ./svg-font-icon
```

### Install

```
pnpm install  // or npm install
```

## Use

### fix SVG file

put your svg set in `svg/original` directory, and

```
npm run fix-svg
```

### svg to font

```
npm run to-fonticon
```

### combine it together

```
npm run start
```
