const API_URL = "http://localhost:8000/api";

const getHeaders = (contentType: string | null = "application/json") => {
    const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;
    const headers: HeadersInit = {};

    if (contentType) {
        headers["Content-Type"] = contentType;
    }

    if (token) {
        headers["Authorization"] = `Bearer ${token}`;
    }

    return headers;
};

export const login = async (username: string, password: string) => {
    const response = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: getHeaders(),
        body: JSON.stringify({ username, password }),
    });

    const data = await response.json();

    if (response.ok && data.token) {
        localStorage.setItem("adminToken", data.token); 
    }

    return data;
};