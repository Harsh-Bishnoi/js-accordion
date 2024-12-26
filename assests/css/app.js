// const accordionTittles = document.querySelectorAll(".accordionTittle");

// accordionTittles.forEach((accordionTittle) => {
//     accordionTittle.addEventListener("click", () => {
//         if (accordionTittle.classList.contains("is-open")) {
//             accordionTittle.classList.remove("is-open");
//         } else {
//             const accordionTittlesWithIsOpen = document.querySelectorAll(".is-open");
//             accordionTittlesWithIsOpen.forEach((accordionTittleWithIsOpen) => {
//                 accordionTittleWithIsOpen.classList.remove("is-open");
//             })
//             accordionTittle.classList.add("is-open");
//         }
//     })
// })



const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const isActive = header.classList.contains('active');

        document.querySelectorAll('.accordion-header.active').forEach(openHeader => {
            openHeader.classList.remove('active');
            openHeader.nextElementSibling.style.display = 'none';
        });

        if (!isActive) {
            header.classList.add('active');
            header.nextElementSibling.style.display = 'block';
        }
    });
});