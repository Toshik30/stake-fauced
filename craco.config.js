const path = require('path');

const resolvePath = p => path.resolve(__dirname, p)

module.exports = {
    webpack: {
        alias: {
            '@components': resolvePath('src/components'),
            '@styles': resolvePath('./src/styles'),
            '@sections': resolvePath('./src/sections')
        }
    },
}