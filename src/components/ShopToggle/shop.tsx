import "../ShopToggle/shop.css"
import type { upgradeType, upgradeLevels } from "../../utils/shop/upgrades"
import { getUpgradeBonus, getUpgradeCost } from "../../utils/shop/upgrades"
import formatRes from "../../utils/formatters/formatters"
import { useRef } from "react"
import { Move } from "lucide-react"


interface Shop {
    levels: upgradeLevels,
    gas: number,
    buy: (type: upgradeType) => void,
    pos: { x: number, y: number },
    setPos: React.Dispatch<React.SetStateAction<{ x: number, y: number }>>
}
const upgradeNames: { type: upgradeType; name: string }[] = [
    { type: "wood", name: "Wood Production" },
    { type: "fur", name: "Fur Production" },
    { type: "gas", name: "Gas Production" },
    { type: "minerals", name: "Mineral Production" },
]
function ShopToggle({ levels, gas, buy, pos, setPos }: Shop) {
    const drag = useRef<{ startX: number, startY: number, startPosX: number, startPosY: number } | null>(null)
    const panelReference = useRef<HTMLElement>(null)
    function handleClick(e: React.PointerEvent<HTMLDivElement>) {
        drag.current = { startX: e.clientX, startY: e.clientY, startPosX: pos.x, startPosY: pos.y }
        e.currentTarget.setPointerCapture(e.pointerId)
    }

    function handleMove(e: React.PointerEvent<HTMLDivElement>) {
        if (!drag.current || !panelReference.current) return
        const panel = panelReference.current.getBoundingClientRect()
        const maxX = window.innerWidth - panel.width
        const maxY = window.innerHeight - panel.height
        setPos({
            x: Math.max(0, Math.min(maxX, drag.current.startPosX + e.clientX - drag.current.startX)),
            y: Math.max(0, Math.min(maxY, drag.current.startPosY + e.clientY - drag.current.startY))
        })
    }

    function handleClickOff() { drag.current = null }

    return (
        <section className="shopToggle" ref={panelReference} style={{ left: `${pos.x}px`, top: `${pos.y}px` }}>
            <div className="shopDrag" onPointerDown={handleClick} onPointerMove={handleMove} onPointerUp={handleClickOff}>
                <Move size={18} />
            </div>
            <h3>Upgrades:</h3>
            <div className="shopUpgrades">

                {upgradeNames.map(({ type, name }) => {
                    const level = levels[type]
                    let max = 10
                    if (type === "gas" || type === "minerals")
                        max = 5
                    const maxed = level >= max
                    const cost = getUpgradeCost(type, level)
                    const bonus = getUpgradeBonus(type, level) * 100
                    return (
                        <div className="shopUpgrade" key={type}>
                            <div>
                                <h3>{name}</h3>
                                <p>Level: {level}/{max}</p>
                                <p>Bonus: {formatRes(bonus)}% </p>
                            </div>
                            <button disabled={maxed || gas < cost} onClick={() => buy(type)}>
                                {maxed ? "Upgrade Maxed" : `Buy (${cost} gas)`}
                            </button>
                        </div>
                    )
                })}

            </div>
            <div className="shopDecor">
                <h3>Decor</h3>
            </div>
        </section>
    )
}

export default ShopToggle