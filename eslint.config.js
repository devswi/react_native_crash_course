import antfu from '@antfu/eslint-config'

export default antfu({
  stylistic: true,
  react: true,
  typescript: true,
  formatters: {
    html: true,
  },
})
