// Create a react elememt which returns an object
// const heading = React.createElement("h1", {id: "heading1", xyz: 'abhishek'}, "Hello React");
// console.log(heading);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// render method will be responsible to take object and convert to html element h1 tag
// root.render(heading);

/**
 *
 */

/* <div>
  <div>
    <h1>Hello h1</h1>
    <h2>hello h2</h2>
  </div>
</div> */

const heading2 = React.createElement("div", {}, [
  React.createElement("h1", { id: "heading1" }, "Heading 1"),
  React.createElement("h2", { id: "heading2" }, "Heading 2"),
]);
const root2 = ReactDOM.createRoot(document.getElementById("root"));
// render method will be responsible to take object and convert to html element h1 tag
root2.render(heading2);
