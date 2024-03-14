document.addEventListener('click', function(event) {
    var element = event.target;

    if (element.id === "toggler" && element.dataset.hasOwnProperty('kuiToggleId')) {
        // Get the target element which has the same content as the data-kui-toggle-id attribute and is named data-kui-toggle-target-id
        var element_id = element.dataset.kuiToggleId;
        var element_group = element.dataset.kuiToggleGroup;
        // Get the target element which has the same content as the data-kui-toggle-target-id attribute
        var target_id = document.getElementById(element_id).dataset.kuiToggleTargetId;
        var target = document.getElementById(target_id);

        console.log("Element group: " + element_group);
        console.log("Element id: " + element_id);
        console.log("Target id: " + target_id);
        console.log("Target: " + target);

        
        // Check if element has a data-kui-toggle-group attribute, if it does, get all elements with the same attribute and hide their targets
        if (element_group) {
            var elements = document.querySelectorAll('[data-kui-toggle-group="' + element_group + '"]');
            elements.forEach(function(element) {
                var target_id = element.dataset.kuiToggleTarget;
                var target = document.getElementById(target_id);
                target.classList.add('visually-hidden');
                target.classList.remove('visually-shown');
            });
        }

        // Check if the target element is hidden or shown
        if (target.classList.contains('visually-hidden')) {
            target.classList.remove('visually-hidden');
            target.classList.add('visually-shown');
        } else {
            target.classList.add('visually-hidden');
            target.classList.remove('visually-shown');
        }
    }
});