import { Info, ShoppingBag, Settings, } from "lucide-react";
import './SideBar.css'

interface sidebar {
    onInfo: () => void,
    infoOpen: boolean,
    onShop: ()=>void,
    shopOpen: boolean
}

function SideBar({ onInfo, infoOpen, onShop,shopOpen }: sidebar) {
    return (
        <nav className="sidebar">
            <div className="tooltip" data-tooltip="Resources">
                <button className={`sidebarButton ${infoOpen ? 'active' : ''}`} onClick={onInfo}>
                    <Info size={22} />
                </button>
            </div>
            <div className="tooltip" data-tooltip="Shop">
            <button className={`sidebarButton ${shopOpen? 'active':''}`} onClick={onShop}>
                <ShoppingBag size={22} />
            </button>
            </div>
            <div className="tooltip" data-tooltip="Settings">
            <button className="sidebarButton">
                <Settings size={22} />
            </button>
            </div>
        </nav>
    )
}

export default SideBar