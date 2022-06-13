"use strict";

function $(params) {

    class ElementControl {

        constructor(params) {

            this.managerSelector = params.manager.slice(1, -1);
            this.managedSelector = params.managed.slice(1, -1);

            this.active = params.active || 'active';

            this.parent = this.getElement(params.parent);
            
            this.manager = this.getElements(params.manager, this.parent);
            this.managed = this.getElements(params.managed, this.parent);


            if (params.debug) {
                console.log(this);
            }
        }
        // @ service methods

        // get element
        getElement(selector, parent = document) {
            let element = parent.querySelector(selector);
            return element;
        }
        // get elements
        getElements(selector, parent = document) {
            let elements = parent.querySelectorAll(selector);
            return elements;
        }

        clear(arr) {
            for (let i = 0; i < arr.length; i++) {
                arr[i].classList.remove(this.active);
            }
        }

        // -- user methods


        // tabs controll
        tabs(event = 'click') {
            
            this.manager.forEach((trigger, index) => {

                trigger.addEventListener(event, () => {
                    // remove active from elements
                    this.clear(this.manager);
                    this.clear(this.managed);

                    // add active for target
                    trigger.classList.add(this.active);
                    this.managed[index].classList.add(this.active);
                });

            });

            return this;
        }

        // pills controll
        pills(func) {
            let activeManager;

            this.manager.forEach(item => {
                if (item.classList.contains(this.active)) {
                    activeManager = item.getAttribute(this.managerSelector);
                }
            });

            if (activeManager === 'all') {
                this.pillsActiveLength = this.managed.length;
                this.managed.forEach(elem => {
                    elem.classList.add(this.active);
                });
            }

            // create action
            this.manager.forEach((trigger, index) => {
                trigger.addEventListener('click', () => {
                    let activeManaged = [];
                    // remove active from items
                    this.clear(this.manager);
                    this.clear(this.managed);
                    // get target attr
                    const triggerAttr = trigger.getAttribute(this.managerSelector);
                    trigger.classList.add(this.active);
                    // set active to managed items
                    this.managed.forEach(elem => {
                        if (elem.getAttribute(this.managedSelector) === triggerAttr) {
                            elem.classList.add(this.active);
                            activeManaged.push(elem);
                        } else if (triggerAttr === 'all') {
                            elem.classList.add(this.active);
                            activeManaged.push(elem);
                        }
                    });
                    // get active length
                    this.pillsActiveLength = activeManaged.length;
                    // custom func
                    func();

                });

            });

            return this;
        }
        
        // send message
        massageInfo(form, massage, event = 'submit') {
            // * get elements from DOM
            this.manager = this.getElement(form, this.parent);
            this.managed = this.getElement(massage, this.parent);

            // * form submit prevent default
            this.manager.addEventListener(event, (e) => {
                e.preventDefault();

                this.managed.classList.add(this.active);
            });
        }
    }

    // -- retrurn element control

    return new ElementControl(params);

}