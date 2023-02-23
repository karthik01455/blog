import {
    BACKEND_URL,
    UPDATE_BLOG_DATA,
} from "./../../../constants/apiEndPoints";
import axios from "axios";
import { mockBlogPostData } from "../../../mocks/mockData";
import makeRequest from "..";
import { GET_BLOG_DATA } from "../../../constants/apiEndPoints";
jest.mock("axios");
describe('Make Request', () => {
    it('should make API call with appropriate request options and return response body when only endpoint is specified', async () => {
        axios.mockResolvedValue({ data: mockBlogPostData });
        expect(axios).not.toHaveBeenCalled();
        const response = await makeRequest(GET_BLOG_DATA);
        expect(axios).toHaveBeenCalledWith({
            method: "get",
            baseURL: BACKEND_URL,
            url: GET_BLOG_DATA.url,


        });
        expect(response).toEqual(mockBlogPostData);
    });
    it('should make API call with appropriate request options and return response body when endpoint and data is specified', async () => {
        axios.mockResolvedValue({ data: mockBlogPostData });
        expect(axios).not.toHaveBeenCalled();
        const response = await makeRequest(UPDATE_BLOG_DATA(1), {
            data: {
                claps: 1,
            }
        });
        expect(axios).toHaveBeenCalledWith({
            method: "put",
            baseURL: BACKEND_URL,
            url: UPDATE_BLOG_DATA(1).url,
            data: {
                claps: 1,
            }
        });
        expect(response).toEqual(mockBlogPostData);

    });
    it('should navigate to error page when API call return error code', async () => {
        const mockNavigate = jest.fn();
        axios.mockRejectedValueOnce({ response: { status: 500 } });  
        expect(mockNavigate).not.toBeCalled();
        await makeRequest(
            UPDATE_BLOG_DATA(1),
            {
              data: { claps: 1 },
            },
            mockNavigate
          );
          expect(mockNavigate).toHaveBeenCalledTimes(1);
          expect(mockNavigate).toHaveBeenCalledWith(`/error/500`);
});
it('should navigate to error page without status code when API call return without error code', async () => {
    const mockNavigate = jest.fn();
    axios.mockRejectedValueOnce({  });  
    expect(mockNavigate).not.toBeCalled();
    await makeRequest(
        UPDATE_BLOG_DATA(1),
        {
          data: { claps: 1 },
        },
        mockNavigate
      );
      expect(mockNavigate).toHaveBeenCalledTimes(1);
      expect(mockNavigate).toHaveBeenCalledWith(`/error`);
});

    
});