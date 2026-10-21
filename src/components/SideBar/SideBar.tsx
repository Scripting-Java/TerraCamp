import { Info, ShoppingBag, Settings, } from "lucide-react";
import './SideBar.css'

interface sidebar{
    onInfo: ()=>void,
    infoOpen: boolean
}

function SideBar({onInfo, infoOpen}: sidebar) {
    return (
        <nav className="sidebar">
            <button className={`sidebarButton ${infoOpen ? 'active': ''}`} onClick={onInfo}>
                <Info size={22} />
            </button>
            <button className="sidebarButton">
                <ShoppingBag size={22}/>
            </button>
            <button className="sidebarButton">
                <Settings size={22}/>
            </button>
        </nav>
    )
}

export default SideBar