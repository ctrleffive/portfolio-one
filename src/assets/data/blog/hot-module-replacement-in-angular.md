When working with angular projects, live reloading is a must. But whenever you change something in the code, the whole page will reload. Hot Module Replacement (HMR) is feature in webpack that allows for modules to be replaced without a full browser reload. Changes will get updated instantly. This feature allow you to maintain much of the application state usually lost when reloading the page. But this is not enabled by default in angular. We need to do some adjustments in your project to get this run.

So, lets start..

## 1. Install Dependancy
```shell
yarn add –dev @angularclass/hmr
```
or if you are using `npm`,
```shell
npm install --save-dev @angularclass/hmr
```

## 2. Add New Environment
Add a new environment file called `environment.hmr.ts` inside your `src/environments` folder with following code.
```typescript
export const environment = {
  production: false,
  hmr: true,
  // you can add your existing development configs from `environment.ts` file here.
}
```
Now, we have a new environment file. We need to update `build` & `serve` properties in `angular.json` file with following configurations.

for the `build` property,
```javascript
"build": {
  "configurations": {
    //
    "hmr": {
      "fileReplacements": [
        {
          "replace": "src/environments/environment.ts",
          "with": "src/environments/environment.hmr.ts"
        }
      ]
    }
    //
  }
}
```
and for the `serve` property,
```javascript
"serve": {
  "configurations": {
    //
    "hmr": {
      "hmr": true,
      "browserTarget": "<YOUR_PROJECT_NAME>:build:hmr"
    }
    //
  }
}
```
then, add `node` into the `types` array in `compilerOptions` in `src/tsconfig.app.json` file.
```javascript
{
  //
  "compilerOptions": {
    //
    "types": ["node"]
  }
  //
}
```

## 3. Update Existing Environments
Next, we need to add an `hmr` property with value `false` in all other environment files (except `environment.hmr.ts`).
```typescript
export const environment = {
  //
  hmr: false
}
```

## 4. Configure Your Application
Create a new file named `hmr.ts` inside `src` folder with following content.
```typescript
import { NgModuleRef, ApplicationRef } from '@angular/core'
import { createNewHosts } from '@angularclass/hmr'

export const hmrBootstrap = (
  module: any,
  bootstrap: () => Promise<NgModuleRef<any>>
) => {
  let ngModule: NgModuleRef<any>
  module.hot.accept()
  bootstrap().then(mod => (ngModule = mod))
  module.hot.dispose(() => {
    const appRef: ApplicationRef = ngModule.injector.get(ApplicationRef)
    const elements = appRef.components.map(c => c.location.nativeElement)
    const makeVisible = createNewHosts(elements)
    ngModule.destroy()
    makeVisible()
  })
}
```
then, we need to modify the `main.ts` file inside `src` folder to use HMR feature.
```typescript
import { enableProdMode } from '@angular/core'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { environment } from './environments/environment'
import { hmrBootstrap } from './hmr'
import { RootModule } from './app/root/root.module'

if (environment.production) {
  enableProdMode()
}

const bootstrap = () => platformBrowserDynamic().bootstrapModule(RootModule)

if (environment.hmr) {
  if (module['hot']) {
    hmrBootstrap(module, bootstrap)
  } else {
    console.error('HMR is not enabled for webpack-dev-server!')
    console.log('Are you using the --hmr flag for ng serve?')
  }
} else {
  bootstrap().catch(err => console.log(err))
}
```
## 5. Add NPM Script
Add an `hmr` property in `scripts` object in the `package.json` file to make running app easier.
```javascript
"scripts": {
  //
  "hmr": "ng serve --configuration hmr"
}
```
## Success! 👏
We finished configuring HMR for the angular project.
Now try running the app
```shell
yarn hmr
```
or with `npm`
```shell
npm run hmr
```
