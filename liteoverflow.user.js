// ==UserScript==
// @description             remove all unrelated elements of stackoverflow
// @name                    liteoverflow
// @namespace               https://github.com/kevin335200/liteoverflow
// @version                 1.0
// @grant                   none
// @include                 http*://stackoverflow.com/*
// @author                  kevin335200
// @run-at document-end
// ==/UserScript==

// CSS Wide Screen
function addGlobalStyle(css) {
  var head, style;
  head = document.getElementsByTagName("head")[0];
  if (!head) {
    return;
  }
  style = document.createElement("style");
  style.type = "text/css";
  style.innerHTML = css;
  head.appendChild(style);
}

addGlobalStyle("#mainbar, .mainbar{width: calc(100%) ! important;}");
addGlobalStyle(
  "#content{max-width: 2000px ! important; width: calc(100%) ! important;}"
);

function turnoff_class(className) {
  let ele = document.getElementsByClassName(className);

  while (ele[0]) {
    ele[0].parentNode.removeChild(ele[0]);
  }
}

function turnoff_id(id) {
  let ele = document.getElementById(id);
  ele.parentNode.removeChild(ele);
}

async function hide_query(query) {
  let ele = document.querySelector(query);
  while (ele[0]) {
    ele[0].parentNode.removeChild(ele[0]);
  }
}

function hide_class(className) {
  let ele = document.getElementsByClassName(className);
  let n = ele.length;

  for (var i = 0; i < n; i++) {
    ele[i].style.display = "none";
  }
}

// "Products" Button
turnoff_class("list-reset grid gs4");
turnoff_class("-marketing-link js-gps-track js-products-menu");

// Left Sidebar
turnoff_class("left-sidebar");

turnoff_class("module sidebar-related");

// Feed
turnoff_class("js-feed-link");

// User Infos (edited time, gravatar, etc)
// turnoff_class("user-action-time");
// turnoff_class("user-gravatar32");

// Edit Button
turnoff_class("s-btn s-btn__link js-error-click js-gps-track");
turnoff_class("js-suggest-edit-post js-gps-track");

// Follow Button
turnoff_class(
  "s-btn s-btn__link js-follow-post js-follow-question js-gps-track"
);
turnoff_class("s-btn s-btn__link js-follow-post js-follow-answer js-gps-track");

// Comment Button
turnoff_class("js-add-link comments-link disabled-link");

// Vote Button
turnoff_class("js-vote-up-btn grid--cell s-btn s-btn__unset c-pointer");
turnoff_class("js-vote-down-btn grid--cell s-btn s-btn__unset c-pointer");

// Ask Button
turnoff_class("ws-nowrap s-btn s-btn__primary");

// The Overflow Blog
turnoff_class("s-sidebarwidget__yellow");

// Linked Questions
turnoff_class("sidebar-linked");

// Bottom Notice
turnoff_class("bottom-notice");

// Footer
turnoff_class("site-footer js-footer");

// Hot Questions
turnoff_id("hot-network-questions");

// Love This Site
turnoff_class("s-sidebarwidget--header");

// Newspaper
turnoff_class("s-sidebarwidget--content d-block");

// Chat Room
turnoff_class(
  "s-sidebarwidget--content s-sidebarwidget__items js-chat-ad-rooms"
);

// Markdown Editor
hide_class("post-form");
hide_class("no-answers");
