import AWS from 'aws-sdk';

const awsConfig = {
    apiVersion: "2012-08-10",
    accessKeyId: "",
    secretAccessKey: "",
    region: 'us-east-1'
}

AWS.config.update(awsConfig);

export default class Dynamo {
    tableName = "basicSongsTable"
    connection = new AWS.DynamoDB({apiVersion: '2012-08-10'});
    ddbDocumentClient = new AWS.DynamoDB.DocumentClient();
}
