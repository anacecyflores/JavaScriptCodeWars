let bullets = 5;
let dragons = 20;

function hero(bullets, dragons) {
  if (bullets !== dragons * 2) return "true";
  if (bullets > dragons * 2) return "true";
  if (dragons > bullets * 2) return "false";
  else {
    bullets === dragons;
    return "false";
  }
}
console.log("hero", bullets, dragons, hero(bullets, dragons));
