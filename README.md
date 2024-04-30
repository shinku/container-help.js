# container-help.js
## 打包
podman/docker 客户端
```
npm run build
```

## how to use like a docker
```javascript
const c = require('container-helper.js')
const docker =c.getVm('docker')
// docker images
docker.showImages().then(images=>console.log(images))
```

## how to use like a podman
```javascript
const c = require('container-helper.js')
const podman =c.getVm('podman')
// docker images
podman.showImages().then(images=>console.log(images))
```

## functions
+ docker.showImages();
+ buildImage 
```js
  // docker build -t mysql:latest .  
  docker.buildImage({   
      imageName: "mysql",
      dockerFilePath: path.join(__dirname, "../images/mysql"),
      version: 'latest' 
  });
```
+ docker.runImage({});
```js
// docker run -p 3307:3306 -e MYSQL_ROOT_PASSWORD=123456789 --name test-mysql
await docker.runImage({
      p:[3307,3306],
      name: 'test-mysql',
      e: {
        "MYSQL_ROOT_PASSWORD":"123456789"
      }
    })
  
```
+ docker.removeImage(NAME);
+ docker.removeContainer(NAME)
