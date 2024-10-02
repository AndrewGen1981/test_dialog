const dialog = document.querySelector("dialog")


document.querySelectorAll("button[data-action]")
.forEach(btn => btn.addEventListener("click", () => toggleDialog(btn)))


function toggleDialog(btn) {
    const { action } = btn?.dataset || {}

    if (!action || !dialog) return

    if (action === "open") dialog.showModal()
    if (action === "close") dialog.close()
}