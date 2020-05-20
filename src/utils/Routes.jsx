import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Layout from "../components/Template/Layout/Layout";
import Home from "../pages/Home";
import Logup from "../components/organisms/Logup/Logup";
import Courses from "../components/organisms/Courses/Courses";
import Methodology from "../components/organisms/Methodology/Methodology";
import Questions from "../components/organisms/Questions/Questions";
import TermsConditions from "../components/organisms/TermsConditions/TermsConditions";

const Routes = (props) => {
  return (
    <>
      <Switch>
        <Layout>
          <Route path="/cursotoc" component={Home} />
          <Route exact path="/">
            <Redirect to="/cursotoc" />
          </Route>
          <Route path="/matricula" component={Logup} />
          <Route path="/cursos" component={Courses} />
          <Route path="/metodologia" component={Methodology} />
          <Route path="/preguntas" component={Questions} />
          <Route path="/tos" component={TermsConditions} />
        </Layout>
      </Switch>
    </>
  );
};

export default Routes;
