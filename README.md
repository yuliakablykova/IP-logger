# IP-logger V-b-1.2.3333333333333333 Educational Uses Only ©️
Logger/Grabber                                     | customization | IP look up    | Open Source   | Type          |
---------------------------------------------------|:-------------:|:-------------:|:-------------:|:-------------:|
***https://github.com/NotYmL/IP-logger/***         | ***good***    | ***IpInfo.io*** | ***True***  | ***API***     |
https://github.com/dzt/ip-grabber                  | `minimal`     | `None`        | True          | `Script`      |
https://github.com/EesaZahed/IP-grabber            | good          | `None`        | True          | API           |
https://github.com/cchhaarroonn/Grabby             | `minimal`     | IpInfo.io     | True          | `Script`      |
https://grabify.link/                              | good          | grabify.link  | `False`       | WebSite       |

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

1. Sign up at [https://ipinfo.io/](https://ipinfo.io/)

2. Go to [Dashboard](https://ipinfo.io/account/home)

3. Copy your Token

4. Turn on ipinfo in conf.json

5. Paste your token in conf.json at ipinfo-token (Eg. "ipinfo-token": "Token-Here")

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

## Additional Information
> Tested on CentOS 7
