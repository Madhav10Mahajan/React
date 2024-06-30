function customrender(reactelement, container) {
  let domelement = document.createElement(reactelement.type);
  domelement.innerHTML = reactelement.children;
  // domelement.setAttribute("href", reactelement.props.href);
  // domelement.setAttribute('target', reactelement.props.target);
  for (const prop in reactelement.props) {
    domelement.setAttribute(prop,reactelement.props[prop]);
  }
  container.appendChild(domelement);
}
let reactelement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "click me to visit google",
}

let maincontainer = document.getElementById("root");

customrender(reactelement,maincontainer);