
# Dice Game - React

This is a simple dice game built using React. The game includes two dice: one for Player 1 and the other for the computer. The player can roll the dice, and the game will announce the result as either "Win", "Lose", or "Draw" based on the dice outcomes. Additionally, Player 1 can modify their username using a text input.

### Features

- **Two Dice**: One die represents the player, while the other represents the computer.
- **Roll Dice Button**: When the button is pressed, both dice will roll, and the dice faces will change for 3 seconds before stopping.
- **Game Result**: After the dice stop rolling, the result is displayed as "Win", "Lose", or "Draw" based on the dice outcomes.

    - If Player 1 wins, the result is highlighted in green.
    - If the computer wins, the result is shown in red.
    - In case of a draw, the result appears in orange.

- **Username Customization**: Player 1 can change their username by typing in an input field and pressing the "Change Name" button.

### Technologies Used
- **React**: JavaScript library for building user interfaces.
- **JavaScript (ES6)**: Used for the core functionality and logic of the game.
- **HTML/CSS**: For structuring and styling the app.


## How to Run the Project

### Prerequisites
Ensure you have **Node.js** installed on your computer.

1. Clone the repository:
```
https://github.com/AlicanCatak/dice-game.git
```
2. Move to the project directory:
```
cd dice-game
```
3. Install the required dependencies:
```
npm install
```
4. Start the development server:
```
npm run dev
```
5. Open your browser and go to `localhost:3000`.

### Future Improvements

- Implement additional game modes, such as multiplayer or higher difficulty levels.
- Add animations and sound effects to make the game more engaging.
- Track and display the player's score across multiple rounds.

---
