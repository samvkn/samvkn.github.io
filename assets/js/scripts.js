const DOM = {
    setHeight(HTMLelement, separator) {

        let margin = document.getElementById(HTMLelement).offsetHeight / 2;

        const line = document.getElementById(separator);

        line.style.marginTop = `${margin}px`;

        return console.log(line.style.marginTop);
    },
}

DOM.setHeight('card-about', 'separator')