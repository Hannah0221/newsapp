import { useState } from "react";

import News from "./News";
import AboutPage from "./AboutPage";

function PageChange() {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  // this array contains all the components that should be available to be used as pages.
  const pages = [<News />, <AboutPage />];

  return (
    <div>
      <nav>
        {/* inside here goes ui that allows the user to choose which page/component should be shown */}
        <button
          onClick={() => {
            // if this button is clicked it changes `currentPageIndex` to 0
            setCurrentPageIndex(0);
          }}
        >
          Page One
        </button>{" "}
        <button
          onClick={() => {
            // if this button is clicked it changes `currentPageIndex` to 1
            setCurrentPageIndex(1);
          }}
        >
          Page Two
        </button>
      </nav>
      <div className="pages">
        {/* inside this div will be where the components are swapped out to simulate page switching */}
        {/* here we simple reference the array, and use the `currentPageIndex` to access one of the components inside it. 
          So if `currentPageIndex` is 0, it accesses the first item in the array, which is <PageOne />. If `currentPageIndex` is 1, it accesses the second item in the array: <PageTwo />, etc*/}
        {pages[currentPageIndex]}
      </div>
    </div>
  );
}

export default PageChange;

// in summary, we import all the components we want to display as pages, we put them in an array,
// and then we put that array in the JSX like this: array[currentPageIndex], where whatever the value of
// currentPageIndex is determines which component in the array gets accessed. Then we simply add a way to change the value
// of currentPageIndex, in this example I am using a pair of buttons.

// you could also use an if statement to determine which component to render, or a switch. Lots of ways to do this with conditional rendering.
