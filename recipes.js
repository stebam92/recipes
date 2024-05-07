const recipes = [
      {
    name: 'Chleb żytni 2000 na drożdżach',
    whichMeal: "inne",
    kcal: 1786,
    ingredients: [
      {ingrName: 'mąka żytnia razowa, typ 2000', amount: 500, unit: 'g'},
      {ingrName: 'sól', amount: "1,5", unit: 'łyżeczki'},
      {ingrName: 'drożdże świeże/ drożdże instant', amount: "25 / 7", unit: "g"},
      {ingrName: 'cukier', amount: 1, unit: 'łyżeczka'},
      {ingrName: 'ciepła woda', amount: 400, unit: "ml"},
      {ingrName: 'olej lub oliwa o neutralnym smaku', amount: 2, unit: "łyżki"},
      {ingrName: 'olej do wysmarowania formy'},
      {ingrName: 'otręby i płatki owsiane do posypania (opcjonalnie)'},
    ],
    steps: [
      "Zaczyn: drożdże wkruszyć do miseczki, zasypać cukrem, wlać kilka łyżek ciepłej wody i odstawić w ciepłe miejsce na 15 minut.",
      "Do misy mieszającej wsypać mąkę, dodać sól, zaczyn, resztę ciepłej wody i olej.",
      "Wyrabiać przez około 5 minut [5 min / ???]. Ciasto będzie mocno klejące, ważne by dobrze je wyrobić.",
      "Keksówkę 22&times;10 cm wysmarować olejem i wysypać otrębami (dno i boki). Można zamiast tego wyłożyć papierem do pieczenia.",
      "Do formy przełożyć ciasto przy pomocy łyżki i wyrównać je dłonią zwilżoną zimną wodą. Wierzch posypać płatkami, lekko je docisnąć. Zawinąć w czystą ścierkę i odstawić w ciepłe miejsce na około 1,5-2 godziny.",
      "Piec w 200&deg;C (góra-dół) przez około 45-50 minut (lub dłużej, aż skórka będzie chrupiąca. (Po 45 minutach można wyjąć ostrożnie z formy i postukać w spód - powinien wydać głuchy dźwięk. W razie potrzeby włożyć z powrotem do formy, spodem do góry i dopiec kilka minut.)",
      "Studzić na metalowej kratce, kroić po całkowitym ostudzeniu."
    ],
    time: "45 minut + 2h wyrastanie + studzenie",
    notes: "Wyrabiać tylko do połączenia składników. Ciężkie chleby nie lubią długiego wyrabiania. Nie powinno też \"przerosnąć\". Chleb z mąki żytniej typu 2000 jest dość ciężki, trochę \"gliniasty\" i zawsze po upieczeniu trzeba dać mu czas na odpoczynek i całkowite ostygnięcie. Ma wyraźny, lekko orzechowy posmak i ciemny kolor.",
    imgSrc: "./images/chleb_zytni_2000.jpg"
  },
  {
    name: 'Parówki z chrzanem, sałatka z ogórka kiszonego i pomidora',
    whichMeal: "śniadanie",
    kcal: 360,
    ingredients: [
      {ingrName: 'parówki', amount: 2, unit: 'sztuki', gram: 100},
      {ingrName: 'chrzan tarty / musztarda', amount: 2, unit: 'łyżeczki'},
      {ingrName: 'cebula (np. dymka)', amount: 1, unit: 'sztuka'},
      {ingrName: 'ogórek kiszony', amount: 1, unit: 'sztuka'},
      {ingrName: 'pomidor', amount: 1, unit: 'sztuka'},
      {ingrName: 'sałata, kiełki'},
    ],
    steps: [
      "Parówki zagotować.",
      "Podawać z chrzanem lub musztardą i sałatką z sałaty, ogórka kiszonego pokrojonego w plastry i pomidora z cebulką."
    ],
    time: "5 minut",
    notes: "Parówki dobrej jakości, z wysoką zawartością mięsa (np. w Lidlu z serii PURE lub w Biedronce z serii NATUR).",
    imgSrc: "./images/parowki_z_chrzanem.jpg"
  },
  {
    name: 'Bakaliowy deser z jogurtem i madarynką',
    whichMeal: "drugie śniadanie",
    kcal: 280,
    ingredients: [
      {ingrName: 'jogurt naturalny', amount: 150, unit: 'g'},
      {ingrName: 'mandarynka', amount: 1, unit: 'sztuka'},
      {ingrName: 'miód', amount: 1, unit: 'łyżeczka', gram: 8},
      {ingrName: 'orzechy włoskie', amount: 1, unit: 'łyżka', gram: 15},
      {ingrName: 'rodzynki', amount: 1, unit: 'łyżka', gram: 15},
    ],
    steps: [
      "Mandarynkę obrać i podzielić na kawałki.",
      "Orzechy posiekać.",
      "Wymieszać rodzynki z mandarynką, orzechami i jogurtem.",
      "Polać miodem."
    ],
    time: "5 minut",
    notes: "Zamiast mandarynki można dodać 5-6 truskawek (100g), żeby zachować tę samą liczbę kalorii.",
    imgSrc: "./images/bakaliowy_deser.jpg"
  },
  {
    name: 'Kurczak szarpany w bułce',
    whichMeal: "obiad",
    kcal: 400,
    ingredients: [
      {ingrName: 'filet z piersi kurczaka', amount: 200, unit: 'g'},
      {ingrName: 'natka pietruszki / kolendra', amount: "1-2", unit: 'gałązki'},
      {ingrName: 'czosnek', amount: 1, unit: 'ząbek'},
      {ingrName: 'pomidory w puszce', amount: 200, unit: 'g'},
      {ingrName: 'sos sojowy', amount: "1,5", unit: 'łyżki', gram: 15},
      {ingrName: 'erytrol', amount: "1/2", unit: 'łyżeczki'},
      {ingrName: 'słodka papryka', amount: "1/2", unit: 'łyżeczki'},
      {ingrName: 'ostra papryka [opcjonalnie]', amount: "1/4", unit: 'łyżeczki'},
      {ingrName: 'wędzona papryka', amount: "1/4", unit: 'łyżeczki'},
      {ingrName: 'bułka grahamka (na 1 porcję)', amount: 1, unit: 'sztuka', gram: 100},
      {ingrName: 'sałata lodowa'},
      {ingrName: 'cebula czerwona', amount: "kilka", unit: 'piórek'},
      {ingrName: 'ogórki konserwowe', amount: "kilka", unit: 'plastrów'},
      {ingrName: 'pomidor', amount: 2, unit: 'grube plastry'},
    ],
    steps: [
      "Mięso pokroić w dość grubą kostkę (3-4 cm).",
      "W naczyniu miksującym umieścić natkę pietruszki i czosnek, rozdrobnić [3 s / obr. 8]. Składniki zgarnąć kopystką.",
      "Dodać pomidory, mięso z kurczaka, sos sojowy, erytrol, słodką, ostrą i wędzoną paprykę. Zamiast miarki na pokrywę naczynia miksującego nałożyć koszyczek, odparowywać [20 min / Varoma / obr. wsteczne 1].",
      "Założyć miarkę, rozdrobnić [4 s / obr. wsteczne 4].",
      "Bułki podgrzać w tosterze.",
      "Na bułce ułożyć sałatę, szarpane mięso, posypać liśćmi świeżej pietruszki.",
      "Na mięso ułożyć pół-talarki cebuli, kilka plastrów ogórka i gruby plaster pomidora, przykryć drugą połową bułki."
    ],
    time: "40 minut",
    notes: "2 porcje",
    imgSrc: "./images/kurczak_szarpany.jpg"
  },
  {
    name: 'Zupa krem z pomidorów z mozzarellą',
    whichMeal: "kolacja",
    kcal: 350,
    ingredients: [
      {ingrName: 'cebula', amount: 1, unit: 'sztuka'},
      {ingrName: 'czosnek', amount: "1-2", unit: 'ząbki'},
      {ingrName: 'olej kokosowy', amount: 1, unit: 'łyżka', gram: 10},
      {ingrName: 'pomidory w puszce', amount: "1,5", unit: 'sztuki', gram: 600},
      {ingrName: 'bazylia świeża'},
      {ingrName: 'ser mozzarella (kulka)', amount: 1, unit: 'sztuka', gram: 100},
      {ingrName: 'dynia (pestki)', amount: 2, unit: 'łyżki', gram: 20},
      {ingrName: 'oregano, sól, pieprz'},
    ],
    steps: [
      "Do naczynia miksującego włożyć cebulę i czosnek, rozdrobnić [5 s / obr. 5], składniki zgarnąć kopystką, dodać olej i dusić [2 min / 120&deg;C / obr. 1].",
      "Dodać pomidory i przyprawy (sól, pieprz, oregano), dusić [10 min / 100&deg;C / obr. 2].",
      "Dodać kilka listków bazylii i zmiksować [ok. 30-40 s / obr. 4-10 (stopniowo zwiększać obroty)].",
      "Podawać z listkami świeżęj bazylii i pokruszonym serem mozzarella, posypać pestkami dyni."
    ],
    time: "20 minut",
    notes: "2 porcje",
    imgSrc: "./images/zupa_krem_z_pomidorow.jpg"
  },
  {
    name: 'FIT pasta jajeczna',
    whichMeal: "śniadanie",
    kcal: 380,
    ingredients: [
      {ingrName: 'jajka', amount: 3, unit: 'sztuki'},
      {ingrName: 'papryka czerwona', amount: "1/2", unit: 'sztuki'},
      {ingrName: 'szczypiorek'},
      {ingrName: 'jogurt grecki', amount: 2, unit: 'łyżki', gram: 50},
      {ingrName: 'majonez', amount: 1, unit: 'łyżeczka', gram: 10},
      {ingrName: 'musztarda', amount: 1, unit: 'łyżeczka'},
      {ingrName: 'sól, pieprz ziołowy i czarny'},
      {ingrName: 'chleb żytni', amount: 4, unit: 'kromki'},
      {ingrName: 'natka pietruszki'},
      {ingrName: 'pomidor', amount: 1, unit: 'sztuka'},
      {ingrName: 'ogórek kiszony', amount: 1, unit: 'sztuka'},
      {ingrName: 'sałata lodowa'},
      {ingrName: 'kiełki'},
    ],
    steps: [
      "Jajka ugotować na twardo [14 min / Varoma / obr. 1]. Pozostawić do ostudzenia.",
      "Paprykę pokroić w kosteczkę (ewentualnie rozdrobnić [5 s / obr. 4]).", 
      "Szczypiorek posiekać.",
      "Ostudzone jajka pokroić w drobną kostkę.",
      "Całość wymieszać z jogurtem, musztardą, majonezem i przyprawami [10 s / obr. wsteczne 1,5].",
      "Ułożyć na chlebie żytnim, posypać pietruszką. Można obłożyć pomidorem i ogórkiem oraz kiełkami."
    ],
    time: "20 minut",
    notes: "2 porcje",
    imgSrc: ""
  },
  {
    name: 'Czekoladowe placki z malinami',
    whichMeal: "drugie śniadanie",
    kcal: 330,
    ingredients: [
      {ingrName: 'jogurt naturalny, gęsty', amount: 140, unit: 'g'},
      {ingrName: 'jajko', amount: 1, unit: 'sztuka'},
      {ingrName: 'ekstrakt z wanilii', amount: "1/2", unit: 'łyżeczki'},
      {ingrName: 'erytrol', amount: 1, unit: 'łyżka', gram: 10},
      {ingrName: 'kakao', amount: 1, unit: 'łyżka', gram: 10},
      {ingrName: 'proszek do pieczenia', amount: "1/2", unit: 'łyżeczki'},
      {ingrName: 'mąka orkiszowa/owsiana', amount: 70, unit: 'g'},
      {ingrName: 'olej kokosowy', amount: 1, unit: 'łyżka', gram: 10},
      {ingrName: 'maliny', amount: 100, unit: 'g'},
      {ingrName: 'syrop klonowy', amount: 2, unit: 'łyżki'},
    ],
    steps: [
      "W naczyniu miksującym umieścić jogurt, jajko, ekstrakt z wanilii, erytrol, kakao, mąkę orkiszową/owsianą, proszek do pieczenia i wymieszać [20 s / obr. 3,5] (w razie potrzeby zgarnąć kopystką, czynność powtórzyć).",
      "Patelnię rozgrzać i nasmarować niewielką ilością oleju.",
      "Za pomocą łyżki układać placki, a następnie na każdym placku układać maliny (lekko wcisnąć). Kilka malin można zostawić do dekoracji.",
      "Zmniejszyć ogień, patelnię przykryć, usmażyć z obu stron.",
      "Placki polać syropem klonowym, udekorować owocami.",
      "Podawać na zimno lub na ciepło."
    ],
    time: "25 minut",
    notes: "",
    imgSrc: ""
  },
  {
    name: 'Gulasz z kaszą',
    whichMeal: "obiad",
    kcal: 430,
    ingredients: [
      {ingrName: 'wieprzowina (schab surowy)', amount: 500, unit: 'g'},
      {ingrName: 'papryka słodka', amount: 1, unit: 'łyżeczka'},
      {ingrName: 'papryka ostra', amount: "1/2", unit: 'łyżeczki'},
      {ingrName: 'sól, pieprz'},
      {ingrName: 'marchew', amount: 2, unit: 'sztuki', gram: 90},
      {ingrName: 'pietruszka', amount: "1/2", unit: 'sztuki', gram: 40},
      {ingrName: 'cebula', amount: "1,5", unit: 'sztuki', gram: 150},
      {ingrName: 'masło klarowane', amount: 1, unit: 'łyżka', gram: 15},
      {ingrName: 'bulion (z koncentratu bulionu z TM)', amount: 2, unit: 'szklanki', gram: 500},
      {ingrName: 'mąka z ciecierzycy', amount: 1, unit: 'łyżka', gram: 10},
      {ingrName: 'kasza gryczana', amount: 200, unit: 'g'},
      {ingrName: 'ogórki kiszone', amount: 4, unit: 'spore sztuki'},
      {ingrName: 'por', amount: "1/2", unit: 'sztuki', gram: 50},
      {ingrName: 'oliwa z oliwek', amount: 1, unit: 'łyżka'},
      {ingrName: 'ocet winny/jabłkowy', amount: 1, unit: 'łyżeczka'},
      {ingrName: 'erytrol', amount: 1, unit: 'łyżeczka'},
      {ingrName: 'pieprz', amount: 1, unit: 'szczypta'},
    ],
    steps: [
      "Mięso pokroić w kostkę. Wrzucić do miski, dodać papryki, sól, pieprz wg uznania.",
      "Marchewkę i pietruszkę pokroić w pół-plasterki.",
      "Cebulę rozdrobnić [5 s / obr. 5], zgarnąć kopystką. Dodać 1 łyżkę masła klarowanego i dusić [3 min / 120&deg;C / obr. wsteczne 1].",
      "Dodać mięso i dusić [6 min / 120&deg;C / obr. wsteczne 1].",
      "Dorzucić marchewkę i pietruszkę, zalać bulionem i gotować [40-50 min / 100&deg;C / obr. wsteczne ???]",
      "Do małego słoika wsypać łyżkę mąki z ciecierzycy, dolać odrobinę wody, zakręcić, rozmieszać i dolać do gulaszu. Gotować kolejne [2 min / 100&deg;C / obr. wsteczne 0,5].",
      "Kaszę ugotować w garnku lub w TM (w koszyku, 1l wody, [18-20 min / Varoma / obr. 4]).",
      "Ogórki pokroić w cienkie plasterki lub w kosteczkę, dodać por pokrojony w cienkie pół-talarki.",
      "Wymieszać z oliwą, octem, pieprzem i erytrolem."
    ],
    time: "1 godzina 20 minut",
    notes: "4 porcje <br/> Kaszy nie należy gotować w woreczku!!!!",
    imgSrc: ""
  },
  {
    name: 'Sałatka z grillowanymi warzywami',
    whichMeal: "kolacja",
    kcal: 320,
    ingredients: [
      {ingrName: 'cebula czerwona', amount: "1/2", unit: 'sztuki'},
      {ingrName: 'cukinia', amount: "ok. 100", unit: 'g'},
      {ingrName: 'papryka czerwona', amount: "1/2", unit: 'sztuki'},
      {ingrName: 'pieczarki', amount: 4, unit: 'sztuki', gram: 100},
      {ingrName: 'fasola szparagowa', amount: 50, unit: 'g'},
      {ingrName: 'oliwa', amount: 1, unit: 'łyżka', gram: 10},
      {ingrName: 'sałata lodowa/mix sałat', amount: 2, unit: 'garście'},
      {ingrName: 'sos winegret', amount: "1,5 - 2", unit: 'łyżki'},
      {ingrName: 'parmezan tarty', amount: 1, unit: 'łyżka', gram: 12},
      {ingrName: 'zioła prowansalskie'},
      {ingrName: 'listki oregano (opcjonalnie)'},
    ],
    steps: [
      "Warzywa pokroić w plasterki i przyprawić ziołami prowansalskimi, skropić odrobiną oliwy.",
      "Opiekać na patelni grillowej lub w piekarniku na funkcji grill aż zmiękną.",
      "Mix sałat wyłożyć na talerz, polać sosem winegret.",
      "Dodać warzywa.",
      "Całość posypać parmezanem. Opcjonalnie udekorować listkami oregano."
    ],
    time: "40 minut",
    notes: "Sos winegret - w innym przepisie.",
    imgSrc: ""
  },
  {
    name: 'Sos winegret',
    whichMeal: "inne",
    kcal: "???",
    ingredients: [
      {ingrName: 'czosnek', amount: 1, unit: 'ząbek'},
      {ingrName: 'oliwa z oliwek', amount: 35, unit: 'g'},
      {ingrName: 'sok z cytryny / ocet balsamiczny/ winny/ jabłkowy', amount: "15-20", unit: 'g'},
      {ingrName: 'musztarda DIJON/miodowa', amount: "1,5", unit: 'łyżeczki', gram: 15},
      {ingrName: 'miód', amount: "1,5", unit: 'łyżeczki'},
      {ingrName: 'sól', amount: "1/4", unit: 'łyżeczki'},
      {ingrName: 'pieprz', amount: 1, unit: 'szczypta'},
    ],
    steps: [
      "Czosnek rozdrobnić [3 s / obr. 8], zgarnąć kopystką.",
      "Dodać oliwę, sok z cytryny, musztardę, miód, sól i pieprz. Wymieszać [12 s / obr 3]."
    ],
    time: "3 minuty",
    notes: "5 porcji (na 1 porcję przypada ok. 1,5 - 2 łyżek sosu) <br/> Można przyrządzić z podwójnej porcji i przechowywać w lodówce.",
    imgSrc: ""
  },
  {
    name: 'Owsianka BOUNTY',
    whichMeal: "śniadanie",
    kcal: 390,
    ingredients: [
      {ingrName: 'płatki owsiane', amount: 4, unit: 'łyżki', gram: 35},
      {ingrName: 'woda', amount: 220, unit: 'g'},
      {ingrName: 'wiórki kokosowe', amount: 1, unit: 'łyżka', gram: 6},
      {ingrName: 'mleczko kokosowe', amount: 7, unit: 'łyżek', gram: 60},
      {ingrName: 'erytrol', amount: 1, unit: 'łyżka', gram: 10},
      {ingrName: 'czekolada gorzka (min. 70%)', amount: 2, unit: 'kostki', gram: 20},
      {ingrName: 'maliny', amount: "3/4", unit: 'szklanki', gram: 100},
    ],
    steps: [
      "Płatki umieścić w naczyniu miksującym, dodać wodę i wiórki.",
      "Jeżeli maliny są mrożone, umieścić je w koszyczku.",
      "Gotować przez [12 min / 100&deg;C / obr. wsteczne 1].",
      "Dodać mleko kokosowe oraz erytrol, wymieszać [6 s / obr. wsteczne 2,5].",
      "Odstawić na ok. 10 minut, aż zgęstnieje.",
      "Przełożyć do miseczek, na wierzchu posypać kawałkami czekolady i malinami."
    ],
    time: "25 minut",
    notes: "",
    imgSrc: ""
  },
  {
    name: 'Sałatka z parmezanem',
    whichMeal: "drugie śniadanie",
    kcal: 290,
    ingredients: [
      {ingrName: 'mix sałat', amount: 2, unit: 'garście'},
      {ingrName: 'suszone pomidory', amount: 2, unit: 'plastry', gram: 15},
      {ingrName: 'pomidorki koktajlowe', amount: 5, unit: 'sztuk', gram: 100},
      {ingrName: 'ser parmezan, płatki', amount: 25, unit: 'g'},
      {ingrName: 'słonecznik łuskany', amount: 1, unit: 'łyżka'},
      {ingrName: 'sos winegret', amount: "1,5 - 2", unit: 'łyżki'},
    ],
    steps: [
      "Sałatę ułożyć na talerzu.",
      "Dodać pokrojone suszone pomidory i połówki pomidorków koktajlowych.",
      "Posypać prażonym słonecznikiem, parmezanem i polać sosem winegret."
    ],
    time: "5 minut",
    notes: "Sos winegret - w innym przepisie.",
    imgSrc: ""
  },
  {
    name: 'Pstrąg z kapustą kiszoną',
    whichMeal: "obiad",
    kcal: 400,
    ingredients: [
      {ingrName: 'pstrąg, filet', amount: 200, unit: 'g'},
      {ingrName: 'sól, pieprz, rozmaryn'},
      {ingrName: 'cytryna'},
      {ingrName: 'oliwa z oliwek', amount: "1 + 1", unit: 'łyżeczka'},
      {ingrName: 'natka pietruszki', amount: 2, unit: 'łyżeczki', gram: 10},
      {ingrName: 'marchew', amount: "1/2", unit: 'sztuki'},
      {ingrName: 'erytrol', amount: "1/2", unit: 'łyżeczki'},
      {ingrName: 'kapusta kiszona', amount: 1, unit: 'szklanka', gram: 100},
    ],
    steps: [
      "Piekarnik rozgrzać do 250&deg;C.",
      "Rybę umieścić w naczyniu żaroodpornym, skropić sokiem z cytryny, oprószyć pieprzem, solą i rozmarynem (można dodać świeży), skropić 1 łyżką oliwą.",
      "Zapiekać 10-15 minut. W tym czasie przygotować surówkę.",
      "W naczyniu miksującym rozdrobnić natkę [10 s / obr. 10]. Zgarnąć kopystką (można posiekać nożem).",
      "Dodać marchew, 1 łyżkę oliwy, erytrol i pieprz. Rozdrobnić [3 s / obr. 5], zgarnąć kopystką.",
      "Dodać kapustę i rozdrobnić [3-4 s / obr. 5]."
    ],
    time: "30 minut",
    notes: "",
    imgSrc: ""
  },
  {
    name: 'Makaron ze szpinakiem i serem Feta',
    whichMeal: "kolacja",
    kcal: 360,
    ingredients: [
      {ingrName: 'makaron pełnoziarnisty', amount: "1/2", unit: 'szklanki', gram: 60},
      {ingrName: 'oliwa', amount: 1, unit: 'łyżeczka'},
      {ingrName: 'czosnek', amount: 1, unit: 'ząbek'},
      {ingrName: 'szpinak świeży', amount: 150, unit: 'g'},
      {ingrName: 'jogurt naturalny', amount: 1, unit: 'łyżka', gram: 20},
      {ingrName: 'ser typu Feta, półtłusty', amount: 30, unit: 'g'},
      {ingrName: 'gałka muszkatołowa, sól, pieprz biały i czarny'},
    ],
    steps: [
      "Makaron ugotować.",
      "Na patelni rozgrzać oliwę, podsmażyć rozgnieciony czosnek, dodać szpinak (można poszarpać) i dusić (w razie potrzeby podlać niewielką ilością wody).",
      "Dodać jogurt oraz pokruszoną fetę, wymieszać i dusić, aż ser się nieco rozpuści.",
      "Przyprawić do smaku, dodać makaron i wymieszać."
    ],
    time: "20 minut",
    notes: "",
    imgSrc: ""
  },
  {
    name: 'Omletost',
    whichMeal: "śniadanie",
    kcal: 430,
    ingredients: [
      {ingrName: 'jajko', amount: 1, unit: 'sztuka'},
      {ingrName: 'jogurt grecki', amount: 1, unit: 'łyżka', gram: 20},
      {ingrName: 'sól, pieprz'},
      {ingrName: 'szynka szwarcwaldzka', amount: 1, unit: 'plaster', gram: 20},
      {ingrName: 'oliwa z oliwek', amount: 1, unit: 'łyżeczka'},
      {ingrName: 'chleb żytni', amount: 2, unit: "kromki"},
      {ingrName: 'pomidor', amount: "1-2", unit: "plastry"},
      {ingrName: 'ogórek kiszony', amount: 1, unit: "sztuka"},
      {ingrName: 'papryka', amount: "kilka", unit: "słupków"},
      {ingrName: 'ser żółty/parmezan', amount: 1, unit: "plaster", gram: 20},
      {ingrName: 'szpinak', amount: 1, unit: "garść"},
      {ingrName: 'ketchup (opcjonalnie)'},
    ],
    steps: [
      "Jajko roztrzepać z jogurtem, solą i pieprzem [15 s / obr. 4].",
      "Na suchej patelni podpiec 2-3 minuty szynkę.",
      "Rozgrzaną patelnię posmarować oliwą lub masłem klarowanym. Wylać masę, położyć na środku 2 kromki chleba (obok siebie).",
      "Gdy jajka się zetną, przewrócić na drugą stronę.",
      "Na jednej kromce ułożyć ser, chips z szynki, plasterki pomidora, ogórka i paprykę. Smażyć na niedużym ogniu pod przykryciem, aż ser się lekko roztopi.",
      "Dodać szpinak, można polać ketchupem.",
      "Kanapki złożyć w pół (tak, aby powstał tost z omletem i dodatkami w środku)."
    ],
    time: "25 minut",
    notes: "",
    imgSrc: ""
  },
  {
    name: 'Puszysty FIT sernik',
    whichMeal: "drugie śniadanie",
    kcal: 260,
    ingredients: [
      {ingrName: 'jajko', amount: 2, unit: 'sztuki'},
      {ingrName: 'twaróg półtłusty', amount: 200, unit: 'g'},
      {ingrName: 'jogurt naturalny', amount: 200, unit: 'g'},
      {ingrName: 'budyń śmietankowy bez cukru', amount: 1, unit: 'opakowanie', gram: 40},
      {ingrName: 'erytrol', amount: 40, unit: "g"},
      {ingrName: 'dowolne owoce (mogą być mrożone) np. maliny, borówki, owoce leśne', amount: 200, unit: "g"},
      {ingrName: 'czekolada gorzka (min. 70%)', amount: 4, unit: "kostki", gram: 40},
    ],
    steps: [
      "Białka ubić na pianę [motylek ok. 2,5 min. / obr. 3,5], przełożyć delikatnie do miseczki",
      "Twaróg, jogurt, żółtka, budyń w proszku i erytrol wymieszać [30 s / obr. 5].",
      "Dodać pianę i delikatnie wymieszać.",
      "Dodać owoce (część można zostawić do ozdoby) i ponownie przemieszać.",
      "Puszystą masę przełożyć do okrągłej foremki (18cm) lub do małej jednorazowej keksówki (18&times;8), można też użyć kokilek.",
      "Piec w piekarniku góra/dół 180&deg;C przez 40 minut.",
      "Po ostudzeniu posypać tartą czekoladą."
    ],
    time: "55 minut + studzenie",
    notes: "4 porcje",
    imgSrc: ""
  },
  {
    name: 'Pulpeciki w sosie kokosowym i marchewka z groszkiem',
    whichMeal: "obiad",
    kcal: 440,
    ingredients: [
      {ingrName: 'koperek', amount: 1, unit: 'czubata łyżka', gram: 10},
      {ingrName: 'indyk, mięso mielone', amount: 200, unit: 'g'},
      {ingrName: 'pieprz, sól, słodka papryka'},
      {ingrName: 'olej kokosowy', amount: 1, unit: 'łyżka', gram: 10},
      {ingrName: 'mleczko kokosowe', amount: 200, unit: "g"},
      {ingrName: 'musztarda', amount: 1, unit: "łyżeczka", gram: 10},
      {ingrName: 'sok z cytryny', amount: 1, unit: "łyżka", gram: 6},
      {ingrName: 'marchewka z groszkiem, mrożona', amount: "1/2", unit: "opakowania", gram: 225},
      {ingrName: 'masło ekstra', amount: 1, unit: "czubata łyżeczka", gram: 15},
      {ingrName: 'woda', amount: "1/5", unit: "szklanki", gram: 50},
      {ingrName: 'sól'},
      {ingrName: 'skrobia ziemniaczana', amount: "1/2", unit: "łyżeczki"},
    ],
    steps: [
      "Do naczynia miksującego włożyć koperek, rozdrobnić [3 s / obr. 8].",
      "Dodać mięso mielone z indyka (jeżeli mięso nie jest mielone, to rozdrobnić [15 s / obr. 6]), sól, pieprz, słodką paprykę i wymieszać [15 s / obr. wsteczne 3,5].",
      "Uformować malutkie klopsiki.",
      "Na patelni rozgrzać olej, obsmażyć kotleciki.",
      "Dodać mleczko kokosowe, musztardę, sok z cytryny i przyprawy. Dusić pod przykryciem kilka minut (ok. 10), aż pulpety dojdą w środku.",
      "Zdjąć pokrywę i gotować na średnim ogniu ciągle mieszając, aż sos zgęstnieje.",
      "Marchewkę z groszkiem rozmrozić lub przelać na sitku ciepłą wodą, aby pozbyć się nadmiaru lodu. Umieścić ją w naczyniu miksującym, dodać masło, wodę i sól. Dusić [10 min / 98&deg;C / obr. wsteczne 1].",
      "Dodać skrobię i groszek, gotować [5 min / 98&deg;C / obr. wsteczne 1].",
      "Klopsiki podawać z gotowaną marchewką z groszkiem."
    ],
    time: "45 minut",
    notes: "2 porcje",
    imgSrc: ""
  },
  {
    name: 'Tortilla z warzywami',
    whichMeal: "kolacja",
    kcal: 300,
    ingredients: [
      {ingrName: 'tortilla wieloziarnista', amount: 1, unit: 'sztuka'},
      {ingrName: 'sałata lodowa/mix sałat', amount: 1, unit: 'garść'},
      {ingrName: 'ogórek zielony/kiszony', amount: 1, unit: 'sztuka'},
      {ingrName: 'papryka czerwona', amount: "1/4", unit: 'sztuki'},
      {ingrName: 'pomidor', amount: "1/2", unit: 'sztuki'},
      {ingrName: 'cebula czerwona', amount: "1/4", unit: 'sztuki'},
      {ingrName: 'ser typu Feta, półtłusty', amount: 30, unit: 'g'},
      {ingrName: 'czosnek', amount: 1, unit: 'mały ząbek'},
      {ingrName: 'jogurt grecki', amount: 2, unit: 'łyżki'},
    ],
    steps: [
      "Placek podpiec na suchej patelni.",
      "Dodać pokrojone warzywa i fetę.",
      "Polać sosem czosnkowym (jogurt + czosnek przeciśnięty przez praskę).",
      "Tortillę zwinąć w rulon."
    ],
    time: "15 minut",
    notes: "",
    imgSrc: ""
  },
  {
    name: 'Pomarańczowa owsianka z bakaliami i cynamonem',
    whichMeal: "śniadanie",
    kcal: 400,
    ingredients: [
      {ingrName: 'morele suszone', amount: 25, unit: 'g'},
      {ingrName: 'jabłko', amount: "1/2", unit: 'sztuki', gram: 90},
      {ingrName: 'napój migdałowy (niesłodzony)', amount: "1/3", unit: 'szklanki', ml: 100},
      {ingrName: 'płatki owsiane', amount: 3, unit: 'łyżki', gram: 35},
      {ingrName: 'rodzynki', amount: 1, unit: 'łyżka', gram: 8},
      {ingrName: 'cynamon, kardamon', amount: "po szczypcie"},
      {ingrName: 'sok pomarańczowy', amount: "1/3", unit: 'szklanki', gram: 100},
      {ingrName: 'orzechy włoskie', amount: 1, unit: 'łyżka', gram: 10},
    ],
    steps: [
      "W naczyniu miksującym umieścić morele i rozdrobnić [3 s / obr. 7] (jeśli są bardzo twarde, można uprzednio namoczyć kilka minut w gorącej wodzie).",
      "Dodać jabłko i rozdrobnić [4 s / obr. 4], zgarnąć kopystką.",
      "Dodać napój migdałowy, płatki owsiane, rodzynki oraz przyprawy i gotować [8 min / 95&deg;C / obr. wsteczne 1] (w razie potrzeby można dosłodzić erytrolem i wymieszać).",
      "Przełożyć do miseczki, posypać orzechami."
    ],
    time: "15 minut",
    notes: "",
    imgSrc: ""
  },
  {
    name: 'Sałatka z serem pleśniowym i granatem',
    whichMeal: "drugie śniadanie",
    kcal: 290,
    ingredients: [
      {ingrName: 'rukola/mix sałat', amount: 2, unit: 'garście'},
      {ingrName: 'ser pleśniowy gorgonzola/lazur błękitny', amount: 30, unit: 'g'},
      {ingrName: 'cebula czerwona', amount: "1/4", unit: 'sztuki', gram: 25},
      {ingrName: 'granat', amount: "1/4", unit: 'sztuki', gram: 25},
      {ingrName: 'orzechy włoskie', amount: 1, unit: 'łyżka', gram: 10},
      {ingrName: 'czosnek', amount: 1, unit: 'ząbek'},
      {ingrName: 'świeży sok z pomarańczy (można wycisnąć)', amount: 1, unit: 'łyżka'},
      {ingrName: 'miód', amount: 1, unit: 'łyżeczka'},
      {ingrName: 'oliwa z oliwek', amount: 1, unit: 'łyżeczka'},
      {ingrName: 'ocet balsamiczny', amount: 1, unit: 'łyżeczka'},
    ],
    steps: [
      "Sałatę wyłożyć na talerz.",
      "Ser pleśniowy pokruszyć i dodać do sałaty.",
      "Cebulę pokroić w piórka.",
      "Dodać granat i lekko posiekane orzechy.",
      "Sos: Czosnek drobno posiekać, dodać sok z pomarańczy, oliwę, miód oraz ocet balsamiczny.",
      "Gotowym sosem polać sałatkę."
    ],
    time: "15 minut",
    notes: "",
    imgSrc: ""
  },
  {
    name: 'Leczo',
    whichMeal: "obiad",
    kcal: 370,
    ingredients: [
      {ingrName: 'boczek wędzony', amount: 60, unit: 'g'},
      {ingrName: 'oliwa z oliwek', amount: 2, unit: 'łyżki', gram: 20},
      {ingrName: 'kiełbasa (np. drobiowa lub z szynki)', amount: 3, unit: 'sztuki', gram: 300},
      {ingrName: 'cebula', amount: 2, unit: 'sztuki', gram: 200},
      {ingrName: 'czosnek', amount: 2, unit: 'ząbki'},
      {ingrName: 'cukinia', amount: 1, unit: 'sztuka', gram: 250},
      {ingrName: 'papryka czerwona', amount: 1, unit: 'sztuka'},
      {ingrName: 'papryka żółta', amount: 1, unit: 'sztuka'},
      {ingrName: 'fasolka szparagowa (opcjonalnie)', amount: 200, unit: 'g'},
      {ingrName: 'erytrol', amount: 1, unit: 'łyżeczka', gram: 5},
      {ingrName: 'papryka słodka, chili, pieprz, sól, oregano'},
      {ingrName: 'pomidory w puszce', amount: 1, unit: 'sztuka', gram: "350-400"},
    ],
    steps: [
      "Na suchej patelni podsmażyć boczek, dodać 1 łyżkę oliwy, pokrojoną w kostkę kiełbasę i podsmażyć. Odstawić.",
      "Do naczynia miksującego włożyć połówki cebuli i czosnek, rozdrobnić [3 s / obr. 5]. Zgarnąć kopystką.",
      "Dodać 1 łyżkę oliwy i dusić [4 min / 120&deg'C / obr. 1].",
      "Dodać kiełbasę i boczek, pokrojoną w kostkę cukinię (ze skórką), papryki oraz fasolkę pokrojoną  w 4cm kawałki, przyprawić do smaku, dodać erytrol.",
      "Dusić [10 min / 100&deg;C / obr. kopystka ???].",
      "Dodać pomidory w puszce, zamiast miarki na pokrywie naczynia umieścić koszyczek, gotować kolejne [10 min / 100&deg;C / obr. 'kopystka' ???].",
      "Doprawić do smaku."
    ],
    time: "45 minut",
    notes: "4 porcje",
    imgSrc: ""
  },
  {
    name: 'Kanapki z miodem, truskawkami i twarożkiem',
    whichMeal: "kolacja",
    kcal: 330,
    ingredients: [
      {ingrName: 'chleb żytni', amount: 2, unit: 'kromki'},
      {ingrName: 'twaróg półtłusty', amount: 50, unit: 'g'},
      {ingrName: 'truskawki', amount: "kilka", unit: 'sztuk'},
      {ingrName: 'miód', amount: "2-3", unit: 'łyżeczki', gram: 20},
      {ingrName: 'orzechy włoskie', amount: 1, unit: 'łyżka', gram: 15},
    ],
    steps: [
      "Na chlebie ułożyć cienkie plasterki twarogu, ułożyć plasterki truskawek, polać miodem i posypać rozdrobnionymi orzechami (można rozdrobnić [3 s / obr. 7])."
    ],
    time: "5 minut",
    notes: "Chleb można podgrzać w tosterze",
    imgSrc: ""
  },










  {
    name: 'Owsianka z owocami',
    whichMeal: "śniadanie",
    kcal: 400,
    ingredients: [
      {ingrName: 'jabłko (małe)', amount: 1, unit: 'sztuka', gram: 150},
      {ingrName: 'woda', amount: "2/3", unit: 'szklanki', gram: 180},
      {ingrName: 'płatki owsiane', amount: "3", unit: 'łyżki', gram: 30},
      {ingrName: 'cynamon', amount: "1", unit: 'szczypta'},
      {ingrName: 'miód', amount: "1", unit: 'łyżka', gram: 25},
      {ingrName: 'borówki', amount: "1", unit: 'garść', gram: 50},
      {ingrName: 'maliny', amount: "1", unit: 'garść', gram: 50},
      {ingrName: 'płatki migdałów', amount: "1", unit: 'łyżka', gram: 10},
    ],
    steps: [
      "Jabłko obrać, pokroić na ćwiartki i rozdrobnić [4 s / obr. 5]. Przełożyć do innego naczynia.",
      "Do naczynia miksującego wlać wodę, dodać płatki owsiane i cynamon.",
      "Gotować [10 min / 95&deg;C / obr. wsteczne 1].",
      "Dodać jabłko i miód, wymieszać z zatkaną miarką [10 s / obr. wsteczne 1,5].",
      "Przełożyć do miseczki, posypać owocami i płatkami migdałów."
    ],
    time: "15 minut",
    notes: "",
    imgSrc: ""
  },
    {
    name: 'Sałatka z pomarańczą, mozzarellą i orzechami włoskimi',
    whichMeal: "drugie śniadanie",
    kcal: 330,
    ingredients: [
      {ingrName: 'szpinak', amount: 2, unit: 'garście'},
      {ingrName: 'ser mozzarella', amount: "50", unit: 'g'},
      {ingrName: 'pomarańcza', amount: "1/2", unit: 'sztuki'},
      {ingrName: 'oliwa', amount: "1", unit: 'łyżeczka'},
      {ingrName: 'miód', amount: "1", unit: 'łyżeczka'},
      {ingrName: 'ocet balsamiczny', amount: "1", unit: 'łyżeczka'},
      {ingrName: 'orzechy włoskie', amount: "1", unit: 'łyżka', gram: 15}
    ],
    steps: [
      "Do miseczki wrzucić szpinak, pokrojone w kosteczkę pomarańczę i mozzarellę.",
      "Polać dressingiem z oliwy, miodu i octu balsamicznego, posypać orzechami."
    ],
    time: "5 minut",
    notes: "",
    imgSrc: ""
  },
  {
    name: 'Kurczak z sosem czosnkowym i warzywami',
    whichMeal: "obiad",
    kcal: 420,
    ingredients: [
      {ingrName: 'filet z piersi kurczaka', amount: "1/2", unit: 'sztuki', gram: 150},
      {ingrName: 'marynata'},
      {ingrName: 'oliwa z oliwek', amount: "1", unit: 'łyżka', gram: 10},
      {ingrName: 'fasolka szparagowa/warzywa na parze', amount: "200", unit: 'g'},
      {ingrName: 'czosnek granulowany'},
      {ingrName: 'sezam', amount: "1", unit: 'łyżka', gram: 10},
      {ingrName: 'czosnek', amount: "1", unit: 'ząbek'},
      {ingrName: 'jogurt naturalny, gęsty', amount: "2", unit: 'łyżki', gram: 40},
      {ingrName: 'sól, pieprz, oregano'},
      {ingrName: 'koperek', amount: "1", unit: 'łyżka'},
    ],
    steps: [
      "Filet z kurczaka lekko rozbić, marynować w przyprawach z oliwą, ułożyć w głębokim wkładzie (można też ugrillować), a w górnej wkładce umieścić fasolkę szparagową/warzywa (można lekko osolić).",
      "Do naczynia miksującego wlać 600g wody (lub bulionu). Gotować mięso i warzywa [ok. 20 min / ??? &deg;C / obr. wsteczne 1]",
      "W miseczce wymieszać jogurt, czosnek przeciśnięty przez praskę i koperek (można pominąć), doprawić do smaku.",
      "Mięso podawać z sosem i z fasolką szparagową lub warzywami wymieszanymi z czosnkiem granulowanym i posypanym uprażonym na suchej patelni sezamem."
    ],
    time: "35 minut + marynowanie",
    notes: "Marynata - według uznania, np. sól, pieprz, papryka słodka, zioła prowansalskie lub przyprawa do grilla (bez e-dodatków)",
    imgSrc: ""
  },
    {
    name: 'Łosoś grillowany/gotowany na parze z tzatziki',
    whichMeal: "obiad",
    kcal: 410,
    ingredients: [
      {ingrName: 'ogórek', amount: 1, unit: 'sztuka', gram: 100},
      {ingrName: 'czosnek', amount: 1, unit: 'ząbek'},
      {ingrName: 'jogurt grecki', amount: 2, unit: 'łyżki', gram: 40},
      {ingrName: 'erytrol', amount: "1/2", unit: 'łyżeczki'},
      {ingrName: 'ocet winny/jabłkowy', amount: "1", unit: 'łyżeczka'},
      {ingrName: 'łosoś, świeży', amount: 150, unit: 'g'},
      {ingrName: 'sól, pieprz ziołowy', amount: 'do smaku'},
      {ingrName: 'sok z cytryny', amount: "1", unit: 'łyżeczka'},
      {ingrName: 'fasolka szparagowa/warzywa na parze', amount: 200, unit: 'g'},
    ],
    steps: [
      "Do naczynia miksującego włożyć ogórek i odrobinę posolić, rozdrobnić [3 s / obr. 5]. Przełożyć do koszyczka i usunąć nadmiar wody dociskając dłońmi.",
      "Do naczynia włożyć czosnek, rozdrobnić [3 s / obr. 7].",
      "Dodać ogórki, jogurt grecki, erytrol i ocet. Wymieszać [10 s / obr. wsteczne 1,5], przełożyć do miseczki i wymieszać z ogórkami. Umyć naczynie miksujące.",
      "Rybę przyprawić solą, pieprzem ziołowym i skropić sokiem z cytryny.",
      "Ułożyć na górnym wkładzie (można też zapiekać w piekarniku). W dolnej przystawce umieścić warzywa (można lekko osolić). Do naczynia miksującego wlać 500g wody, nałożyć przystawki, gotować na parze [15-20 min / ??? / obr. 1].",
      "Rybę podawać z sosem tzatziki i fasolką szparagową/warzywami (można doprawić solą, czosnkiem granulowanym)."
    ],
    time: "30 minut",
    notes: "",
    imgSrc: ""
  },
      {
    name: 'Kanapki z śródziemnomorską pastą',
    whichMeal: "kolacja",
    kcal: 280,
    ingredients: [
      {ingrName: 'bazylia (świeża)', amount: 1, unit: 'garść'},
      {ingrName: 'oliwki czarne', amount: 5, unit: 'sztuk', gram: 20},
      {ingrName: 'pomidory suszone w oleju', amount: 6, unit: 'plastrów', gram: 40},
      {ingrName: 'ser typu "Feta"', amount: "1/2", unit: 'kostki', gram: 100},
      {ingrName: 'serek śmietankowy, naturalny (np. Almette)', amount: "2", unit: 'łyżki', gram: 50},
      {ingrName: 'koncentrat pomidorowy 30%', amount: 1, unit: 'łyżeczka', gram: 15},
      {ingrName: 'chleb żytni', amount: 2, unit: "kromki"},
      {ingrName: 'warzywa (np. pomidor, ogórek, papryka, kiełki, szpinak/sałata)'},
    ],
    steps: [
      "Do naczynia miksującego włożyć bazylię, rozdrobnić [3 s / obr. 8], zgarnąć na dno.",
      "Dodać oliwki, rozdrobnić [10 s / obr. 4,5].",
      "Dodać odsączone pomidory, ser feta, twarożek, koncentrat pomidorowy, rozdrobnić [8 s / obr. 8]. Gdyby pasta była zbyt gęsta, dodać 2-3 łyżki jogurtu.",
      "Podawać na chlebie, z warzywami."
    ],
    time: "5 minut",
    notes: "",
    imgSrc: ""
  },
];