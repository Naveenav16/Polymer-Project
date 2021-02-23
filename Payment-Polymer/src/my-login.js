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
import '@material/mwc-textfield';
import '@material/mwc-button';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import '@polymer/paper-toast/paper-toast.js';

class Login extends PolymerElement {
  static get template() {
    return html`
 
      <style include="shared-styles">
      .main-login-page{
        position: relative;
        height: 100vh;
        overflow-x:hidden;
    }   #toast2 {
      --paper-toast-background-color: red;
      --paper-toast-color: white;
    }
    
    .main-login-page::before{
        content: '';
        position: absolute;
        top: 0;
        left: -60px;
        border-radius: 0px 0px 150px 0px;
        bottom: 0;
        width: 65%;
        min-height: 100vh;
        transform: skew(8deg,0deg);
        background-image: linear-gradient(#573394,#9b59bd);
    }
    
    .main-login-page .login-img img{
        width: 700px;
        height: 700px;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 140px;
        border-radius: 50px;
    }
    .main-login-page .user{
        height: 120px;
        margin: 0 auto;
        width: 120px;
    }
    .main-user-icon{
        width: 110px;
        background: rebeccapurple;
        text-align: center;
        display: flex;
        align-items: center;
        height: 110px;
        margin: 0 auto ;
        border-radius: 50%;
        margin-bottom: 25px;
    }
    
    .main-login-page .custom-input{
        position: relative;
        padding-left: 20px !important;
        height: 45px !important;
        background: #fff;
        box-shadow: 1px 1px 5px #cacaca;
        border-radius: 20px !important;
        width: 80%;
        margin: 0 auto;
    }
    
    .main-login-page .submit-btn{
        height: 40px;
        width: 190px;
        background-color: #5e3798;
        display: flex;
        justify-content: center;
        margin: 0 auto;
        align-items: center;
        border-radius: 20px;
        color: #fff;
        margin-top: 30px;
        background-image:linear-gradient(#573394,#9b59bd);
        border: none;
    }
    .right{
      position: relative;
      left: 1400px;
      top: 350px;
  }
  @media only screen and (max-width: 1280px) {
    .main-login-page .login-img img{
      width: 200px;
      height: 200px;
      position: absolute;
      border-radius: 50px;
      bottom:20px;
      left:0px;
  }
  .right{
      position: absolute;
      display: block;
      left: 220px;
      top:50px;
      width:10px;
      height:30px;
  }
  .head{
    font-size: 25px !important;
  }
  .mybutton{
    position:relative;
    left:10px;
  }
  mwc-textfield{
    width:350px !important;
    position:relative;
    right:30px;
  }
  .main-login-page::before{
    background-image:none;
  }
}
@media only screen and (max-width: 580px) {
  .main-login-page .login-img img{
   display:none;
}
.right{
    position: absolute;
    display: block;
    left: 220px;
    top:50px;
    width:10px;
    height:30px;
}
mwc-button{
  position:relative;
  right:120px;
}
mwc-textfield{
  width:250px !important;
  position:relative;
  right:180px;
}

      </style>

      <app-location route="{{route}}" url-space-regex="^[[rootPath]]">
      </app-location>

      <app-route route="{{route}}" pattern="[[rootPath]]:page" data="{{routeData}}" tail="{{subroute}}">
      </app-route>

      <section class="main-login-page d-flex align-items-center">
      <div class="login-img d-lg-block d-none">
          <img src="https://res.cloudinary.com/mhmd/image/upload/v1569543678/form_d9sh6m.svg" alt="">
       </div>
       <div class="right">
       
       <h1 class="head" style="font-family: 'Audiowide', cursive; font-size: 45px; position:relative;right:50px">Welcome to <span style=" font-family: 'Audiowide', cursive; font-weight: 600;color: #eb3922;">ePay</span></h1>
       </br>
       <div class="mybutton">
       <mwc-textfield outlined  id="name" label="Username" icon="face"></mwc-textfield></br></br>
       <mwc-textfield outlined type="password" id="password" label="Password" icon="vpn_key"></mwc-textfield></br></br>
       <mwc-button raised label="Sign in" icon="input" trailingIcon on-click="navigateHome"></mwc-button></br></br>
       </div>
       <h3><span class="head"></span>Don't have an account? <mwc-button dense unelevated label="Sign up" on-click="navigateReg"></mwc-button></h3>
       <paper-toast id="toast2" class="fit-bottom" text="Invalid Username"></paper-toast>
      </div>
   
  </section>
    `;
  }

  //Method for navigation to register page 
  navigateReg(){
    this.set('route.path','/register');
  }

   //Method for navigation to register page and checking user creditenals
  navigateHome(){
    if(this.$.name.value=="Naveen"||this.$.password.value=="naveen123"){
      this.set('route.path','/home');
    }else{
      //using paper toast to notify the error message
      this.$.toast2.open();
    }
    
  }
  }
 //define a custom elements of my-login
window.customElements.define('my-login', Login);
