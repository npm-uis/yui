module.exports = {
    // ATTENTION!!!
    // Preset ordering is reversed, so `@babel/preset-typescript` will called first
    // Do not put `@babel/preset-typescript` before `@babel/preset-env`, otherwise will cause a compile error
    // See https://github.com/babel/babel/issues/12066
    presets: [
        [
            '@babel/preset-env',
            {
                loose: true,
                modules: false,
                useBuiltIns: 'usage',
                corejs: 3
            }
        ],
        '@babel/preset-typescript'
    ]
};

