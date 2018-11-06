$(document).ready(function () {
    var charSprite;
    $(".glyphicon-ok").hide();
    $("#editToggle").click(function () {
    if ($(this).parents().siblings("input").is("[readonly]")) {
        $(this).parents().siblings("input").prop("readonly", false); //turns the readonly off
        $(".glyphicon-ok").show();
        $(".glyphicon-pencil").hide(); //hide one glyphicon
    } else {
        $(".glyphicon-ok").hide(); //hide one glyphicon
        $(".glyphicon-pencil").show();
        $(this).parents().siblings("input").prop("readonly", true); //turns the readonly off
    }
    });

    // variables to determine if all four selections have been made
    // var raceSelected = false;
    // var genderSelected = false;
    // var classSelected = false;
    // var alignSelected = false;

    $(".charRace").change(function() {
        let charRace = $(".charRace").val();
        let charGender = $(".charGender").val();
        function statRolls () {
            charSTR = parseInt(Math.floor(Math.random() * (25 - 6) + 6));
            charDEX = parseInt(Math.floor(Math.random() * (25 - 6) + 6));
            charCON = parseInt(Math.floor(Math.random() * (25 - 6) + 6));
            charINT = parseInt(Math.floor(Math.random() * (25 - 6) + 6));
            charWIS = parseInt(Math.floor(Math.random() * (25 - 6) + 6));
            charCHA = parseInt(Math.floor(Math.random() * (25 - 6) + 6));
        }
        console.log(charRace);
        if (charRace == "dragonborn") {
            raceSelected = true;
            $(".infoTitle").empty();
            $(".infoTitle").html("Dragonborn");
            $(".infoText").empty();
            $(".infoText").append("Dragonborn tend to extremes, making a conscious choice for one side or the other in the cosmic war between good and evil. Most dragonborn are good, but those who side with evil can be terrible villains. You can speak, read, and write Common and Draconic. Draconic is thought to be one of the oldest languages and is often used in the study of magic.");
            statRolls();
            $(".charSTR").empty();
            $(".charDEX").empty();
            $(".charCON").empty();
            $(".charINT").empty();
            $(".charWIS").empty();
            $(".charCHA").empty();
            $(".charSTR").append(charSTR + parseInt(2));
            $(".charDEX").append(charDEX);
            $(".charCON").append(charCON);
            $(".charINT").append(charINT);
            $(".charWIS").append(charWIS);
            $(".charCHA").append(charCHA + parseInt(1));
            if (charGender == "male") {
                $(".charPortrait").empty();
                $(".charPortrait").attr("src", "../images/Dragonborn/Male_Dragonborn.png");
            }
            else if (charGender == "female") {
                $(".charPortrait").empty();
                $(".charPortrait").attr("src", "../images/Dragonborn/Female_Dragonborn.jpg");
            }
        }
        else if (charRace == "dwarf") {
            raceSelected = true;
            $(".infoTitle").empty();
            $(".infoTitle").html("Dwarf");
            $(".infoText").empty();
            $(".infoText").append("Most dwarves are lawful, believing firmly in the benefits of a well-ordered society. They tend toward good as well, with a strong sense of fair play and a belief that everyone deserves to share in the benefits of a just order. You can speak, read, and write Common and Dwarvish. Dwarvish is full of hard consonants and guttural sounds, and those characteristics spill over into whatever other language a dwarf might speak.");
            statRolls();
            $(".charSTR").empty();
            $(".charDEX").empty();
            $(".charCON").empty();
            $(".charINT").empty();
            $(".charWIS").empty();
            $(".charCHA").empty();
            $(".charSTR").append(charSTR);
            $(".charDEX").append(charDEX);
            $(".charCON").append(charCON + parseInt(2));
            $(".charINT").append(charINT);
            $(".charWIS").append(charWIS);
            $(".charCHA").append(charCHA);
            if (charGender == "male") {
                $(".charPortrait").empty();
                $(".charPortrait").attr("src", "../images/Dwarf/Male_Dwarf.png");
            }
            else if (charGender == "female") {
                $(".charPortrait").empty();
                $(".charPortrait").attr("src", "../images/Dwarf/Female_Dwarf.png");
            }
        }
        else if (charRace == "gnome") {
            raceSelected = true;
            $(".infoTitle").empty();
            $(".infoTitle").html("Gnome");
            $(".infoText").empty();
            $(".infoText").append("Gnomes are most often good. Those who tend toward law are sages, engineers, researchers, scholars, investigators, or inventors. Those who tend toward chaos are minstrels, tricksters, wanderers, or fanciful jewelers. Gnomes are good-hearted, and even the tricksters among them are more playful than vicious. You can speak, read, and write Common and Gnomish. The Gnomish language, which uses the Dwarvish script, is renowned for its technical treatises and its catalogs of knowledge about the natural world.");
            statRolls();
            $(".charSTR").empty();
            $(".charDEX").empty();
            $(".charCON").empty();
            $(".charINT").empty();
            $(".charWIS").empty();
            $(".charCHA").empty();
            $(".charSTR").append(charSTR);
            $(".charDEX").append(charDEX);
            $(".charCON").append(charCON);
            $(".charINT").append(charINT + parseInt(2));
            $(".charWIS").append(charWIS);
            $(".charCHA").append(charCHA);
            if (charGender == "male") {
                $(".charPortrait").empty();
                $(".charPortrait").attr("src", "../images/Gnome/Male_Gnome.png");
            }
            else if (charGender == "female") {
                $(".charPortrait").empty();
                $(".charPortrait").attr("src", "../images/Gnome/Female_Gnome.jpg");
            }
        }
        else if (charRace == "elf") {
            raceSelected = true;
            $(".infoTitle").empty();
            $(".infoTitle").html("Elf");
            $(".infoText").empty();
            $(".infoText").append("Elves love freedom, variety, and self-expression, so they lean strongly toward the gentler aspects of chaos. They value and protect others’ freedom as well as their own, and they are more often good than not. The drow are an exception; their exile has made them vicious and dangerous. Drow are more often evil than not. You can speak, read, and write Common and Elvish. Elvish is fluid, with subtle intonations and intricate grammar. Elven literature is rich and varied, and their songs and poems are famous among other races. Many bards learn their language so they can add Elvish ballads to their repertoires.");
            statRolls();
            $(".charSTR").empty();
            $(".charDEX").empty();
            $(".charCON").empty();
            $(".charINT").empty();
            $(".charWIS").empty();
            $(".charCHA").empty();
            $(".charSTR").append(charSTR);
            $(".charDEX").append(charDEX + parseInt(2));
            $(".charCON").append(charCON);
            $(".charINT").append(charINT);
            $(".charWIS").append(charWIS);
            $(".charCHA").append(charCHA);
            if (charGender == "male") {
                $(".charPortrait").empty();
                $(".charPortrait").attr("src", "../images/Elf/Male_Elf.png");
            }
            else if (charGender == "female") {
                $(".charPortrait").empty();
                $(".charPortrait").attr("src", "../images/Elf/Female_Elf.jpg");
            }
        }
        else if (charRace == "halfelf") {
            $(".infoTitle").empty();
            $(".infoTitle").html("Half-Elf");
            $(".infoText").empty();
            $(".infoText").append("Half-elves share the chaotic bent of their elven heritage. They value both personal freedom and creative expression, demonstrating neither love of leaders nor desire for followers. They chafe at rules, resent others' demands, and sometimes prove unreliable, or at least unpredictable. You can speak, read, and write Common, Elvish, and one extra language of your choice.");
            statRolls();
            $(".charSTR").empty();
            $(".charDEX").empty();
            $(".charCON").empty();
            $(".charINT").empty();
            $(".charWIS").empty();
            $(".charCHA").empty();
            $(".charSTR").append(charSTR);
            $(".charDEX").append(charDEX);
            $(".charCON").append(charCON);
            $(".charINT").append(charINT);
            $(".charWIS").append(charWIS);
            $(".charCHA").append(charCHA + parseInt(2));
            if (charGender == "male") {
                $(".charPortrait").empty();
                $(".charPortrait").attr("src", "../images/Half-Elf/Male_Half_Elf.png");
            }
            else if (charGender == "female") {
                $(".charPortrait").empty();
                $(".charPortrait").attr("src", "../images/Half-Elf/Female_Half_Elf.jpg");
            }
        }
        else if (charRace == "halfling") {
            $(".infoTitle").empty();
            $(".infoTitle").html("Halfling");
            $(".infoText").empty();
            $(".infoText").append("Most halflings are lawful good. As a rule, they are good-hearted and kind, hate to see others in pain, and have no tolerance for oppression. They are also very orderly and traditional, leaning heavily on the support of their community and the comfort of their old ways. You can speak, read, and write Common and Halfling. The Halfling language isn’t secret, but halflings are loath to share it with others. They write very little, so they don’t have a rich body of literature. Their oral tradition, however, is very strong.");
            statRolls();
            $(".charSTR").empty();
            $(".charDEX").empty();
            $(".charCON").empty();
            $(".charINT").empty();
            $(".charWIS").empty();
            $(".charCHA").empty();
            $(".charSTR").append(charSTR);
            $(".charDEX").append(charDEX + parseInt(2));
            $(".charCON").append(charCON);
            $(".charINT").append(charINT);
            $(".charWIS").append(charWIS);
            $(".charCHA").append(charCHA);
            if (charGender == "male") {
                $(".charPortrait").empty();
                $(".charPortrait").attr("src", "../images/Halfling/Male_Halfling.png");
            }
            else if (charGender == "female") {
                $(".charPortrait").empty();
                $(".charPortrait").attr("src", "../images/Halfling/Female_Halfling.jpg");
            }
        }
        else if (charRace == "halforc") {
            $(".infoTitle").empty();
            $(".infoTitle").html("Half-Orc");
            $(".infoText").empty();
            $(".infoText").append("Half-orcs inherit a tendency toward chaos from their orc parents and are not strongly inclined toward good. Half-orcs raised among orcs and willing to live out their lives among them are usually evil. You can speak, read, and write Common and Orc. Orc is a harsh, grating language with hard consonants. It has no script of its own but is written in the Dwarvish script.");
            statRolls();
            $(".charSTR").empty();
            $(".charDEX").empty();
            $(".charCON").empty();
            $(".charINT").empty();
            $(".charWIS").empty();
            $(".charCHA").empty();
            $(".charSTR").append(charSTR + parseInt(2));
            $(".charDEX").append(charDEX);
            $(".charCON").append(charCON + parseInt(1));
            $(".charINT").append(charINT);
            $(".charWIS").append(charWIS);
            $(".charCHA").append(charCHA);
            if (charGender == "male") {
                $(".charPortrait").empty();
                $(".charPortrait").attr("src", "../images/Half-Orc/Male_Half_Orc.png");
            }
            else if (charGender == "female") {
                $(".charPortrait").empty();
                $(".charPortrait").attr("src", "../images/Half-Orc/Female_Half_Orc.png");
            }
        }
        else if (charRace == "human") {
            $(".infoTitle").empty();
            $(".infoTitle").html("Human");
            $(".infoText").empty();
            $(".infoText").append("Humans tend toward no particular alignment. The best and the worst are found among them. You can speak, read, and write Common and one extra language of your choice. Humans typically learn the languages of other peoples they deal with, including obscure dialects. They are fond of sprinkling their speech with words borrowed from other tongues: Orc curses, Elvish musical expressions, Dwarvish military phrases, and so on.");
            statRolls();
            $(".charSTR").empty();
            $(".charDEX").empty();
            $(".charCON").empty();
            $(".charINT").empty();
            $(".charWIS").empty();
            $(".charCHA").empty();
            $(".charSTR").append(charSTR + parseInt(1));
            $(".charDEX").append(charDEX + parseInt(1));
            $(".charCON").append(charCON + parseInt(1));
            $(".charINT").append(charINT + parseInt(1));
            $(".charWIS").append(charWIS + parseInt(1));
            $(".charCHA").append(charCHA + parseInt(1));
            if (charGender == "male") {
                $(".charPortrait").empty();
                $(".charPortrait").attr("src", "../images/Human/Male_Human.jpg");
            }
            else if (charGender == "female") {
                $(".charPortrait").empty();
                $(".charPortrait").attr("src", "../images/Human/Female_Human.png");
            }
        }
        else if (charRace == "tiefling") {
            $(".infoTitle").empty();
            $(".infoTitle").html("Tiefling");
            $(".infoText").empty();
            $(".infoText").append("Tieflings might not have an innate tendency toward evil, but many of them end up there. Evil or not, an independent nature inclines many tieflings toward a chaotic alignment. You can speak, read, and write Common and Infernal.");
            statRolls();
            $(".charSTR").empty();
            $(".charDEX").empty();
            $(".charCON").empty();
            $(".charINT").empty();
            $(".charWIS").empty();
            $(".charCHA").empty();
            $(".charSTR").append(charSTR);
            $(".charDEX").append(charDEX);
            $(".charCON").append(charCON);
            $(".charINT").append(charINT + parseInt(1));
            $(".charWIS").append(charWIS);
            $(".charCHA").append(charCHA + parseInt(2));
            if (charGender == "male") {
                $(".charPortrait").empty();
                $(".charPortrait").attr("src", "../images/Tiefling/Male_Tiefling.png");
            }
            else if (charGender == "female") {
                $(".charPortrait").empty();
                $(".charPortrait").attr("src", "../images/Tiefling/Female_Tiefling.jpg");
            }
        }
        else {
            $(".infoTitle").empty();
            $(".infoText").empty();
        }
    });
    $(".charClass").change(function() {
        let charClass = $(".charClass").val();
        console.log(charClass);
        if (charClass == "barbarian") {
            charSprite = "/images/Sprites/male/Barbarian/pose3.png";
            $(".infoTitle").empty();
            $(".infoTitle").html("Barbarian");
            $(".infoText").empty();
            $(".infoText").append("In battle, they fight with primal ferocity. They are the relentless combatant, fueled by fury or their totem bonds with animals. They are tune with the natural order.");
        }
        else if (charClass == "bard") {
            charSprite = "/images/Sprites/male/Bard/pose3.png";
            $(".infoTitle").empty();
            $(".infoTitle").html("Bard");
            $(".infoText").empty();
            $(".infoText").append("They have learned to untangle and reshape the fabric of reality in harmony with their wishes and music. Their spells are part of their vast repertoire--a magic that they can tune to different situations. They use their wits, magic, and lore to get out of (or avoid) tight situations.");
        }
        else if (charClass == "cleric") {
            charSprite = "/images/Sprites/male/Cleric/pose3.png";
            $(".infoTitle").empty();
            $(".infoTitle").html("Cleric");
            $(".infoText").empty();
            $(".infoText").append("Clerics are intermediaries between the mortal world and the distant planes of the gods. As varied as the gods they serve, they strive to embody the handiwork of their deities. They are a conduit for divine power.");
        }
        else if (charClass == "druid") {
            charSprite = "/images/Sprites/male/Druid/pose3.png";
            $(".infoTitle").empty();
            $(".infoTitle").html("Druid");
            $(".infoText").empty();
            $(".infoText").append("A nomad devoted to the world and the powers of Nature. They are capable of adopting the form of a beast for battle or utility, of bolstering the party or healing their wounds, or laying low their enemies with nature's wrath. They know Druidic, the secret language of Druids, and can use it to leave hidden messages.");
        }
        else if (charClass == "fighter") {
            charSprite = "/images/Sprites/male/Fighter/pose3.png";
            $(".infoTitle").empty();
            $(".infoTitle").html("Fighter");
            $(".infoText").empty();
            $(".infoText").append("Questing knights, conquering overlords, royal champions, elite foot soldiers, hardened mercenaries, and bandit kings—as fighters, they all share an unparalleled mastery with weapons and armor, and a thorough knowledge of the skills of combat.");
        }
        else if (charClass == "monk") {
            charSprite = "/images/Sprites/male/Monk/pose3.png";
            $(".infoTitle").empty();
            $(".infoTitle").html("Monk");
            $(".infoText").empty();
            $(".infoText").append("They are martial artists pulling on the power of their own body to produce impressive results. Monks are masters of the human body, the chakras, and of combat. They are often very calm, and slow to anger. Many will have a sense of mysticism about them, while others are very open and philosophical, questioning everything.");
        }
        else if (charClass == "paladin") {
            charSprite = "/images/Sprites/male/Paladin/pose3.png";
            $(".infoTitle").empty();
            $(".infoTitle").html("Paladin");
            $(".infoText").empty();
            $(".infoText").append("The paladin is a warrior who has awakened to the underlying truth of the universe: that there exists a cosmic struggle between good and evil, an all-encompassing war between Light and Darkness. Only those who acknowledge the Almighty Creator, the Original from Whom all things come, only those who accept His grace and guidance, can stand against the demonic.");
        }
        else if (charClass == "ranger") {
            charSprite = "/images/Sprites/male/Ranger/pose3.png";
            $(".infoTitle").empty();
            $(".infoTitle").html("Ranger");
            $(".infoText").empty();
            $(".infoText").append("Far from the bustle of cities and towns, amid the dense-packed trees of trackless forests and across wide and empty plains, rangers keep their unending watch. They have significant experience studying, tracking, hunting, and even talking to certain types of enemies.");
        }
        else if (charClass == "rogue") {
            charSprite = "/images/Sprites/male/Rogue/pose3.png";
            $(".infoTitle").empty();
            $(".infoTitle").html("Rogue");
            $(".infoText").empty();
            $(".infoText").append("Rogues rely on skill, stealth, and their foes’ vulnerabilities to get the upper hand in any situation. They have a knack for finding the solution to just about any problem, bringing resourcefulness and versatility to their adventuring parties.");
        }
        else if (charClass == "sorcerer") {
            charSprite = "/images/Sprites/male/Sorcerer/pose3.png";
            $(".infoTitle").empty();
            $(".infoTitle").html("Sorcerer");
            $(".infoText").empty();
            $(".infoText").append("A magic user who draws their power from within, summoning their innate magical power and bending it to their will. An event in their past, or in the life of a parent or ancestor, left an indelible mark on them, infusing them with arcane magic. This font of magic, whatever its origin, fuels their spells.");
        }
        else if (charClass == "warlock") {
            charSprite = "/images/Sprites/male/Warlock/pose3.png";
            $(".infoTitle").empty();
            $(".infoTitle").html("Warlock");
            $(".infoText").empty();
            $(".infoText").append("Pacted to a powerful entity, the warlock trades favors for boons and spells. Their arcane research and the magic bestowed on them by their patron have given them facility with spells. In their study of occult lore, they have unearthed eldritch invocations, fragments of forbidden knowledge that imbue them with an abiding magical ability.");
        }
        else if (charClass == "warlord") {
            charSprite = "/images/Sprites/male/Warlord/pose3.png";
            $(".infoTitle").empty();
            $(".infoTitle").html("Warlord");
            $(".infoText").empty();
            $(".infoText").append("Accomplished Commanders, Warlords stand on the front line issuing orders and bolstering their allies with weapon in hand. Warlords know how to rally a team to win a fight. The Path of the Warlord is an exercise in leadership and willpower, as the barbarian accepts responsibility for their allies, and helps inspire them to greatness. Their allies come to respect their judgement, trust their instincts, and follow them into danger without hesitation.");
        }
        else if (charClass == "wizard") {
            charSprite = "/images/Sprites/male/Wizard/pose3.png";
            $(".infoTitle").empty();
            $(".infoTitle").html("Wizard");
            $(".infoText").empty();
            $(".infoText").append("Drawing on the subtle weave of magic that permeates the cosmos, wizards cast spells of explosive fire, arcing lightning, subtle deception, and brute-force mind control. As a student of arcane magic, they have a spellbook containing spells that show the first glimmerings of their true power.");
        }
        else {
            $(".infoTitle").empty();
            $(".infoText").empty();
        }
    });
    $(".charAlign").change(function() {
        let charAlign = $(".charAlign").val();
        console.log(charAlign);
        if (charAlign == "lawful-good") {
            $(".infoTitle").empty();
            $(".infoTitle").html("Crusader");
            $(".infoText").empty();
            $(".infoText").append("A lawful good character acts as a good person is expected or required to act. They combine a commitment to oppose evil with the discipline to fight relentlessly. They tell the truth, keep their word, help those in need, and speak out against injustice. A lawful good character hates to see the guilty go unpunished.");
        }
        else if (charAlign == "neutral-good") {
            $(".infoTitle").empty();
            $(".infoTitle").html("Benefactor");
            $(".infoText").empty();
            $(".infoText").append("A neutral good character does the best that a good person can do. They are devoted to helping others. They work with kings and magistrates but do not feel beholden to them.");
        }
        else if (charAlign == "chaotic-good") {
            $(".infoTitle").empty();
            $(".infoTitle").html("Rebel");
            $(".infoText").empty();
            $(".infoText").append("A chaotic good character acts as their conscience directs them with little regard for what others expect of them. They make their own way, but are kind and benevolent. They follow their own moral compass, which, although good, may not agree with that of society.");
        }
        else if (charAlign == "lawful-neutral") {
            $(".infoTitle").empty();
            $(".infoTitle").html("Judge");
            $(".infoText").empty();
            $(".infoText").append("A lawful neutral character acts as law, tradition, or a personal code directs them. Order and organization are paramount to them. They may believe in personal order and live by a code or standard, or they may believe in order for all and favor a strong, organized government.");
        }
        else if (charAlign == "true-neutral") {
            $(".infoTitle").empty();
            $(".infoTitle").html("Undecided");
            $(".infoText").empty();
            $(".infoText").append("True neutral characters commit themselves philosophically to neutrality. They see good, evil, law, and chaos as prejudices and dangerous extremes. They advocate the middle way of neutrality as the best, most balanced road in the long run.");
        }
        else if (charAlign == "chaotic-neutral") {
            $(".infoTitle").empty();
            $(".infoTitle").html("Free Spirit");
            $(".infoText").empty();
            $(".infoText").append("A chaotic neutral character follows their whims. They are an individualist first and last. They value their own liberty but don't strive to protect others' freedom. They avoid authority, resent restrictions, and challenge traditions. A chaotic neutral character may be unpredictable.");
        }
        else if (charAlign == "lawful-evil") {
            $(".infoTitle").empty();
            $(".infoTitle").html("Dominator");
            $(".infoText").empty();
            $(".infoText").append("A lawful evil villain methodically takes what they want within the limits of their code of conduct without regard for whom it hurts. They care about tradition, loyalty, and order but not about freedom, dignity, or life. They play by the rules but without mercy or compassion.");
        }
        else if (charAlign == "neutral-evil") {
            $(".infoTitle").empty();
            $(".infoTitle").html("Malefactor");
            $(".infoText").empty();
            $(".infoText").append("A neutral evil villain does whatever they can get away with. They are out for themselves. They shed no tears for those they kill, whether for profit, sport, or convenience. They have no love of order and hold no illusions that following laws, traditions, or codes would make them any better.");
        }
        else if (charAlign == "chaotic-evil") {
            $(".infoTitle").empty();
            $(".infoTitle").html("Destroyer");
            $(".infoText").empty();
            $(".infoText").append("A chaotic evil character does whatever their greed, hatred, and lust for destruction drive them to do. They are hot-tempered, vicious, arbitrarily violent, and unpredictable. If they are simply out for whatever they can get, they are ruthless and brutal. If they are committed to the spread of evil and chaos, they are even worse.");
        }
        else {
            $(".infoTitle").empty();
            $(".infoText").empty();
        }
    });

    // ON SUBMIT, give to player API
    $("#submitChar").click(function(event) {
        event.preventDefault();

        let charRace = $(".charRace").val();
        let charGender = $(".charGender").val();
        let charClass = $(".charClass").val();
        let charAlign = $(".charAlign").val();


        if (charRace != null && charGender != null && charClass != null && charSprite != null && charAlign != null) {

            console.log("Character created");
            
            $("#submitChar").text("Character created.");
            $("#submitChar").attr('disabled','disabled');
            
            var GameId;
            
            // Player is ready to submit character. Create game, then create character.
            $.post("/api/game").then(function (response) {
                console.log(response.id);
                GameId = response.id;

                localStorage.setItem("GameId", GameId);
    
                // The game currently has no use for these, but they're stored here for future use.
                var portrait = $(".charPortrait").val().trim()
                var str = $(".charSTR").text();
                var dex = $(".charDEX").text();
                var con = $(".charCON").text();
                var int = $(".charINT").text();
                var wis = $(".charWIS").text();
                var cha = $(".charCHA").text();
                var alignment = $(".charAlign").val().trim();
                var sprite = charSprite;
    
                var newCharacter = {
                    name: $("#playerName").val().trim(),
                    gender: $(".charGender").val().trim(),
                    race: $(".charRace").val().trim(),
                    class: $(".charClass").val().trim(),
                    hp: parseInt($(".charCON").val().trim() + parseInt(100)),
                    atk: parseInt(str),
                    spriteURL: charSprite,
                    GameId: GameId
                };
                $.post("/api/player", newCharacter).then(function() {
                    // this changes href to get a game id
                    $("#toGame").attr("href", "/game/");
                });
            });
        }
    });


    // STILL TO DO: build and hook up the game code modal
    // STILL TO DO (stretch): build and hook up the party list so that you can see the same info about party members that you can about your player character (but readonly)
});