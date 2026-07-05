/**
 * Alternates between light-theme and dark-theme configurations global layout style.
 */
function toggleTheme() {
    const body = document.body;
    if (body.classList.contains('dark-theme')) {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
    } else {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
    }
}

/**
 * Handles switching between different tabs in the portfolio dashboard.
 * @param {Event} event - The click event from the active tab button.
 * @param {string} tabId - The ID of the tab content pane to display.
 */
function switchTab(event, tabId) {
    const tabPanes = document.getElementsByClassName("tab-pane");
    for (let i = 0; i < tabPanes.length; i++) {
        tabPanes[i].classList.remove("active");
    }

    const tabButtons = document.getElementsByClassName("tab-button");
    for (let i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove("active");
    }

    resetExperienceTab();

    const targetPane = document.getElementById(tabId);
    if (targetPane) {
        targetPane.classList.add("active");
    }

    if (event && event.currentTarget) {
        event.currentTarget.classList.add("active");
    }
}

/**
 * Expands the hidden description text inside the timeline item and removes the button.
 * @param {HTMLElement} buttonElement - The clicked "... more" span element.
 */
function expandText(buttonElement) {
    const parentParagraph = buttonElement.parentElement;
    if (parentParagraph) {
        const hiddenSpan = parentParagraph.querySelector('.hidden-text');
        if (hiddenSpan) {
            hiddenSpan.style.display = 'inline';
            buttonElement.style.display = 'none';
        }
    }
}

/**
 * Resets all text descriptions inside the experience timeline back to collapsed state.
 */
function resetExperienceTab() {
    const hiddenSpans = document.querySelectorAll('#experience .hidden-text');
    hiddenSpans.forEach(span => {
        span.style.display = 'none';
    });

    const moreButtons = document.querySelectorAll('#experience .more-btn');
    moreButtons.forEach(button => {
        button.style.display = 'inline-block';
    });
}
