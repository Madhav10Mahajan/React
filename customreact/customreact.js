function customrender(reactelement, container) {
  let domelement = document.createElement(reactelement.type);
  domelement.innerHTML = reactelement.children;
  domelement.setAttribute("href", reactelement.props.href);
  domelement.setAttribute('target', reactelement.props.target);
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

customrender(reactelement,maincontainer)