import React from "react";
import "./App.css";
import "./Pages.css";
import Sidebar from "./Components/Sidebar";
import Navbar from "./Components/Navbar";
import PageContent from "./PageContent";
import Songbar from "./Components/Songbar";
import Prem from "./Prem";
import AcountSideBar from "./Components/AcountSideBar";
import Ads from "./Components/AdsBar";

import Artists from "./Components/Artists"; // added by michael
import Albums from "./Components/Albums"; //abm
import Podcasts from "./Components/Podcasts"; //abm

import PremiumCreddd from "./PremiumCreddd";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Cal from './Components/Calendar'

function App() {
  const [showSideBar, setShowSideBar] = React.useState(true);
  const [showPageContent, setShowPageContent] = React.useState(true);
  //
  const [showAcountSideBar, setShowAcountSideBar] = React.useState(true);
  const [showPageContentt, setShowPageContentt] = React.useState(true);
  //

  const [isPremium, setIsPremium] = React.useState(true);

  const [premiumContentHeight, setPremiumContentHeight] = React.useState(
    "100vh"
  );

  if(window.location.href === process.env.REACT_APP_CLIENT_URL + "/calendar"){
    return <Cal/>
  }
  else{
    return (
      <div>
        <Router>
          <div style={{ width: "100%", minHeight: premiumContentHeight }}>
            <Route
              exact
              path="/Premium/Credentials"
              component={() => (
                <PremiumCreddd
                  setIsPremium={setIsPremium}
                  isPremium={isPremium}
                />
              )}
            />
          </div>
  
          <div className="PagesLayout ">
            {showPageContent ? (
              <div className="ContentLayout blue ">
                <PageContent
                  setShowSideBar={setShowSideBar}
                  setShowPageContentt={setShowPageContentt}
                  setShowAcountSideBar={setShowAcountSideBar}
                  setShowPageContent={setShowPageContent}
                  setPremiumContentHeight={setPremiumContentHeight}
                  isPremium={isPremium}
                />
              </div>
            ) : null}
  
            <div className="SideLayout">
              {showSideBar ? <Sidebar /> : null}
  
              <Route path="/Home" component={Sidebar} />
              <Route path="/search" component={Sidebar} />
              <Route path="/collection/playlists" component={Sidebar} />
              <Route path="/collection/tracks" component={Sidebar} />
              <Route path="/collection/podcasts" component={Sidebar} />
              <Route path="/collection/artists" component={Sidebar} />
              <Route path="/collection/albums" component={Sidebar} />
              <Route path="/amer-mounib" component={Sidebar} />
              <Route path="/collection/podcasts" component={Navbar} />
              <Route path="/collection/artists" component={Navbar} />
              <Route path="/collection/albums" component={Navbar} />
              <Route path="/login" component={Sidebar} />
  
              <Route path="/search" />
              <Route path="/collection/playlists" />
  
              <Route exact path="/Premium" component={() => <Prem />} />
            </div>
            <div className="NavLayout">
              <Router>
                <Navbar />
                {/* <Route path="/Home" component={Navbar} /> */}
                <Route path="/collection/podcasts" />
                <Route path="/collection/artists" />
                <Route path="/collection/albums" />
                <Navbar />
                <Route path="/Home" />
                <Route path="/collection/podcasts" />
                <Route path="/collection/artists" />
                <Route path="/collection/albums" />
                <Route path="/collection/podcasts" />
                <Route path="/collection/artists" />
                <Route path="/collection/albums" />
                <Route path="/collection/tracks" />
              </Router>
            </div>
            {/* <div className="Adsbarlayout">
              <Ads  />
            
            </div> */}
            <div className="Songbarlayout">
              <Songbar />
            </div>
          </div>
  
          <div className="PagesLayout">
            <div className="SideLayout">
              {showAcountSideBar ? <AcountSideBar /> : null}
              <Route exact path="/EditProfile" component={AcountSideBar} />
              <Route path="/AccountoverView" component={AcountSideBar} />
              <Route path="/account" component={AcountSideBar} />
              <Route path="/Recover" component={AcountSideBar} />
  
              <Route exact path="/EditProfile" component={Navbar} />
              <Route path="/AccountoverView" component={Navbar} />
              <Route path="/account" component={Navbar} />
              <Route path="/Recover" component={Navbar} />
            </div>
            <div className="NavLayout">
              <Router>
                <Navbar />
                <Route exact path="/EditProfile" />
                <Route path="/AccountoverView" />
                <Route path="/account" />
              </Router>
            </div>
          </div>
        </Router>
      </div>
    );

  }
}

export default App;