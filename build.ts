import * as webpack from 'webpack'
import { resolve } from 'path'
import { create, BrowserSyncInstance } from 'browser-sync'
import { copySync, copyFileSync, readJsonSync, writeJsonSync } from 'fs-extra'
import * as HTMLPlugin from 'html-webpack-plugin'

const env: string = process.env.NODE_ENV || 'development'

copySync('./assets', './public/assets')

const browser: BrowserSyncInstance = create()

browser.init({ server: './public' })

const compiler: webpack.Compiler = webpack({

  entry: './app/index.ts',

  output: {

    filename: 'index.js',

    path: resolve('public')

  },

  mode: env,

  module: {

    rules: [{ test: /.tsx?$/, use: 'ts-loader' }]

  },

  plugins: [new HTMLPlugin],

  resolve: { extensions: ['.js', '.ts', '.tsx'] }

} as webpack.Configuration)

const handler: webpack.ICompiler.Handler = (err, stats) => {

  console.log(stats.toString())

  browser.reload()

}

if (env === 'development') compiler.watch({}, handler)

else {

  let pack = readJsonSync('./package.json')

  let newPack = { name: pack.name, version: pack.version, license: 'MIT' }

  writeJsonSync('./public/package.json', newPack, { spaces: 2 })

  copyFileSync('./README.md', './public/README.md')

  compiler.run(handler)

}