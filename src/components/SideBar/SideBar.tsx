import { Info, ShoppingBag, Settings, } from "lucide-react";
import './SideBar.css'

interface sidebar {
    onInfo: () => void,
    infoOpen: boolean
}

function SideBar({ onInfo, infoOpen }: sidebar) {
    return (
        <nav className="sidebar">
            <div className="tooltip" data-tooltip="Resource Info">
                <button className={`sidebarButton ${infoOpen ? 'active' : ''}`} onClick={onInfo} title="Resource Info">
                    <Info size={22} />
                </button>
            </div>
            <div className="tooltip" data-tooltip="Shop">
            <button className="sidebarButton" title="Shop For Upgrades">
                <ShoppingBag size={22} />
            </button>
            </div>
            <div className="tooltip" data-tooltip="Settings">
            <button className="sidebarButton" title="Settings">
                <Settings size={22} />
            </button>
            </div>
        </nav>
    )
}

export default SideBar