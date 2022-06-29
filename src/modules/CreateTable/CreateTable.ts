import AWS from 'aws-sdk';
import Config from "../../config/config";

const config = new Config().awsConfig
AWS.config.update(config);

const dynamodb = new AWS.DynamoDB();

export default class CreateTable {

    tableName

    constructor(tableName: string) {
        this.tableName = tableName
    }

    create = () => {
        const params = {
            AttributeDefinitions: [
                {
                    AttributeName: "artist",
                    AttributeType: "S"
                },
                {
                    AttributeName: "song",
                    AttributeType: "S"
                }
            ],
            KeySchema: [
                {
                    AttributeName: "artist",
                    KeyType: "HASH"
                },
                {
                    AttributeName: "song",
                    KeyType: "RANGE"
                }
            ],
            ProvisionedThroughput: {
                ReadCapacityUnits: 1,
                WriteCapacityUnits: 1
            },
            TableName: "basicSongsTable"
        };

        dynamodb.createTable(params, function (err, data) {
            if (err) {
                console.log("Error", err);
            } else {
                console.log("Table Created", data);
            }
        });


    }
}
