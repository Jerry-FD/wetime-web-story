import { useEffect, useState } from "react";
const useIsContentMore = (content, num = 55) => {
    const [data, setData] = useState(["", false]);
    let _content = "";
    let _hasMore = false;
    useEffect(() => {
        const contentArr = content.split("/n");
        if (contentArr[0].length > num) {
            _content = contentArr[0].slice(0, num) + "...";
            _hasMore = true;
        }
        else if (!contentArr[1]) {
            _content = contentArr[0];
        }
        else if (contentArr[0].length + contentArr[1].length < num) {
            _content = contentArr[0] + "/n" + contentArr[1];
            _hasMore = !!contentArr[2];
        }
        else {
            _content = contentArr[0] + "/n" + contentArr[1].slice(0, num - contentArr[0].length) + "...";
            _hasMore = true;
        }
        setData([_content, _hasMore]);
    }, [content, num]);
    return data;
};
export default useIsContentMore;
