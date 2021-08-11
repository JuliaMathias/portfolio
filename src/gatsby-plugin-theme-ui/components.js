import Prism from "@theme-ui/prism";

const exportedObject = {
  pre: (props) => props.children,
  code: Prism,
};

export default exportedObject;
