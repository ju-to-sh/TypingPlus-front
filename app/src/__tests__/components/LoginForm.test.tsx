import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import { LoginForm } from "../../components/organisms/form/LoginForm";
import userEvent from "@testing-library/user-event";

describe("LoginForm", () => {
  it("renders correctly", () => {
    render(<LoginForm />, { wrapper: BrowserRouter });

    const emailElement = screen.getByRole("textbox", { name: "メールアドレス" });
    expect(emailElement).toBeVisible();

    const passwordElement = screen.getByTestId("password");
    expect(passwordElement).toBeVisible();

    const loginButton = screen.getByRole("button", { name: "ログイン" });
    expect(loginButton).toBeVisible();

    const passwordResetButton = screen.getByRole("link", { name: "パスワードをリセットする" });
    expect(passwordResetButton).toBeVisible();

    const backButton = screen.getByRole("link", { name: "戻る" });
    expect(backButton).toBeVisible();
  });

  it("Login successfly", async () => {
    const user = userEvent.setup();
    render(<LoginForm />, { wrapper: BrowserRouter });

    const emailElement = screen.getByRole("textbox", { name: "メールアドレス" });
    await user.type(emailElement, "test@gmail.com");
    const passwordElement = screen.getByTestId("password");
    await user.type(passwordElement, "password");

    const loginButton = screen.getByRole("button", { name: "ログイン" });
    await user.click(loginButton);
  });

  it("validation message is displayed if no email is entered", async () => {
    const user = userEvent.setup();
    render(<LoginForm />, { wrapper: BrowserRouter });

    const passwordElement = screen.getByTestId("password");
    await user.type(passwordElement, "password");

    const loginButton = screen.getByRole("button", { name: "ログイン" });
    await user.click(loginButton);
    const errorMessage = screen.getByText("パスワードを入力して下さい");
    expect(errorMessage).toBeVisible();
  });

  it("validation message is displayed if the email address entered is incorrect", async () => {
    const user = userEvent.setup();
    render(<LoginForm />, { wrapper: BrowserRouter });

    const emailElement = screen.getByRole("textbox", { name: "メールアドレス" });
    await user.type(emailElement, "test_gmail.com");

    const loginButton = screen.getByRole("button", { name: "ログイン" });
    await user.click(loginButton);
    const errorMessage = screen.getByText("メールアドレスの形式が不正です");
    expect(errorMessage).toBeVisible();
  });

  it("validation message is displayed if no password is entered", async () => {
    const user = userEvent.setup();
    render(<LoginForm />, { wrapper: BrowserRouter });

    const emailElement = screen.getByRole("textbox", { name: "メールアドレス" });
    await user.type(emailElement, "test@gmail.com");

    const loginButton = screen.getByRole("button", { name: "ログイン" });
    await user.click(loginButton);
    const errorMessage = screen.getByText("パスワードを入力して下さい");
    expect(errorMessage).toBeVisible();
  });
});
