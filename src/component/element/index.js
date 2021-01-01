import Row from "@element/row";
import Col from "@element/col";
const components = [
    Row,
    Col
];
const install = (Vue) => {
    components.forEach((component) => {
        Vue.component(component.name, component);
    });
}

export default { Row, Col, install };

export {
    install,
    Row,
    Col
}