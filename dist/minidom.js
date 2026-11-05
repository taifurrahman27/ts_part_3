class UIElement {
    id;
    constructor(id) {
        this.id = id;
    }
}
class Input extends UIElement {
    type;
    placeholder;
    constructor(id, type, placeholder) {
        super(id);
        this.type = type;
        this.placeholder = placeholder;
    }
    render() {
        return `<input class="ui-input" id="${this.id}" type="${this.type}" name="${this.id}" placeholder="${this.placeholder}" />`;
    }
}
class Button extends UIElement {
    label;
    constructor(id, label) {
        super(id);
        this.label = label;
    }
    render() {
        return `<button class="ui-button" id="${this.id}">${this.label}</button>`;
    }
}
class Form extends UIElement {
    children = [];
    appendChild(child) {
        this.children.push(child);
    }
    styles() {
        return `
<style>
  #${this.id} {
    display: flex;
    flex-direction: column;
    gap: 14px;
    width: 100%;
    max-width: 360px;
    margin: 40px auto;
    padding: 32px 28px;
    background: #ffffff;
    border: 1px solid #e5e7eb;
    border-radius: 16px;
    box-shadow: 0 10px 30px rgba(17, 24, 39, 0.08);
    font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  }

  #${this.id} .ui-input {
    width: 100%;
    box-sizing: border-box;
    padding: 12px 14px;
    font-size: 15px;
    color: #111827;
    background: #f9fafb;
    border: 1px solid #d1d5db;
    border-radius: 10px;
    outline: none;
    transition: border-color 0.2s, box-shadow 0.2s, background 0.2s;
  }

  #${this.id} .ui-input::placeholder {
    color: #9ca3af;
  }

  #${this.id} .ui-input:focus {
    background: #ffffff;
    border-color: #6366f1;
    box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.15);
  }

  #${this.id} .ui-button {
    margin-top: 6px;
    padding: 12px 14px;
    font-size: 15px;
    font-weight: 600;
    color: #ffffff;
    background: linear-gradient(135deg, #6366f1, #8b5cf6);
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: transform 0.15s, box-shadow 0.2s, opacity 0.2s;
  }

  #${this.id} .ui-button:hover {
    transform: translateY(-1px);
    box-shadow: 0 6px 16px rgba(99, 102, 241, 0.35);
  }

  #${this.id} .ui-button:active {
    transform: translateY(0);
    opacity: 0.9;
  }
</style>`;
    }
    render() {
        const childrenHTML = this.children
            .map((child) => child.render())
            .join("\n  ");
        return `${this.styles()}
<form id="${this.id}">
  ${childrenHTML}
</form>`;
    }
}
const formElement = new Form("login-form");
const nameInput = new Input("name", "text", "Enter your name");
const emailInput = new Input("email", "email", "Enter your email");
const passwordInput = new Input("pass", "password", "Enter your password");
const submitButton = new Button("submit-btn", "Submit");
formElement.appendChild(nameInput);
formElement.appendChild(emailInput);
formElement.appendChild(passwordInput);
formElement.appendChild(submitButton);
console.log(formElement.render());
const rootElement = document.getElementById("root");
if (rootElement) {
    rootElement.innerHTML = formElement.render();
}
export {};
