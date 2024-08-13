import { useMemo, useState } from "react";

export function useMap<K, T>() {
    const map = useMemo(() => new Map<K, T>(), []);
    const [, setState] = useState(false);

    return {
        has: (key: K) => map.has(key),
        get: (key: K) => map.get(key),
        set: (key: K, value: T) => {
            map.set(key, value);
            setState((current) => !current);
        },
        delete: (key: K) => {
            setState((current) => !current);
            return map.delete(key);
        },
        values: () => map.values(),
        keys: () => map.keys(),
    };
}
