/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';
import '@polymer/iron-form/iron-form.js';
import '@polymer/paper-input/paper-input.js';
import '@material/mwc-button';
import '@polymer/paper-dropdown-menu/paper-dropdown-menu.js';
import '@polymer/paper-item/paper-item.js';
import '@polymer/paper-listbox/paper-listbox.js';
import '@polymer/neon-animation/neon-animations.js';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import '@polymer/paper-toast/paper-toast.js';


class Register extends PolymerElement {
  static get template() {
    return html`
    <app-location route="{{route}}" url-space-regex="^[[rootPath]]">
    </app-location>

    <app-route route="{{route}}" pattern="[[rootPath]]:page" data="{{routeData}}" tail="{{subroute}}">
    </app-route>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">                                                                                                                               
      <style include="shared-styles">
      :host
      .body{
        background-image:linear-gradient(#573394,#9b59bd,#573394);
        margin: 0; height: 970px; overflow: hidden;
       }
    
   .myclass{
    margin-top: 55px;

  } 
  #toast2 {
    --paper-toast-background-color: red;
    --paper-toast-color: white;
  }
  paper-input{
    margin-bottom:25px;
  }
  mwc-button {
    width: 500px;
  }
  .logo{
    font-family: 'Audiowide', cursive; font-weight: 600;color: #eb3922;
  }
  .myacc{
    font-family: 'Mitr', sans-serif;margin-left: 40px;
  }
  @media only screen and (max-width: 1060px){ 
    body{
      background-image:linear-gradient(#573394,#9b59bd,#573394);
    }
    .myimg{
      display: none;
    }
    .myrow{
      position: relative;
      left: 20px;
      bottom: 50px;
    }
    .mycontainer{
      position: relative;
      width: 420px !important;
      right: 20px;
      overflow-x: hidden;
    }
    #form{
      position: relative;
      width: 350px !important;
    }
  }
        }
        @media only screen and (max-device-width: 480px){
          #form{
         
            width: 320px !important;
            right: 20px;
            overflow-x: hidden;
          }
          .myacc{
            display:none
          }
          .myrow{
            width:500px;
          }
          mwc-button {
            width:100px;
          }
        }
        @media only screen and (max-width: 960px){
          .myimg{
            display:none;
          }
        }
      
      </style>
      <div class="body">
      <div class="container shadow-lg p-3 mt-5 bg-white rounded mt-2 mycontainer">
        <div class="row myrow">
            
          <div class="col-6 mx-5 myclass">
            <h2 class="fs-1 myacc">Welcome to <span class="logo">ePay</span></h2>
            <img src="../images/manifest/png.png" alt="" class="img-fluid mb-3 d-none d-md-block mt-5 myimg" style="width: 580px;">
          </div>
          <div class="col-5 mycol mt-5">
            <form id="form">
                <!-- 2 column grid layout with text inputs for the first and last names -->
                <h2 class="my-3 mt-5 text-uppercase" style="font-family: 'Mitr', sans-serif;">Registration </h2>
                <paper-input id="name" always-float-label label="Username" required auto-validate error-message="Provide valid details!" char-counter maxlength="10" pattern="[a-zA-Z]*"></paper-input>
                <paper-input id="phone" always-float-label label="Mobile No" required auto-validate error-message="Provide valid details!" char-counter maxlength="10" pattern="[0-9]*"></paper-input>
                <paper-input id="email" always-float-label label="Email Id" required auto-validate error-message="Enter correct Email Id!" pattern="^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"></paper-input>
                <paper-input id="password" type="password" always-float-label label="Password" required auto-validate error-message="Provide valid details!"></paper-input>
                <mwc-button raised label="Create Your Account" icon="code" trailingIcon on-click="navigateLogin"></mwc-button>
              </form>     
          </div>
        </div>
      </div>
      </div>
      <paper-toast id="toast2" class="fit-bottom" text="Please enter valid details to create account"></paper-toast>
    `;
  }
  //Method to navigate from register page to login page  
  navigateLogin(){
    if(this.$.name.value==""||this.$.phone.value==""||this.$.email.value==""||this.$.password.value==""){
      this.$.toast2.open();
    }else{
      this.set('route.path','/login');
    }
    
  }
}

 //define a custom elements of my-register
window.customElements.define('my-register', Register);
