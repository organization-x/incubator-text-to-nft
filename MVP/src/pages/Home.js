import React from "react";
import { Link } from "react-router-dom";
function redirect() {
  window.location.href = "/macbookpro14one";
return
}
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
for (let i = 0; i < 1; i++) {
  redirect();
}