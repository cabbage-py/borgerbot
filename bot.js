const Discord = require("discord.js");
const client = new Discord.Client();

/* Borger Ingredients */
var top = [
  "Bun",
  "Brick",
  "A piece of lettuce",
  "The below ingredient x2",
  "Stop sign",
  "Brioche bun",
  "Bagel half",
  "100 Rice-shaped buns",
  "1 Bun-shaped rice",
];
var mid_op = [
  "(The next item is comically undersized)",
  "The below ingredient x2",
  "(The next ingredient is vegan)",
  "(The next ingredient is suspiciously sticky)",
];
var middle = [
  '"Ham"',
  "Celery",
  "Cereal dust",
  "Vegan beef patty",
  "Cum",
  "big gay",
  "A single strand of Donald Trump's hair",
  "[REDACTED]",
  "Bun",
  "Beans",
  "Soggy Biscuit",
  "Sugar",
  "Weet-bix",
  "Brick",
  "One whole head of cabbage",
  "Vegemite",
  "Waluigi's viscous sweat",
  "Wario's viscous sweat",
  "Chicken Nuggets",
  "Intel Core i7 8700k",
  "Page 69 from The Communist Manifesto by Friedrich Engels & Karl Marx",
  "Carpet",
  "A kiss goodnight",
  "Big anime tiddies",
  "Vegans",
  "Colgate Total 12 (recommended by 9 out of 10 dentists)",
  "LSD",
  "A fapkin",
  "A fleshlight",
  "Lvl 10 fishing",
  "Gravy powder",
  "Covfefe",
  "Viagra",
  "Urine fetish",
  "Dumb fuck juice",
  "A panic attack",
  "Salt",
  "All the sauces at Subway",
  "Feetloaf",
  "Cocaine",
  "Sausage roll bread (thanks issy)",
  "Hummus",
  "The 0.04¢ that Michael owes me",
  "Toilet paper",
  "Hot Kool Aid™",
  "1 lemon",
  "Bone hurting juice",
  "Furry Fetish",
  "Crippling social anxiety",
  "Crippling depression",
  "An UNO reverse card",
  "Orphan tears",
  "Tide pods",
  "Powder that doesn't taste like powder but makes you say that it does",
  "Asbestos",
  "Neckbeard powder",
  "A bowling ball",
  "Anti-depressants (assorted)",
  "Gamer girl bath water",
];
var options = [
  "[This borger is blended and served in a tall glass. With an Umbrella.]",
  "[Some ingredients may have fallen to the floor.]",
  "[This borger is then toasted.]",
  "[This borger is blasted with the Shrink Ray 5000.]",
  "[This borger smells like feet]",
  "[This borger is blessed by the pope]",
  "[This borger gives +10 Health.]",
  "[This borger gives +10 Attack.]",
  "[This borger makes you get the big gay.]",
  "[This borger kills you instantly.]",
  "[This burger has been kissed by Keanu Reeves.]",
];

/* Predefined strings */
var uwu =
  "\noh\n  ᵘʷᵘ   oh fuck ᵘʷᵘ ᵘʷᵘ\nᵘʷᵘ      ᵘʷᵘ           ᵘʷᵘ \n   ᵘʷᵘ          \n         ᵘʷᵘ      ᵘʷᵘ     fuck sorry guys\nᵘʷᵘ             ᵘʷᵘ ᵘʷᵘ     ᵘʷᵘ\nᵘʷᵘ  ᵘʷᵘ sorry im dropping \nᵘʷᵘ my uwus all over the ᵘʷᵘ place  ᵘʷᵘ      \n   ᵘʷᵘ     ᵘʷᵘ sorry";
var uwwu =
  "\noh\n  ᵘʷᵘ   oh fwuck ᵘʷᵘ ᵘʷᵘ\nᵘʷᵘ      ᵘʷᵘ           ᵘʷᵘ \n   ᵘʷᵘ          \n         ᵘʷᵘ      ᵘʷᵘ     fwuck sowwy gwuys\nᵘʷᵘ             ᵘʷᵘ ᵘʷᵘ     ᵘʷᵘ\nᵘʷᵘ  ᵘʷᵘ sowwy im dwopping \nᵘʷᵘ my uwus all over the ᵘʷᵘ pwace  ᵘʷᵘ      \n   ᵘʷᵘ     ᵘʷᵘ sowwy >< nyah~";
