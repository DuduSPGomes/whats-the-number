import Component from "../../utils/component.js";
import "./styles.css";

class Input extends Component {
  constructor(props) {
    super();

    this.onChange = props.onChange;
    this.placeholder = props.placeholder;
    this.isDisabled = props.isDisabled;
  }

  change(value) {
    this.onChange(value);
  }

  setIsDisabled() {
    if (this.isDisabled) return "disabled";
    return "";
  }

  handle() {
    return `document.componentRegistry[${this._id}]`;
  }

  render() {
    return `
      <input 
        class="input"
        type="number"
        placeholder="${this.placeholder}"
        min="1"
        ${this.setIsDisabled()}
        onchange="${this.handle()}.change(this.value)"
        tabindex="1"
      />
    `;
  }
}

export default Input;
