const quotes = [
    '"Why so serious?" – Joker',
'"Madness, as you know, is like gravity. All it takes is a little push." – Joker',
'"You either die a hero, or you live long enough to see yourself become the villain." – Harvey Dent',
'"The night is darkest just before the dawn. And I promise you, the dawn is coming." – Harvey Dent',
'"Some men just want to watch the world burn." – Alfred Pennyworth',
'"Bruce, do’nt make me your only hope for a normal life." – Rachel Dawes',
'"He’s the hero Gotham deserves, but not the one it needs right now." – James Gordon',
'"Let me get this straight. You think that your client, one of the wealthiest, most powerful men in the world, is secretly a vigilante who spends his nights beating criminals to a pulp with his bare hands. And your plan is to blackmail this person? Good luck." – Lucius Fox',
'"Introduce a little anarchy. Upset the established order, and everything becomes chaos." – Joker',
'"I believe whatever doesn’t kill you simply makes you... stranger." – Joker',
'"Do you want to know why I use a knife? Guns are too quick. You can’t savor all the little emotions." – Joker',
'"I’m not a monster. I’m just ahead of the curve." – Joker',
'"Sometimes, the truth isn’t good enough. Sometimes, people deserve more." – Batman',
'"I’m whatever Gotham needs me to be." – Batman',
'"You’ll hunt me. You’ll condemn me. Set the dogs on me. Because that’s what needs to happen." – Batman',
'"You thought we could be decent men in an indecent time! But you were wrong." – Harvey Dent',
'"It’s not about what I want, it’s about what’s fair!" – Harvey Dent',
'"You crossed the line first, sir. You squeezed them, you hammered them to the point of desperation. And in their desperation, they turned to a man they didn’t fully understand." – Alfred Pennyworth',
'"We burned the forest down." – Alfred Pennyworth',
'"Spying on 30 million people isn’t part of my job description." – Lucius Fox',
'"As long as this machine is at Wayne Enterprises, I won’t be." – Lucius Fox',
'"Harvey may not know you well enough to understand, but I do." – Rachel Dawes',
'"You complete me." – Joker',
'"The only morality in a cruel world is chance." – Harvey Dent',
'"An unstoppable force." – Joker',
];
function getQuoteOfTheDay() {
  const today = new Date().toDateString(); // Get today's date as a string
  const savedDate = localStorage.getItem('quoteDate');
  let quote;
  // Check if the saved date is today's date
  if (savedDate === today) {
    // If it's the same date, use the saved quote
    quote = localStorage.getItem('quote');
  } else {
    // If it's a new day, select a new random quote and save it
    quote = quotes[Math.floor(Math.random() * quotes.length)];
    localStorage.setItem('quote', quote);
    localStorage.setItem('quoteDate', today); // Save today's date
  }
  return quote;
}
document.getElementById("quoteh2").innerText = `${getQuoteOfTheDay()}`;
