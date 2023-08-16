# Requirements

nodeJS v16 / v18 are fully compatible

# Available Scripts

### DEV MODE:
`npm run start`

This command performs the following actions:
- Launches the server with simulated data
- Configures environment variables (Note: .env file is excluded from version control intentionally)
- Utilizes craco (a part of the react-scripts library) for global SCSS variables (custom webpack config)

Once executed, the application should be accessible at http://localhost:3000.

### PRODUCTION MODE:
`npm run build`

This command executes the following steps:
- Sets up necessary environment variables (Note: .env file is excluded from version control intentionally)
- Uses craco (from react-scripts library) for global SCSS variables (custom webpack config)

To access the built application, run: `http-server --push-state` within the "build" directory.

Note: Ensure that for production mode, appropriate mock data is set. To achieve this, run the JSON server: `npm run server`.

### SERVER:
`npm run server`

This command configures mock data, accessible at the URL: http://localhost:3001/transactions.

### TESTS:
`npm run test`


# Additional notes:
- I didn't use any frameworks, but utilized some libraries including react-router-dom, react-redux, cross-env, etc.
- Mock data is achieved through the json-server library.
- I've introduced a few extra functionalities, such as sorting raw transaction data and expanding client transactions' details.
- Basic responsiveness is implemented; the interface is well-presented above 360px viewport width.
- JEST unit tests are incorporated, particularly for sensitive calculations related to transactions.
- Error handling is in place; however, multiple retries for a failed API request aren't implemented (do you require this functionality?).

