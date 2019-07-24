const getInitialState = () => {
    return {};
}

export default function (store, action) {
    if (typeof store === "undefined") {
        return getInitialState();
    }
}