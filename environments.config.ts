export default {
  configurations: {
    development: {
      fileReplacements: [
        {
          replace: 'src/environments/environment.ts',
          with: 'src/environments/environment.ts'
        }
      ]
    },
    production: {
      fileReplacements: [
        {
          replace: 'src/environments/environment.ts',
          with: 'src/environments/environment.prod.ts'
        }
      ]
    }
  }
}
