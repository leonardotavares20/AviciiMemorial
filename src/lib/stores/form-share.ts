import { writable, type Writable } from "svelte/store";

export const scrollFormAnimationCompleted: Writable<boolean> = writable(false);
