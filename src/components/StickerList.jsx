import { Component } from "react";
import { Box } from './Box'


export class StickerList extends Component{
    render(){
        // console.log(this.props)
        const {stickers}=this.props
        return(
            <Box as='ul'>
                {stickers.map((sticker, id) => (
                    <li key={id}>
                        <div>
                            <img src={sticker.img} alt="" />
                            <p>{sticker.label}</p>
                        </div>
                    </li>
                ))}
            </Box>
        )
    }
}