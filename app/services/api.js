const BASE_URL = "https://tinytales.trendline.marketing/api";

// Helper function to get token from localStorage
const getToken = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("token");
  }
  return null;
};

// Helper function to set token in localStorage
const setToken = (token) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("token", token);
  }
};

// Helper function to remove token from localStorage
const removeToken = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("token");
  }
};

// Helper function to make API requests
const apiRequest = async (endpoint, options = {}) => {
  const token = getToken();
  const headers = {
    Accept: "application/json",
    ...options.headers,
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const formData = new FormData();
  if (options.body) {
    Object.keys(options.body).forEach((key) => {
      if (options.body[key] !== null && options.body[key] !== undefined) {
        formData.append(key, options.body[key]);
      }
    });
  }

  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method: options.method || "GET",
      headers,
      body: options.body ? formData : undefined,
    });

    const data = await response.json();

    if (!response.ok) {
      // Handle different error response formats
      const errorMessage = 
        data.message || 
        data.error?.message || 
        (data.errors && typeof data.errors === 'object' 
          ? Object.values(data.errors).flat().join(', ') 
          : null) ||
        `Request failed with status ${response.status}`;
      throw new Error(errorMessage);
    }

    return data;
  } catch (error) {
    // If it's already an Error object, re-throw it
    if (error instanceof Error) {
      throw error;
    }
    // Otherwise, wrap it in an Error
    throw new Error(error.message || "An error occurred");
  }
};

// Auth API functions
export const authAPI = {
  // Register
  register: async (userData) => {
    return apiRequest("/auth/register", {
      method: "POST",
      body: {
        name: userData.name,
        email: userData.email,
        mobile: userData.mobile,
        password: userData.password,
        password_confirmation: userData.password_confirmation,
        mobile_country_code: userData.mobile_country_code,
      },
    });
  },

  // Login
  login: async (email, password) => {
    return apiRequest("/auth/login", {
      method: "POST",
      body: {
        email,
        password,
      },
    });
  },

  // Verify Email
  verifyEmail: async (code) => {
    return apiRequest("/auth/verify-email", {
      method: "POST",
      body: {
        code,
      },
    });
  },

  // Resend Verification Code
  resendVerificationCode: async () => {
    return apiRequest("/auth/verify-email/resend-code", {
      method: "POST",
      body: {},
    });
  },

  // Get User Data
  getUserData: async () => {
    return apiRequest("/auth/user-data", {
      method: "GET",
    });
  },

  // Logout
  logout: async () => {
    return apiRequest("/auth/logout", {
      method: "POST",
      body: {},
    });
  },
};

// Export token management functions
export { getToken, setToken, removeToken };

