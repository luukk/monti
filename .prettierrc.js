module.exports = {
    scripts: {
        extensions: ['.js'],
        write: './src/',
        options: {
            parser: "flow",
            printWidth: 100,
            tabWidth: 4
        }
    },
    styles: {
        extensions: ['.scss'],
        write: './src/assets/',
        options: {
            parser: 'scss',
            printWidth: 100,
            tabWidth: 1,
            trailingComma: "all",
            bracketSpacing: true
        }
    }
};
