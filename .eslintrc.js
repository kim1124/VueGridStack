module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: ['plugin:vue/essential', '@vue/prettier'],
    rules: {
        'prettier/prettier': [
            'error',
            {
                semi: false,
                tabWidth: 4,
                useTab: true,
                singleQuote: true,
                trailingComma: 'none'
            }
        ],
        semi: [2, 'never'],
        indent: ['error', 4],
        'eol-last': 0,
        'no-trailing-spaces': 0,
        'keyword-spacing': 0,
        'no-unused-vars': 1,
        'no-multiple-empty-lines': 0,
        'space-before-function-paren': 0,
        allowTemplateLiterals: true,
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
    },
    parserOptions: {
        parser: 'babel-eslint'
    }
}