var owo =
  "Rawr x3 nuzzles how are you pounces on you you're so warm o3o notices you have a bulge o: someone's happy ;) nuzzles your necky wecky~ murr~ hehehe rubbies your bulgy wolgy you're so big :oooo rubbies more on your bulgy wolgy it doesn't stop growing ·///· kisses you and lickies your necky daddy likies (; nuzzles wuzzles I hope daddy really likes $: wiggles butt and squirms I want to see your big daddy meat~ wiggles butt I have a little itch o3o wags tail can you please get my itch~ puts paws on your chest nyea~ its a seven inch itch rubs your chest can you help me pwease squirms pwetty pwease sad face I need to be punished runs paws down your chest and bites lip like I need to be punished really good~ paws on your bulge as I lick my lips I'm getting thirsty. I can go for some milk unbuttons your pants as my eyes glow you smell so musky :v licks shaft mmmm~ so musky drools all over your cock your daddy meat I like fondles Mr. Fuzzy Balls hehe puts snout on balls and inhales deeply oh god im so hard~ licks balls punish me daddy~ nyea~ squirms more and wiggles butt I love your musky goodness bites lip please punish me licks lips nyea~ suckles on your tip so good licks pre of your cock salty goodness~ eyes role back and goes balls deep mmmm~ moans and suckles";
var demons =
  "OwO\n\nWe all have demons\n\n\nUwU\n\nAnd sometimes\n\n\n•w•\n\nThey win";
var tts_bool = true;

/* Borger Assembly */
function top_select() {
  if (Math.random() > 0.3) {
    var top_str = "Bun";
  } else {
    var top_str = top[Math.floor(Math.random() * top.length)];
  }
  return top_str;
}

function mid_op_select() {
  if (Math.random() > 0.9) {
    return mid_op[Math.floor(Math.random() * mid_op.length)];
  }
  return -1;
}

function mid_select() {
  var mid_str = middle[Math.floor(Math.random() * middle.length)];
  while (Math.random() > 0.8) {
    mid_str += "\n" + middle[Math.floor(Math.random() * middle.length)];
  }
  return mid_str;
}

function option_select() {
  if (Math.random() > 0.7) {
    return options[Math.floor(Math.random() * options.length)];
  }
  return -1;
}

function borger() {
  var top_ingredient = top_select();
  var bottom_ingredient = top_ingredient;

  if (top_ingredient === "The below ingredient x2") {
    bottom_ingredient = "The above ingredient x2";
  }

  var middle_option = mid_op_select();
  var middle_ingredient = mid_select();
  var bottom_option = option_select();

  var borger = top_ingredient;

  if (middle_option !== -1) {
    borger += "\n" + middle_option;
  }

  borger += "\n" + middle_ingredient + "\n" + bottom_ingredient;

  if (bottom_option !== -1) {
    borger += "\n" + bottom_option;
  }

  return borger;
}

