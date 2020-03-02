# People Management

People Management is a Vuejs / Expressjs web application which demonstrates a simple application which manages users with features such as listing users, viewing details of a particular user, ability to search users based on any attributes that they have in a single field or multiple fields, and ability to sort and order users.

## Technologies Used
- Vue js for Frontend
- Express js for Backend
- Mongoose as a data storage

## Prerequisites
- Node js >= 12
- Yarn as package manager

## Setup Frontend
``` bash
cd client
# install dependencies
yarn install

# serve with hot reload at localhost:8080
yarn start

# build for production with minification
yarn build

# build for production and view the bundle analyzer report
yarn build --report

# run unit tests
yarn unit
```

## Setup Backend
``` bash
cd server
# install dependencies
yarn install

# start server at localhost:8081
yarn start
```

## Features
### User Listing
- The application home page lists users in a tabular form. Few attributes are displayed in the table (Name, Location, Email, Status) which are also filterable and few attributes (Profile Picture, Date of Birth and Contact Number) are hidden in the table. And a view button which when clicked displays the user detail.

- There is a pagination which allows to navigate to different pages when there are mmany users. The per page count is set as 7.

- We can sort and order on the basis of any of these four columns by clicking on a table header.

### User Detail
- 'View' button in listing page triggers a modal box which displays all the information about the user.

### User Search
- The application home page has a section for searching users. There are four filters available right now - Name, Location, Email and Status. We can search in any of these fields of as a whole combined, So when we search something without selecting the filter, it searches on all of the four fields to render the matched users.

## Express APIs

### Add a user
```
URL: http://localhost:8081/users
Method: POST
Parameter Body: {
  "name": "Joe Hunter",
  "email": "joe.hunter@example.com",
  "dob": "1/1/1995",
  "location": "205 College St",
  "contact": "(526)-534-5309",
  "status": "Discarded",
  "picture": "https://randomuser.me/api/portraits/men/9.jpg"
}
```

### Search users
#### List all users
```
URL: http://localhost:8081/search
Method: GET
```

#### Search for a user whose name is joe
```
URL: http://localhost:8081/search?name=joe
Method: GET
```

#### Search for a users whose status is Discarded
```
URL: http://localhost:8081/search?status=discarded
Method: GET
```
All of these APIs are implemented with pagination, sorting and ordering
