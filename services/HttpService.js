const baseUrl = ""

const GetFullUrl = (path) => {
    return path ? baseUrl + path : baseUrl
}

const GetAuthorize = () => {
    return localStorage.getItem("tokenKey") ? localStorage.getItem("tokenKey") : null;
}

export const GetWithAuth = (url) => {

    var request = fetch(baseUrl + url, {
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