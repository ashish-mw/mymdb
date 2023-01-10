# mymdb

A minimal [imdb](https://www.imdb.com/) clone. Requirements as mentioned in [requirements.md](./requirements.md)

## Sequelize

```
$ npx sequelize-cli init
```
### sequelize cli commands


**Migrations**

If making changes to a table structure or creating
tables

```
$ npx sequelize-cli migration:generate --name mig-name
$ npx sequelize-cli db:migrate
$ node_modules/.bin/sequelize db:migrate:undo
```

**Seeding**

For adding dummy/initial data to tables

```
npx sequelize-cli seed:generate --name seed-name
npx sequelize-cli db:seed:undo --seed name-of-seed-as-in-data
npx sequelize-cli db:seed --seed seed-name
```

for more, [refer docs](https://sequelize.org/docs/v6/other-topics/migrations)

## Data models

1 User model

```
{
  "id": "8312321938232",
  "username": "jake",
  "password": "fhwiehr2u3019u312i32121e12",
  "createdAt": DATE,
  "updatedAt": DATE
}
```

2 Movie

```
{
  "id": "3131242542222242",
  "name": "The Matrix",
  "genre": "Sci-fi",
  "language": "English",
  "yearOfRelease": "1999",
  "createdByUser": "8312321938232"
  "createdAt": DATE,
  "updatedAt": DATE
}
```

3 Movie Ratings

```
{
  "id": "1231314321",
  "user": "8312321938232",
  "movie": "3131242542222242",
  "rating": 4, // max is 5
  "createdAt": DATE,
  "updatedAt": DATE
}
```

## Tools

- Prettier in vscode
- Open user settings
```
{
  ....
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  ....
}
```
