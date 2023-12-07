import {createEffect, createSignal, For, onMount} from "solid-js";
import {render} from "solid-panorama-runtime";

function Counter() {
    const heroname = Players.GetPlayerSelectedHero(Players.GetLocalPlayer());
    const [lvl, setLvl] = createSignal(8)

    onMount(() => {
        GameEvents.SendCustomGameEventToServer("released", {})
    })

    return <>
        <Label text={"Hello world"} />
    </>
}

render(<Counter/>, $.GetContextPanel());

