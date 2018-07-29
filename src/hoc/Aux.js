// Wraps other component
// a type of HoC that just returns children
// it does not add any HTML tags
const aux = (props) => props.children;
export default aux;