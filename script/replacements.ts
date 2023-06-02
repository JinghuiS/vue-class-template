// source: https://github.com/Myrmod/vitejs-theming/blob/master/build-plugins/rollup/replace-files.js

import { Plugin } from 'vite'

/**
 * @function replaceFiles
 * @param {FileReplacement[]} replacements
 * @return {({name: "rollup-plugin-replace-files", enforce: "pre", Promise<resolveId>})}
 */
export default function replaceFiles(replacements: Environments) {
  let envMode: string
  return {
    name: 'rollup-plugin-replace-files',
    enforce: 'pre',
    config(config, env) {
      envMode = env.mode
    },
    async resolveId(source, importer, options) {
      const configuration = replacements[envMode]
      let fileReplacements: FileReplacement[] = []
      const resolved = await this.resolve(source, importer, {
        ...options,
        skipSelf: true
      })
      if (configuration && configuration.fileReplacements) {
        fileReplacements = configuration.fileReplacements
        // for (const replacement of configuration.fileReplacements) {
        //   // create Webpack module rule
        //   fileReplacements.push(replacement)
        // }
      }
      /**
       * The reason we're using endsWith here is because the resolved id
       * will be the absolute path to the file. We want to check if the
       * file ends with the file we're trying to replace, which will be essentially
       * the path from the root of our workspace.
       */

      const foundReplace = fileReplacements.find((replacement) =>
        resolved?.id?.endsWith(replacement.replace)
      )
      if (foundReplace) {
        // console.info(`replace "${foundReplace.replace}" with "${foundReplace.with}"`)
        try {
          // return new file content
          return {
            id: foundReplace.with
          }
        } catch (err) {
          console.error(err)
          return null
        }
      }
      return null
    }
  } as Plugin
}

export interface FileReplacement {
  replace: string
  with: string
}

export interface Environments {
  [key: string]: {
    fileReplacements: FileReplacement[]
  }
}
