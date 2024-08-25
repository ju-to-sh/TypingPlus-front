import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import { SignupForm } from "../components/organisms/form/SignupForm";

describe("SignupForm", () => {
  it("renders correctly", () => {
    render(<SignupForm />, { wrapper: BrowserRouter });
    const nameElement = screen.getByRole("textbox", { name: "ニックネーム" });
    expect(nameElement).toBeVisible();

    const emailElement = screen.getByRole("textbox", { name: "メールアドレス" });
    expect(emailElement).toBeVisible();

    const passwordElement = screen.getByTestId("password");
    expect(passwordElement).toBeVisible();

    const passwordConfirmationElement = screen.getByTestId("password-confirmation");
    expect(passwordConfirmationElement).toBeVisible();
  });
});
