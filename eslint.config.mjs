import antfu from '@antfu/eslint-config'

export default antfu({
  stylistic: true,
  react: {
    overrides: {
      'style/jsx-self-closing-comp': [
        'error',
        {
          html: true,
        },
      ],
      'style/jsx-max-props-per-line': [
        'error',
        {
          maximum: 2,
        },
      ],
    },
  },
  typescript: true,
  formatters: {
    html: true,
  },
}, {
  files: ['**/*.{ts,tsx}'],
  rules: {
    'ts/no-require-imports': 'off',
  },
})
