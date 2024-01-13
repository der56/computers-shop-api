# computers-shop-api
This API enables you to add custom objects based on a predefined list found in `services/computers.json`. It automatically validates added elements against the catalog.

## Structure
```json
{
    "date": "your computer date",
    "state": "an state (bad, ok, good...)",
    "powerSupply": "number of watts of a power supply from the list",
    "password": "your password (a function ensures password confidentiality)"
}
```

To integrate with a database, modify desired values and replace the `computers.push()` function in `src/services/computerServices.ts` with your database-saving function.

## How to Use
1. Clone the repository: `git clone https://github.com/der56/computers-shop-api.git`
2. Install dependencies: `npm install` or `npm i`
3. Run the TypeScript compiler: `npm run tsc`
4. If successful, a 'build' folder will be generated.
5. Execute the start script to use the API as needed.