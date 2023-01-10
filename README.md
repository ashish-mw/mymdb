# mymdb

A minimal [imdb](https://www.imdb.com/) clone. Requirements as mentioned in [requirements.md](./requirements.md)

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
