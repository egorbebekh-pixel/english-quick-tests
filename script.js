const tests = {
  test1: {
    title: "Quick Test 1",
    sections: [
      {
        title: "Grammar",
        points: 20,
        questions: [
          q(1, "He _____ lunch at work.", ["usually have", "has usually", "usually has"], "C"),
          q(2, "My cousin _____ biology at university.", ["studies", "is studying", "study"], "A"),
          q(3, "Where _____ live?", ["you", "you do", "do you"], "C"),
          q(4, "My mother _____ work. She's retired.", ["not", "doesn't", "isn't"], "B"),
          q(5, "Uma _____ a vegetable curry and it looks delicious.", ["cooking is", "to cook", "is cooking"], "C"),
          q(6, "Be careful! You _____ a mistake.", ["are making", "making", "make"], "A"),
          q(7, "She _____ people who talk a lot.", ["not likes", "doesn't like", "don't like"], "B"),
          q(8, "A What _____?\nB I'm reading an email.", ["you do", "are you doing", "you are doing"], "B"),
          q(9, "A Why _____?\nB Because I'm happy.", ["you're smiling", "do you smile", "are you smiling"], "C"),
          q(10, "A _____?\nB She's shy and quite serious.", ["What's your sister like", "What does your sister like", "How's your sister"], "A"),
          q(11, "We _____ for a taxi. We're looking for the bus stop.", ["not waiting", "isn't waiting", "aren't waiting"], "C"),
          q(12, "What time _____ the film start?", ["does", "do", "is"], "A"),
          q(13, "A How's Freddy?\nB _____.", ["He's very friendly.", "Fine, thanks.", "He's tall and dark."], "B"),
          q(14, "A Who's that man?\nB Sorry, I _____ him.", ["'m not knowing", "don't know", "not know"], "B"),
          q(15, "A Are you working?\nB No, _____.", ["I'm not.", "I isn't.", "I don't."], "A"),
          q(16, "How often _____ your aunt and uncle?", ["are you seeing", "you see", "do you see"], "C"),
          q(17, "A Why is he _____ sunglasses?\nB Because it's very sunny today.", ["wears", "to wear", "wearing"], "C"),
          q(18, "My watch _____. It's broken.", ["isn't working", "doesn't working", "isn't work"], "A"),
          q(19, "A Does he like Mexican food?\nB Yes, _____.", ["he does.", "he do.", "he likes."], "A"),
          q(20, "A What _____ like?\nB She's got long, dark hair and she's very tall.", ["does she", "she looks", "does she look"], "C")
        ]
      },
      {
        title: "Vocabulary",
        points: 20,
        questions: [
          q(21, "mean", ["unfriendly", "serious", "generous"], "C"),
          q(22, "stupid", ["unkind", "clever", "talkative"], "B"),
          q(23, "thin", ["slim", "overweight", "bald"], "B"),
          q(24, "hard-working", ["lazy", "serious", "friendly"], "A"),
          q(25, "straight", ["long", "bald", "curly"], "C"),
          q(26, "You wear _____ on your legs.", ["tights", "a cardigan", "a scarf"], "A"),
          q(27, "This is a piece of jewellery for your arm.", ["scarf", "bracelet", "necklace"], "B"),
          q(28, "In winter, you don't usually wear _____.", ["a scarf", "shorts", "gloves"], "B"),
          q(29, "You wear them on your feet in summer.", ["sandals", "shorts", "leggings"], "A"),
          q(30, "They go on your hands in winter.", ["socks", "tracksuits", "gloves"], "C"),
          q(31, "You wear it on your neck.", ["ring", "tie", "cap"], "B"),
          q(32, "Oh no! My _____ are different colours today!", ["jeans", "trousers", "socks"], "C"),
          q(33, "You need this if your trousers are big.", ["trainers", "suit", "belt"], "C"),
          q(34, "I can't get my book. It is _____ the sofa.", ["next", "between", "behind"], "C"),
          q(35, "Mozelle is standing _____ the left of her brother Leo.", ["of", "on", "in"], "B"),
          q(36, "There's a small table _____ the two chairs.", ["under", "between", "in front"], "B"),
          q(37, "Marisa is sitting _____ to Salvatore.", ["behind", "opposite", "next"], "C"),
          q(38, "A Who's that _____ the middle of the photo?\nB That's my cousin, Andrea.", ["on", "to", "in"], "C"),
          q(39, "The TV is _____ the corner of the living room.", ["in", "from", "next"], "A"),
          q(40, "The keys are there! They're in _____ of you!", ["next", "behind", "front"], "C")
        ]
      },
      {
        title: "Pronunciation",
        points: 10,
        questions: [
          q(41, "Which word has a different sound?", ["watches", "likes", "hates"], "A"),
          q(42, "Which word has a different sound?", ["trousers", "university", "sweater"], "A"),
          q(43, "Which word has a different sound?", ["curly", "work", "directions"], "C"),
          q(44, "Which word has a different sound?", ["does", "laughs", "works"], "A"),
          q(45, "Which word has a different sound?", ["classes", "teaches", "goes"], "C"),
          q(46, "Which is the stressed syllable?", [stress("appearance", 0), stress("appearance", 1), stress("appearance", 2)], "B"),
          q(47, "Which is the stressed syllable?", [stress("extrovert", 0), stress("extrovert", 1), stress("extrovert", 2)], "A"),
          q(48, "Which is the stressed syllable?", [stress("unfriendly", 0), stress("unfriendly", 1), stress("unfriendly", 2)], "B"),
          q(49, "Which is the stressed syllable?", [stress("talkative", 0), stress("talkative", 1), stress("talkative", 2)], "A"),
          q(50, "Which is the stressed syllable?", [stress("example", 0), stress("example", 1), stress("example", 2)], "B")
        ]
      }
    ]
  },
  test2: {
    title: "Quick Test 2",
    sections: [
      {
        title: "Grammar",
        points: 20,
        questions: [
          q(1, "When we arrived, it _____.", ["was rain", "were raining", "was raining"], "C"),
          q(2, "The bus _____ outside the cinema.", ["did stop", "stopped", "was stop"], "B"),
          q(3, "We were very late, _____ we took a taxi.", ["because", "but", "so"], "C"),
          q(4, "They _____ their apartment.", ["didn't liked", "don't liked", "didn't like"], "C"),
          q(5, "When I _____ her, she was working in a supermarket.", ["met", "meet", "was meeting"], "A"),
          q(6, "I was really tired _____ I decided not to go out.", ["so", "but", "because"], "A"),
          q(7, "Who _____ that email to?", ["he wrote", "did he write", "he was writing"], "B"),
          q(8, "It was really cold in Cairo, _____ it's normally hot there.", ["because", "although", "so"], "B"),
          q(9, "_____ to a restaurant last night?", ["Did you go", "Did you went", "Were you"], "A"),
          q(10, "I usually go by car, but yesterday I _____ by bus.", ["gone", "go", "went"], "C"),
          q(11, "A Were the children playing in the garden?\nB No, they _____.", ["aren't", "wasn't", "weren't"], "C"),
          q(12, "What _____ the weather like when you were there?", ["was", "did", "is"], "A"),
          q(13, "We sat down on the beach. It started to rain five minutes _____!", ["then", "after", "later"], "C"),
          q(14, "When I saw him, he _____ working; he was watching TV.", ["didn't", "wasn't", "isn't"], "B"),
          q(15, "What _____ doing when you arrived?", ["was he", "were he", "he was"], "A"),
          q(16, "_____ it started raining, so we went inside.", ["Suddenly", "When", "After"], "A"),
          q(17, "_____ you buy any bread this morning?", ["Do", "Were", "Did"], "C"),
          q(18, "He's very tall, _____ he's not very good at basketball.", ["because", "although", "but"], "C"),
          q(19, "What _____ on your last holiday?", ["you did", "did you do", "did you"], "B"),
          q(20, "A Who _____ the match?\nB Arsenal. It was 3-0.", ["won", "did win", "was winning"], "A")
        ]
      },
      {
        title: "Vocabulary",
        points: 20,
        questions: [
          q(21, "a _____ day", ["rich", "windy", "young"], "B"),
          q(22, "a _____ crowd", ["new", "basic", "noisy"], "C"),
          q(23, "an _____ time", ["amazing", "unfriendly", "old"], "A"),
          q(24, "a _____ hotel", ["foggy", "sunny", "luxurious"], "C"),
          q(25, "a _____ museum", ["wonderful", "sunny", "helpful"], "A"),
          q(26, "My parents _____ a lot of money on their plane tickets.", ["had", "spent", "booked"], "B"),
          q(27, "We _____ bicycles for the week, so we could travel cheaply.", ["bought", "spent", "hired"], "C"),
          q(28, "Mum and Dad often go _____ the weekend.", ["swimming", "a good time", "away for"], "C"),
          q(29, "I'm _____ our flights online.", ["booking", "having", "renting"], "A"),
          q(30, "We didn't go _____ last year. We stayed in this country.", ["abroad", "holiday", "sightseeing"], "A"),
          q(31, "My cousin lives _____ Canada.", ["in", "at", "on"], "A"),
          q(32, "I can't talk now. I'm _____ a bus and it's noisy.", ["in", "at", "on"], "C"),
          q(33, "What did you study _____ university?", ["in", "at", "on"], "B"),
          q(34, "Please put those books back _____ the shelf.", ["in", "at", "on"], "C"),
          q(35, "Are you visiting your grandparents _____ Easter?", ["in", "at", "on"], "B"),
          q(36, "I _____ Carla to the new Mexican restaurant on Hills Road.", ["took", "gave", "met"], "A"),
          q(37, "Never run _____ the road. It's very dangerous.", ["across", "next", "from"], "A"),
          q(38, "We aren't ready. Can you wait _____ us?", ["to", "on", "for"], "C"),
          q(39, "Thanks for dinner. I _____ a great time.", ["passed", "had", "took"], "B"),
          q(40, "Sorry, I can't stop. I'm _____ hurry.", ["in a", "with", "to the"], "A")
        ]
      },
      {
        title: "Pronunciation",
        points: 10,
        questions: [
          q(41, "Which word has a different sound?", ["saw", "bought", "could"], "C"),
          q(42, "Which word has a different sound?", ["asked", "enjoyed", "liked"], "B"),
          q(43, "Which word has a different sound?", ["climbed", "invited", "missed"], "C"),
          q(44, "Which word has a different sound?", ["thought", "put", "took"], "A"),
          q(45, "Which word has a different sound?", ["sunbathed", "decided", "invited"], "A"),
          q(46, "Which -ed past simple ending adds an extra syllable /id/?", ["started", "produced", "used"], "A"),
          q(47, "Which -ed past simple ending adds an extra syllable /id/?", ["fixed", "decided", "asked"], "B"),
          q(48, "Which -ed past simple ending adds an extra syllable /id/?", ["directed", "called", "showed"], "A"),
          q(49, "Which -ed past simple ending adds an extra syllable /id/?", ["invented", "played", "smiled"], "A"),
          q(50, "Which -ed past simple ending adds an extra syllable /id/?", ["loved", "hoped", "created"], "C")
        ]
      }
    ]
  },
  mistakes: {
    title: "Mistake Practice",
    sections: [
      {
        title: "Grammar",
        points: 10,
        questions: [
          q(1, "I was hungry, _____ I made a sandwich.", ["because", "so", "although"], "B"),
          q(2, "I stayed at home _____ it was raining.", ["because", "so", "but"], "A"),
          q(3, "We arrived at the hotel. Ten minutes _____, it started to snow.", ["later", "then", "after"], "A"),
          q(4, "What _____ the weather like in London yesterday?", ["is", "did", "was"], "C"),
          q(5, "When I _____ Alex, he was working in a cafe.", ["meet", "met", "was meeting"], "B"),
          q(6, "A What _____ when I called?\nB I was watching a film.", ["were you doing", "did you do", "you were doing"], "A"),
          q(7, "She was tired, _____ she finished her homework.", ["so", "because", "but"], "C"),
          q(8, "_____ you go abroad last summer?", ["Were", "Did", "Was"], "B"),
          q(9, "When we arrived, the children _____ in the garden.", ["played", "were playing", "was playing"], "B"),
          q(10, "I first _____ my best friend at university.", ["met", "meet", "was meeting"], "A")
        ]
      },
      {
        title: "Vocabulary",
        points: 10,
        questions: [
          q(11, "We often go _____ for the weekend.", ["away", "swimming", "abroad for"], "A"),
          q(12, "We didn't go _____ last year. We stayed in our country.", ["holiday", "abroad", "away for"], "B"),
          q(13, "I _____ a lot of money on souvenirs.", ["booked", "spent", "had"], "B"),
          q(14, "They _____ bicycles for two days.", ["hired", "booked", "spent"], "A"),
          q(15, "It was an _____ trip. I loved every minute.", ["old", "amazing", "unfriendly"], "B"),
          q(16, "Are you seeing your family _____ Easter?", ["on", "in", "at"], "C"),
          q(17, "Can you wait _____ me outside the station?", ["to", "for", "on"], "B"),
          q(18, "I _____ my brother to a new Italian restaurant.", ["met", "gave", "took"], "C"),
          q(19, "Please don't run _____ the road.", ["across", "from", "next"], "A"),
          q(20, "Sorry, I can't talk. I'm _____ hurry.", ["with", "in a", "to the"], "B")
        ]
      },
      {
        title: "Pronunciation",
        points: 10,
        questions: [
          q(21, "Which -ed ending adds an extra syllable /id/?", ["played", "wanted", "called"], "B"),
          q(22, "Which -ed ending adds an extra syllable /id/?", ["created", "loved", "hoped"], "A"),
          q(23, "Which -ed ending adds an extra syllable /id/?", ["asked", "invented", "smiled"], "B"),
          q(24, "Which -ed ending adds an extra syllable /id/?", ["directed", "showed", "used"], "A"),
          q(25, "Which -ed ending does NOT add an extra syllable?", ["decided", "started", "played"], "C"),
          q(26, "Which -ed ending does NOT add an extra syllable?", ["created", "called", "wanted"], "B"),
          q(27, "Which word has a different vowel sound?", ["thought", "bought", "took"], "C"),
          q(28, "Which word has a different vowel sound?", ["saw", "could", "put"], "A"),
          q(29, "Which word has a different -ed sound?", ["asked", "liked", "enjoyed"], "C"),
          q(30, "Which word has a different -ed sound?", ["climbed", "played", "invited"], "C")
        ]
      }
    ]
  },
  practice2: {
    title: "Practice 2",
    sections: [
      {
        title: "Grammar",
        points: 10,
        questions: [
          q(1, "I didn't go out _____ I had a headache.", ["so", "because", "but"], "B"),
          q(2, "The train was late, _____ we missed the film.", ["so", "because", "although"], "A"),
          q(3, "We finished dinner. A few minutes _____, the phone rang.", ["later", "after", "then"], "A"),
          q(4, "What _____ you doing at eight o'clock?", ["did", "were", "was"], "B"),
          q(5, "I _____ a lot of photos on holiday.", ["took", "take", "was taking"], "A"),
          q(6, "When I arrived, my friends _____ lunch.", ["had", "were having", "was having"], "B"),
          q(7, "It was sunny, _____ it was very cold.", ["because", "so", "but"], "C"),
          q(8, "_____ she book the tickets online?", ["Was", "Did", "Were"], "B"),
          q(9, "A Who _____ the email?\nB My sister did.", ["wrote", "did write", "was writing"], "A"),
          q(10, "What _____ the hotel like?", ["was", "did", "were"], "A")
        ]
      },
      {
        title: "Vocabulary",
        points: 10,
        questions: [
          q(11, "We _____ a car for the weekend.", ["hired", "spent", "booked"], "A"),
          q(12, "They _____ a lot of money on the hotel.", ["had", "spent", "took"], "B"),
          q(13, "We usually go _____ in August.", ["abroad", "holiday", "away for"], "A"),
          q(14, "My parents are going _____ for two days.", ["abroad for", "away", "sightseeing for"], "B"),
          q(15, "The museum was _____. I want to go there again.", ["wonderful", "foggy", "rich"], "A"),
          q(16, "I was born _____ Canada.", ["at", "on", "in"], "C"),
          q(17, "We studied English _____ university.", ["at", "on", "in"], "A"),
          q(18, "Please wait _____ the bus stop.", ["for", "at", "to"], "B"),
          q(19, "She _____ me to her favourite cafe.", ["gave", "took", "met"], "B"),
          q(20, "Did you have _____ good time?", ["a", "the", "to"], "A")
        ]
      },
      {
        title: "Pronunciation",
        points: 10,
        questions: [
          q(21, "Which -ed ending adds /id/?", ["looked", "needed", "played"], "B"),
          q(22, "Which -ed ending adds /id/?", ["visited", "cleaned", "watched"], "A"),
          q(23, "Which -ed ending adds /id/?", ["ended", "opened", "missed"], "A"),
          q(24, "Which -ed ending does NOT add /id/?", ["started", "waited", "arrived"], "C"),
          q(25, "Which -ed ending does NOT add /id/?", ["decided", "wanted", "asked"], "C"),
          q(26, "Which word has a different vowel sound?", ["thought", "bought", "put"], "C"),
          q(27, "Which word has a different vowel sound?", ["saw", "caught", "could"], "C"),
          q(28, "Which word has a different -ed sound?", ["loved", "called", "hoped"], "C"),
          q(29, "Which word has a different -ed sound?", ["asked", "watched", "enjoyed"], "C"),
          q(30, "Which word has a different -ed sound?", ["wanted", "created", "played"], "C")
        ]
      }
    ]
  },
  practice3: {
    title: "Practice 3",
    sections: [
      {
        title: "Grammar",
        points: 10,
        questions: [
          q(1, "I was late _____ the bus didn't come.", ["so", "because", "but"], "B"),
          q(2, "It started raining, _____ we went inside.", ["so", "because", "although"], "A"),
          q(3, "We got to the airport. Two hours _____, our plane left.", ["then", "later", "after"], "B"),
          q(4, "What _____ the weather like last weekend?", ["is", "was", "did"], "B"),
          q(5, "When I _____ him, he was living in Rome.", ["meet", "met", "was meeting"], "B"),
          q(6, "A _____ you working at 7 p.m.?\nB No, I wasn't.", ["Did", "Was", "Were"], "C"),
          q(7, "I wanted to swim, _____ the sea was too cold.", ["but", "so", "because"], "A"),
          q(8, "What _____ you do on your last holiday?", ["were", "did", "was"], "B"),
          q(9, "When she called, I _____ dinner.", ["made", "was making", "were making"], "B"),
          q(10, "We _____ home very late last night.", ["came", "come", "were coming"], "A")
        ]
      },
      {
        title: "Vocabulary",
        points: 10,
        questions: [
          q(11, "They went _____ for the weekend.", ["away", "abroad for", "holiday"], "A"),
          q(12, "We didn't go _____ because flights were expensive.", ["holiday", "abroad", "away for"], "B"),
          q(13, "I _____ our flights yesterday.", ["booked", "spent", "hired"], "A"),
          q(14, "They _____ bikes near the beach.", ["booked", "hired", "spent"], "B"),
          q(15, "The hotel was very _____.", ["luxurious", "foggy", "young"], "A"),
          q(16, "I usually visit my cousins _____ Easter.", ["on", "in", "at"], "C"),
          q(17, "The books are _____ the shelf.", ["on", "at", "in"], "A"),
          q(18, "Can you wait _____ us?", ["to", "for", "on"], "B"),
          q(19, "He _____ his girlfriend to the cinema.", ["met", "took", "gave"], "B"),
          q(20, "Don't run _____ the road.", ["next", "from", "across"], "C")
        ]
      },
      {
        title: "Pronunciation",
        points: 10,
        questions: [
          q(21, "Which -ed ending adds /id/?", ["played", "painted", "called"], "B"),
          q(22, "Which -ed ending adds /id/?", ["used", "directed", "showed"], "B"),
          q(23, "Which -ed ending adds /id/?", ["invited", "smiled", "fixed"], "A"),
          q(24, "Which -ed ending does NOT add /id/?", ["invented", "loved", "decided"], "B"),
          q(25, "Which -ed ending does NOT add /id/?", ["created", "started", "watched"], "C"),
          q(26, "Which word has a different vowel sound?", ["thought", "took", "put"], "A"),
          q(27, "Which word has a different vowel sound?", ["saw", "bought", "could"], "C"),
          q(28, "Which word has a different -ed sound?", ["missed", "liked", "enjoyed"], "C"),
          q(29, "Which word has a different -ed sound?", ["called", "played", "asked"], "C"),
          q(30, "Which word has a different -ed sound?", ["created", "wanted", "loved"], "C")
        ]
      }
    ]
  },
  practice4: {
    title: "Practice 4",
    sections: [
      {
        title: "Grammar",
        points: 10,
        questions: [
          q(1, "I couldn't sleep _____ the hotel was noisy.", ["so", "because", "but"], "B"),
          q(2, "The cafe was full, _____ we found another place.", ["because", "so", "although"], "B"),
          q(3, "They left the museum. Half an hour _____, they were back at the hotel.", ["later", "after", "then"], "A"),
          q(4, "Where _____ you staying when you visited Rome?", ["did", "were", "was"], "B"),
          q(5, "I _____ a taxi because I was late.", ["took", "take", "was taking"], "A"),
          q(6, "When we got home, Dad _____ dinner.", ["cooked", "was cooking", "were cooking"], "B"),
          q(7, "The room was small, _____ it was very comfortable.", ["so", "because", "but"], "C"),
          q(8, "_____ they spend a lot of money?", ["Were", "Did", "Was"], "B"),
          q(9, "A Who _____ you to the station?\nB My aunt did.", ["took", "did take", "was taking"], "A"),
          q(10, "What _____ you do after lunch?", ["were", "did", "was"], "B")
        ]
      },
      {
        title: "Vocabulary",
        points: 10,
        questions: [
          q(11, "We _____ a room in a small hotel.", ["booked", "spent", "hired"], "A"),
          q(12, "They _____ too much money on taxis.", ["booked", "spent", "had"], "B"),
          q(13, "I love travelling _____ because I can practise English.", ["abroad", "holiday", "away for"], "A"),
          q(14, "We're going _____ for the weekend.", ["abroad for", "away", "sightseeing for"], "B"),
          q(15, "The weather was _____. We couldn't see anything.", ["foggy", "luxurious", "noisy"], "A"),
          q(16, "I met my friend _____ university.", ["on", "at", "in"], "B"),
          q(17, "He lives _____ a small village.", ["in", "on", "at"], "A"),
          q(18, "Can you wait _____ me for five minutes?", ["for", "to", "at"], "A"),
          q(19, "We _____ our parents to a new restaurant.", ["took", "gave", "met"], "A"),
          q(20, "She is _____ a hurry, so she can't stop.", ["with", "in", "to"], "B")
        ]
      },
      {
        title: "Pronunciation",
        points: 10,
        questions: [
          q(21, "Which -ed ending adds /id/?", ["washed", "waited", "opened"], "B"),
          q(22, "Which -ed ending adds /id/?", ["needed", "stayed", "laughed"], "A"),
          q(23, "Which -ed ending adds /id/?", ["walked", "played", "decided"], "C"),
          q(24, "Which -ed ending does NOT add /id/?", ["painted", "wanted", "cleaned"], "C"),
          q(25, "Which -ed ending does NOT add /id/?", ["visited", "directed", "missed"], "C"),
          q(26, "Which word has a different vowel sound?", ["bought", "thought", "could"], "C"),
          q(27, "Which word has a different vowel sound?", ["put", "took", "saw"], "C"),
          q(28, "Which word has a different -ed sound?", ["called", "enjoyed", "asked"], "C"),
          q(29, "Which word has a different -ed sound?", ["watched", "looked", "loved"], "C"),
          q(30, "Which word has a different -ed sound?", ["started", "needed", "opened"], "C")
        ]
      }
    ]
  },
  practice5: {
    title: "Practice 5",
    sections: [
      {
        title: "Grammar",
        points: 10,
        questions: [
          q(1, "We stayed inside _____ it was very windy.", ["so", "because", "but"], "B"),
          q(2, "The tickets were expensive, _____ we travelled by bus.", ["because", "so", "although"], "B"),
          q(3, "She opened her suitcase. A minute _____, she found her passport.", ["later", "after", "then"], "A"),
          q(4, "What _____ you doing when the rain started?", ["did", "was", "were"], "C"),
          q(5, "They _____ a lot of photos at the beach.", ["took", "take", "were taking"], "A"),
          q(6, "When I saw him, he _____ for a taxi.", ["waited", "was waiting", "were waiting"], "B"),
          q(7, "The hotel was old, _____ the staff were very friendly.", ["so", "because", "but"], "C"),
          q(8, "_____ you hire a car last week?", ["Did", "Were", "Was"], "A"),
          q(9, "A Who _____ the match?\nB Liverpool did.", ["won", "did win", "was winning"], "A"),
          q(10, "What _____ the journey like?", ["did", "was", "were"], "B")
        ]
      },
      {
        title: "Vocabulary",
        points: 10,
        questions: [
          q(11, "We _____ a table at the restaurant.", ["hired", "booked", "spent"], "B"),
          q(12, "I _____ fifty euros on presents.", ["spent", "booked", "took"], "A"),
          q(13, "They didn't go _____; they stayed near home.", ["holiday", "abroad", "away for"], "B"),
          q(14, "Let's go _____ for a few days.", ["away", "abroad for", "holiday"], "A"),
          q(15, "It was a _____ city with beautiful buildings.", ["wonderful", "windy", "rich"], "A"),
          q(16, "The train leaves _____ Easter Monday.", ["in", "at", "on"], "C"),
          q(17, "I was _____ a bus when you called.", ["on", "at", "in"], "A"),
          q(18, "We waited _____ them outside the cinema.", ["to", "for", "on"], "B"),
          q(19, "He _____ his sister to the airport.", ["took", "met", "gave"], "A"),
          q(20, "We ran _____ the road when the light was green.", ["from", "across", "next"], "B")
        ]
      },
      {
        title: "Pronunciation",
        points: 10,
        questions: [
          q(21, "Which -ed ending adds /id/?", ["worked", "wanted", "opened"], "B"),
          q(22, "Which -ed ending adds /id/?", ["created", "lived", "hoped"], "A"),
          q(23, "Which -ed ending adds /id/?", ["smiled", "invented", "asked"], "B"),
          q(24, "Which -ed ending does NOT add /id/?", ["needed", "visited", "used"], "C"),
          q(25, "Which -ed ending does NOT add /id/?", ["ended", "decided", "cleaned"], "C"),
          q(26, "Which word has a different vowel sound?", ["thought", "put", "took"], "A"),
          q(27, "Which word has a different vowel sound?", ["saw", "caught", "could"], "C"),
          q(28, "Which word has a different -ed sound?", ["liked", "missed", "called"], "C"),
          q(29, "Which word has a different -ed sound?", ["played", "loved", "watched"], "C"),
          q(30, "Which word has a different -ed sound?", ["directed", "created", "showed"], "C")
        ]
      }
    ]
  }
};

