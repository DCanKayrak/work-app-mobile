import { GetWithAuth } from "../HttpService";

const GetNotifications = () => {

    try {
        const response = GetWithAuth("/api/Notification");
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.message}`);
        }
        console.log(response.json())
        return response.json();
    } catch (error) {
        console.error("Failed to fetch notifications:", error);
        throw error; // Re-throw the error to be handled by the calling function
    }
}

export { GetNotifications };
