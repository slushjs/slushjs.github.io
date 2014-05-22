[slushjs.github.io](http://slushjs.github.io)
=====================

> The Slush homepage

## Contributing

All pull requests should be made to the `develop` branch.

## Setup

### Requirements

Gulp:

```bash
npm install -g gulp
```

Local dependencies:

```bash
npm install && bower install
```

### Running a dev server

```bash
gulp serve
```

Open: `http://localhost:3000` in your browser.

### Building for production

```bash
gulp dist
```

Run it by opening `./dist/index.html` in your browser.

### Deploy to production (i.e. the `master` branch)

**You'll need push access to the repo to do this!**

```bash
gulp deploy
```

## License

MIT

