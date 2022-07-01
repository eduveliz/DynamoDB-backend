import Dynamo from "../../Services/Dynamo";

export default async function GetSongs() {
    const dynamo = new Dynamo()
    try {
        const params = {
            TableName: dynamo.tableName
        };
        const result = await dynamo.connection.scan(params).promise();
        return JSON.stringify(result)
    } catch (error) {
        console.error(error);
    }

}

