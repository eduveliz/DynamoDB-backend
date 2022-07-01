import Dynamo from "../../Services/Dynamo";

export default async function GetSongByArtist() {
    const dynamo = new Dynamo()
    try {
        const params = {
            KeyConditionExpression: 'artist = :artist',
            ExpressionAttributeValues: {
                ':artist': 'The Lumineers'
            },
            TableName: dynamo.tableName
        };
        const result = await dynamo.ddbDocumentClient.query(params).promise()
        return JSON.stringify(result)
    } catch (error) {
        console.error(error);
    }
}
