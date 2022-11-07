import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <body>
    <div className="dhiwise-navigation">

          <button>
          <Link to="/macbookpro14one">Generate</Link>
          </button>
          <br></br>
          <button>
            <Link to="/mvp">MVP</Link>
          </button>
    </div>
    </body>
  );
};

export default Home;
// make a for loop
