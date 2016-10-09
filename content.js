chrome.runtime.onMessage.addListener(function(msg, sender){
  console.log('message received', msg)
  if(msg == "toggle"){
    togglePanel();
  }
  if(msg == "openToast"){
    openToast();
  }
})

var iframe = document.createElement('iframe');
iframe.classList.add("fbc-iframe");
iframe.src = chrome.extension.getURL("panel.html");
document.body.appendChild(iframe);

var toast = generateDOM(toastTemplate())
toast.querySelector('a').onclick = togglePanel
document.body.appendChild(toast);

function togglePanel(){
  if (iframe.style.right == "0px") {
    closePanel()
  } else {
    openPanel()
    closeToast()
  }
}

function closePanel() {
  iframe.style.right = "-450px";
}

function openPanel() {
  iframe.style.right = "0px";
}

function toggleToast() {
  if (toast.style.right == "0px"){
    closeToast()
  } else {
    openToast()
  }
}

function closeToast() {
  toast.style.right = "-200px";
}

function openToast() {
  // Only open the toast if the panel is not already open
  if(iframe.style.right !== "0px") {
    toast.style.right = "0px";
  }
}

function generateDOM(htmlText) {
  var div = document.createElement('div');
  div.innerHTML = htmlText;
  return div.children[0];
}
