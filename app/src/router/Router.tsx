import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Top } from "../components/pages/Top";
import { Login } from "../components/pages/Login";
import { PrivacyPolicy } from "../components/pages/PrivacyPolicy";
import { Profile } from "../components/pages/Profile";
import { Question } from "../components/pages/Question";
import { QuestionList } from "../components/pages/QuestionList";
import { Signup } from "../components/pages/Signup";
import { Typing } from "../components/pages/Typing";
import { TypingResult } from "../components/pages/TypingResult";
import { TypingList } from "../components/pages/TypingList";
import { QuestionResult } from "../components/pages/QuestionResult";
import { Games } from "../components/pages/Games";
import { TermsOfService } from "../components/pages/TermsOfService";
import { Page404 } from "../components/pages/Page404";
import { memo } from "react";
import { DefaultLayout } from "../components/template/DefaultLayout";
import { CenterLayout } from "../components/template/CenterLayout";

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
          path="/signup"
          element={
            <CenterLayout>
              <Signup />
            </CenterLayout>
          }
        />
        <Route path="/policy" element={<PrivacyPolicy />} />
        <Route path="/term" element={<TermsOfService />} />
        <Route path="/profile" element={<Profile />} />
        <Route
          path="/games"
          element={
            <DefaultLayout>
              <Games />
            </DefaultLayout>
          }
        />
        <Route path="/question" element={<Question />} />
        <Route path="/question_list" element={<QuestionList />} />
        <Route path="/question_result" element={<QuestionResult />} />
        <Route path="/typing" element={<Typing />} />
        <Route path="/typing_list" element={<TypingList />} />
        <Route path="/typing_result" element={<TypingResult />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
});
