const darkModeToggle = document.getElementById("darkModeToggle");
const body = document.getElementById("editor");
const localStorageThemeKey = "theme";
let darkModeEnabled = body.classList.contains("dark-mode"); // Track current state
const textInput = document.getElementById("editor");
const localStorageKey = "autosavedText";


function enableDarkMode() {
    body.classList.add("dark-mode");
    localStorage.setItem(localStorageThemeKey, "dark");
    darkModeToggle.checked = true;
    darkModeEnabled = true;
  }

  function disableDarkMode() {
    body.classList.remove("dark-mode");
    localStorage.setItem(localStorageThemeKey, "light");
    darkModeToggle.checked = false;
    darkModeEnabled = false;
  }

  darkModeToggle.addEventListener("change", function() {
    if (this.checked) {
      enableDarkMode();
    } else {
      disableDarkMode();
    }
  });

  // Keyboard shortcut for toggling dark mode (Ctrl + D or Cmd + D)
  document.addEventListener("keydown", function(event) {
    const isCtrlOrCmd = event.ctrlKey || event.metaKey; // Check for Ctrl on Windows/Linux or Cmd on macOS
    const isDKey = event.key === 'd' || event.key === 'D';

    if (isCtrlOrCmd && isDKey) {
      event.preventDefault(); // Prevent browser's default Ctrl+D action (bookmark)
      if (darkModeEnabled) {
        disableDarkMode();
      } else {
        enableDarkMode();
      }
    }
  });

  // Load saved theme preference
  const savedTheme = localStorage.getItem(localStorageThemeKey);
  if (savedTheme === "dark") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }

function saveText() {
    const textToSave = textInput.value;
    localStorage.setItem(localStorageKey, textToSave);
    // alert("Text saved!");
}

textInput.addEventListener("input", saveText);

function loadText() {
    const savedText = localStorage.getItem(localStorageKey);
    if (savedText) {
        textInput.value = savedText;
        // alert("Loaded");
    }
}


window.onload = loadText;