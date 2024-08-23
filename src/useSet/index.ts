import { useEffect, useRef, useState } from "react";

export function useSet<T>(initialValue?: T[]) {
    const set = useRef(new Set<T>(initialValue));
    const [s, setState] = useState(false);

    useEffect(() => {
        set.current.add = (value: T) => {
            setState((current) => !current);
            return Set.prototype.add.apply(set.current, [value]);
        };
        set.current.delete = (value: T) => {
            setState((current) => !current);
            return Set.prototype.delete.apply(set.current, [value]);
        };
        set.current.clear = () => {
            setState((current) => !current);
            Set.prototype.clear.apply(set.current);
        };

    }, []);

    return { set: set.current, setUpdated: s };
}

