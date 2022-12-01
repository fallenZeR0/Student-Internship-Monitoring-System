import React, {lazy, Suspense, useEffect} from "react";
// pages
import LandingPage from "./pages/landingPage";
// import Dashboard from "./pages/dashboard/dashboard";
import PageNotFound from "./pages/PageNotFound";

// component
import Login from "./pages/auth/login";
import Signup from "./pages/auth/signup";

import {Routes, Route, Navigate} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {getUserOnLoad} from "./features/user/userReducer";
import jwt_decode from "jwt-decode";

const Dashboard = lazy(() => import("./pages/dashboard/dashboard"));
const App = () => {
  const {user, isLoading, isError} = useSelector((state) => state.user);
  const dispatch = useDispatch();

  // sets state of user from token
  useEffect(() => {
    if (!user && localStorage.getItem("token")) {
      const {email} = jwt_decode(localStorage.getItem("token"));
      dispatch(getUserOnLoad(email));
    }
  }, []);

  // if (isError) {
  //   return <h1>Somebitch went wrong</h1>;
  // }

  return (
    <main className="container">
      <Suspense fallback={<h1>loading...</h1>}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {!user ? (
            <>
              <Route path="/account/login" element={<Login />} />
              <Route path="/account/signup" element={<Signup />} />
            </>
          ) : (
            <>
              <Route
                path="/account/login"
                element={<Navigate to={"/dashboard"} replace />}
              />
              <Route
                path="/account/signup"
                element={<Navigate to={"/dashboard"} replace />}
              />
            </>
          )}
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path="/404" element={<PageNotFound />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </main>
  );
};

export default App;
