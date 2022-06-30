import Dynamo from "../../Services/Dynamo";
import {ISong} from "../../Interface/Interface";

export default function loadData() {
    const dynamo = new Dynamo()
    console.log("Loading song data into DynamoDB");

    const songs: ISong[] = [{
        "artist": "Gustavo Cerati",
        "song": "Un misil en mi placar",
        "id": 3,
        "priceUsdCents": 120,
        "publisher": 2000
    }]

    songs.forEach(function (song: ISong) {
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

        dynamo.ddbDocumentClient.put(params, function (err, data) {
            if (err) {
                console.log(err)
            } else {
                console.log("Succeeded adding an item for this song: ", song.song);
            }
        });
    });
}

