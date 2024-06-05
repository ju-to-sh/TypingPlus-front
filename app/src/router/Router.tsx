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
import { HeaderLayout } from "../components/template/HeaderLayout";

export const Router = memo(() => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <HeaderLayout>
              <Top />
            </HeaderLayout>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/policy" element={<PrivacyPolicy />} />
        <Route path="/term" element={<TermsOfService />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/games" element={<Games />} />
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
