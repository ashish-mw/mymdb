## mymdb API

```
$ nvm use
$ cp .env.example .env
$ npm i
$ npm run dev
```



## finding and killing process on ports

```
lsof -nP +c 15 | grep LISTEN | grep <port>

kill -9 <pid>
```