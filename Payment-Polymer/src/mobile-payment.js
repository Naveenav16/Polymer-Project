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
import '@polymer/paper-dropdown-menu/paper-dropdown-menu.js';
import '@polymer/paper-item/paper-item.js';
import '@polymer/paper-listbox/paper-listbox.js';
import '@polymer/neon-animation/neon-animations.js';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import '@polymer/paper-toast/paper-toast.js';
import '@polymer/paper-radio-button/paper-radio-button.js';
import '@polymer/paper-radio-group/paper-radio-group.js';
import '@material/mwc-button';
class Mobile extends PolymerElement {
  static get template() {
    return html`
    <app-location route="{{route}}" url-space-regex="^[[rootPath]]">
    </app-location>

    <app-route route="{{route}}" pattern="[[rootPath]]:page" data="{{routeData}}" tail="{{subroute}}">
    </app-route>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">                                                                                                                               
      <style include="shared-styles">
        @import url('https://fonts.googleapis.com/css?family=Poppins:400,500,600,700&display=swap');
        .body{
          background-image:linear-gradient(#573394,#9b59bd,#573394);
          margin: 0; height: 970px; overflow: hidden;
         }
        .wrap{
            font-size: 18px;
            margin-top: 25px;
            font-family: 'Noto Sans JP', sans-serif;
            font-weight: 700;
        }
        .pay{
            font-family: 'Noto Sans JP', sans-serif;
        }
        
        .wrapper{
          position:relative;
          left:650px;
          top:135px;
          width: 580px;
          background: #fff;
          border-radius: 15px;
          box-shadow: 0px 15px 20px rgba(0,0,0,0.1);
        }
        .wrapper .title{
          font-size: 35px;
          font-weight: 600;
          text-align: center;
          line-height: 100px;
          color: #fff;
          user-select: none;
          border-radius: 15px 15px 0 0;
          background: linear-gradient(-135deg, #c850c0, #4158d0);
        }
        .wrapper form{
          padding: 10px 30px 50px 30px;
        }
        .wrapper form .field{
          height: 50px;
          width: 100%;
          margin-top: 20px;
          position: relative;
        }
        .wrapper form .field input{
          height: 100%;
          width: 100%;
          outline: none;
          font-size: 17px;
          padding-left: 20px;
          border: 1px solid lightgrey;
          border-radius: 25px;
          transition: all 0.3s ease;
        }
        .wrapper form .field input:focus,
        form .field input:valid{
          border-color: #4158d0;
        }
        .wrapper form .field label{
          position: absolute;
          top: 50%;
          left: 20px;
          color: #999999;
          font-weight: 400;
          font-size: 17px;
          pointer-events: none;
          transform: translateY(-50%);
          transition: all 0.3s ease;
        }
        form .field input:focus ~ label,
        form .field input:valid ~ label{
          top: 0%;
          font-size: 16px;
          color: #4158d0;
          background: #fff;
          transform: translateY(-50%);
        }
        .payment{
          margin-left: 100px;
        }
        .mobile{
          margin-left: 98px;
           font-weight:400;
        }
        .operator{
          margin-left: 160px;
          font-weight:400;
        }
        .plan{
          margin-left: 125px;
          font-weight:400;
        }
        .hrline{
          width:100%;text-align:left;margin-left:0;margin-top: 50px;
        }
        @media only screen and (max-device-width: 480px) {
          .wrapper{
            position:relative;
            left:50px;
            top:135px;
            width: 280px;
            background: #fff;
            border-radius: 15px;
            box-shadow: 0px 15px 20px rgba(0,0,0,0.1);
          }
          .payment{
            position:relative;
            right:50px;
          }
          h4{
            font-size:10px;
            margin-left:50px;
          }
        }
      </style>
      <div class="body">
      <div class="wrapper">
      <div class="title">Payment Options</div>
	<form>

		<div class="wrap">Mobile Number :<span class="mobile" >{{serviceData.id}}</span></div>
		<div class="wrap">Operator:<span class="operator">{{serviceData.provider}}</span></div>
		<div class="wrap">Plan Amount:<span class="plan">{{serviceData.amount}}</span></div>
		<hr class="hrline">	

		<h4 class="pay" class="payment">Choose the Payment Options</h4>
      

<paper-radio-group selected="b" aria-labelledby="label2"><br>
  <paper-radio-button name="a">Net Banking</paper-radio-button><br>
  <paper-radio-button name="b">Debit Card</paper-radio-button><br>
  <paper-radio-button name="d">Google Pay</paper-radio-button><br>
  <mwc-button raised label="Proceed Payment" icon="input" trailingIcon on-click="navigateSuccess"></mwc-button>
</paper-radio-group>

</form>
</div>
        </div>
      </div>
      </div>
     
    `;
  }

  //Method to navigate from mobilepayment page to success
  navigateSuccess(){
    this.set('route.path','/success');
  }

  //property of serviceData with object type
  static get properties() {
    return {
      serviceData:{
        type:Object,
        value:{},
        notify:true
      }
    };
  }
}

 //define a custom elements of mobile-payment
window.customElements.define('mobile-payment', Mobile);
