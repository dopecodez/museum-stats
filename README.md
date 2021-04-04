# museum-stats

A express server which returns the processed data for https://data.lacity.org/Arts-Culture/Museum-Visitors/trxm-jn3c based on input query of `date` in milliseconds.

If you have any doubts or clarifications on this code, hit me up and I'll try to help you guys out!

## Highlights

- [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installing](#installing)
- [Usage](#Usage)
- [Contributing](#contributing)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

### Prerequisites

You'll need to install NodeJS for running this application. I'm on Node v12.16.3, you can find it at:
```
https://nodejs.org/en/download/
```
You'll also need a code editor to see how the code goes. Use whichever editor which has JS support, I use Visual Studio Code on 
Windows 10.

### Installing

Simple steps to get the application running. Open the terminal to the folder containing museum-stats and just type:
```
npm install
```
This should install all the dependencies within package.json and create your package-lock.json and node modules.

This is a `TypeScript` project, so if you want to see the build happening.

```
npm run build
```

After the previous command completes successfully, open the terminal and type:
```
npm start
```
This should get the program up and running on the default port.

All environment variables can be changed in the `.env` file provided.

To run the tests, all you need to do is, type:

```
npm test
```

## Usage

Once the server is up and running, you can call the endpoint with server_ip/api/visitors. By default, the port should be 3000. On your local machine, server_ip would be http://localhost:3000/api/visitors (if you haven't changed the default port). This is a get request which expects two params : `date` and `ignore` as such:
```
{
  http://localhost:3000/api/visitors?date=1404198000000&ignore=avila_adobe
}
```

- `date` - time in milliseconds. This is required.
- `ignore` - museum to ignore. This is optional.

## Contributing

Before opening a pull request please make sure your changes follow the
[contribution guidelines][1].

[1]: https://github.com/dopecodez/pingman/blob/master/CONTRIBUTING.md
