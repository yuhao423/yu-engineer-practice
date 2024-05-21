#! /usr/bin/env node

import minimist from 'minimist'

async function init (){
    const argv = minimist(process.argv.slice(2), {
        alias: {
          templateType: ['t'],
        //   needsTypeScript: ['ts'],
        //   pluginList: ['p'],
        //   moduleList: ['m'],
        //   UIName: ['ui', 'u'],
        //   needsEslint: ['eslint', 'e'],
        },
        string: ['_'],
      })
      console.log(argv);
      const projectName = argv._[0]
    console.log(projectName);


    
}
init()
console.log("hello yuyuyu")
