import Component from "../../utils/component.js";
import "./styles.css";

class LedResultMessage extends Component {
  constructor(props) {
    super();

    this.classList = props.classList;
    this.message = props.message;
  }

  render() {
    return `
      <p class="led-result-message ${this.classList}">${this.message}</p>
    `;
  }
}

export default LedResultMessage;
