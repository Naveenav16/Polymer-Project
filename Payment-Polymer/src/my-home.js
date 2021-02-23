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
import '../node_modules/@polymer/app-layout/app-grid/app-grid-style';
import '@polymer/iron-image/iron-image.js';
import '@material/mwc-textfield';
import '@material/mwc-button';
import '@material/mwc-select';
import '@polymer/paper-dropdown-menu/paper-dropdown-menu.js';
import '@polymer/paper-item/paper-item.js';
import '@polymer/paper-listbox/paper-listbox.js';
import '@material/mwc-icon';

class Home extends PolymerElement {
  static get template() {
    return html`
      
    <style include="app-grid-style">
   
    @import url(http://fonts.googleapis.com/css?family=Raleway:800,700,400);
    @import url(http://fonts.googleapis.com/css?family=Signika:400,600);
        
        :host {
          --app-grid-columns: 5;
          /* 50% the width of the item is equivalent to 2:1 aspect ratio*/
          --app-grid-item-height: 50%;
        }

        ul {
          padding: 0;
          list-style: none;
          
        }

        .items {
          background-color: white;
        }
        paper-input{
          position:relative;
          top:140px;
          width:250px;
        }
        mwc-button{
          position:relative;
          top:160px;
        }
        paper-dropdown-menu{
          position:relative;
          top:140px;
          left:30px;
        }
        ul {
          padding: 0;
          list-style: none;
        }
    
        .item {
          background-image: linear-gradient(#573394,#9b59bd);
          height:700px;
        }
        .item1 {
         
          height:600px;
        }
        h2 {
          font-size: 38px;
          color: #222222;
          font-family: 'Raleway', sans-serif;
          font-weight: normal;
          margin: 0px 0 25px 0;
          text-align: center;
          text-transform: uppercase;
      }
      
      h3 {
          font-family: 'Open Sans', sans-serif;
          font-weight: 600;
          color: #222222;
          font-size: 18px;
          margin: 0 0 5px 0;
      }
      
      h6 {
          font-size: 16px;
          color: #888888;
          font-family: 'Open Sans', sans-serif;
          font-weight: 400;
          text-align: center;
          margin: 0 0 60px 0;
      }
      
      p {
          line-height: 24px;
          margin: 0;
      }
      a.read_more, a.read_more2 {
        font-family: 'Raleway', sans-serif;
        display: block;
        font-size: 16px;
        width: 178px;
        height: 46px;
        line-height: 46px;
        border-radius: 3px;
        text-align: center;
        text-transform: uppercase;
        font-weight: 600;
        transition: all 0.2s ease-in-out;
        -moz-transition: all 0.2s ease-in-out;
        -webkit-transition: all 0.2s ease-in-out;
        background: transparent;
        color: #fff;
        border: 1px solid #fff;
      margin:0 auto;
    }
    a.read_more{
       color: #3C3C3C;
       border: 1px solid #3C3C3C;
    }
    a.read_more2:hover, a.read_more:hover {
        background: #fff;
        color: #0593F9;
        border: 1px solid #fff;
    }
    a.read_more:hover {
        background: #fff;
        color: #ED5441;
        border: 1px solid #ED5441;
    }
    .itemalign{
      position:relative;
      top:200px;
    }
    .mytabs {
      display: flex;
      flex-wrap: wrap;
      max-width: 1500px;
      margin: 50px auto;
      padding: 25px;
    }
    .tab{
      height: 800px;
    }
    .mytabs input[type="radio"] {
      display: none;
    }
    .mytabs label {
      padding: 25px;
      background: #e2e2e2;
      font-weight: bold;
    }
    
    .mytabs .tab {
      width: 100%;
      padding: 20px;
      background: #fff;
      order: 1;
      display: none;
    }
    .mytabs .tab h2 {
      font-size: 3em;
    }
    
    .mytabs input[type='radio']:checked + label + .tab {
      display: block;
    }
    
    .mytabs input[type="radio"]:checked + label {
      background: #fff;
    }
    iron-image {
      width: 200px;
      height: 280px;
      position:relative;
      top:30px;
    
    }
    .dthimage{
      width: 260px;
      height: 300px;
      position:relative;
      top:30px;
    }
    .footer_wrapper {
      background: #232323;
  }
  
  .footer_bottom {
      border-top: 1px solid #3C3A3A;
      padding: 25px 0;
  }
  
  .footer_bottom span {
      display: block;
      font-size: 14px;
      color: #cccccc;
      text-align: center;
  }
  
  .footer_bottom span a {
      display: inline-block;
      color: #CE1139;
      font-size: 16px;
      transition: all 0.3s ease-in-out;
      -moz-transition: all 0.3s ease-in-out;
      -webkit-transition: all 0.3s ease-in-out;
  }
  
  .footer_bottom span a:hover {
      color: #fff;
  }
  #customers {
    font-family: Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 1200px;
    position:relative;
    top:240px;
    left:150px;
  }
  
  #customers td, #customers th {
    border: 1px solid #ddd;
    padding: 15px;
  }
  
  #customers tr:nth-child(even){background-color: #f2f2f2;}
  
  #customers tr:hover {background-color: #ddd;}
  
  #customers th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #9b59bd;
    color: white;
  }
  mwc-button{
    --mdc-theme-primary: #e9437a;
    --mdc-theme-on-primary: white;
  }
  .fancy {
    color:  #e9437a;
    --mdc-icon-size: 39px;
    position:relative;
    top:10px;
    left:10px;
  }
  @media only screen and (max-device-width: 480px) {
    iron-image{
      width:150px;
      height:150px;
      margin-right:250px;
      position:relative;
      left:50px;
    }
    .item{
      overflow-x:hidden;
    }
    .mytabs{
      overflow-x:hidden;
    }
    table {
     display:none;
    }
    
    .items{
      width:500px;
      margin-right:200px;
      margin-top:50px;
    }
    .newitem{
      width:500px;
      
    }
    .inputitem{
      width:100px !important;
    }
    .dthimage{
      width:100px;
      height:100px;
      margin-right:250px;
    }
    .head{
      display:none;
    }
    .trail{
      position:relative;
      left:150px;
    }
    .li.items{
      display:none;
    }
    .app-grid[has-aspect-ratio] > *::before {
      display:block;
      padding-top: var(--app-grid-item-height, 100%);
      content:none;
  }
  @media only screen and (min-device-width: 950px) {
    iron-image{
      width:50px;
      height:50px;
      margin-right:250px;
      position:relative;
      left:50px;
    }
    .item{
      overflow-x:hidden;
    }
    .mytabs{
      overflow-x:hidden;
    }
    table {
     display:none;
    }
    
    .items{
      width:500px;
      margin-right:200px;
      margin-top:50px;
    }
    .newitem{
      width:300px;
      position:relative;
    }
    .dthimage{
      width:100px;
      height:100px;
      margin-right:250px;
    }
    .head{
      display:none;
    }
    .trail{
      position:relative;
      left:150px;
    }
    .li.items{
      display:none;
    }
    .app-grid[has-aspect-ratio] > *::before {
      display:block;
      padding-top: var(--app-grid-item-height, 100%);
      content:none;

   
  }
      </style>
      <app-location route="{{route}}" url-space-regex="^[[rootPath]]">
        </app-location>
    
        <app-route route="{{route}}" pattern="[[rootPath]]:page" data="{{routeData}}" tail="{{subroute}}">
        </app-route>
     <div class="item" id="section1">
     <mwc-button raised label="Log out" on-click="navigateLogin" style="float:right; position:relative;top:40px;right:260px;"></mwc-button>
     <div class="itemalign">
     <h1 class="head"><span style=" font-family: 'Audiowide', cursive; font-weight: 600;color: #eb3922;font-size:50px; position:absolute;bottom:320px; left:100px">ePay</span></h1>

     <h2 style="margin-left:80px;font-family: 'Reggae One', cursive; font-weight: bold;">Welcome To epay<br><br><span style="color:yellow;"><strong>epay, A One Stop Solution for all your Bill Payment needs</strong></span></h2>
                
                    <div class="underline">       
                  <a class="read_more2" on-click="scrollDown">Recharge Now</a>
                  </div>      
      </div>
      </div>
      <h1><span style=" font-family: 'Audiowide', cursive; font-weight: 600;color: #eb3922;font-size:50px; position:relative;left:100px">ePay</span></h1>
      <div class="mytabs" id="section2">
 
      <input type="radio" id="tabfree" name="mytabs" checked="checked">
      <label for="tabfree" style="margin-right:20px;">MOBILE <mwc-icon class="fancy">mobile_screen_share</mwc-icon></label>
      <div class="tab">
        <h2> MOBILE RECHARGE</h2>

        <ul class="app-grid" has-aspect-ratio>
        <li class="items">
          <div>    
          <iron-image sizing="cover" preload src="../images/manifest/mobile-recharge.png"></iron-image>
          </div>
        </li>
        <li class="items">
        <div class="newitem inputitem">
        <paper-input label="Enter Mobile Number" value="{{id}}" required auto-validate pattern="[0-9]*" error-message="Enter Correct Mobile Number!" char-counter maxlength="10"></paper-input>
        </br></br></div>
         
        </li>
        <li class="items">
        <div class="newitem">
        <paper-dropdown-menu label="Network Operator" value="{{serviceProvider}}">
        <paper-listbox slot="dropdown-content" class="dropdown-content">
          <paper-item>Jio</paper-item>
          <paper-item>Airtel</paper-item>
          <paper-item>BSNL</paper-item>
        </paper-listbox>
      </paper-dropdown-menu>
        </div>
        </li>

        <li class="items">
          <div class="newitem">
          <paper-dropdown-menu label="Plan Amount" value="{{amount}}">
          <paper-listbox slot="dropdown-content" class="dropdown-content">
            <paper-item>Rs 399</paper-item>
            <paper-item>Rs 299</paper-item>
            <paper-item>Rs 599</paper-item>
          </paper-listbox>
        </paper-dropdown-menu>
        </li>
        <li class="items">
          <div class="newitem">
           <mwc-button class="trail" raised label="Recharge" icon="input" trailingIcon on-click="navigatePayment"></mwc-button>
           </br></br></div>
        </li>
        </ul>
        <div id="plantable">
        
        <table id="customers">
        <tr>
          <th>Network Operator</th>
          <th>Description</th>
          <th>Amount</th>
          <th>Validity</th>
        </tr>
        <tr>
          <td>Jio</td>
          <td>1.5Gb/day Unlimited Voice</td>
          <td>Rs 399</td>
          <td>84 days</td>
        </tr>
        <tr>
          <td>Airtel</td>
          <td>1Gb/day Unlimited Voice</td>
          <td>Rs 299</td>
          <td>56 days</td>
        </tr>
        <tr>
        <td>BSNL</td>
        <td>2Gb/day Unlimited Voice</td>
        <td>Rs 599</td>
        <td>84 days</td>
        </tr>
        
        </table>               
              </div> 
      </div>
    
      <input type="radio" id="tabsilver" name="mytabs">
      <label for="tabsilver" style="margin-right:100px;"><span style="margin-top:30px;">DTH</span> <mwc-icon class="fancy">live_tv</mwc-icon></label>
      <div class="tab">
      <h2> DTH RECHARGE</h2>

      <ul class="app-grid" has-aspect-ratio>
      <li class="items">
        <div>    
        <iron-image sizing="cover" class="dthimage" preload src="../images/manifest/antena-1482233-1255189.png"></iron-image>
        </div>
      </li>
      <li class="items">
      <div class="newitem">
      <paper-input label="Enter Smart Card Number"  required auto-validate pattern="[0-9]*" error-message="Enter Correct Smartcard Number!" char-counter maxlength="16"
      value="{{id}}"></paper-input>

      </br></br></div>
       
      </li>
      <li class="items">
      <div class="newitem">
      <paper-dropdown-menu label="DTH Operator" value="{{serviceProvider}}">
      <paper-listbox slot="dropdown-content" required auto-validate class="dropdown-content">
        <paper-item>Sun Direct</paper-item>
        <paper-item>TATA Sky</paper-item>
        <paper-item>Videocon</paper-item>
      </paper-listbox>
    </paper-dropdown-menu>
      </div>
      </li>

      <li class="items">
        <div class="newitem">
        <paper-dropdown-menu label="Amount Plan" value="{{amount}}">
        <paper-listbox slot="dropdown-content" required auto-validate class="dropdown-content">
          <paper-item>Rs199</paper-item>
          <paper-item>Rs 299</paper-item>
          <paper-item>RS 99</paper-item>
        </paper-listbox>
      </paper-dropdown-menu>
      </div>
      </li>
      <li class="items">
        <div class="newitem"> <mwc-button raised label="Recharge" icon="input" trailingIcon on-click="navigateDTHPayment"></mwc-button></br></br></div>
      </li>
      </ul>
      <div id="plantable">
        
<table id="customers">
<tr>
  <th>Network Operator</th>
  <th>Description</th>
  <th>Amount</th>
  <th>Validity</th>
</tr>
<tr>
  <td>Sun Direct</td>
  <td>Tamil Packages</td>
  <td>Rs 199</td>
  <td>1 Month</td>
</tr>
<tr>
  <td>TATA Sky</td>
  <td>Telugu Packages</td>
  <td>Rs 299</td>
  <td>3 Month</td>
</tr>
<tr>
<td>Jio DTH</td>
<td>Sports Packages</td>
<td>Rs 99</td>
<td>6 Month</td>
</tr>

</table>               
      </div> 
      </div>
    
     
    
    </div>
    <footer class="footer_wrapper" id="contact">
  <div class="container">
    <div class="footer_bottom"><span class="display-4">Copyright © 2021 by <a href="#">uniqueHire.com</a>. </span> </div>
  </div>
</footer>
    `;
  }

    //Properties are declared to get the values
  static get properties() {
    return {
      serviceProvider: {
        type: String,
        },
      amount: {
        type: String,
      
      },
      id: {
        type: Number,
       
      },
      serviceData:{
        type:Object,
        value:{},
        notify:true
      }
    };
  }

  //Method to navigate from Home page to payment page
  navigatePayment(){
    this.serviceData={
      "service": "dth",
      "provider": this.serviceProvider,
      "id": this.id,
      "amount": this.amount
    }
    this.set('route.path','/mobilepayment');
  }
  //scroll method is used to scroll down particular pages
  scrollDown(){
    window.scroll({
      top: 2000, 
      left: 0, 
      behavior: 'smooth'
    });
  }
   //Method to navigate from Home page to dthpayment page
  navigateDTHPayment(){
    //getting value from user and assigning it in serviceData property
    this.serviceData={
      "service": "dth",
      "provider": this.serviceProvider,
      "id": this.id,
      "amount": this.amount
    }
    this.set('route.path','/dthpayment');
  }
   //Method to navigate from Home page to Login page
  navigateLogin(){
    this.set('route.path','login');
  }

}
 //define a custom elements of my-home
window.customElements.define('my-home', Home);
