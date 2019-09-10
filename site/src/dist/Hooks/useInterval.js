import { useEffect, useRef } from 'react';
const useInterval = (callback = () => { }, delay = 1000) => {
    const savedCallback = useRef(() => { });
    useEffect(() => {
        savedCallback.current = callback;
    });
    // ts-ignore
    useEffect(() => {
        function tick() {
            savedCallback.current();
        }
        const id = setInterval(tick, delay);
        return () => clearInterval(id);
    }, [delay]);
};
export default useInterval;
