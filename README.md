# CatDiet

My partner and I have two cats, one of which has a congenitally dislocated kneecap.
Our veterinarian assures us that so long as the cat's weight remains within a
reasonable limit, the cat will not experience pain from the aforementioned
condition.

We have found that actually weighing the amount of food they receive each day
gives us the insight needed to keep both cats at a healthy weight.

Our current system of keeping their weights in an iOS Note, importing that
information into a Jupyter Notebook for graphing, and calculating calorie changes
in a different Notebook...

Anyway, the current toolchain is clunky and unwieldy. For Async Week I will be
retooling the stack and making it easier to use.

Old Stack:

Linux
Apache
MariaDB
PHP
Wordpress <== Jupyter Notebook <== iOS Notes

New Stack:
Linux
Express
Postgres
Sequelize
React
Redux
React-Redux
