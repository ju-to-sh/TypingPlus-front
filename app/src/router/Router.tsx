import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Top } from "../components/pages/Top";
import { Login } from "../components/pages/Login";
import { PrivacyPolicy } from "../components/pages/PrivacyPolicy";
import { Profile } from "../components/pages/Profile";
import { Question } from "../components/pages/Question";
import { GameList } from "../components/pages/GameList";
import { Signup } from "../components/pages/Signup";
import { Typing } from "../components/pages/Typing";
import { TypingResult } from "../components/pages/TypingResult";
import { QuestionResult } from "../components/pages/QuestionResult";
import { Games } from "../components/pages/Games";
import { TermsOfService } from "../components/pages/TermsOfService";
import { Page404 } from "../components/pages/Page404";
import { memo } from "react";
import { DefaultLayout } from "../components/template/DefaultLayout";
import { CenterLayout } from "../components/template/CenterLayout";
import { Ranking } from "../components/pages/Ranking";
import { Search } from "../components/pages/Search";
import { Like } from "../components/pages/Like";
import { PasswordReset } from "../components/pages/PasswordReset";
import { ChangePassword } from "../components/pages/ChangePassword";

export const Router = memo(() => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <DefaultLayout>
              <Top />
            </DefaultLayout>
          }
        />
        <Route
          path="/login"
          element={
            <CenterLayout>
              <Login />
            </CenterLayout>
          }
        />
        <Route
          path="/password_resets"
          element={
            <CenterLayout>
              <PasswordReset />
            </CenterLayout>
          }
        />
        <Route
          path="/password_resets/:id/edit"
          element={
            <CenterLayout>
              <ChangePassword />
            </CenterLayout>
          }
        />
        <Route
          path="/signup"
          element={
            <CenterLayout>
              <Signup />
            </CenterLayout>
          }
        />
        <Route
          path="/policy"
          element={
            <DefaultLayout>
              <PrivacyPolicy />
            </DefaultLayout>
          }
        />
        <Route
          path="/term"
          element={
            <DefaultLayout>
              <TermsOfService />
            </DefaultLayout>
          }
        />
        <Route path="/users/:id" element={<Profile />} />
        <Route
          path="/games"
          element={
            <DefaultLayout>
              <Games />
            </DefaultLayout>
          }
        />
        <Route path="/quizzes/:id" element={<Question />} />
        <Route
          path="/quizzes"
          element={
            <DefaultLayout>
              <GameList />
            </DefaultLayout>
          }
        />
        <Route
          path="/typing_games"
          element={
            <DefaultLayout>
              <GameList />
            </DefaultLayout>
          }
        />
        <Route
          path="/ranking"
          element={
            <DefaultLayout>
              <Ranking />
            </DefaultLayout>
          }
        />
        <Route
          path="/search"
          element={
            <DefaultLayout>
              <Search />
            </DefaultLayout>
          }
        />
        <Route
          path="/likes"
          element={
            <DefaultLayout>
              <Like />
            </DefaultLayout>
          }
        />
        <Route path="/quiz_results/:id" element={<QuestionResult />} />
        <Route path="/typing_games/:id" element={<Typing />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
});
