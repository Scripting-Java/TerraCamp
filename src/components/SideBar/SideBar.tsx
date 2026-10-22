import { Info, ShoppingBag, Settings, } from "lucide-react";
import './SideBar.css'

interface sidebar {
    onInfo: () => void,
    infoOpen: boolean
}

function SideBar({ onInfo, infoOpen }: sidebar) {
    return (
        <nav className="sidebar">
            <div className="tooltip" data-tooltip="Resources">
                <button className={`sidebarButton ${infoOpen ? 'active' : ''}`} onClick={onInfo}>
                    <Info size={22} />
                </button>
            </div>
            <div className="tooltip" data-tooltip="Shop">
            <button className="sidebarButton">
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