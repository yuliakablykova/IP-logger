# IP-logger

## Instalation
> Download repo!
```shell
git clone https://github.com/NotYmL/IP-logger
```
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

> All-in-one!
```shell
git clone https://github.com/NotYmL/IP-logger && cd IP-logger/ && npm i && npm install pm2 -g && pm2 start Server.js
```
### [How to use pm2](https://www.fastcomet.com/tutorials/nodejs/pm2)

## Configuration
```json
{
    "Https": false,
    "Https-privateKey": null,
    "Https-certificate": null,
    "html": "web/Index.html",
    "Discord-webhook": null,
    "ipinfo": false,
    "ipinfo-token": null
}
```

### Using [ipinfo.io](https://ipinfo.io/)
Sign up at [https://ipinfo.io/](https://ipinfo.io/)
Go to [Dashboard](https://ipinfo.io/account/home)
Copy your Token
Turn on ipinfo in conf.json
Paste your token in conf.json at ipinfo-token (Eg. "ipinfo-token": "Token-Here")

### More customized configuration requires more direct code changes!
#### Default HTML
```html
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <p>Test 123</p>
    </body>
</html>
```
