import { useEffect, useRef, useState } from "react";

export function useMap<K, T>(initialValue?: Array<[K, T]>) {
    const map = useRef(new Map<K, T>(initialValue));
    const [s, setState] = useState(false);

    useEffect(() => {
        map.current.set = (...args) => {
            setState((current) => !current);
            return Map.prototype.set.apply(map.current, args);
        };
        map.current.delete = (key: K) => {
            setState((current) => !current);
            return Map.prototype.delete.apply(map.current, [key]);
        };
        map.current.clear = () => {
            setState((current) => !current);
            Map.prototype.clear.apply(map.current);
        };
    }, []);

    return { map: map.current, mapUpdated: s };
}
