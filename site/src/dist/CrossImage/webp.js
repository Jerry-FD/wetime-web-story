function isSupport() {
    let isWebp = false;
    if (isWebp) {
        return isWebp;
    }
    try {
        isWebp = Boolean(window.localStorage && window.localStorage.getItem('isWebpSupport'));
    }
    catch (e) {
        console.log(e);
    }
    if (!isWebp) {
        const webP = new Image();
        webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
        webP.onload = function () {
            if (webP.height > 0) {
                isWebp = true;
                try {
                    window.localStorage.setItem('isWebpSupport', 'true');
                }
                catch (e) {
                    console.log(e);
                }
            }
        };
    }
    return isWebp;
}
export default {
    isSupport,
};
