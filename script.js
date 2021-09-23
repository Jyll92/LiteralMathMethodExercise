// 1
let warmHugs = "Hi, I'm Olaf and I like warm hugs.";
console.log(warmHugs.toUpperCase());
warmHugs = warmHugs.replace("like","love");
// 2
let beenImpaled = "Oh, look at that. I've been impaled.";
console.log(beenImpaled.slice(18, beenImpaled.length))
// 3
let dotDotDot = "...";
let skullBones = `I don't have a skull${dotDotDot}or bones.`
// 4
console.log(Math.PI);
// 5
let randomNumber = Math.ceil(Math.random() * 3);

// Bonus
// 6
console.log(" Let It Go!".toUpperCase().repeat(2).trim());
// 7 
let reindeers = "Reindeers are better than people.";
console.log(reindeers.replace(/\s/g, "_"));
// 8
console.log(Math.sqrt(2));
// 9
let newRandomNumber = Math.floor(Math.random() * (24 - 7) + 7);