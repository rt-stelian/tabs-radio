const container = document.querySelector(".container")
const tabsButtons = document.querySelectorAll(".tabs__button")
const cardsFormLabels = document.querySelectorAll(".cards__form label")

container.addEventListener("click", (ev) => {
  const target = ev.target
  const btnAtr = target.getAttribute("data-tab")

  if (target.classList.contains("tabs__button")) {
    tabsButtons.forEach((btn) => btn.classList.remove("active"))
    tabsButtons.forEach((btn) => {
      const tab = document.querySelector(`#${btn.getAttribute("data-tab")}`)
      tab.style.opacity = "0"
      setTimeout(() => {
        tab.style.display = "none"
      }, 198)
    })
    target.classList.add("active")
    const tabContent = document.querySelector(`#${btnAtr}`)
    tabContent.style.opacity = "1"
    setTimeout(() => {
      tabContent.style.display = "flex"
    }, 200)
  }

  if (
    target.tagName.toLowerCase() === "label" ||
    target.tagName.toLowerCase() === "input"
  ) {
    cardsFormLabels.forEach((label) => {
      label.classList.remove("checked")
      const input = label.querySelector("input")
      if (input && input.checked) {
        label.classList.add("checked")
      }
    })
  }
})
