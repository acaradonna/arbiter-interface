import logo from './logo.svg';
import './App.css';

import React from "react";
import { ChakraProvider, 
        ColorModeScript, 
        Text,
        Divider } from "@chakra-ui/react";
import Swap from "./components/Swap";
import Header from "./components/Header";
import TokenList from "./components/TokenList";
import { DAppProvider } from "@usedapp/core";
import { Global, css } from "@emotion/react";
import theme from "./theme";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

const tokenList = JSON.stringify('https://github.com/trustwallet/assets/blob/master/blockchains/ethereum/tokenlist.json');
const GlobalStyles = css`
  /*
    This will hide the focus indicator if the element receives focus via the mouse,
    but it will still show up on keyboard focus.
  */
    .js-focus-visible :focus:not([data-focus-visible-added]) {
    outline: none;
    box-shadow: none;
  }
`;


//apply GlobalStyles to app:

const App = () => (
  <DAppProvider config={{}}>
  <ChakraProvider resetCSS theme={theme}>
  <Global styles={GlobalStyles}/>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <body>
      <Header />
      <Divider />
      <Text fontSize='6xl'>Arbiter</Text>
        <div id="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="swap" element={<Swap />} />
          <Route path="tokendata" element={<TokenData />} />
        </Routes>
        </div>
    </body>
  </ChakraProvider>

  </DAppProvider>
  );
  
const TokenData = () => {
  return (
    <>
      <main>
      <TokenList />
      </main>
    </>
  )

}

  function Home() {
    return (
      <>
        <main>
          <h2>Welcome to the homepage!</h2>
          <p>You can do this, I believe in you.</p>
        </main>
        <nav>
          <Link to="/about">About</Link>
        </nav>
      </>
    );
  }
  
  function About() {
    return (
      <>
        <main>
          <h2>Who are we?</h2>
          <p>
            That feels like an existential question, don't you
            think?
          </p>
        </main>
        <nav>
          <Link to="/">Home</Link>
        </nav>
      </>
    );
  }

export default App;
