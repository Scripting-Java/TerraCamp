
import type { campfireStyle } from "../campFire/campfire"
import cozy from "../../assets/CampCozy.png"
import camp from "../../assets/CampFire.png"
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
    }
]