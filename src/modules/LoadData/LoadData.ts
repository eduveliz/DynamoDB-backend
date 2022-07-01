import Dynamo from "../../Services/Dynamo";
import {ISong} from "../../Interface/Interface";
import {data} from "./songs";

export default function loadData() {
    const dynamo = new Dynamo()
    console.log("Loading song data into DynamoDB");

    data.songs.forEach((song: ISong, index: number) => {
        const params = {
            TableName: "basicSongsTable",
            Item: {
                "artist": song.artist,
                "song": song.title,
                "id": index,
                "web_url": song.web_url,
                "img_url": song.img_url
            }
        };

        dynamo.ddbDocumentClient.put(params, function (err, data) {
            if (err) {
                console.log(err)
            } else {
                console.log("Succeeded adding an item for this song: ", song.title);
            }
        });
    });
}

