// ==UserScript==
// @name         Guardian Line Spacing
// @namespace    http://mpaldridge.github.io/
// @version      1.0
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
            word-break: break-word;
            font-family: GuardianTextEgyptian, Guardian Text Egyptian Web, Georgia, serif;
            font-size: 1.0625rem;
            line-height: 1.5;
            font-weight: 400;
            --source-text-decoration-thickness: 2px;
        }
        
        .dcr-rysp4a  {
            margin-bottom: 16px;
            word-break: break-word;
            font-family: GuardianTextEgyptian, Guardian Text Egyptian Web, Georgia, serif;
            font-size: 1.0625rem;
            line-height: 1.5;
            font-weight: 400;
            --source-text-decoration-thickness: 2px;
        }
        
        .dcr-19m3vvb {
            margin-bottom: 16px;
            word-break: break-word;
            font-family: GuardianTextEgyptian, Guardian Text Egyptian Web, Georgia, serif;
            font-size: 1.0625rem;
            line-height: 1.5;
            font-weight: 400;
            --source-text-decoration-thickness: 2px;
        }

        .dcr-1dpfw7k {
            margin-bottom: 16px;
            word-break: break-word;
            font-family: GuardianTextEgyptian, Guardian Text Egyptian Web, Georgia, serif;
            font-size: 1.0625rem;
            line-height: 1.5;
            font-weight: 400;
            --source-text-decoration-thickness: 2px;
        }

        .dcr-1jv7e0x {
            margin-bottom: 16px;
            word-break: break-word;
            font-family: GuardianTextEgyptian, Guardian Text Egyptian Web, Georgia, serif;
            font-size: 1.0625rem;
            line-height: 1.5;
            font-weight: 400;
            --source-text-decoration-thickness: 2px;
        }
    `;
    document.head.appendChild(styleElement);
})();
