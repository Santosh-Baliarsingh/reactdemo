import axios from "axios";

export function AxiosInterceptor1() {
    axios.interceptors.request.use((req) => {
      req.headers.authorization = "my secret token";
      return req;
    });
  };
//  For every API call you make a request token will made 


//Request interceptor use cases -
/* 
-Assume you want to check before making a request if your credentials are valid. 
 So, instead of actually making an API call, you can check at the interceptor level that your credentials are valid.

-Assume you need to attach a token to every request made, instead of duplicating 
 the token addition logic at every Axios call, you can make an interceptor that 
 attaches a token on every request that is made.

 - export function myInterceptor() {
  axios.interceptors.request.use((req) => {
    req.headers.authorization = "my secret token";
    return req;
  });
}

 -call the above function in app.js (line no. 78)
 */
