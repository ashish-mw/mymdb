

## finding and killing process on ports

```
lsof -nP +c 15 | grep LISTEN | grep <port>

kill -9 <pid>
```