import {createEffect, createSignal, For, onMount} from "solid-js";
import {render} from "solid-panorama-runtime";

function Counter() {
    const heroname = Players.GetPlayerSelectedHero(Players.GetLocalPlayer());
    const [lvl, setLvl] = createSignal(8)

    onMount(() => {
        GameEvents.SendCustomGameEventToServer("released", {})
    })

    createEffect(()=>{
        GameEvents.SendCustomGameEventToServer("p2s_lvlup", lvl())
    })

    return <>
        <Panel id="menu" style={{
            flowChildren: "down"
        }} >
            <Panel class={"hero_box"}>
                <DOTAHeroImage heroname={heroname} />
                <Label text={heroname} />
            </Panel>
            <Label text={"LVL"} />
            <TextButton text={"+"} class={"ButtonBevel"} onactivate={() => setLvl(lvl()+1)} />

        </Panel>
    </>
}

render(<Counter/>, $.GetContextPanel());

