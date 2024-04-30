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
