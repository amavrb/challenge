## Install and Run

To install do `yarn` in the root dir.

See `"scripts"` in `package.json` for full set of commands provided in this
package.

### Add API key

Do not forget to add your API key in your `environment` variables.

Create a `.env` file and add your key:

```
REACT_APP_API_KEY={key}
```

### Run

To start the development server run:

`yarn start:dev`

## Testing

We're using [Cypress](https://www.cypress.io) for the E2E tests.

### Setup

Create a `cypress.env.json` in the root folder.

Add the following lines:

```
{
    "baseUrl": "http://localhost:8080/",
    "apiServer": "https://api.1337co.de/v3",
    "endpoints": {
        "employees": "/employees"
    },
    "apiKey": "{key}"
}
```

To run availiable tests located in `./cypress/integration/*` either run

- `yarn cypress:open` for visual tests _or_
- `yarn cypress:headless` to run them in the CLI tool
