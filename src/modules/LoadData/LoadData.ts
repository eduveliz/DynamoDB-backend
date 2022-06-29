import AWS from 'aws-sdk';
import Config from "../../config/config";

const config = new Config().awsConfig
AWS.config.update(config);

export default function loadData() {
    const documentClient = new AWS.DynamoDB.DocumentClient();
    console.log("Loading song data into DynamoDB");
    const songs = [{
        "artist": "the killers",
        "song": "where you was young",
        "id": 2,
        "priceUsdCents": 120,
        "publisher": 2000
    }]

    songs.forEach(function (song) {
        const params = {
            TableName: "basicSongsTable",
            Item: {
                "artist": song.artist,
                "song": song.song,
                "id": song.id,
                "priceUsdCents": song.priceUsdCents,
                "publisher": song.publisher
            }
        };

        documentClient.put(params, function (err, data) {
            if (err) {
                console.error("Can't add song. Darn. Well I guess Fernando needs to write better scripts.");
            } else {
                console.log("Succeeded adding an item for this song: ", song.song);
            }
        });
    });
}

