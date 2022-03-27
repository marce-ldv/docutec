module.exports = {
  'env': {
    'browser': true,
    'es2021': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  'plugins': [
    'react',
    'react-hooks',
    '@typescript-eslint'
  ],
  'rules': {
    'react-hooks/rules-of-hooks': 'warn',
    'react-hooks/exhaustive-deps': 'off',
    'linebreak-style': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
    'import/order': 'off',
    'react/button-has-type': 'off',
    // 'react/react-in-jsx-scope': 'off',
    'arrow-parens': 'off',
    'arrow-body-style': 'off',
    'react/jsx-props-no-spreading': 'off',
    'no-nested-ternary': 'off',
    'react/no-children-prop': 'off',
    'no-noninteractive-element-to-interactive-role': 'off',
    'object-curly-newline': 'off',
    "@typescript-eslint/no-empty-interface": [
      "off",
      {
        "allowSingleExtends": false
      }
    ]
  },
  'overrides': [
    {
      'files': [
        '**/*.spec.js',
        '**/*.spec.jsx',
        '**/*.test.js',
        '**/*.test.jsx',
      ],
      'env': {
        'jest': true,
      },
    },
  ],
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', 'src/'],
      },
    },
  },
}
