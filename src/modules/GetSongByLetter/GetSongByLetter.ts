import Dynamo from "../../Services/Dynamo";

export default async function GetSongByLetter() {
    const dynamo = new Dynamo()
    try {
        const params = {
            KeyConditionExpression: 'artist = :artist AND begins_with ( song , :song )',
            ExpressionAttributeValues: {
                ':artist': {'S': 'Elton John'},
                ':song': {'S': 'R'}
            },
            TableName: dynamo.tableName
        };
        const result = await dynamo.connection.query(params).promise()
        return JSON.stringify(result)
    } catch (error) {
        console.error(error);
    }
}