const state = {
  activeTest: "practice2",
  answers: {
    test1: {},
    test2: {},
    mistakes: {},
    practice2: {},
    practice3: {},
    practice4: {},
    practice5: {}
  },
  reveal: {
    test1: false,
    test2: false,
    mistakes: false,
    practice2: false,
    practice3: false,
    practice4: false,
    practice5: false
  },
  completed: []
};

const storageKey = "english-file-quicktests-progress";
loadProgress();

const quiz = document.querySelector("#quiz");
const scoreText = document.querySelector("#scoreText");
const progressText = document.querySelector("#progressText");
const activeTitle = document.querySelector("#activeTitle");
const meterFill = document.querySelector("#meterFill");
const showAnswersButton = document.querySelector("#showAnswers");
const resetButton = document.querySelector("#resetTest");
const copyReportButton = document.querySelector("#copyReport");
const copyStatus = document.querySelector("#copyStatus");
const tutorIntro = document.querySelector("#tutorIntro");
const tutorReport = document.querySelector("#tutorReport");
const reportText = document.querySelector("#reportText");
const tabButtons = [...document.querySelectorAll(".tab")];
const archivedTests = ["test1", "test2", "mistakes"];

const recommendations = {
  "Present simple": "Повтори порядок слов в вопросах и отрицаниях: do / does + subject + verb.",
  "Present continuous": "Отработай am / is / are + verb-ing и ситуации, где действие происходит сейчас.",
  "Question forms": "Потренируй вопросы: где нужен auxiliary, а где вопрос начинается с who / what.",
  "Descriptions": "Повтори фразы What's ... like? и What does ... look like?",
  "Short answers": "Потренируй короткие ответы: Yes, he does; No, I'm not; Fine, thanks.",
  "Adjectives": "Повтори пары противоположных прилагательных и слова для описания людей.",
  "Clothes": "Повтори одежду и типичные сочетания: wear on your legs / feet / hands.",
  "Prepositions of place": "Повтори in / on / behind / between / next to / in front of на примерах комнаты и фото.",
  "Pronunciation": "Слушай группы слов вслух и отмечай, где звук отличается.",
  "Word stress": "Повтори ударение в словах: appearance, extrovert, unfriendly, talkative, example.",
  "Past simple": "Повтори Past Simple: правильный порядок слов, did / didn't и вторую форму глагола.",
  "Past continuous": "Повтори was / were + verb-ing и разницу с Past Simple.",
  "Linkers": "Повтори because / so / but / although и смысл каждого союза.",
  "Holiday adjectives": "Повтори прилагательные для погоды, мест и впечатлений: windy, noisy, luxurious, amazing.",
  "Holiday phrases": "Повтори holiday phrases: spend money, hire bicycles, go abroad, book flights.",
  "Prepositions": "Повтори устойчивые предлоги: in Canada, on a bus, at university, on the shelf, at Easter.",
  "Verb phrases": "Повтори verb phrases: take someone to a place, run across, wait for, have a good time, in a hurry.",
  "-ed endings": "Повтори произношение -ed: /t/, /d/ и /id/ после t или d.",
  "Mixed grammar": "Повтори Past Simple, Past Continuous и связки so / because / but / later в коротких историях.",
  "Mistake vocabulary": "Повтори устойчивые фразы из путешествий: go away, go abroad, spend money, hire bikes, take someone to a place.",
  "Mistake pronunciation": "Повтори вслух пары слов и отдельно потренируй -ed: /id/ только после t или d."
};

