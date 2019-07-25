const getInitialState = () => {
    return {
        showCookiePermission : true
    };
}

export default function (state, action) {
    if (typeof state === "undefined") {
        return getInitialState();
    }
    let newState = Object.assign({}, state);
    switch (action.type) {
    case "HIDE_COOKIE_POPOVER":
        newState.showCookiePermission = false;
        break;
    default:
        break;
    }
    return newState;
}