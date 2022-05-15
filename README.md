# IP-logger V-2.0.0-Beta Educational Uses Only ©️
Logger/Grabber                                     | customization | IP look up    | Open Source   | Type          | Can Use Https |
---------------------------------------------------|:-------------:|:-------------:|:-------------:|:-------------:|:-------------:|
***https://github.com/NotYmL/IP-logger/***         | ***good***    | ***IpInfo.io*** | ***True***  | ***API***     | ***True***    |
https://github.com/dzt/ip-grabber                  | `minimal`     | `None`        | True          | `Script`      | `?`           |
https://github.com/EesaZahed/IP-grabber            | good          | `None`        | True          | API           | `False`       |
https://github.com/cchhaarroonn/Grabby             | `minimal`     | IpInfo.io     | True          | `Script`      | `?`           |
https://grabify.link/                              | good          | grabify.link  | `False`       | WebSite       | True          |

## [Wiki](https://github.com/NotYmL/IP-logger/wiki) added!

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
```shell
pm2 status
```
```shell
pm2 start <File-name>
```
```shell
pm2 stop <ID-from-status>
```

## Configuration
```json
{
    "Https": false,
    "Https-privateKey": null,
    "Https-certificate": null,
    "html": "web/index.html",
    "Dashboard-URL": "/logs",
    "Password": "123",
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

> Platforms/APIs used: [discord](https://discord.gg/) and [ipinfo.io](https://ipinfo.io/)

## Future plans
- [ ] Web GUI Interface
- [x] Logs Website (Password protected)

## Behind rating table
Paste-into-code scripts are rated with minimal customization because any customization would be directly changing the code
Paste-into-code scripts are alsou rated with ? in supporting https protocol this is because the User has to make his website https for the script to use in https
> Note
> grabify.link is the best option if you don't care about source code and if you do then the BEST TOOL for you is one that you will build, BUT for now my tool is THE BEST OPTION FOR YOU (;

## Demo
![](https://github.com/NotYmL/IP-logger/blob/main/assets/demo.png)
