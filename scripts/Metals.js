import { transientState } from "./TransientState.js"

export const MetalOptions = async () => {
    const response = await fetch("http://localhost:8088/metals")
    const metals = await response.json()

    let metalHTML = ""

     // Use map() to generate new array of strings
    const divStringArray = metals.map(
        (metal) => {
            if (transientState.get("metalId") === metal.id) {
                return `<div>
                    <input type='radio' name='metal' value='${metal.id}' checked='checked' /> ${metal.metal}
                </div>`
            } else {
                return `<div>
                    <input type='radio' name='metal' value='${metal.id}' /> ${metal.metal}
                </div>`
            }
        }
    )

    // This function needs to return a single string, not an array of strings
    metalHTML += divStringArray.join("")

    return metalHTML
}

// The setMetalChoice() function used below is just an example.
// Change it to the name of the setter function you created.
import { setMetalChoice } from "./TransientState.js"

const handleMetalChoice = (event) => {
    // Make sure you change this condition if you named your inputs differently
    if (event.target.name === "metal") {
        setMetalChoice(parseInt(event.target.value));
        }
}

document.addEventListener("change", handleMetalChoice)