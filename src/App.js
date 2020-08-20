import React, { useState, lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";

import theme from "./Theme";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = useState(0);

  const HomePage = lazy(() => import("./pages/HomePage"));
  const AboutPage = lazy(() => import("./pages/AboutPage"));

  return (
    <ThemeProvider theme={theme}>
      <Header
        value={value}
        setValue={setValue}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      />
      <Suspense fallback={<div style={{ minHeight: "100vh" }}></div>}>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <HomePage
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />
          <Route
            exact
            path="/about"
            render={() => (
              <AboutPage
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />
        </Switch>
        <Footer setValue={setValue} setSelectedIndex={setSelectedIndex} />
      </Suspense>
    </ThemeProvider>
  );
};

export default App;
