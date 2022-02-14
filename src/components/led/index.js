import Component from "../../utils/component.js";
import "./styles.css";

class Led extends Component {
  constructor(props = {}) {
    super();

    if (typeof props.classList === "string") {
      this.classList = props.classList;
    } else {
      this.classList = "";
    }
  }

  render() {
    return `
      <div class="led">
        <div class="led-box top ${this.classList}">
          <div class="corner top left"></div>
          <div class="corner top right"></div>
          <div class="corner middle bottom left"></div>
          <div class="corner middle bottom right"></div>
        </div>
        <div class="led-box bottom ${this.classList}">
          <div class="corner middle top left"></div>
          <div class="corner middle top right"></div>
          <div class="corner bottom left"></div>
          <div class="corner bottom right"></div>
        </div>
      </div>
    `;
  }
}

export default Led;
