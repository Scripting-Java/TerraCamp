import ResBar from "../ResBar/ResBar";
import './InfoToggle.css'
import { useRef } from "react";
import { Move } from "lucide-react";

interface InfoToggle {
    wood: number,
    gas: number,
    fur: number,
    minerals: number,
    rates: {
        woodGain: number,
        woodUse: number,
        gasGain: number,
        furGain: number,
        mineralsGain: number
    }
    pos: { x: number, y: number }
    setPos: React.Dispatch<React.SetStateAction<{ x: number, y: number }>>
}

function InfoToggle(toggle: InfoToggle) {
    const drag = useRef<{ startX: number, startY: number, startPosX: number, startPosY: number } | null>(null)
    const panelReference = useRef<HTMLElement>(null)


    function handleClick(e: React.PointerEvent<HTMLDivElement>) {
        drag.current = { startX: e.clientX, startY: e.clientY, startPosX: toggle.pos.x, startPosY: toggle.pos.y }
        e.currentTarget.setPointerCapture(e.pointerId)
    }

    function handleMove(e: React.PointerEvent<HTMLDivElement>) {
        if (!drag.current || !panelReference.current) return
        const panel = panelReference.current.getBoundingClientRect()
        const maxX = window.innerWidth - panel.width
        const maxY = window.innerHeight - panel.height

        toggle.setPos({
            x: Math.max(0, Math.min(maxX, drag.current.startPosX + e.clientX - drag.current.startX)),
            y: Math.max(0, Math.min(maxY, drag.current.startPosY + e.clientY - drag.current.startY))
        })
    }

    function handleClickOff() { drag.current = null }

    return (
        <section className="infoToggle" ref={panelReference} style={{ left: `${toggle.pos.x}px`, top: `${toggle.pos.y}px` }}>
            <div onPointerDown={handleClick} onPointerMove={handleMove} onPointerUp={handleClickOff}>
                <ResBar wood={toggle.wood} gas={toggle.gas} fur={toggle.fur} minerals={toggle.minerals} rates={toggle.rates} header={<Move size={18} />}/>
            </div>
        </section>
    )
}
export default InfoToggle