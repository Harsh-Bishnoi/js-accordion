const accordionTittles = document.querySelectorAll(".accordionTittle");

accordionTittles.forEach((accordionTittle) => {
    accordionTittle.addEventListener("click", () => {
        if (accordionTittle.classList.contains("is-open")) {
            accordionTittle.classList.remove("is-open");
        } else {
            const accordionTittlesWithIsOpen = document.querySelectorAll(".is-open");
            accordionTittlesWithIsOpen.forEach((accordionTittleWithIsOpen) => {
                accordionTittleWithIsOpen.classList.remove("is-open");
            })
            accordionTittle.classList.add("is-open");
        }
    })
})