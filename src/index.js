import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
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
import Partners from "views/PartnersPage/Partners";
import InitialForm from "views/ApplicationForm/InitialForm";
import Investors from "views/SpecialInvestors/specialInvestors";
import Policy from "views/Policy/Policy.js";
import Agenda from "views/Agenda/Agenda";
import MemPay from "views/Mempay/Mempay";

// redirects
import ICICC from "redirects/ICICC"
import DOSCI from "redirects/DOSCI"

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
      <Route path="/startup-about" component = {Sessions} />
      <Route path="/startup-eligibility" component = {Eligibility} />
      <Route path="/startup-funding" component = {Funding} />
      <Route path="/startup-application-procedure" component = {Application}/>
      <Route path="/startup-partners-and-promoters" component = {Partners}/>
      <Route path="/startup-application-form" component = {InitialForm}/>   
      <Route path="/startup-investors-and-partners" component = {Investors}/>     
      <Route path="/privacy-policy" component = {Policy}/>  
      <Route path="/startup-agenda" component = {Agenda}/>
      <Route path="/mempay" component={MemPay}/> 
      <Route path="/icicc" component={ICICC}/>
      <Route path="/dosci" component={DOSCI}/>             
      <Route path="/" component={LandingPage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
