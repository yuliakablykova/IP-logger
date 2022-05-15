# IP-logger

## Instalation
> Install Dependencies!
```shell
npm i
```
> Run Server!
```shell
node Server.js
```
> OR use pm2!
```shell
npm install pm2 -g && pm2 start Server.js
```
## Configuration
```json
{
    "Https": false,
    "Https-privateKey": "FULL Path to privateKey",
    "Https-certificate": "FULL Path to certificate",
    "html": "web/Index.html",
    "Discord-webhook": "Discord WebHook URL"
}
```
