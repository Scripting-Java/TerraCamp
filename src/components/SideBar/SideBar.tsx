import { Info, ShoppingBag, Settings, Sidebar } from "lucide-react";
import './SideBar.css'

function SideBar() {
    return (
        <nav className="sidebar">
            <button className="sidebarButton">
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