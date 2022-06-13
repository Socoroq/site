function scroll(id, active = 'active') {
    
    // get element from dom
    const element = document.getElementById(id);

    // get client rect Y from document element 
    let y = document.documentElement.getBoundingClientRect().y * -1;

    // add event listener
    window.addEventListener('scroll', () => {
        // update Y
        y = document.documentElement.getBoundingClientRect().y * -1;
        
        if (y > 0) {
            if (!element.classList.contains(active)) {
                element.classList.add(active);
            }
        } else if (y == 0) {
            if (element.classList.contains(active)) {
                element.classList.remove(active);
            }
        }

    });

}

scroll('header');