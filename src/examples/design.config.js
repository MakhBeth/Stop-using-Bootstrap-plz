const COLORS = {
    white: '#ffffff',
    black: '#033243',
    dirty: '#F6F8F9',
    overlay: 'rgba(3, 50, 67, 0.75)',
    gray: {
        '75': '#476976',
        '50': '#8CA1A9',
        '25': '#D1D9DC',
        '10': '#E8ECED'
    },
    yellow: {
        '75': '#B39E1A',
        '50': '#F5D923',
        '25': '#F8E673',
        '10': '#FDF8D7'
    },
    orange: {
        '75': '#AF5D2C',
        '50': '#F07F3C',
        '25': '#F5AD82',
        '10': '#FCE7DB'
    },
    red: {
        '75': '#A92A2A',
        '50': '#E73939',
        '25': '#EF8181',
        '10': '#FADBDB'
    },
    pink: {
        '75': '#A6617B',
        '50': '#E484A9',
        '25': '#EDB0C8',
        '10': '#FAE8EF'
    },
    blue: {
        '75': '#53929F',
        '50': '#71C8DA',
        '25': '#A4DCE7',
        '10': '#E5F5F8'
    },
    green: {
        '75': '#417140',
        '50': '#599A57',
        '25': '#95BE94',
        '10': '#E0ECE0'
    }
}

const GRADIENTS = {
    'black-yellow': `${COLORS.black}, ${COLORS.yellow[50]}`,
    'black-orange': `${COLORS.black}, ${COLORS.orange[50]}`,
    'black-red': `${COLORS.black}, ${COLORS.red[50]}`,
    'black-pink': `${COLORS.black}, ${COLORS.pink[50]}`,
    'black-blue': `${COLORS.black}, ${COLORS.blue[50]}`,
    'black-green': `${COLORS.black}, ${COLORS.green[50]}`,
    'green-yellow': `${COLORS.green[50]}, ${COLORS.yellow[50]}`,
    'pink-yellow': `${COLORS.pink[50]}, ${COLORS.yellow[50]}`,
    'red-blue': `${COLORS.red[50]}, ${COLORS.blue[50]}`,
    'orange-yellow': `${COLORS.orange[50]}, ${COLORS.yellow[50]}`,
    'red-yellow': `${COLORS.red[50]}, ${COLORS.yellow[50]}`,
    'red-orange': `${COLORS.red[50]}, ${COLORS.orange[50]}`,
    'gray-gray': `${COLORS.gray[75]}, ${COLORS.gray[50]}`,
    'black-gray': `${COLORS.black}, ${COLORS.gray[50]}`,
    'black-gray-dark': `${COLORS.black}, ${COLORS.gray[75]}`,
    yellow: `${COLORS.yellow[25]}, ${COLORS.yellow[50]}, ${COLORS.yellow[75]}`,
    orange: `${COLORS.orange[25]}, ${COLORS.orange[50]}, ${COLORS.orange[75]}`,
    red: `${COLORS.red[25]}, ${COLORS.red[50]}, ${COLORS.red[75]}`,
    pink: `${COLORS.pink[25]}, ${COLORS.pink[50]}, ${COLORS.pink[75]}`,
    green: `${COLORS.green[25]}, ${COLORS.green[50]}, ${COLORS.green[75]}`,
    gray: `${COLORS.gray[25]}, ${COLORS.gray[50]}, ${COLORS.gray[75]}`,
    white: `${COLORS.dirty}, ${COLORS.gray[10]}, ${COLORS.gray[25]}`,
    black: `${COLORS.gray[50]}, ${COLORS.gray[75]}, ${COLORS.black}`,
    blue: `${COLORS.blue[25]}, ${COLORS.blue[50]}, ${COLORS.blue[75]}`
}

const TYPOGRAPHY = {
    // note: lineHeight is fontSize dependant
    h1: {
        '0': {
            fontSize: 39.813,
            fontWeight: 700,
            lineHeight: 5.5,
            marginBottom: 3,
            fontFamily: `"Gotham A", "Gotham B", Helvetica, Arial, sans-serif`
        },
        '960': {
            fontSize: 48.828,
            fontWeight: 700,
            lineHeight: 7,
            marginBottom: 3
        }
    },
    h2: {
        '0': {
            fontSize: 33.178,
            fontWeight: 700,
            lineHeight: 5.5,
            marginBottom: 2,
            fontFamily: `"Gotham A", "Gotham B", Helvetica, Arial, sans-serif`
        },
        '960': {
            fontSize: 39.063,
            fontWeight: 700,
            lineHeight: 6,
            marginBottom: 2
        }
    },
    h3: {
        '0': {
            fontSize: 27.648,
            fontWeight: 700,
            lineHeight: 4.5,
            marginBottom: 2,
            fontFamily: `"Gotham A", "Gotham B", Helvetica, Arial, sans-serif`
        },
        '960': {
            fontSize: 31.25,
            fontWeight: 700,
            lineHeight: 5,
            marginBottom: 2
        }
    },
    h4: {
        '0': {
            fontSize: 23.04,
            fontWeight: 700,
            lineHeight: 3.5,
            marginBottom: 1,
            fontFamily: `"Gotham A", "Gotham B", Helvetica, Arial, sans-serif`
        },
        '960': {
            fontSize: 25,
            fontWeight: 700,
            lineHeight: 4,
            marginBottom: 1
        }
    },
    h5: {
        '0': {
            fontSize: 19.2,
            fontWeight: 700,
            lineHeight: 3,
            marginBottom: 1,
            fontFamily: `"Gotham A", "Gotham B", Helvetica, Arial, sans-serif`
        },
        '960': {
            fontSize: 20,
            fontWeight: 700,
            lineHeight: 3,
            marginBottom: 1
        }
    },
    h6: {
        '0': {
            fontSize: 16,
            fontWeight: 700,
            lineHeight: 3,
            letterSpacing: 0.125
        }
    },
    large: {
        '0': {
            fontSize: 22,
            fontWeight: 400,
            lineHeight: 4
        }
    },
    default: {
        '0': {
            fontSize: 16,
            fontWeight: 400,
            lineHeight: 3
        }
    },
    list: {
        '0': {
            marginBottom: 1
        }
    },
    p: {
        '0': {
            marginBottom: 2
        }
    },
    small: {
        '0': {
            fontSize: 13,
            fontWeight: 400,
            lineHeight: 2
        }
    },
    xsmall: {
        '0': {
            fontSize: 11,
            fontWeight: 400,
            lineHeight: 1.75
        }
    }
}

let design = {
    breakpoints: {
        '0': 0,
        '480': 480,
        '600': 600,
        '720': 720,
        '840': 840,
        '960': 960,
        '1024': 1024,
        '1248': 1248,
        '1440': 1440,
        '1920': 1920
    },
    rowWidth: 1248,
    containerWidth: 1440,
    designBase: 8,
    remBase: 16,
    ieGutter: 40,
    columnGutters: {
        '0': 16,
        '600': 24,
        '1024': 40
    },
    typography: TYPOGRAPHY,
    colors: COLORS,
    gradients: GRADIENTS
}

design.spacingXS = design.designBase * 1
design.spacingSM = design.designBase * 2
design.spacingMD = design.designBase * 3
design.spacingLG = design.designBase * 5
design.spacingXL = design.designBase * 8
design.spacingXXL = design.designBase * 13

export default design