function q(number, prompt, options, answer) {
  return { number, prompt, options, answer };
}

function stress(word, index) {
  const parts = {
    appearance: ["a", "ppear", "ance"],
    extrovert: ["ex", "tro", "vert"],
    unfriendly: ["un", "friend", "ly"],
    talkative: ["talk", "a", "tive"],
    example: ["ex", "am", "ple"]
  }[word];

  return parts
    .map((part, partIndex) => partIndex === index ? `<span class="stress">${part}</span>` : part)
    .join("");
}

function render() {
  if (state.activeTest === "basket") {
    renderBasket();
    updateTabs();
    return;
  }

  const test = tests[state.activeTest];
  document.querySelector(".summary").classList.remove("is-hidden");
  document.querySelector(".tutor").classList.remove("is-hidden");
  showAnswersButton.classList.remove("is-hidden");
  resetButton.classList.remove("is-hidden");
  copyReportButton.classList.remove("is-hidden");
  activeTitle.textContent = test.title;
  quiz.innerHTML = "";

  test.sections.forEach((section) => {
    const sectionEl = document.createElement("article");
    sectionEl.className = "section";

    const head = document.createElement("div");
    head.className = "section-head";
    head.innerHTML = `<h2>${section.title}</h2><span>${section.points} points</span>`;

    const questionsEl = document.createElement("div");
    questionsEl.className = "questions";

    section.questions.forEach((question) => questionsEl.appendChild(renderQuestion(question)));

    sectionEl.append(head, questionsEl);
    quiz.appendChild(sectionEl);
  });

  updateScore();
  renderTutorReport();
  updateTabs();
  showAnswersButton.textContent = state.reveal[state.activeTest] ? "Скрыть ответы" : "Показать ответы";
}

