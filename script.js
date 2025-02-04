// Select the button element with the class "btn"
const btn = document.querySelector(".btn");

// Set initial theme to "light"
let theme = "light";

// Add an event listener to the button that listens for click events
btn.addEventListener("click", () => {
    // Check if the current theme is "light"
    if (theme === "light") {
        // Add the "dark-theme" class to the root element (documentElement)
        document.documentElement.classList.add("dark-theme");
        
        // Change the theme to "dark"
        theme = "dark";
        
        // Change the button text to "Light"
        btn.textContent = "Light";
    } else if (theme === "dark") {
        // Remove the "dark-theme" class from the root element (documentElement)
        document.documentElement.classList.remove("dark-theme");
        
        // Change the theme back to "light"
        theme = "light";
        
        // Change the button text to "Dark"
        btn.textContent = "Dark";
    }
});
