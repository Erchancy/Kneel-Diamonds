export const JewelryOptions = async () => {
    const response = await fetch("http://localhost:8088/jewelries")
    const jewelries = await response.json()

    let jewelryHTML = ""

    const divStringArray = jewelries.map(
        (jewelry) => {
          return `<div>
              <input type='radio' name='jewelry' value='${jewelry.id}' /> ${jewelry.type}
          </div>`
        }
    )

    // This function needs to return a single string, not an array of strings
    jewelryHTML += divStringArray.join("")

    return jewelryHTML
}

// The setMetalChoice() function used below is just an example.
// Change it to the name of the setter function you created.
import { setJewelryChoice } from "./TransientState.js"

const handleJewelryChoice = (event) => {
    // Make sure you change this condition if you named your inputs differently
    if (event.target.name === "jewelry") {
        setJewelryChoice(parseInt(event.target.value))
    }
}

document.addEventListener("change", handleJewelryChoice)