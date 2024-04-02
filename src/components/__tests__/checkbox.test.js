import { render, screen, fireEvent } from "@testing-library/react"
import Checkbox from "../checkbox";

test("Defaults to Inactive label", ()=>{
    render(<Checkbox labelActive="Active" labelInactive="Inactive"/>);
    expect(screen.getByLabelText("Inactive")).toBeInTheDocument();
})

test("Checkbox inactive by default", () => {
    render(<Checkbox labelActive="Active" labelInactive="Inactive"/>);
    const cb = screen.getByTestId("cb");
    expect(cb).toBeInTheDocument();
    expect(cb).not.toBeChecked();
});