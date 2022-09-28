var AWS = require("aws-sdk");

AWS.config.update({
  region: "us-east-1"
});

var dynamodb = new AWS.DynamoDB();

var params = {
  TableName: "Websites",
  KeySchema: [
    // Partition Key
    { AttributeName: "href", KeyType: "HASH" },
    // Sort Keys
    { AttributeName: "name", KeyType: "RANGE"}
  ],
  AttributeDefinitions: [
    { AttributeName: "href", AttributeType: "S" },
    { AttributeName: "target", AttributeType: "S" },
    { AttributeName: "name", AttributeType: "S" }
  ],
  LocalSecondaryIndexes: [
    {
      IndexName: "TargetIndex",
      KeySchema: [
        { AttributeName: "href", KeyType: "HASH" },
        { AttributeName: "target", KeyType: "RANGE" }
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