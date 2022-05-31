const inputs = document.querySelectorAll('input.input-formul');
        inputs.forEach(input => {
            if (input.value.trim().length != 0 && !input.previousElementSibling.classList.contains('top')) {
                input.previousElementSibling.style.transition='0s';
                input.previousElementSibling.classList.add('top');
            }
            input.onfocus = () => {
                input.previousElementSibling.classList.add('top');
                input.previousElementSibling.classList.add('focus');
            }
            input.onblur = () => {
                if (input.value.trim().length == 0) {
                    input.previousElementSibling.classList.remove('top');
                }
                input.previousElementSibling.classList.remove('focus');
            }
        });