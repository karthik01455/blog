import { fireEvent, render, waitFor } from "@testing-library/react";
import React from "react";
import Like from "..";
import makeRequests from '../../../utils/makeRequests';
jest.mock("../../../utils/makeRequests/");
describe("like", () => {
    it("should display empty heart when renders for the first time", () => {
        const { queryByAltText } = render(<Like liked={false} id={1} />);
        const heart = queryByAltText("like");
        expect(heart.src).toContain("http://localhost/heart-black.svg");
    });
    it("should display red heart when clicked", async() => {
        const { queryByAltText } = render(<Like liked={false} id={1} />);
        makeRequests.mockResolvedValue({liked:true});
        const heart = queryByAltText("like");
        fireEvent.click(heart);
        await waitFor(()=>{
        expect(heart.src).toContain("http://localhost/heart-red.svg");
        });
    });
    it("should display empty heart when clicked twice", () => {
        const { queryByAltText } = render(<Like liked={false} id={1} />);
        const heart = queryByAltText("like");
        fireEvent.click(heart);
        fireEvent.click(heart);
        expect(heart.src).toContain("http://localhost/heart-black.svg");
    });
});