# computers-shop-api
### this api allows you to add your own objects taking into account a list found in services/computers.json the api automatically validates the elements that are added and if they correspond to the catalog
### the structure would be this: 
```json
{
    "date": "your computer date",
    "state": "an state bad, ok, good...",
    "powerSupply": "the number of wats that have someone of the power supplies of the list",
    "password": "your password (There is also a function that makes it impossible to see the password)"
}
```
### Obviously this could be brought to a database by changing the desired values and changing the computers.push() in the src/services/computerServices.ts file to the function that saves the data to your database
# how to use ?
> ### first clone the repository with git clone https://github.com/der56/computers-shop-api.git

> ### then install the dependencies with npm install or npm i

> ### and after that run the script called tsc with npm run tsc

> ### if everything went well, a folder called build will be generated

> ### now you just have to execute the start script and use the api to your liking
