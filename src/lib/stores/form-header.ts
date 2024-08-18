import { writable } from "svelte/store";
import type { Writable } from "svelte/store";

export const selectFocused: Writable<boolean> = writable(false);
