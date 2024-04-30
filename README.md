# container-help.js
## 打包

```
npm run build
```

## how to use
```javascript
const c = require('./dist/index')
const docker =c.getVm('docker')
// docker images
docker.showImages().then(images=>console.log(images))

```