function renderQuestion(question) {
  const selected = state.answers[state.activeTest][question.number];
  const isAnswered = Boolean(selected);
  const isCorrect = selected === question.answer;
  const reveal = state.reveal[state.activeTest];
  const questionEl = document.createElement("article");
  questionEl.className = `question ${isAnswered ? (isCorrect ? "correct" : "wrong") : ""}`;

  const title = document.createElement("div");
  title.className = "q-title";
  title.innerHTML = `<span class="q-number">${question.number}</span><p class="prompt">${escapeText(question.prompt)}</p>`;

  const options = document.createElement("div");
  options.className = "options";
  ["A", "B", "C"].forEach((letter, index) => {
    const isThisCorrect = question.answer === letter;
    const isThisSelected = selected === letter;
    const option = document.createElement("label");
    option.className = `option ${isThisSelected && !isThisCorrect ? "is-wrong" : ""} ${(reveal || isAnswered) && isThisCorrect ? "is-correct" : ""}`;
    option.innerHTML = `
      <input type="radio" name="${state.activeTest}-${question.number}" value="${letter}" ${isThisSelected ? "checked" : ""} />
      <span><span class="letter">${letter}</span>${question.options[index]}</span>
    `;
    option.querySelector("input").addEventListener("change", () => {
      state.answers[state.activeTest][question.number] = letter;
      addCompletedIfFinished(state.activeTest);
      saveProgress();
      copyStatus.textContent = "";
      hideReportText();
      render();
    });
    options.appendChild(option);
  });

  const feedback = document.createElement("div");
  feedback.className = `feedback ${isAnswered ? (isCorrect ? "good" : "bad") : ""}`;
  feedback.textContent = feedbackText(question, selected, reveal);

  questionEl.append(title, options, feedback);
  return questionEl;
}

