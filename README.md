# node-docker-baseline

Simple docker container following node's tutorial

* docker: https://docs.docker.com/docker-for-mac/
* node docker tutorial: https://nodejs.org/en/docs/guides/nodejs-docker-webapp/

## Install [docker](https://docs.docker.com/docker-for-mac/install/) for macOS

### Build docker image
`$ docker build -t <your username>/node-docker-baseline .`

### List Image
`$ docker images`

### Run Image 
* Running your image with -d runs the container in detached mode, leaving the container running in the background. 
* The -p flag redirects a public port to a private port inside the container. Run the image you previously built.

`$ docker run -p 3000:3000 -d <your username>/node-docker-baseline`

### Test with curl
`$ curl -i localhost:3000`

```
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: text/html; charset=utf-8
Content-Length: 12
Date: Sun, 02 Jun 2013 03:53:22 GMT
Connection: keep-alive

Hello world
```

### Get container ID
`$ docker ps`

### Stop container
`$ docker stop <container id>`

### Print app output
`$ docker logs <container id>`

### If you need to enter the container
`$ docker exec -it <container id> /bin/bash`
