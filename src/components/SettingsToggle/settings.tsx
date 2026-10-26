import './settings.css'

interface Settings{
    theme:string,
    setTheme:(theme:string)=>void,
    onClose:()=>void
}

function Settings({theme,setTheme,onClose}:Settings){
    return(
        <section className='settings'>
            <h1>Settings</h1>
            <button onClick={onClose}>X</button>
            <div className='themes'>
                <select value={theme} onChange={(theme)=>setTheme(theme.target.value)}>
                    <option value="TerraCamp">TerraCamp</option>
                    <option value="Fall">Fall</option>
                    <option value="Dark">Dark</option>
                    <option value="Purple">Purple</option>
                </select>
            </div>
        </section>
    )
}

export default Settings