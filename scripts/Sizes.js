import { transientState } from "./TransientState.js"

export const SizeOptions = async () => {
    const response = await fetch("http://localhost:8088/sizes")
    const sizes = await response.json()

    let sizeHTML = ""

         // Use map() to generate new array of strings
         const divStringArray = sizes.map(
            (size) => {
                if (transientState.get("sizeId") === size.id) {
                    return `<div>
                        <input type='radio' name='size' value='${size.id}' checked='checked' /> ${size.carets}
                    </div>`
                } else {
                    return `<div>
                        <input type='radio' name='size' value='${size.id}' /> ${size.carets}
                    </div>`
                }
            }
         )

        // This function needs to return a single string, not an array of strings
        sizeHTML += divStringArray.join("")

    return sizeHTML
}

// The setMetalChoice() function used below is just an example.
// Change it to the name of the setter function you created.
import { setSizeChoice } from "./TransientState.js"

const handleSizeChoice = (event) => {
    // Make sure you change this condition if you named your inputs differently
    if (event.target.name === "size") {
        setSizeChoice(parseInt(event.target.value))
    }
}

document.addEventListener("change", handleSizeChoice)