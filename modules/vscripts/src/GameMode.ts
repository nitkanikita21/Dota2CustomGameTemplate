import {reloadable} from "./lib/tstl-utils";

const heroSelectionTime = 0;

declare global {
    interface CDOTAGameRules {
        Addon: GameMode;
    }
}

@reloadable
export class GameMode {
    constructor() {
        this.configure();

        // Register event listeners for dota engine events
        ListenToGameEvent("game_rules_state_change", () => this.OnStateChange(), undefined);
        ListenToGameEvent("npc_spawned", event => this.OnNpcSpawned(event), undefined);

        // Register event listeners for events from the UI
        CustomGameEventManager.RegisterListener("released", (_, data) => {
            print(`Player ${data.PlayerID} released UI`);
        });
    }

    public static Precache(this: void, context: CScriptPrecacheContext) {
        
    }

    public static Activate(this: void) {
        // When the addon activates, create a new instance of this GameMode class.
        GameRules.Addon = new GameMode();
    }

    public OnStateChange(): void {
        const state = GameRules.State_Get();

        if (state === GameState.CUSTOM_GAME_SETUP) {
            GameRules.FinishCustomGameSetup();
        }

        // Start game once pregame hits
        if (state === GameState.PRE_GAME) {
            Timers.CreateTimer(0.2, () => this.StartGame());
        }
    }

    // Called on script_reload
    public Reload() {
        print("Script reloaded!");

        // Do some stuff here
    }

    private configure(): void {
        const gameMode = GameRules.GetGameModeEntity()
        
        // Do some stuff here
    }

    private StartGame(): void {
        print("Game starting!");

        // Do some stuff here
    }

    private OnNpcSpawned(event: NpcSpawnedEvent) {
        print("NPC spawned!");

        // Do some stuff here
    }
}
