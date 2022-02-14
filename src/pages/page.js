import Led from "../components/led/index.js";
import LedResultMessage from "../components/led-result-message/index.js";
import Input from "../components/input/index.js";
import Button from "../components/button/index.js";
import useState from "../hooks/useState.js";
import { getRandValue } from "../repository/get-rand-value.js";
import RefreshIcon from "../assets/icons/refresh-icon.png";
import PngIcon from "../components/icons/png-icon.js";

const [resp, setResp] = useState({});
const [displayNumber, setDisplayNumber] = useState(0);
const [ledResultMsg, setLedResultMsg] = useState({ text: "" });
const [newMatchBtnIsVisible, setNewMatchBtnIsVisible] = useState(false);
const [isDisabled, setIsDisabled] = useState(false);
const [leds, setLeds] = useState([new Led()]);
const [ledColor, setLedColor] = useState("");

function Page() {
  function reRender() {
    document.querySelector("body").innerHTML = Page();
  }

  function handleChange(value) {
    setDisplayNumber(value);
  }

  function ledTextStatus() {
    if (displayNumber() > resp()?.value) {
      setLedResultMsg({ text: "É menor", class: "smaller" });
    } else if (displayNumber() < resp()?.value) {
      setLedResultMsg({ text: "É maior", class: "large" });
    } else if (displayNumber() == resp()?.value) {
      setLedResultMsg({ text: "Você acertou!!!", class: "success" });
    } else if (resp()?.StatusCode === 502) {
      setLedResultMsg({ text: "Erro", class: "error" });
      setDisplayNumber(502);
    }
  }

  async function handleSendOnClick() {
    if (displayNumber()) {
      await getRandValue().then((resp) => {
        setResp(resp);
      });
      ledTextStatus();
      setNewMatchBtnIsVisible(true);
      setIsDisabled(true);
      setLedColorOnState();
      instanceLeds();
      reRender();
    } else {
      alert("Você precisa adicionar um palpite!");
    }
  }

  function handleNewMatchOnClick() {
    setDisplayNumber(0);
    setLedResultMsg({ text: "", class: "" });
    setNewMatchBtnIsVisible(false);
    setIsDisabled(false);
    setLeds([new Led()]);
    reRender();
  }

  function setLedColorOnState() {
    if (displayNumber() > resp()?.value) {
      setLedColor("led-standard-color");
    } else if (displayNumber() < resp()?.value) {
      setLedColor("led-standard-color");
    } else if (displayNumber() == resp()?.value) {
      setLedColor("led-success-color");
    } else if (resp()?.StatusCode === 502) {
      setLedColor("led-error-color");
    }
  }

  function instanceLeds() {
    const displayNumberToArrayString = [...displayNumber().toString()];
    const leds = displayNumberToArrayString.map((n) => {
      const led = new Led({ classList: `_${n}  ${ledColor()}` });
      return led;
    });
    setLeds(leds);
  }

  const ledResultMessage = new LedResultMessage({
    classList: ledResultMsg().class,
    message: ledResultMsg().text,
  });

  const refreshIcon = new PngIcon({ icon: RefreshIcon });

  const newMatchButton = new Button({
    text: "NOVA PARTIDA",
    classList: "new-match",
    isVisible: newMatchBtnIsVisible(),
    onClick: handleNewMatchOnClick,
    icon: refreshIcon.render(),
  });

  const input = new Input({
    placeholder: "Digite o palpite",
    onChange: handleChange,
    isDisabled: isDisabled(),
  });

  const sendButton = new Button({
    classList: "send",
    text: "ENVIAR",
    onClick: handleSendOnClick,
    isDisabled: isDisabled(),
  });

  return `
    <div class="app">
      <header class="header">
        <h1 class="heading">QUAL É O NÚMERO?</h1>
        <hr class="divisor" />
      </header>
      <section class="section">
        ${ledResultMessage.render()}
        <div class="led-container">
          ${leds()
            .map((l) => l.render())
            .join("")}
        </div>
        ${newMatchButton.render()}
      </section>
      <footer class="footer">
        ${input.render()}
        ${sendButton.render()}
      </footer>
    </div>
  `;
}

export default Page;
