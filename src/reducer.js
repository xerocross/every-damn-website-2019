
import QAHelper from "./qa-helper.js"

let showCookiePermission = true;
let showEmbeddedVideo = true;
let askToSubscribe = true;
if (QAHelper.exists("nocookies")) {
    showCookiePermission = false;
}
if (QAHelper.exists("novid")) {
    showEmbeddedVideo = false;
}
if (QAHelper.exists("nosub")) {
    askToSubscribe = false;
}


const getInitialState = () => {
    return {
        showCookiePermission : showCookiePermission,
        showEmbeddedVideo : showEmbeddedVideo,
        askToSubscribe : askToSubscribe
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
    case "HIDE_EMBEDDED_VIDEO":
        newState.showEmbeddedVideo = false;
        break;
    default:
        break;
    }
    return newState;
}