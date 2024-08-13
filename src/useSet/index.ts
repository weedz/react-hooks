import { useMemo, useState } from "react";

export function useSet<T>() {
    const set = useMemo(() => new Set<T>(), []);
    const [, setState] = useState(false);

    return {
        has: (value: T) => set.has(value),
        add: (value: T) => {
            set.add(value);
            setState((current) => !current);
        },
        delete: (value: T) => {
            setState((current) => !current);
            return set.delete(value);
        },
        values: () => set.values(),
    };
}

