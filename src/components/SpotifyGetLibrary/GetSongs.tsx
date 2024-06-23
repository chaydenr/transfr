import axios from "axios"
import { useEffect, useState } from "react";
import { DisplaySongs } from "./DisplaySongs";
import { ITrack } from "./GetSongs.types";

const GetSongs = () => {
    const [token, setToken] = useState("");
    const [data, setData] = useState<Array<ITrack>>();
    const SONGS_ENDPOINT = "https://api.spotify.com/v1/me/tracks";

    useEffect(()=> {
        if (localStorage.getItem("accessToken")) {
            setToken(localStorage.getItem("accessToken"));
        }
    }, []);

    const handleGetSongs = async () => {
        axios.get(SONGS_ENDPOINT, {
            headers: {
                Authorization: "Bearer " + token,
            }
        }).then((response) => {
            setData(response.data.items)
            console.log(response.data.items)
        }).catch((error) => {
            console.log(error)
        })
        
        // if (songData) {
        //     displaySongs(songData)
        // }
    }



    return(
    <>
        <button onClick={handleGetSongs}>Get Songs</button>
        { data?.length > 0 ? <DisplaySongs data={data as Array<any>}/> : <p>No Songs to Display</p>}
    </>
    )
}

export default GetSongs;