function feedbackText(question, selected, reveal) {
  if (selected === question.answer) return "Правильно";
  if (selected) return `Неправильно. Правильный ответ: ${question.answer}`;
  if (reveal) return `Правильный ответ: ${question.answer}`;
  return "";
}

function updateScore() {
  if (state.activeTest === "basket") {
    scoreText.textContent = `${state.completed.length}`;
    progressText.textContent = "Пройденные тесты";
    meterFill.style.width = "100%";
    return;
  }

  const allQuestions = getAllQuestions(state.activeTest);
  const answers = state.answers[state.activeTest];
  const answered = allQuestions.filter((question) => answers[question.number]).length;
  const correct = allQuestions.filter((question) => answers[question.number] === question.answer).length;
  const total = allQuestions.length;
  const percent = Math.round((answered / total) * 100);

  scoreText.textContent = `${correct} / ${total}`;
  progressText.textContent = `Ответов: ${answered} из ${total}`;
  meterFill.style.width = `${percent}%`;
}

function renderBasket() {
  document.querySelector(".summary").classList.add("is-hidden");
  document.querySelector(".tutor").classList.add("is-hidden");
  showAnswersButton.classList.add("is-hidden");
  resetButton.classList.add("is-hidden");
  copyReportButton.classList.add("is-hidden");
  activeTitle.textContent = "Корзина";
  scoreText.textContent = `${state.completed.length}`;
  quiz.innerHTML = "";

  const view = document.createElement("section");
  view.className = "basket-view";

  const head = document.createElement("div");
  head.className = "basket-head";
  head.innerHTML = `
    <div>
      <h2>Корзина</h2>
      <p>Здесь лежат старые тесты и история полностью пройденных тестов.</p>
    </div>
    <button class="ghost" type="button" id="clearBasket">Очистить корзину</button>
  `;
  view.appendChild(head);

  const archivedTitle = document.createElement("h3");
  archivedTitle.className = "basket-section-title";
  archivedTitle.textContent = "Тесты в корзине";
  view.appendChild(archivedTitle);

  const archivedGrid = document.createElement("div");
  archivedGrid.className = "basket-test-grid";
  archivedTests.forEach((testKey) => {
    const test = tests[testKey];
    const questionCount = getAllQuestions(testKey).length;
    const card = document.createElement("article");
    card.className = "basket-test";
    card.innerHTML = `
      <div>
        <h3>${escapeText(test.title)}</h3>
        <p>${questionCount} вопросов. Можно открыть и пройти заново.</p>
      </div>
      <button class="ghost" type="button" data-open-archived="${escapeText(testKey)}">Открыть</button>
    `;
    archivedGrid.appendChild(card);
  });
  view.appendChild(archivedGrid);

  const completedTitle = document.createElement("h3");
  completedTitle.className = "basket-section-title";
  completedTitle.textContent = "Пройденные результаты";
  view.appendChild(completedTitle);

  if (state.completed.length === 0) {
    const empty = document.createElement("div");
    empty.className = "basket-empty";
    empty.textContent = "Пока тут пусто. Пройди любой тест до конца, и он появится здесь.";
    view.appendChild(empty);
  } else {
    const list = document.createElement("div");
    list.className = "basket-list";
    state.completed
      .slice()
      .sort((a, b) => b.completedAt - a.completedAt)
      .forEach((item) => {
        const card = document.createElement("article");
        card.className = "basket-card";
        const topics = item.topics.length ? item.topics.map((topic) => `${topic.name}: ${topic.count}`).join(", ") : "ошибок нет";
        card.innerHTML = `
          <div>
            <h3>${escapeText(item.title)} <span class="basket-score">${item.correct}/${item.total}</span></h3>
            <p>Пройден: ${formatDate(item.completedAt)}. Ошибок: ${item.wrongCount}. Темы: ${escapeText(topics)}.</p>
          </div>
          <button class="ghost" type="button" data-remove-completed="${escapeText(item.testKey)}">Удалить</button>
        `;
        list.appendChild(card);
      });
    view.appendChild(list);
  }

  quiz.appendChild(view);

  const clearButton = document.querySelector("#clearBasket");
  clearButton.addEventListener("click", () => {
    state.completed = [];
    saveProgress();
    render();
  });

  document.querySelectorAll("[data-remove-completed]").forEach((button) => {
    button.addEventListener("click", () => {
      state.completed = state.completed.filter((item) => item.testKey !== button.dataset.removeCompleted);
      saveProgress();
      render();
    });
  });

  document.querySelectorAll("[data-open-archived]").forEach((button) => {
    button.addEventListener("click", () => {
      state.activeTest = button.dataset.openArchived;
      saveProgress();
      render();
    });
  });
}

