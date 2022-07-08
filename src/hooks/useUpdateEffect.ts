import { DependencyList, EffectCallback, useEffect, useRef } from 'react'


export function useUpdateEffect(cb: EffectCallback, deps?: DependencyList) {
    
    const mounted = useRef<boolean>(false)
    
    useEffect(() => {
        if (!mounted.current) {
            mounted.current = true
        } else {
            return cb()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps)
}