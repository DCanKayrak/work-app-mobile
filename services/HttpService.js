import { BACKEND_URL, BACKEND_PORT } from "../configurations/ApplicationConfig";

const BASE_URL = BACKEND_URL + ':' + BACKEND_PORT

const GetFullUrl = (path) => {
    return path ? BASE_URL + path : BASE_URL
}

const GetAuthorize = () => {
    return localStorage.getItem("tokenKey") ? localStorage.getItem("tokenKey") : null;
}

export const GetWithAuth = (url) => {

    var request = fetch(BACKEND_URL + url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": localStorage.getItem("tokenKey"),
        },
    })

    return request
}



export const GetWithoutAuth = (url) => {

    var request = fetch(GetFullUrl(url), {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })

    return request
}


export const PostWithAuth = (url, body) => {

    var request = fetch(GetFullUrl(url), {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": GetAuthorize(),
        },
        body: JSON.stringify(body),
    })

    return request
}

export const PostWithoutAuth = (url, body) => {

    var request = fetch(GetFullUrl(url), {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    })

    return request
}

export const PutWithAuth = (url, body) => {

    var request = fetch(GetFullUrl(url), {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": GetAuthorize(),
        },
        body: JSON.stringify(body),
    })

    return request
}


export const DeleteWithAuth = (url) => {

    var request = fetch(GetFullUrl(url), {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Authorization": GetAuthorize(),
        },
    })

    return request
}