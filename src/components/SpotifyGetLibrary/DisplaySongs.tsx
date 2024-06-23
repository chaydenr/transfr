import { IDisplaySongsProps, ITrack } from "./GetSongs.types"

export const DisplaySongs = ({data}: IDisplaySongsProps) => {
  return(
    <>
    {data.map((item) => {
      console.log(item.track.name)
      return (
        <p>{item.track.name}</p>
        )
      }
      )}
      </>
      )
}