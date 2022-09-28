var AWS = require("aws-sdk");
var fs = require('fs');

AWS.config.update({
  region: "us-east-1"
});

console.log("Writing entries to Users table.");

var dynamodb = new AWS.DynamoDB.DocumentClient();
var usersData =
  JSON.parse(fs.readFileSync('../components/data/users.json', 'utf8'));

  usersData.forEach(function(users) {
  var params = {
    TableName: "Users",
    Item: {
      "id": users.id,
      "first_name": users.first_name,
      "last_name": users.last_name,
      "email": users.email,
      "job_title": users.job_title
    }
  };

  dynamodb.put(params, function(err, data) {
    if (err)
      console.error("Unable to load data into table for users",
      users.email, ". Error: ", JSON.stringify(err, null, 2))
    else
      console.log("Added", users.email, "to table.")
  });
});