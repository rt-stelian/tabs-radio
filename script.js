/**
 *
 * This version is simpler, housing all logic directly within a single event listener.
 * This straightforward approach may make it easier to understand but
 *  potentially harder to manage as the project expands.
 *
 */

const container = document.querySelector(".container")
const tabsButtons = document.querySelectorAll(".tabs__button")
const cardsFormLabels = document.querySelectorAll(".cards__form label")

// Attach a click event listener to the container
container.addEventListener("click", (ev) => {
  const target = ev.target
  // Get the "data-tab" attribute of the clicked element
  const btnAtr = target.getAttribute("data-tab")

  // Handle tab button clicks
  if (target.classList.contains("tabs__button")) {
    tabsButtons.forEach((btn) => btn.classList.remove("active"))

    // Hide all tab content
    tabsButtons.forEach((btn) => {
      const tab = document.querySelector(`#${btn.getAttribute("data-tab")}`)
      tab.style.opacity = "0"
      setTimeout(() => {
        tab.style.display = "none"
      }, 198)
    })

    // Activate the clicked tab button and show its content
    target.classList.add("active")
    const tabContent = document.querySelector(`#${btnAtr}`)
    tabContent.style.opacity = "1"
    setTimeout(() => {
      tabContent.style.display = "flex"
    }, 200)
  }

  // Handle clicks on label or input elements
  if (
    target.tagName.toLowerCase() === "label" ||
    target.tagName.toLowerCase() === "input"
  ) {
    cardsFormLabels.forEach((label) => {
      label.classList.remove("checked")
      const input = label.querySelector("input")
      // Add the "checked" class if the input is checked
      if (input && input.checked) {
        label.classList.add("checked")
      }
    })
  }
})

//===========================================================================================================//
//===========================================================================================================//
//===========================================================================================================//

/**
 *
 * And this version is more advanced, employing helper functions like toggleActiveClass and
 *  toggleVisibility to create a modular code structure, which enhances
 *  readability, reusability, and long-term maintainability.
 *
 */

// // Toggle the active class on the elements
// const toggleActiveClass = (elements, target, className = "active") => {
//   elements.forEach((el) => el.classList.remove(className));
//   target.classList.add(className);
// };

// // Control the visibility of tab content
// const toggleVisibility = (elements, targetID, visible) => {
//   elements.forEach((el) => {
//     const id = el.getAttribute("data-tab");
//     const tab = document.querySelector(`#${id}`);
//     tab.style.opacity = visible && id === targetID ? "1" : "0";
//     setTimeout(() => {
//       tab.style.display = visible && id === targetID ? "flex" : "none";
//     }, 198);
//   });
// };

// // Query the DOM for container, tab buttons, and labels
// const container = document.querySelector(".container");
// const tabsButtons = document.querySelectorAll(".tabs__button");
// const cardsFormLabels = document.querySelectorAll(".cards__form label");

// // Listen for clicks on the container
// container.addEventListener("click", ({ target }) => {

//   // Handle tab button clicks
//   if (target.classList.contains("tabs__button")) {
//     const btnAtr = target.getAttribute("data-tab");
//     toggleActiveClass(tabsButtons, target);
//     toggleVisibility(tabsButtons, btnAtr, true);
//   }

//   // Handle clicks on label or input
//   if (target.tagName.toLowerCase().match(/^(label|input)$/)) {
//     cardsFormLabels.forEach((label) => {
//       const input = label.querySelector("input");
//       label.classList.toggle("checked", input && input.checked);
//     });
//   }
// });
