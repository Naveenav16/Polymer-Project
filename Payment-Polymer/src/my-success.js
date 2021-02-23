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
import {NeonAnimatableBehavior} from '@polymer/neon-animation/neon-animatable-behavior.js';
import {mixinBehaviors} from '@polymer/polymer/lib/legacy/class.js';
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

class Success extends mixinBehaviors([NeonAnimatableBehavior], PolymerElement) { 
  static get template() {
    return html`
    <app-location route="{{route}}" url-space-regex="^[[rootPath]]">
    </app-location>

    <app-route route="{{route}}" pattern="[[rootPath]]:page" data="{{routeData}}" tail="{{subroute}}">
    </app-route>

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
          height:500px;
          background: #fff;
          border-radius: 15px;
          box-shadow: 0px 15px 20px rgba(0,0,0,0.1);
          margin-left:60px;
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

          i {
            color: #9ABC66;
            font-size: 100px;
            line-height: 200px;
            margin-left:-15px;
          }
        
          .check{
              width:150px;
              height:150px;
              position:relative;
              left:200px;
              top:100px;
          }
          mwc-button{
              margin-left:135px;
          }
          .card{
              position:relative;
              top:80px;
          }
      </style>
      <div class="body">
      <div class="wrapper">

      <div class="card">
   
      <h1 style="margin-left:55px; font-family: 'Akaya Kanadaka', cursive; font-size:35px;">Successfully Recharged</h1> 
      <p style="margin-left:140px;">Thank you choosing us!</p>
      <mwc-button raised label="Go To Homepage" icon="home" trailingIcon on-click="navigateHome"></mwc-button>
     
     </div>
     <img class="check" src="../images/manifest/check.gif">	
    

</div>
        </div>
      </div>
    
      </div>
     
    `;
  }
  
  static get properties() {
    return {
      serviceData:{
        type:Object,
        value:{},
        notify:true
      }
    };
  }

   //Method to navigate from success page to home page
  navigateHome(){
    this.set('route.path','home');
  }
}

 //define a custom elements of my-success
window.customElements.define('my-success', Success);


