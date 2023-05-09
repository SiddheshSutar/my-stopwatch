# STOPWATCH

Stopwatch created using HTML ad CSS, assisted with plain javascript


ABOUT THIS PROJECT-:

  1. From the U side , in HTML, Bootstrap is used for giving the app a basic layout
  2. Google fonts are used for varied styled fonts
  3. In script.js, the logic resides for three buttons in UI - Start, Stop, Reset ('Resume' - as and when applicable)

# How to run?
For VS Code, use the extension 'Live Server' for better simulation and hot reloading

# Whats new? ( IMPORTANT )
# Efficiency of UI buttons
Here there are no three default buttons - Start-Stop-Reset being shown altogether in UI.
Since, Start and Stop would come in either of their usecases; they have been toggled via javascript.

  1. When start is clicked:
    a. hide start button and show stop button
    b. hide reset button
  2. When stop is clicked: Change Start button as Resume button and show Reset button as well
  3. On click of reset button; restore the functionality to Start button

  # Pro-tip: The efficiency can be still be improved by combining Start and Resume button as one button,
  # and handling the click event via javascript only !