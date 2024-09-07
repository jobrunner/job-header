import { LitElement, html, css } from 'lit-element';

class JobHeaderComponent extends LitElement {
  static styles = css`
    header {
      background-color: #4CAF50;
      color: white;
      text-align: center;
      padding: 1rem;
    }
    ::slotted(img) {
      max-width: 100px;
      margin-right: 1rem;
    }    
  `;
  render() {
    return html`
      <header>
        <slot name="image"></slot>
        <h1>
          <slot></slot>
        </h1>
      </header>
  `;
}}

customElements.define('job-header', JobHeaderComponent);
