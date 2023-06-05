import { writable } from "svelte/store";
export const audio = writable();
export const trackName = writable("");
export const trackPlaying = writable(false);
export const section = writable("")
