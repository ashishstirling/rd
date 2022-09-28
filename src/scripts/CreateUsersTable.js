var AWS = require("aws-sdk");

AWS.config.update({
  region: "us-east-1"
});

var dynamodb = new AWS.DynamoDB();

var params = {
  TableName: "Users",
  KeySchema: [
    // Partition Key
    { AttributeName: "id", KeyType: "HASH" },
    // Sort Keys
    { AttributeName: "email", KeyType: "RANGE"}
  ],
  AttributeDefinitions: [
    { AttributeName: "id", AttributeType: "N" },
    { AttributeName: "email", AttributeType: "S" },
    { AttributeName: "job_title", AttributeType: "S" }
  ],
  LocalSecondaryIndexes: [
    {
      IndexName: "NameJobTitleIndex",
      KeySchema: [
        { AttributeName: "id", KeyType: "HASH" },
        { AttributeName: "job_title", KeyType: "RANGE" }
      ],
      Projection: {
        ProjectionType: "KEYS_ONLY"
      }
    }
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 10,
    WriteCapacityUnits: 10
  }
};

dynamodb.createTable(params, function(err, data) {
    if (err)
      console.error("Unable to create table: ", JSON.stringify(err, null, 2))
    else
      console.log("Created table with description: ", JSON.stringify(data, null, 2))
});