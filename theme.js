"use strict";
//
console.log("Ask Ria...");

const insertBefore = (element, htmlString) => element.insertAdjacentHTML("beforebegin", htmlString);
const insertAfter = (element, htmlString) => element.insertAdjacentHTML("afterend", htmlString);
const openNewChat = () => document.getElementById('new-chat-button').click();

document.addEventListener('DOMContentLoaded', function () {
    // Add a delay before simulating the click
    setTimeout(function () {
        let newChatButton = '<div class="MuiBox-root css-0"><button class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1yxmbwk" tabindex="0" type="button" id="custom-new-chat-button"><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vz303y" focusable="false" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.375 2.625a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4Z"></path></svg> <span class="MuiTouchRipple-root css-w0pj6f"></span></button></div>';
        // insertBefore(document.querySelector('.css-oa138a'), newChatButton);

        //        debugger;
        // const chatInput = document.querySelector('#chat-input');
        // if (chatInput) {
        //     const chatInputWrapper = chatInput.closest('.MuiTextField-root');
        //     if (chatInputWrapper) {
        //         chatInputWrapper.classList.add('chat-input-wrapper');
        //     }
        // }

    }, 1000);

    const parentElement = document.body; // Replace with a more specific container if possible

    parentElement.addEventListener("click", function (event) {
        if (event.target.classList.contains("element-link")) {
            setTimeout(function () {
                // event.preventDefault();
                console.log("A 'source doc' link was clicked:", event.target.textContent);
                const parentElement = document.querySelector("#side-view-content .markdown-body");
                // Append the iframe as HTML
                if (parentElement) {
                    let html_content = parentElement.textContent
                    parentElement.innerHTML = html_content
                    document.querySelectorAll('#side-view-content .markdown-body')[0].className = document.querySelectorAll('#side-view-content .markdown-body')[0].className + "show" 
                } else {
                    console.error("Parent element not found!");
                }
            }, 1000);
        }
    });
});
