module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
    ],
    parser: 'babel-eslint',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 6,
        sourceType: 'module',
    },
    env: {
        browser: true,
        es6: true,
        mocha: true,
    },
    plugins: [
        'react',
    ],
    rules: {

        // Enforce one true brace style, but allow single line blocks
        'brace-style': ['error', '1tbs', {allowSingleLine: true,},],

        // Allow React to be unused (it must be imported in JSX files)
        'no-unused-vars': ['error', {varsIgnorePattern: 'React',},],

        // Do not enforce use of radix except when number is ambiguous base
        radix: ['error', 'as-needed',],

        /*
         * Force space after function keyword for anonymous functions, disallow
         * space after name of named function
         */
        'space-before-function-paren': [
            'error',
            {anonymous: 'always', named: 'never',}
        ],
        'valid-jsdoc': ['error', {

            // Do not require @return when function has no return statement
            requireReturn: false,
        },],
    },
};
