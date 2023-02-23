import axios from "axios";
import { BACKEND_URL } from "../../constants/apiEndPoints";
const makeRequests = async (
  apiEndPoint,
  dynamicConfig = {},
  navigate
) => {
    try{
    console.log("**********");
  const requestDetails = {
    baseURL: BACKEND_URL,
    url: apiEndPoint.url,
    method: apiEndPoint.method,
    ...dynamicConfig,
  };
  const { data } = await axios(requestDetails);
//   console.log('data-'+ JSON.stringify(data));
//   console.log('data-length'+ JSON.stringify(data.length));
// console.log('data'+ data["data"])
return data;
} catch(e){
    if(navigate)
    {
        const errorStatus = e.response?.status;
        if (errorStatus) {
          navigate(`/error/${errorStatus}`);
        } else {
          navigate(`/error`);
        }
    }

}
 // console.log('requestDetails'+requestDetails);
 
};

export default makeRequests;