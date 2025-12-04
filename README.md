# What is the Simon Game?

Simon is a classic memory-based game introduced in the 1970s.
The concept is simple but addictive:

The game shows a sequence of colors (one at a time).

Your task is to repeat the exact sequence in the correct order.

With every level, one new color is added, increasing the challenge.

If you click the wrong color → Game Over, and you must restart.

It’s a great example of how pattern recognition and short-term memory can be gamified—perfect for beginner-friendly JavaScript logic.

 # Tech Stack Used
1️⃣ HTML

Used to create the game structure:

Four colored buttons (blue, green, yellow, red)

Title + Level indicator

Script linking

2️⃣ CSS

Used for:

Layout & centering

Color styling of buttons

Animations (flash effects, scale, brightness)

Making the UI smooth and interactive

3️⃣ JavaScript

The core logic of the game:

Handling keypress to start the game

Generating random color sequences

Tracking user clicks

Checking correctness

Level progression

Game-over logic

Adding/removing animation classes dynamically

# How the Game Works (Behind the Scenes)
🔹 1. Start the Game

When the user presses any key, the game initializes:

level = 1

gameSeq = [] (stores correct sequence)

playerSeq = [] (stores user clicks)

🔹 2. Generate Color Sequence

Each level:

One random color from ["blue", "green", "yellow", "red"] is selected

That color is flashed on the screen

Added to gameSeq

🔹 3. User Interaction

When the player clicks a color:

Clicked color is pushed into playerSeq

A click animation is shown

The check() function compares it with gameSeq

🔹 4. Level Up

If the user matches all colors correctly:

After 1 second → next level begins

Sequence length increases by 1

🔹 5. Game Over

If the user clicks the wrong color:

Screen flashes red

“Game Over” message

Sequence resets

User can restart the game by pressing a key again
