import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import "assets/scss/material-kit-react.scss?v=1.8.0";

// pages for this product
import LandingPage from "views/LandingPage/LandingPage.js";
import Conferences from "views/ConferencesPage/Conferences.js";
import Fdp from "views/Fdp/Fdp.js"
import Journals from "views/JournalsPage/journals"
import Patent from "views/PatentPage/Patent.js"
import StartUpPage from "views/StartUpPage/startUp.js"
import Uischool from "views/Uischool/Uischool";
import Books from "views/BooksPage/Books"
import Membership from "views/UiMembership/Membership";
import Sessions from "views/SessionsPage/Sessions"
import Eligibility from "views/EligibilityPage/Eligibility";
import Funding from "views/FundingPage/Funding";
import Application from "views/ApplicationPage/Application";


var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      
      <Route path="/conferences" component = {Conferences}/>
      <Route path="/workshops" component = {Fdp}/>
      <Route path="/patent" component = {Patent}/>
      <Route path="/journals" component = {Journals}/>
      <Route path="/uischool" component = {Uischool}/>
      <Route path="/books"  component ={Books}/>
      <Route path="/uimembership" component={Membership}/>

      <Route path="/startup" component = {StartUpPage}/>
      <Route path="/sessions" component = {Sessions} />
      <Route path="/eligibility" component = {Eligibility} />
      <Route path="/funding" component = {Funding} />
      <Route path="/application" component = {Application}/>
     
     
      <Route path="/" component={LandingPage} />

    </Switch>
  </Router>,
  document.getElementById("root")
);
