import Home from "../pages/index";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

//Write jest unit tests to test the calculator application with the following test cases:
//1. Test the add button
//2. Test the subtract button
//3. Test the multiply button
//4. Test the divide button

describe("Calculator", () => {
    test("add button", () => {
        render(<Home />);
        const num1 = screen.getByTestId("num1");
        const num2 = screen.getByTestId("num2");
        const add = screen.getByTestId("add");
        const result = screen.getByTestId("result");
        fireEvent.change(num1, { target: { value: 5 } });
        fireEvent.change(num2, { target: { value: 5 } });
        fireEvent.click(add);
        expect(result.textContent).toBe("10");
    });
    test("subtract button", () => {
        render(<Home />);
        const num1 = screen.getByTestId("num1");
        const num2 = screen.getByTestId("num2");
        const subtract = screen.getByTestId("subtract");
        const result = screen.getByTestId("result");
        fireEvent.change(num1, { target: { value: 5 } });
        fireEvent.change(num2, { target: { value: 5 } });
        fireEvent.click(subtract);
        expect(result.textContent).toBe("0");
    });
    test("multiply button", () => {
        render(<Home />);
        const num1 = screen.getByTestId("num1");
        const num2 = screen.getByTestId("num2");
        const multiply = screen.getByTestId("multiply");
        const result = screen.getByTestId("result");
        fireEvent.change(num1, { target: { value: 5 } });
        fireEvent.change(num2, { target: { value: 5 } });
        fireEvent.click(multiply);
        expect(result.textContent).toBe("25");
    }
    );
    test("divide button", () => {
        render(<Home />);
        const num1 = screen.getByTestId("num1");
        const num2 = screen.getByTestId("num2");
        const divide = screen.getByTestId("divide");
        const result = screen.getByTestId("result");
        fireEvent.change(num1, { target: { value: 5 } });
        fireEvent.change(num2, { target: { value: 5 } });
        fireEvent.click(divide);
        expect(result.textContent).toBe("1");
    }); 
}   
);
