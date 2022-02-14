class PngIcon {
  constructor(props) {
    this.icon = props.icon;
  }
  render() {
    return `
      <img src="${this.icon}" class="refresh-icon" />
    `;
  }
}

export default PngIcon;
