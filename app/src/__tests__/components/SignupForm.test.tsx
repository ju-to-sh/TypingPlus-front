import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import { SignupForm } from "../../components/organisms/form/SignupForm";
import userEvent from "@testing-library/user-event";

const mockedNavigator = jest.fn();
    jest.mock('react-router-dom', () => ({
        ...jest.requireActual('react-router-dom'),
        useNavigate: () => mockedNavigator,
    }
));

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

    const registerButton = screen.getByRole("button", { name: "登録する" });
    expect(registerButton).toBeVisible();

    const backButton = screen.getByRole("link", { name: "戻る" });
    expect(backButton).toBeVisible();
  });

  it("Being able to register as a user", async () => {
    const user = userEvent.setup();
    render(<SignupForm />, { wrapper: BrowserRouter });

    const emailElement = screen.getByRole("textbox", { name: "メールアドレス" });
    await user.type(emailElement, "test@gmail.com");
    const passwordElement = screen.getByTestId("password");
    await user.type(passwordElement, "password");
    const passwordConfirmationElement = screen.getByTestId("password-confirmation");
    await user.type(passwordConfirmationElement, "password");

    const registerButton = screen.getByRole("button", { name: "登録する" });
    await user.click(registerButton);
    const errorMessage = screen.getByText("ニックネームを入力して下さい");
    expect(errorMessage).toBeVisible();
  });

  it("validation message is displayed if no nickname is entered", async () => {
    const user = userEvent.setup();
    render(<SignupForm />, { wrapper: BrowserRouter });

    const nameElement = screen.getByRole("textbox", { name: "ニックネーム" });
    await user.type(nameElement, "user");
    const emailElement = screen.getByRole("textbox", { name: "メールアドレス" });
    await user.type(emailElement, "test@gmail.com");
    const passwordElement = screen.getByTestId("password");
    await user.type(passwordElement, "password");
    const passwordConfirmationElement = screen.getByTestId("password-confirmation");
    await user.type(passwordConfirmationElement, "password");

    const registerButton = screen.getByRole("button", { name: "登録する" });
    await user.click(registerButton);
  });

  it("validation message is displayed if no email is entered", async () => {
    const user = userEvent.setup();
    render(<SignupForm />, { wrapper: BrowserRouter });

    const nameElement = screen.getByRole("textbox", { name: "ニックネーム" });
    await user.type(nameElement, "user");
    const passwordElement = screen.getByTestId("password");
    await user.type(passwordElement, "password");
    const passwordConfirmationElement = screen.getByTestId("password-confirmation");
    await user.type(passwordConfirmationElement, "password");

    const registerButton = screen.getByRole("button", { name: "登録する" });
    await user.click(registerButton);
    const errorMessage = screen.getByText("メールアドレスを入力して下さい");
    expect(errorMessage).toBeVisible();
  });

  it("validation message is displayed if the email address entered is incorrect", async () => {
    const user = userEvent.setup();
    render(<SignupForm />, { wrapper: BrowserRouter });

    const nameElement = screen.getByRole("textbox", { name: "ニックネーム" });
    await user.type(nameElement, "user");
    const emailElement = screen.getByRole("textbox", { name: "メールアドレス" });
    await user.type(emailElement, "test_gmail.com");
    const passwordElement = screen.getByTestId("password");
    await user.type(passwordElement, "password");
    const passwordConfirmationElement = screen.getByTestId("password-confirmation");
    await user.type(passwordConfirmationElement, "password");

    const registerButton = screen.getByRole("button", { name: "登録する" });
    await user.click(registerButton);
    const errorMessage = screen.getByText("メールアドレスの形式が不正です");
    expect(errorMessage).toBeVisible();
  });

  it("validation message is displayed if no password is entered", async () => {
    const user = userEvent.setup();
    render(<SignupForm />, { wrapper: BrowserRouter });

    const nameElement = screen.getByRole("textbox", { name: "ニックネーム" });
    await user.type(nameElement, "user");
    const emailElement = screen.getByRole("textbox", { name: "メールアドレス" });
    await user.type(emailElement, "test@gmail.com");
    const passwordConfirmationElement = screen.getByTestId("password-confirmation");
    await user.type(passwordConfirmationElement, "password");

    const registerButton = screen.getByRole("button", { name: "登録する" });
    await user.click(registerButton);
    const errorMessage = screen.getByText("パスワードを入力して下さい");
    expect(errorMessage).toBeVisible();
  });

  it("validation message is displayed if no passwordConfirmation is entered", async () => {
    const user = userEvent.setup();
    render(<SignupForm />, { wrapper: BrowserRouter });

    const nameElement = screen.getByRole("textbox", { name: "ニックネーム" });
    await user.type(nameElement, "user");
    const emailElement = screen.getByRole("textbox", { name: "メールアドレス" });
    await user.type(emailElement, "test@gmail.com");
    const passwordElement = screen.getByTestId("password");
    await user.type(passwordElement, "password");

    const registerButton = screen.getByRole("button", { name: "登録する" });
    await user.click(registerButton);
    const errorMessage = screen.getByText("パスワードをもう一度入力して下さい");
    expect(errorMessage).toBeVisible();
  });
});
