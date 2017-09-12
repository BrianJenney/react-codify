//we must import react to use it in our app
import React from 'react';

import HelloWorld from './HelloWorld';

import Splash from './Splash';
import Article from './Article';
import Footer from './Footer';

class Main extends React.Component {

   render() {
      return (
            <div>
                  <Splash/>
                  <Article/>
                  <Footer/>
            </div>
      );
   }
}

export default Main;

