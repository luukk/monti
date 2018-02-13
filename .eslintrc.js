module.exports = {
    root: true,
    parser: "babel-eslint",
    parserOptions: {
        sourceType: "module"
    },
    env: {
        browser: true
    },
    plugins: ["html", "promise"],
    rules: {
        "eqeqeq": 2,
        "no-multi-spaces": 2,
        "callback-return": 2,
        "no-undef": 2,
        "max-len": [2, 120],
        "func-names": ["error", "never"],
        "no-unneeded-ternary": 1,
        "no-unused-vars": 1,
        "prefer-const": 1,
        "no-const-assign": 1,
        "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
    }
};
