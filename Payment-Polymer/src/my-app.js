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
import { setPassiveTouchGestures, setRootPath } from '@polymer/polymer/lib/utils/settings.js';
import '@polymer/app-layout/app-drawer/app-drawer.js';
import '@polymer/app-layout/app-drawer-layout/app-drawer-layout.js';
import '@polymer/app-layout/app-header/app-header.js';
import '@polymer/app-layout/app-header-layout/app-header-layout.js';
import '@polymer/app-layout/app-scroll-effects/app-scroll-effects.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import '@polymer/iron-pages/iron-pages.js';
import '@polymer/iron-selector/iron-selector.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import './my-icons.js';


// Gesture events like tap and track generated from touch will not be
// preventable, allowing for better scrolling performance.
setPassiveTouchGestures(true);

// Set Polymer's root path to the same value we passed to our service worker
// in `index.html`.
setRootPath(MyAppGlobals.rootPath);

class MyApp extends PolymerElement {
  static get template() {
    return html`
   

      <app-location route="{{route}}" url-space-regex="^[[rootPath]]">
      </app-location>

      <app-route route="{{route}}" pattern="[[rootPath]]:page" data="{{routeData}}" tail="{{subroute}}">
      </app-route>


        <!-- Drawer content -->

          <iron-selector selected="[[page]]" attr-for-selected="name" class="drawer-list" role="navigation">
            <a name="login" href="[[rootPath]]login"></a>
            <a name="register" href="[[rootPath]]register"></a>
            <a name="home" href="[[rootPath]]home"></a>
            <a name="mobilepayment" href="[[rootPath]]mobilepayment"></a>
            <a name="dthpayment" href="[[rootPath]]dthpayment"></a>
            <a name="success" href="[[rootPath]]success"></a>
          </iron-selector>

          <iron-pages selected="[[page]]" attr-for-selected="name" role="main">
            <my-login name="login"></my-login>
            <my-register name="register"></my-register>
            <my-home service-data="{{serviceData}}" name="home"></my-home>
            <mobile-payment service-data="{{serviceData}}" name="mobilepayment"></mobile-payment>
            <dth-payment service-data="{{serviceData}}" name="dthpayment"></dth-payment>
            <my-success name="success"></my-success>
            <my-view404 name="view404"></my-view404>
          </iron-pages>

    `;
  }

  static get properties() {
    return {
      page: {
        type: String,
        reflectToAttribute: true,
        observer: '_pageChanged'
      },
      routeData: Object,
      subroute: Object,
      //property of serviceData with type object
      serviceData:{
        type:Object,
        value:{}
      }
    };
  }

  static get observers() {
    return [
      '_routePageChanged(routeData.page)'
    ];
  }

  _routePageChanged(page) {
     // Show the corresponding page according to the route.
     //
     // If no page was found in the route data, page will be an empty string.
     // Show 'view1' in that case. And if the page doesn't exist, show 'view404'.
    if (!page) {
      this.page = 'login';
    } else if (['login', 'register', 'home','mobilepayment','dthpayment','success'].indexOf(page) !== -1) {
      this.page = page;
    } else {
      this.page = 'view404';
    }

    
  }

  _pageChanged(page) {
    // Import the page component on demand.
    //
    // Note: `polymer build` doesn't like string concatenation in the import
    // statement, so break it up.
    switch (page) {
      case 'login':
        import('./my-login.js');
        break;
      case 'register':
        import('./my-register.js');
        break;
      case 'home':
        import('./my-home.js');
        break;
      case 'mobilepayment':
        import('./mobile-payment.js');
        break;
      case 'dthpayment':
        import('./dth-payment.js');
        break;
        case 'success':
          import('./my-success.js');
          break;
      case 'view404':
        import('./my-view404.js');
        break;
    }
  }
}
 //define a custom elements of my-app
window.customElements.define('my-app', MyApp);
