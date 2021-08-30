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

//https://stackoverflow.com/questions/840781/get-all-non-unique-values-i-e-duplicate-more-than-one-occurrence-in-an-array/840808#840808
export function findDuplicates<T>(arr: T[]) { 
    let sorted_arr = arr.slice().sort(); // You can define the comparing function here. 
    // JS by default uses a crappy string compare.
    // (we use slice to clone the array so the
    // original array won't be modified)
    let results = [];
    for (let i = 0; i < sorted_arr.length - 1; i++) {
      if ( sorted_arr[i + 1] == sorted_arr[i] 
        && results[results.length-1] != sorted_arr[i] /* check duplicated in sorted_arr */ ) { 
        results.push(sorted_arr[i]);
      }
    }
    return results;
}