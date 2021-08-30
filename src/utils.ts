import { Writable, writable } from "svelte/store";

export function writableFamily<K, V>(defaultValue: V) {
    let hashmap = new Map<K, Writable<V>>();
    return (k: K) => {
        if(!hashmap.has(k)) hashmap.set(k, writable(defaultValue))
        return hashmap.get(k)
    }
}

// from https://stackoverflow.com/questions/56488202/how-to-persist-svelte-store/61300826#61300826
export function persistentWritable<T>(key : string, startValue : T){
  const { subscribe, set } = writable(startValue);
  
  return {
    subscribe,
    set,
    useLocalStorage: () => {
      const json = localStorage.getItem(key);
      if (json) {
        set(JSON.parse(json));
      }
      
      subscribe(current => {
        localStorage.setItem(key, JSON.stringify(current));
      });
    }
  };
}