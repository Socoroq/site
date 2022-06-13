const pill = $({
    debug: true,
    parent: '#page-container',
    manager: '[data-tab-trigger]',
    managed: '[data-tab]'
});

let allItems = pill.parent.querySelectorAll('.all-items');
let activeItems = pill.parent.querySelectorAll('.active-items');

allItems.forEach((item, i) => {
    item.textContent = pill.managed.length;
    activeItems[i].textContent = pill.managed.length;
});

pill.pills(() => {
    activeItems.forEach(item => {
        item.textContent = pill.pillsActiveLength;
    });
});




const tabs = $({
    debug: true,
    parent: '#item-container',
    manager: '[data-color]',
    managed: '[data-tab-image]'
}).tabs();
