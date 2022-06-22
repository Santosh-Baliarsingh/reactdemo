import axios from "axios";

export function AxiosInterceptor2() {
    axios.interceptors.response.use((res) => {
      console.log(res);
      return res;
    });
  };

//   response interceptor use cases -
/* -Assume you got a response, and judging by the API responses you want to deduce that the user is logged in.

-So, in the response interceptor, you can initialize a class that handles the user logged in state and 
 update it accordingly on the response object you received.

-Assume you have requested some API with valid API credentials, but you do not have the valid role to access the data. 

-So, you can trigger an alert from the response interceptor saying that the user is not allowed. 

-This way you'll be saved from the unauthorized API error handling that you would have to perform on every Axios request that you made. */