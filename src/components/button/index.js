import Component from "../../utils/component.js";
import "./styles.css";

class Button extends Component {
  constructor(props) {
    super();

    this.text = props.text;
    if (typeof props.icon === "string") {
      this.icon = props.icon;
    } else {
      this.icon = "";
    }
    this.onClick = props.onClick;
    this.classList = props.classList;
    this.isDisabled = props.isDisabled;

    if (typeof props.isVisible === "boolean") {
      this.isVisible = props.isVisible;
    } else {
      this.isVisible = true;
    }
  }

  handleClick() {
    this.onClick();
  }

  setIsDisabled() {
    if (this.isDisabled) return "disabled";
    return "";
  }

  setIsVisible() {
    if (!this.isVisible) return "d-none";
    return "";
  }

  render() {
    return `
      <button 
        class="button ${
          this.classList ? this.classList : ""
        } ${this.setIsVisible()}"
        onclick="document.componentRegistry[${this._id}].handleClick()"
        ${this.setIsDisabled()}
      >
        ${this.icon}
        ${this.text}
      </button>
    `;
  }
}

export default Button;
