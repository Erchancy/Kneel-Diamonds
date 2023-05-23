import { transientState } from "./TransientState.js"

export const StyleOptions = async () => {
    const response = await fetch("http://localhost:8088/styles")
    const styles = await response.json()

    let styleHTML = ""

    const divStringArray = styles.map(
        (style) => {
            if (transientState.get("styleId") === style.id) {
                return `<div>
                    <input type='radio' name='style' value='${style.id}' checked='checked' /> ${style.style}
                </div>`
            } else {
                return `<div>
                    <input type='radio' name='style' value='${style.id}' /> ${style.style}
                </div>`
            }
        }
     )

    // This function needs to return a single string, not an array of strings
    styleHTML += divStringArray.join("")

    return styleHTML
}

// The setMetalChoice() function used below is just an example.
// Change it to the name of the setter function you created.
import { setStyleChoice } from "./TransientState.js"

const handleStyleChoice = (event) => {
    // Make sure you change this condition if you named your inputs differently
    if (event.target.name === "style") {
        setStyleChoice(parseInt(event.target.value))
    }
}

document.addEventListener("change", handleStyleChoice)