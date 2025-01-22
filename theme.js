"use strict";
//
console.log("Ask Ria...");

const insertBefore = (element, htmlString) => element.insertAdjacentHTML("beforebegin", htmlString);
const insertAfter = (element, htmlString) => element.insertAdjacentHTML("afterend", htmlString);
const openNewChat = () => document.getElementById('new-chat-button').click();

document.addEventListener('DOMContentLoaded', function () {
    // Add a delay before simulating the click
    setTimeout(function () {
        let newChatButton = `<div class="MuiBox-root css-0"><button class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1yxmbwk" tabindex="0" type="button" id="custom-new-upload-button"><a href="http://127.0.0.1:5000/"><svg xmlns="http://www.w3.org/2000/svg" width="" height="" viewBox="0 0 512 512" id="upload"><path fill="white" d="M398.1 233.2c0-1.2.2-2.4.2-3.6 0-65-51.8-117.6-115.7-117.6-46.1 0-85.7 27.4-104.3 67-8.1-4.1-17.2-6.5-26.8-6.5-29.5 0-54.1 21.9-58.8 50.5C57.3 235.2 32 269.1 32 309c0 50.2 40.1 91 89.5 91H224v-80h-48.2l80.2-83.7 80.2 83.6H288v80h110.3c45.2 0 81.7-37.5 81.7-83.4 0-45.9-36.7-83.2-81.9-83.3z"></path></svg> Upload</a></button></div>`;
        insertAfter(document.querySelector('.css-14k6mw7 img'), newChatButton);

    }, 1000);

    const parentElement = document.body; // Replace with a more specific container if possible

    parentElement.addEventListener("click", function (event) {
        if (event.target.classList.contains("element-link")) {
            setTimeout(function () {
                // event.preventDefault();
                console.log("A 'source doc' link was clicked:", event.target.textContent);
                const parentElement = document.querySelector("#side-view-content div");
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
    let newChatButton = '<div class="suggestions d-none" id="suggestions"></div>';
    const suggestionsList = [
        "What should we do if a customer doesn't want help in the fitting room?",
        "Who checks the q02. Fitting Room Log and how often?",
        "What if there's no Mall Security to handle suspected shoplifting?",
        "How do we train staff to use recovery phrases without sounding rude?",
        "What happens to personal items left behind if no one claims them?",
        "What steps should associates take if damage to fitting room fixtures is observed?",
        "What are the steps for good house keeping in the fitting rooms?"
    ];
    document.body.addEventListener('input', (event) => {
        if (event.target.id === 'chat-input') {
            if(!document.getElementById("suggestions")){
                console.log(document.getElementById("suggestions"));
                insertAfter(document.querySelector('#chat-input'), newChatButton);
            }
            const searchBox = document.getElementById('chat-input');
            const suggestionsContainer = document.getElementById('suggestions');
            console.log("hereee");
            const query = searchBox.value.toLowerCase();
            suggestionsContainer.innerHTML = '';

            if (query) {
                const filteredSuggestions = suggestionsList.filter(item =>
                item.toLowerCase().includes(query)
                );

                if (filteredSuggestions.length > 0) {
                    suggestionsContainer.classList.remove('d-none');
                } else {
                    suggestionsContainer.classList.add('d-none');
                }

                filteredSuggestions.forEach(suggestion => {
                const suggestionItem = document.createElement('div');
                suggestionItem.classList.add('suggestion-item');

                // Highlight the matched portion
                const startIndex = suggestion.toLowerCase().indexOf(query);
                const endIndex = startIndex + query.length;

                const highlightedText = `${suggestion.slice(0, startIndex)}<span class="highlight">${suggestion.slice(startIndex, endIndex)}</span>${suggestion.slice(endIndex)}`;

                suggestionItem.innerHTML = highlightedText.trim();

                // suggestionItem.textContent = suggestion;

                suggestionItem.addEventListener('click', () => {
                    searchBox.value = suggestion;
                    searchBox.dispatchEvent(event);
                    suggestionsContainer.innerHTML = '';
                    suggestionsContainer.classList.add('d-none');
                    var element = document.querySelector('button[class="MuiButtonBase-root MuiIconButton-root MuiIconButton-colorInherit MuiIconButton-sizeMedium css-1deacqj"]');
                    simulateMouseClick(element);
                });

                suggestionsContainer.appendChild(suggestionItem);
                });
            }else{
                suggestionsContainer.classList.add('d-none');
            }
        }
    });

    document.body.addEventListener('click', (event) => {
        if (event.target.id === 'suggestions') {
            const suggestionsContainer = document.getElementById('suggestions');
            if (!event.target.closest('.search-container')) {
                suggestionsContainer.innerHTML = '';
                suggestionsContainer.classList.add('d-none');
            }
        }
    });

    const mouseClickEvents = ['mousedown', 'click', 'mouseup'];
    function simulateMouseClick(element){
        mouseClickEvents.forEach(mouseEventType =>
            element.dispatchEvent(
            new MouseEvent(mouseEventType, {
                view: window,
                bubbles: true,
                cancelable: true,
                buttons: 1
            })
            )
        );
    }
});