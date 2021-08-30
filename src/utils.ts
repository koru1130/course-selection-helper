import { Writable, writable } from "svelte/store";

export function writableFamily<K, V>(defaultValue: V) {
    let hashmap = new Map<K, Writable<V>>();
    return (k: K) => {
        if(!hashmap.has(k)) hashmap.set(k, writable(defaultValue))
        return hashmap.get(k)
    }
}
