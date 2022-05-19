module.exports = {
  root: true,
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  // 定义全局变量, 不出现 no-undef 错误
  globals: {
    defineEmits: true,
    document: true,
    localStorage: true,
    window: true,
    defineProps: true,
    defineExpose: true,
    $ref: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'airbnb-base',
    'prettier',
    './.eslintrc-auto-import.json'
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  plugins: [
    'prettier',
    'import',
  ],
  rules: {
    //关闭lf校验，windows系统拉代码下来是总是包一大堆错，关闭这个可以解决问题
    'linebreak-style': ['off'],
    'import/no-unresolved': 'off',
    // 关闭不需要检测的
    'vue/no-parsing-error': [2, { 'x-invalid-end-tag': false, }], // 自闭合标签， 如Link还是需要的
    //扩展名校验
    'import/extensions': 'off',
    'import/no-absolute-path': 'off',
    'no-async-promise-executor': 'off',
    'import/no-extraneous-dependencies': 'off',
    'vue/no-multiple-template-root': 'off',
    'vue/html-self-closing': 'off',
    'no-console': 'off',
    'no-plusplus': 'off',
    'no-useless-escape': 'off',
    'no-bitwise': 'off',
    'prettier/prettier': 'error',
    'import/prefer-default-export': 0,
    '@typescript-eslint/no-explicit-any': ['off'],
    '@typescript-eslint/explicit-module-boundary-types': ['off'],
    '@typescript-eslint/ban-ts-comment': ['off'],
    'vue/no-setup-props-destructure': ['off'],
    '@typescript-eslint/no-empty-function': ['off'],
    'vue/script-setup-uses-vars': ['off'],
    //can config  to 2 if need more then required、
    //参数设置，未使用校验
    '@typescript-eslint/no-unused-vars': [1],
    'no-param-reassign': ['off'],
    'no-unused-vars': [
      'error',
      // we are only using this rule to check for unused arguments since TS
      // catches unused variables but not args.
      { varsIgnorePattern: '.*', args: 'none' }
    ],
    'consistent-return': 'off',
    'no-restricted-syntax': 'off',
    'no-unused-expressions': 'off',
    'vue/multi-word-component-names': 'off',
    'no-restricted-globals': 'off',
    'camelcase': 'off',
    'no-multi-assign': 'off',
    'prefer-destructuring': 'off',
    'no-underscore-dangle': 'off',
    'no-nested-ternary': 'off',
    'semi': ['error', 'always'],
    'import/order': 'off',
    'prettier/prettier': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'no-use-before-define': 'off',
    'import/no-named-as-default': 'off',
    'import/no-named-as-default-member': 'off',
  }
}