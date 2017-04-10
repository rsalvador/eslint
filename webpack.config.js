module.exports = {
    target: 'node',
    entry: './bin/eslint.js',
    output: {
        path: './build',
        filename: 'eslint.min.js',
    }
}
