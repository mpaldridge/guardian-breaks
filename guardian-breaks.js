// ==UserScript==
// @name         Guardian Line Spacing
// @namespace    http://mpaldridge.github.io/
// @version      1.1
// @description  Restore older, more generous line-spacing on The Guardian website
// @author       Matthew Aldridge (with ChatGPT)
// @match        https://www.theguardian.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var styleElement = document.createElement('style');
    styleElement.innerHTML = `
        .dcr-1kas69x {
            margin-bottom: 16px;
            line-height: 1.5;
        }
        
        .dcr-rysp4a {
            margin-bottom: 16px;
            line-height: 1.5;
        }
        
        .dcr-19m3vvb {
            margin-bottom: 16px;
            line-height: 1.5;
        }

        .dcr-1dpfw7k {
            margin-bottom: 16px;
            line-height: 1.5;
        }

        .dcr-1jv7e0x {
            margin-bottom: 16px;
            line-height: 1.5;
        }
        
        .dcr-1e7c919 {
            margin-bottom: 16px;
            line-height: 1.5;
        }
      
        .dcr-kqfskd {
          margin-bottom: 16px;
          line-height: 1.5;
        }
        
        .dcr-w4gb5w {
          margin-bottom: 16px;
          line-height: 1.5;
        }
        
        .dcr-1o4ui9s {
          margin-bottom: 16px;
          line-height: 1.5;
        }
        
        .dcr-16cx0op {
          margin-bottom: 16px;
          line-height: 1.5;
        }
        
        .dcr-1lpi6p1 {
          margin-bottom: 16px;
          line-height: 1.5;
        }
        
        .dcr-epamsi {
          margin-bottom: 16px;
          line-height: 1.5;
        }
        
        .dcr-vq85ex {
          margin-bottom: 16px;
          line-height: 1.5;
        }
        
        .dcr-1cmbxtt {
          margin-bottom: 16px;
          line-height: 1.5;
        }
    `;
    document.head.appendChild(styleElement);
})();
