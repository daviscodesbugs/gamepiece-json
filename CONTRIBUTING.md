## Thanks for looking into this project!
A general rule of thumb for each entry is to consider this question:  
If I were missing a piece in my game, could I figure out which one it is?  
*Consider that color/count/value matters*

---

Here are a couple things to make your contribution top-notch:
 - Make sure your JSON is compliant to RFC 4627
   - (Consider running it through [this validator](https://jsonformatter.curiousconcept.com/))
   - Use 4-space tabs
 - Break down pieces by color/suit if values are similar
   - (A deck of all aces would make for some confusing games)
 - If the board doesn't change/break down, including a simple "board" entry is sufficient
   - ex: Chess - the board never changes
   - ex: Settlers of Catan does **not** fit this specification
 - Have `name`,`edition`, and `publisher` as separate attributes

Nit-pick polishing:
 - Specify number of sides **only** if a dice has more/less than 6 sides
 - Use `dice` attribute to denote all dice; `die` and `dices` should be avoided
