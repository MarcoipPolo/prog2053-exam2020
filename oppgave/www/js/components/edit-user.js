import { LitElement, html, css } from "../../node_modules/lit-element/lit-element.js";

class EditUser extends LitElement {
  static get properties() {
    return {
      user: { type: Object }
    };
  }

  // din kode her
  constructor() {
    super();

    fetch('api/updateUser.php', {
      method: 'POST',
      body: user,
    })
    .then(res => {return res.json()});
  }


}
customElements.define('edit-user', EditUser);
