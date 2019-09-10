import { useEffect, useRef } from 'react';
import 'intersection-observer';
const useIntersectionObserver = (callback = () => { }, element, option, deps = []) => {
    const savedCallback = useRef(() => { });
    useEffect(() => {
        savedCallback.current = callback;
    });
    useEffect(() => {
        if (!element)
            return;
        const observer = new IntersectionObserver(savedCallback.current, option);
        observer.observe(element);
        return () => {
            observer.unobserve(element);
        };
    }, [...deps]);
};
export default useIntersectionObserver;