function renderTutorReport() {
  const report = buildReport(state.activeTest);
  tutorReport.innerHTML = "";

  if (report.answered === 0) {
    tutorIntro.textContent = "Начни отвечать, и здесь появятся темы для повторения.";
    return;
  }

  tutorIntro.textContent = `${report.correct} из ${report.total}. Ошибок: ${report.wrong.length}.`;

  if (report.wrong.length === 0 && report.answered === report.total) {
    tutorReport.innerHTML = `<p>Отлично: ошибок нет. Для закрепления можно пройти второй тест или повторить произношение вслух.</p>`;
    return;
  }

  if (report.wrong.length === 0) {
    tutorReport.innerHTML = `<p>Пока ошибок нет. Продолжай, я буду собирать темы по мере ответов.</p>`;
    return;
  }

  const topics = document.createElement("div");
  topics.className = "topic-grid";
  report.topics.slice(0, 6).forEach((topic) => {
    const card = document.createElement("article");
    card.className = "topic-card";
    card.innerHTML = `
      <strong>${escapeText(topic.name)}</strong>
      <span>${topic.count} ошиб${topic.count === 1 ? "ка" : "ки"}</span>
      <p>${escapeText(recommendations[topic.name] || "Повтори эту тему и сделай 5-7 похожих примеров.")}</p>
    `;
    topics.appendChild(card);
  });

  const mistakes = document.createElement("ul");
  mistakes.className = "mistakes";
  report.wrong.slice(0, 8).forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <strong>Вопрос ${item.number}: ${escapeText(item.topic)}</strong>
      Твой ответ: ${item.selected}. Правильный: ${item.correct}.
    `;
    mistakes.appendChild(li);
  });

  tutorReport.append(topics, mistakes);
}

function buildReport(testKey) {
  const questions = getAllQuestions(testKey);
  const answers = state.answers[testKey];
  const wrong = [];
  let correct = 0;
  let answered = 0;

  questions.forEach((question) => {
    const selected = answers[question.number];
    if (!selected) return;
    answered += 1;
    if (selected === question.answer) {
      correct += 1;
      return;
    }
    const meta = getQuestionMeta(testKey, question.number);
    wrong.push({
      number: question.number,
      section: meta.section,
      topic: meta.topic,
      prompt: stripHtml(question.prompt),
      selected,
      selectedText: stripHtml(question.options[letterIndex(selected)]),
      correct: question.answer,
      correctText: stripHtml(question.options[letterIndex(question.answer)])
    });
  });

  const topicCounts = wrong.reduce((counts, item) => {
    counts[item.topic] = (counts[item.topic] || 0) + 1;
    return counts;
  }, {});

  const topics = Object.entries(topicCounts)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));

  return {
    test: tests[testKey].title,
    total: questions.length,
    answered,
    correct,
    wrong,
    topics
  };
}

function addCompletedIfFinished(testKey) {
  if (!tests[testKey]) return;
  const report = buildReport(testKey);
  if (report.answered !== report.total) return;

  const completedItem = {
    testKey,
    title: report.test,
    correct: report.correct,
    total: report.total,
    wrongCount: report.wrong.length,
    topics: report.topics,
    completedAt: Date.now()
  };

  state.completed = state.completed.filter((item) => item.testKey !== testKey);
  state.completed.push(completedItem);
}

function makeShareReport(testKey) {
  const report = buildReport(testKey);
  const lines = [
    `Отчет по ${report.test}`,
    `Результат: ${report.correct}/${report.total}. Отвечено: ${report.answered}/${report.total}. Ошибок: ${report.wrong.length}.`
  ];

  if (report.topics.length) {
    lines.push("", "Темы, которые нужно повторить:");
    report.topics.forEach((topic) => {
      lines.push(`- ${topic.name}: ${topic.count}`);
    });
  }

  if (report.wrong.length) {
    lines.push("", "Мои ошибки:");
    report.wrong.forEach((item) => {
      lines.push(`${item.number}. ${item.section} / ${item.topic}`);
      lines.push(`   Задание: ${item.prompt}`);
      lines.push(`   Я выбрал(а): ${item.selected} ${item.selectedText}`);
      lines.push(`   Правильно: ${item.correct} ${item.correctText}`);
    });
  } else {
    lines.push("", "Ошибок пока нет.");
  }

  return lines.join("\n");
}

async function copyText(text) {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(text);
    return true;
  }

  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.left = "-9999px";
  document.body.appendChild(textarea);
  textarea.select();

  try {
    return document.execCommand("copy");
  } finally {
    document.body.removeChild(textarea);
  }
}

function showReportText(text) {
  reportText.value = text;
  reportText.classList.add("is-visible");
  reportText.focus();
  reportText.select();
}

function hideReportText() {
  reportText.value = "";
  reportText.classList.remove("is-visible");
}

function getAllQuestions(testKey) {
  return tests[testKey].sections.flatMap((section) => section.questions);
}

function getQuestionMeta(testKey, number) {
  const test = tests[testKey];
  const section = test.sections.find((group) => group.questions.some((question) => question.number === number));
  return {
    section: section ? section.title : "Test",
    topic: topicFor(testKey, number)
  };
}

function topicFor(testKey, number) {
  if (testKey === "test1") {
    if ([13, 15, 19].includes(number)) return "Short answers";
    if ([10, 20].includes(number)) return "Descriptions";
    if ([1, 2, 3, 4, 7, 12, 14, 16].includes(number)) return "Present simple";
    if ([5, 6, 8, 9, 11, 17, 18].includes(number)) return "Present continuous";
    if (number >= 21 && number <= 25) return "Adjectives";
    if (number >= 26 && number <= 33) return "Clothes";
    if (number >= 34 && number <= 40) return "Prepositions of place";
    if (number >= 41 && number <= 45) return "Pronunciation";
    if (number >= 46 && number <= 50) return "Word stress";
  }

  if (testKey === "mistakes") {
    if ([1, 2, 3, 7].includes(number)) return "Linkers";
    if ([4, 5, 8, 10].includes(number)) return "Past simple";
    if ([6, 9].includes(number)) return "Past continuous";
    if ([11, 12, 13, 14].includes(number)) return "Holiday phrases";
    if ([15].includes(number)) return "Holiday adjectives";
    if ([16, 17].includes(number)) return "Prepositions";
    if ([18, 19, 20].includes(number)) return "Verb phrases";
    if (number >= 21 && number <= 26) return "-ed endings";
    if (number >= 27 && number <= 30) return "Pronunciation";
  }

  if (["practice2", "practice3", "practice4", "practice5"].includes(testKey)) {
    if ([1, 2, 3, 7].includes(number)) return "Linkers";
    if ([5, 8, 9, 10].includes(number)) return "Past simple";
    if ([4, 6].includes(number)) return "Past continuous";
    if (number >= 11 && number <= 14) return "Holiday phrases";
    if (number === 15) return "Holiday adjectives";
    if (number >= 16 && number <= 18) return "Prepositions";
    if (number >= 19 && number <= 20) return "Verb phrases";
    if (number >= 21 && number <= 25) return "-ed endings";
    if (number >= 26 && number <= 30) return "Pronunciation";
  }

  if ([1, 5, 11, 12, 14, 15, 16].includes(number)) return "Past continuous";
  if ([2, 4, 7, 9, 10, 17, 19, 20].includes(number)) return "Past simple";
  if ([3, 6, 8, 13, 18].includes(number)) return "Linkers";
  if (number >= 21 && number <= 25) return "Holiday adjectives";
  if (number >= 26 && number <= 30) return "Holiday phrases";
  if (number >= 31 && number <= 35) return "Prepositions";
  if (number >= 36 && number <= 40) return "Verb phrases";
  if (number >= 41 && number <= 45) return "Pronunciation";
  if (number >= 46 && number <= 50) return "-ed endings";
  return "Question forms";
}

function saveProgress() {
  localStorage.setItem(storageKey, JSON.stringify({
    answers: state.answers,
    reveal: state.reveal,
    activeTest: state.activeTest,
    completed: state.completed
  }));
}

function loadProgress() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey));
    if (!saved) return;
    state.answers = saved.answers || state.answers;
    state.reveal = saved.reveal || state.reveal;
    state.activeTest = saved.activeTest || state.activeTest;
    Object.keys(tests).forEach((testKey) => {
      state.answers[testKey] = state.answers[testKey] || {};
      state.reveal[testKey] = state.reveal[testKey] || false;
    });
    state.completed = saved.completed || [];
    if (!tests[state.activeTest]) state.activeTest = "practice2";
  } catch {
    localStorage.removeItem(storageKey);
  }
}

function formatDate(timestamp) {
  return new Intl.DateTimeFormat("ru-RU", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  }).format(new Date(timestamp));
}

function letterIndex(letter) {
  return ["A", "B", "C"].indexOf(letter);
}

function stripHtml(value) {
  const div = document.createElement("div");
  div.innerHTML = String(value);
  return div.textContent || div.innerText || "";
}

function updateTabs() {
  tabButtons.forEach((button) => {
    const active = button.dataset.test === state.activeTest;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-selected", active ? "true" : "false");
  });
}

function escapeText(text) {
  return text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    state.activeTest = button.dataset.test;
    saveProgress();
    copyStatus.textContent = "";
    hideReportText();
    render();
  });
});

showAnswersButton.addEventListener("click", () => {
  state.reveal[state.activeTest] = !state.reveal[state.activeTest];
  saveProgress();
  copyStatus.textContent = "";
  hideReportText();
  render();
});

resetButton.addEventListener("click", () => {
  state.answers[state.activeTest] = {};
  state.reveal[state.activeTest] = false;
  saveProgress();
  copyStatus.textContent = "";
  hideReportText();
  render();
});

copyReportButton.addEventListener("click", async () => {
  const text = makeShareReport(state.activeTest);
  try {
    const copied = await copyText(text);
    if (!copied) throw new Error("Copy blocked");
    copyStatus.textContent = "Отчет скопирован";
    hideReportText();
  } catch {
    copyStatus.textContent = "Отчет показан ниже";
    showReportText(text);
  }
});

render();
