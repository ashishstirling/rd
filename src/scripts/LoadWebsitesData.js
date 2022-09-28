var AWS = require("aws-sdk");
var fs = require('fs');

AWS.config.update({
  region: "us-east-1"
});

console.log("Writing entries to Websites table.");

var dynamodb = new AWS.DynamoDB.DocumentClient();
var websitesData =
  JSON.parse(fs.readFileSync('../components/data/websites.json', 'utf8'));

  websitesData.forEach(function(websites) {
  var params = {
    TableName: "Websites",
    Item: {
      "href": websites.href,
      "target": websites.target,
      "name": websites.name
    }
  };

  dynamodb.put(params, function(err, data) {
    if (err)
      console.error("Unable to load data into table for websites",
      websites.name, ". Error: ", JSON.stringify(err, null, 2))
    else
      console.log("Added", websites.name, "to table.")
  });
});