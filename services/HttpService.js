import AsyncStorage from '@react-native-async-storage/async-storage';
import { BACKEND_URL, BACKEND_PORT } from "../configurations/ApplicationConfig";

const BASE_URL = BACKEND_URL + ':' + BACKEND_PORT;

const GetFullUrl = (path) => {
    return path ? BASE_URL + path : BASE_URL;
};

const GetAuthorize = async () => {
    const token = await AsyncStorage.getItem('userToken');
    return token ? `Bearer ${token}` : null;
};

export const GetWithAuth = async (url) => {
    const token = GetAuthorize();
    const request = fetch(GetFullUrl(url), {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": await GetAuthorize(),
        },
    });

    return request;
};

// Diğer HTTP metodları için benzer şekilde async/await kullanabilirsiniz
export const PostWithAuth = async (url, body) => {
    const token = await GetAuthorize();
    const request = await fetch(GetFullUrl(url), {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": token ? token : '',
        },
        body: JSON.stringify(body),
    });

    return request;
};


export const PostWithoutAuth = (url, body) => {
    const request = fetch(GetFullUrl(url), {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    });

    return request;
};

export const PutWithAuth = async (url, body) => {
    const token = await GetAuthorize();
    const request = fetch(GetFullUrl(url), {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": token ? `Bearer ${token}` : '',
        },
        body: JSON.stringify(body),
    });

    return request;
};

export const DeleteWithAuth = async (url) => {
    const token = await GetAuthorize();
    const request = fetch(GetFullUrl(url), {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Authorization": token ? `Bearer ${token}` : '',
        },
    });

    return request;
};
