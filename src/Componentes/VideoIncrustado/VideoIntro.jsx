import ReactPlayer from "react-player"
let video = "./Public/VideoIntro.mp4"
import "./styles.css"

export const VideoIntro = () =>{
    return (
        <div className="container d-flex justify-content-center">
            <ReactPlayer
            className="react-player"
            url="https://www.youtube.com/watch?v=tJlzIJaokVY&t=11s" 
            muted={true}
            playing={true}
            loop={true}
            />
        </div>
    )
}