import ReactPlayer from "react-player"
let video = "./src/assets/images/VideoIntro.mp4"
import "./styles.css"

export const VideoIntro = () =>{
    return (
        <div className="contenedor">
            <ReactPlayer
            className="react-player"
            url={video} 
            muted="True"
            playing="True"
            loop="True"
            />
        </div>
    )
}