export const API_NOTIFICATION_MESSAGES = {
  loading: {
    title: "Loading...",
    message: "Data is being loaded, Plaz wait",
  },
  success: {
    title: "Success",
    message: "Data succefully loaded",
  },
  responseFailure: {
    title: "Error",
    message: "An Error occured while fetching response from the server",
  },
  requsetFailure: {
    title: "Error",
    message: "An Error occured while parsing request data",
  },
  networkError: {
    title: "Network Error",
    message: "Unable to connected with the server, plz try again",
  },
};



export const SERVICE_URLS = {
  userSignup: { url: "/signup", method: "POST" },
};
