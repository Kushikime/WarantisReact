import React from 'react';
import logo from './logo.svg';



import About from "./About/About";
import Partnership from "./Partnership/Partnership";
import News from "./News/News";
import FAQ from "./FAQ/FAQ";
import Contact from "./Contact/Contact";
import Home from "./Home/Home";
import Investors from "./Investors/Investors";
import Blog from "./Blog/Blog";


import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';

function App() {
    
  return (
    <BrowserRouter>
           <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" exact component={About}/>
                <Route path="/partnership" exact component={Partnership} />
                <Route path="/news" exact component={News} />
                <Route path="/faq" exact component={FAQ} />
                <Route path="/contact" exact component={Contact} />
                <Route path="/investors" exact component={Investors} />
                <Route path="/blog" exact component={Blog} />
            </Switch>
    </BrowserRouter>
  );
}

export default App;
