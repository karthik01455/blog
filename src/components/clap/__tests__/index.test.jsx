import { fireEvent, render ,waitFor, act} from "@testing-library/react";
import React from "react";
import Clap from "..";
import makeRequests from '../../../utils/makeRequests';
jest.mock("../../../utils/makeRequests/");
describe("claps", () => {
    it("should display same count of claps which is passed as props when renders for the first time", () => {
        const { queryByText } = render(<Clap claps={0} />);
        const result = queryByText("0");
        expect(result).toBeTruthy();
    });
    it("should display same count of claps+1 which is passed as props when clicked", async() => {
        const { queryByAltText, queryByText } = render(<Clap claps={0} />);
        makeRequests.mockResolvedValue({liked:true});
        const heart = queryByAltText("clap");
        act(() => {
        fireEvent.click(heart);
        });
        await waitFor(()=>{
            const result = queryByText("0");
            expect(result).toBeTruthy();
        });
    });
    it("should display same count of claps which is passed as props when clicked twice", () => {
        const { queryByAltText, queryByText } = render(<Clap claps={0} />);     
        act(() => { 
        fireEvent.click(queryByAltText("clap"));    
        fireEvent.click(queryByAltText("clap")); 
    });     
        const result = queryByText("0");
 
        expect(result).toBeTruthy();
  
    });
});