function weeb(msg) {
  if (Math.random() > 0.4) {
    msg.channel.send(uwu);
  } else if (Math.random() > 0.5) {
    msg.channel.send(uwwu);
  } else {
    msg.channel.send("u fucking weeb", {
      tts: tts_bool,
    });
  }
}

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", (msg) => {
  switch (msg.content.toLowerCase()) {
    case "ping":
      msg.channel.send("pong");
      break;
    case "test":
      msg.channel.send(top);
      break;
    case "tts":
      if (tts_bool){
        var temp = "Text-to-speech currently on";
      } else {
        var temp = "Text-to-speech currently off";
      }
      msg.channel.send(temp + "\nCommands:\n - `tts on`\n - `tts off`");
      break;
    case "tts on":
      tts_bool = true;
      msg.channel.send("Text-to-speech now on.");
      break;
    case "tts off":
      tts_bool = false;
      msg.channel.send("Text-to-speech now off.");
      break;
    case "uwu":
      weeb(msg);
      break;
    case "owo":
      msg.channel.send(owo, {
        tts: tts_bool,
      });
      break;
    case ";)":
      if (msg.author.bot === false) {
        msg.channel.send(";)", { tts: tts_bool });
      }
      break;
    case "no u":
      if (msg.author.bot === false) {
        msg.channel.send("no u");
      }
      break;
    case "borger":
      msg.channel.send(borger());
      break;
    case "borg":
      msg.channel.send(borger());
      break;
    case "goodnight":
      msg.reply("goodnight :~)");
      break;
    case "good night":
      msg.reply("goodnight :~)");
      break;
    case "gnite":
      msg.reply("goodnight :~)");
      break;
    case "menu":
      msg.channel.send(
        "Please specify either:\n - `buns` \n - `ingredients` \n - `ingredient options`\n - `borger options`\ne.g.`menu ingredients`"
      );
      break;
    case "menu buns":
      msg.channel.send(top.join(", "));
      break;
    case "menu ingredients":
      msg.channel.send(middle.join(", "));
      break;
    case "menu ingredient options":
      msg.channel.send(mid_op.join(", "));
      break;
    case "menu borger options":
      msg.channel.send(options.join(", "));
      break;
    case "i want die":
      msg.channel.send("me too", { tts: tts_bool });
      break;
    case "coinflip":
      if (Math.random() > 0.5) {
        msg.channel.send("tails");
      } else {
        msg.channel.send("heads");
      }
      break;
    case "o/":
      if (msg.author.bot === false) {
        msg.channel.send("o7");
      }
      break;
    case "o7":
      if (msg.author.bot === false) {
        msg.channel.send("o/");
      }
      break;
    case "demons":
      msg.channel.send(demons);
      break;
    default:
      break;
  }
  var str = msg.content.toLowerCase();
  if (str.substring(0, 7) === "saythis") {
    client.channels.get("413364266175823874").send(str.substring(7));
  } else if (str.substring(0, 6) === "saytts") {
    client.channels.get("413364266175823874").send(str.substring(7));
  } else if (str.substring(0, 12).toLowerCase() === "can i get uh") {
    msg.channel.send(borger(top, mid_op, middle, options), { tts: true });
  } else if (
    (msg.author.bot === false) &
    ((str === "dont @ me") | (str === "don't @ me"))
  ) {
    var id = "<@" + msg.author.id + ">";
    msg.channel.send(id);
  } else if (msg.isMentioned(client.user)) {
    msg.channel.send("dont @ me");
  } else if (str.substring(0, 7) === "what if") {
    if (msg.author.bot === false) {
      msg.channel.send(
        "what if... " +
          str.substring(7) +
          "...   haha just kidding...                unless..?"
      );
    }
  }
  if (msg.member.id === "117577461377531910") {
    var emoji = msg.guild.emojis.find((emoji) => emoji.name === "mookle");
    msg.react(emoji);
  }
  if (msg.member.id === "231049035648073729") {
    if (false) {
      msg.channel.send(
        "wow is this thaiuni kid w/ michaelSOFTWARE ENGINEERINGlikes animu + mangu"
      );
    }
  }
  if (msg.member.id === "241459768944754688") {
    if (false) {
      msg.channel.send(
        "can't believe you dogged the bois for a 3-star vayne (with titanic hydra)"
      );
    }
  }
  if (msg.member.id === "125206334936317952") {
    //msg.channel.send("\"i'm gonna watch that anime, yukihira no souma\" - issy");
  }
  if (
    (msg.author.bot === false) &
    ((str.indexOf("i'm ") !== -1) | (str.indexOf("im ") !== -1))
  ) {
    if (
      str.indexOf("i'm ") !== -1 &&
      str.substring(str.indexOf("i'm") + 4).trim()
    ) {
      msg.channel.send(
        "hi " + str.substring(str.indexOf("i'm") + 4) + ", im dad"
      );
    } else if (
      str.indexOf("im ") !== -1 &&
      str.substring(str.indexOf("im") + 3).trim()
    ) {
      msg.channel.send(
        "hi " + str.substring(str.indexOf("im") + 3) + ", im dad"
      );
    }
  }
});

client.login(process.env.BOT_TOKEN);
