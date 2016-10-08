chrome.runtime.onMessage.addListener(function(msg, sender){
    if(msg == "toggle"){
        toggle();
    }
    if(msg == "toggleToast"){
        toggleToast();
    }
})

var iframe = document.createElement('iframe');
iframe.style.background = "gray";
iframe.style.height = "100%";
iframe.style.width = "0px";
iframe.style.position = "fixed";
iframe.style.top = "0px";
iframe.style.right = "0px";
iframe.style.zIndex = "9000000000000000000";
iframe.frameBorder = "none";
iframe.style.transition = "width 2s";
iframe.src = chrome.extension.getURL("panel.html");
document.body.appendChild(iframe);

var toast = document.createElement('div'); 
toast.style.background = "gray";
toast.style.height = "100px";
toast.style.width = "0px";
toast.style.position = "fixed";
toast.style.bottom = "0px";
toast.style.right = "0px";
toast.style.zIndex = "9000000000000000000";
toast.style.transition = "width 2s";
toast.src = chrome.extension.getURL("toast.html");
document.body.appendChild(toast);

function toggle(){
    if(iframe.style.width == "0px"){
        iframe.style.width="450px";
    }
    else{
        iframe.style.width="0px";
    }
}

function toggleToast(){
    if(iframe.style.width == "0px"){
        iframe.style.width="200px";
    }
    else{
        iframe.style.width="0px";
    }
}
