
import type { campfireStyle } from "../campFire/campfire"
import cozy from "../../assets/CampCozy.png"
import camp from "../../assets/CampFire.png"
import blue from "../../assets/BlueCampFire.png"
import red from "../../assets/RedCampFire.png"
import olympic from "../../assets/Olympic.png"
import olympicblue from "../../assets/OlympicBlue.png"
export interface decor{
    id:string,
    name:string,
    desc:string,
    thumbnail:string,
    cost:number,
    style: campfireStyle
}

export const decors: decor[] = [
    {
        id: "default",
        name: "Campfire",
        desc:"Default Campfire",
        thumbnail: camp,
        cost: 0,
        style: 'default',
    },{
        id: "cozy",
        name: "Cozy Campfire",
        desc:"Oversimplified Campfire",
        thumbnail: cozy,
        cost: 20,
        style: 'cozy',
    },{
        id: "red",
        name: "Red Campfire",
        desc:"Red Campfire",
        thumbnail: red,
        cost: 20,
        style: 'redFlameDecor',
    },{
        id: "blue",
        name: "Blue Campfire",
        desc:"Blue Campfire",
        thumbnail: blue,
        cost: 20,
        style: 'blueFlameDecor',
    }
    ,{
        id: "olympic",
        name: "Olympic Campfire",
        desc:"Olympic Torch",
        thumbnail: olympic,
        cost: 40,
        style: 'olympicTorch',
    }
    ,{
        id: "olympicBlue",
        name: "Blue Olympic Torch",
        desc:"Blue Olympic Torch",
        thumbnail: olympicblue,
        cost: 40,
        style: 'blueBeacon',
    }
]