/* ============ Firebase Setup ============ */
const firebaseConfig = {
  apiKey: "AIzaSyCocRKFgc9JLWe3jBnZF5QCaEviWeIBM-0",
  authDomain: "find-the-imposter-46c18.firebaseapp.com",
  databaseURL: "https://find-the-imposter-46c18-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "find-the-imposter-46c18",
  storageBucket: "find-the-imposter-46c18.firebasestorage.app",
  messagingSenderId: "755841402681",
  appId: "1:755841402681:web:9b6d4ec6a39c41529bcae8"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

/* ============ Fragen-Kategorien (unverändert) ============ */
const categories = {
    // 1. Musiker
    "1": [
        "Welcher Musiker ist deiner Meinung nach völlig überbewertet?",
        "Welchen Musiker hast du am liebsten als Teenager gehört?",
        "Wer ist der Lieblingsmusiker eurer Eltern?",
        "Welcher Musiker läuft bei dir gerade rauf und runter?",
        "Welcher Musiker sollte seine eigene Reality-TV-Show kriegen?",
        "Welcher Musiker ist deiner Meinung nach sehr attraktiv?",
        "Welcher Musiker ist ein absoluter Geheimtipp?",
        "Bei welchem Musiker gehst du auf 3 Promille gerne total ab?",
        "Wer singt deinen derzeitigen Lieblingssong?",
        "Mit welchem Musiker würdest du gerne mal das Nachtleben unsicher machen?",
        "Welcher Musiker ist dein heimliches Guilty Pleasure?",
        "Welchen Musiker könntest du locker unter den Tisch trinken?",
        "Welcher Musiker hat deiner Meinung nach die beste Stimme?",
        "Welchen Musiker würdest du gerne mal im Dschungelcamp sehen?",
        "Welcher Musiker würde dich ohne Probleme unter den Tisch trinken?",
        "Welchen Musiker willst du noch unbedingt live sehen?"
    ],
    // 2. Zahlenzauber (1 bis 10)
    "2": [
        "Wie oft gehst du am Tag auf die Toilette?",
        "Wie häufig am Tag wäscht du dir deine Hände?",
        "Wie häufig isst du etwas am Tag?",
        "Wie häufig in der Woche gehst du zum Supermarkt?",
        "Wie viele Unterhosen nimmst du mit wenn du für 7 Tage verreist?",
        "Wie oft duscht du in der Woche?",
        "In wie vielen WhatsApp-Gruppen bist du derzeit ca. drin?",
        "Wie oft warst du in diesem Monat schon verkatert?",
        "Wie viele Liegestütze schaffst du?",
        "Wie viele Maß schaffst du maximal auf der Wiesn?",
        "Wie viele Stunden brauchst du, um komplett ausgeschlafen zu sein?",
        "Wie viele Biere sind perfekt für einen lustigen Abend?",
        "Wie viele Filme hast du dieses Jahr schon gesehen?",
        "Wie viele Stunden verbringst du täglich auf Instagram?",
        "Ab wie vielen Shots musst du dich übergeben?",
        "Wie oft bestellst du Essen über Lieferdienste im Monat?",
        "Wie oft warst du schon außerhalb Europas?",
        "Wie oft trinkst du durchschnittlich pro Woche Alkohol?"

    ],
    // 3. Hollywood Calling
    "3": [
        "Was ist dein absoluter Lieblingsfilm?",
        "Welchen Film oder Serie würdest du als DEN Klassiker schlechthin bezeichnen?",
        "Welchen Film oder Serie kennt sonst keiner aus der Runde?",
        "Welcher Film oder Serie hat den besten Hauptcharakter?",
        "Welcher Film oder Serie hat den besten Bösewicht?",
        "Welcher Film oder Serie hatte für dich das überraschendste Ende?",
        "Welcher Film oder Serie ist deiner Meinung nach total schlecht geschrieben?",
        "Welcher Film oder Serie hätte deiner Meinung nach einen Oscar verdient gehabt?",
        "In welchem Film oder Serie hättest du gerne eine Hauptrolle?",
        "Welchen Film oder Serie kannst du überhaupt nicht leiden?",
        "Welcher Film oder Serie ist perfekt fürs erste Date?",
        "Welchen Film oder Serie hast du zuletzt im Kino gesehen?",
        "Welchen Film oder Serie würdest du gerne nochmal zum allersten Mal ansehen?",
        "Welcher Film oder Serie hat dich als Kind am meisten geprägt?",
        "Aus welchem Film oder Serie zitierst du in deinem Alltag am häufigsten?"
    ],
    // 4. Legenden des Sports
    "4": [
        "Welcher Sportler war/ist zu lange über seinem Zenit noch aktiv?",
        "Mit welchem Sportler wärst du gerne für einen Abend am Ballermann?",
        "Welcher Sportler ist extrem hässlich?",
        "Welchen Sportler würdest du zum Bundeskanzler wählen?",
        "Welcher Sportler glaubst du ist privat total anders im Gegensatz zu seinem öffentlichen Auftreten?",
        "Welcher Sportler sollte seine eigene Reality-TV Show kriegen?",
        "Welchen Sportler würdest du gerne mal im Dschungelcamp sehen?",
        "Welcher Sportler würde deiner Meinung nach unter der Brücke landen, wenn er kein Talent gehabt hätte?",
        "Welcher Sportler würde in einem Wettlauf gegen dich verlieren?",
        "Welcher Sportler ist sehr attraktiv?",
        "Welcher Sportler ist der größte Bad Boy/Bad Girl?",
        "Mit welchem Sportler würdest du gerne einen Tag tauschen?",
        "Welchen Sportler würdest du gerne auf ein Bier einladen?",
        "Welcher Sportler glaubst du ist privat ein richtiges Arschloch?",
        "Welcher Sportler könnte deiner Meinung nach in einem anderen Sport ebenfalls erfolgreich sein?"

    ],
    // 5. Weltreise
    "5": [
        "In welchem Land leben die schönsten Frauen?",
        "Welches Land hat die nervigsten Touristen?",
        "Bei welchem Land musst du schmunzeln, wenn du die Leute Englisch sprechen hörst?",
        "Welches Land hasst du?",
        "Welches Land hat deiner Meinung nach die größte Landschafts- & Naturvielfalt?",
        "Welches Land liebst du?",
        "In welchem Land würdest du gern leben?",
        "Wo hattest du deinen schönsten Urlaub?",
        "In welches Land möchtest du unbedingt in den nächsten Jahren reisen?",
        "Welches Land findest du komplett überflüssig?",
        "Welches Land hat das leckerste Essen?",
        "Welches Land ist die größte Fußballmacht der Geschichte?",
        "Wo leben die liebsten Menschen?",
        "Welches Land würdest du morgen besuchen, wenn du könntest?",
        "In welchem Land würdest du gerne für 1 Jahr leben?"
    ],
    // 6. Prozente, Baby!
    "6": [
        "Wie viel Prozent deines Lottogewinns würdest du deinen Eltern geben?",
        "Zu wie viel Prozent besteht deine Bildergalerie aus Screenshots von Weg- und Fahrtrouten?",
        "Wie viel Prozent deines monatlichen Einkommens legst du für schlechte Zeiten zur Seite?",
        "Wie viel Prozent deiner Onlinekäufe schickst du wieder zurück?",
        "Nach wie viel Prozent deiner Toilettenbesuche wäscht du dir die Hände?",
        "Wie viel Prozent der Menschen, denen du auf Social Media folgst, kennst du auch wirklich privat?",
        "Wie viel Prozent der Filme, die du anfängst schaust du auch wirklich zu Ende?",
        "Wie viel Prozent deines Kleiderschranks trägst du regelmäßig?",
        "Wie viel Prozent deines Urlaubs verbringst du ca. im Ausland?",
        "Wie viel Prozent deines Lottogewinnsbekommen deine engsten Freunde?",
        "Wie viel Prozent deines Lottogewinns würdest du für wohltätige Zwecke spenden?",
        "Wie viel Prozent Trinkgeld gibst du normalerweise?",
        "Wie viel Prozent deines Einkommens gibst du ca. für Alkohol und Party aus?",
        "Bei wie viel Prozent Akku schließt du dein Handy an?",
        "Wie viel Prozent deines Freundeskreises siehst du regelmäßig?",
        "An wie viel Prozent deiner Träume in der Woche erinnerst du dich ca. noch nach dem Aufwachen?"
    ],
    // 7. Bodytalk
    "7": [
        "Auf welches Körperteil bist du besonders stolz?",
        "Welches deiner Körperteile dürften alle am Tisch jetzt anfassen?",
        "An welchem Körperteil hast du am häufigsten Schmerzen?",
        "Welches Körperteil muss in deinem Alltag am meisten aushalten?",
        "Welches Körperteil verabschiedet sich wohl als Erstes in den Ruhestand?",
        "Welches Körperteil ist deutlich wichtiger als viele finden?",
        "Welches Körperteil würdest du dir niemals tätowieren lassen?",
        "Wo würdest du am wenigsten gern geschlagen werden?",
        "Auf welches Körperteil könntest du am ehesten verzichten?",
        "Welches Körperteil findest du bei anderen besonders erotisch?",
        "Welches Körperteil würdest du als Erstes oder Nächstes tätowieren lassen?"
    ],
    // 8. Cheers & Beers
    "8": [
        "Welches Getränk trinkst du am häufigsten?",
        "Welches Getränk trinkst du am liebsten nach dem Sport?",
        "Welches Getränk trinkst du gerne im Sommer?",
        "Welches Getränk ist total overhyped?",
        "Welches Getränk würdest du selber herstellen, wenn du könntest?",
        "Welches Getränk würdest du jetzt gerne bestellen?",
        "Welches Getränk kannst du nicht ausstehen?",
        "Was ist dein perfektes Kater-Getränk?",
        "Welches Getränk erinnert dich an Urlaub?",
        "Welches Getränk bestellst du am häufigsten in Restaurants?",
        "Welches Getränk eignet sich perfekt zum Mischen?",
        "Was ist das Lieblingsgetränk deines rechten Nachbarn?",
        "Was ist das Lieblingsgetränk deines linken Nachbarn?"
    ],
    // 9. Spotlight On
    "9": [
        "Wer von euch ist der Lustigste?",
        "Wer von euch würde am ehesten bei einem Unfall helfen?",
        "Wer von euch wird als Erstes Vater/Mutter?",
        "Wer von euch isst am meisten?",
        "Wer von euch lügt am häufigsten?",
        "Wer von euch ist der Geizigste?",
        "Wer von euch hat das meiste Talent?",
        "Wer von euch kann am besten singen?",
        "Wer von euch wird am ehesten Millionär?",
        "Wer von euch findet am schnellsten irgendwo neue Freunde?",
        "Wer von euch verträgt am meisten Alkohol?",
        "Wer von euch hat am meisten Geld auf der Bank?",
        "Wer von euch kann am besten lügen?",
        "Wer von euch ist am fleißigsten?",
        "Wer von euch ist am intelligentesten?",
        "Wer von euch ist der Sportlichste?",
        "Wer von euch landet am ehesten im Gefängnis?",
        "Wer von euch ist am romantischsten?",
        "Wer von euch hat am meisten Rizz?"
    ],
    // 10. Snack Attack
    "10": [
        "Was ist dein absolutes Lieblingsgericht?",
        "Was ist ein gutes Gericht für das erste Date?",
        "Welches Gericht erinnert dich an deine Kindheit?",
        "Was ist deine perfekte Kater-Mahlzeit?",
        "Was kochst du dir selbst am liebsten?",
        "Welches Gericht bestellst du am häufigsten bei Lieferdiensten?",
        "Was war das teuerste Gericht, das du je bestellt hast?",
        "Welches Gericht kannst du gar nicht ab?",
        "Welches Gericht haben deine Großeltern häufig für dich gekocht?",
        "Welches Gericht haben deine Eltern häufig für dich gekocht?",
        "Welches Gericht ist deiner Meinung nach viel zu überteuert?",
        "Welches Gericht hat den besten Geruch?",
        "Was ist das beste Gericht, um eine gute Grundlage zu haben, bevor du auf eine Party gehst?"
    ],
    // 11. Hand aufs Herz
    "11": [
        "Hast du jemals in einer Prüfung geschummelt?",
        "Wärst du bereit allen am Tisch jetzt deinen Suchverlauf zu zeigen?",
        "Hast du jemals bei Freunden in die Wohnung gekotzt?",
        "Kannst du jemanden am Tisch in Wirklichkeit gar nicht leiden?",
        "Wärst du bereit allen am Tisch jetzt deine letzte versendete und empfangene WhatsApp-Nachricht laut vorzulesen?",
        "Hast du dich schon mal ernsthaft geprügelt?",
        "Warst du schon mal vor deinen Eltern rotzbesoffen?",
        "Bist du schon mal voll gegen ein Straßenschild oder -laterne gelaufen, weil du nur auf dein Handy geguckt hast?",
        "Bist du schon mal aus einer Bar oder einem Club geflogen?",
        "Hast du schon mal etwas gestohlen?",
        "Bist du schon mal betrunken zur Arbeit oder Schule gegangen?",
        "Hast du schon mal jemanden absichtlich geghostet?",
        "Hast du schon mal jemanden betrunken angerufen, den du nicht hättest anrufen sollen?",
        "Warst du schon mal in jemanden verliebt, der nichts davon wusste?",
        "Hast du zu Schulzeiten jemals einen Verweis kassiert?"
    ],
    // 12. Würdest du für…?
    "12": [
        "Würdest du für 100.000 € ein ganzes Jahr lang auf dein Handy verzichten?",
        "Würdest du für 25.000 € ein ganzes Jahr lang als Soldat dienen?",
        "Würdest du für 1.000 € eine Woche im Sommer nicht duschen?",
        "Würdest du für 10.000 € zwei Runden lang gegen Mike Tyson im Ring boxen?",
        "Würdest du dir für 3.000.000 € deinen rechten Arm abhacken lassen?",
        "Würdest du für 100.000 € aus Deutschland auswandern?",
        "Würdest du für 5.000.000 € nach Nordkorea ziehen?",
        "Würdest du für 100 € von einem 10 Meter Brett im Schwimmbad springen?",
        "Würdest du für 5.000 € deinen Job kündigen?",
        "Würdest du für 50.000 € ein ganzes Jahr auf Alkohol verzichten?",
        "Würdest du für 50.000 € ein ganzes Jahr auf Zigaretten verzichten?",
        "Würdest du für 250.000 € ein ganzes Jahr dein Zuhause nicht mehr verlassen?",
        "Würdest du für 250.000 € einen Porno drehen und veröffentlichen?",
        "Würdest du dir für 50 € von einer fremden Person eine Ohrfeige geben lassen?",
        "Würdest du dir für 20.000 € ein Tattoo in der Größe einer 2€-Münze stechen lassen, das dein rechter Nachbar auswählt?"
    ],
    // 13. Money, Money, Money (bis 500€)
    "13": [
        "Was ist die größte Summe, die du jemals an einem Geldautomaten abgehoben hast?",
        "Wie viel Geld gibst du ca. im Monat für Klamotten aus?",
        "Wie viel Geld gibst du ca. im Monat bei Fast-Food-Ketten aus?",
        "Wie viel Geld gibst du ca. im Monat in Supermärkten aus?",
        "Wie viel Taschengeld würdest du deinem Kind monatlich geben?",
        "Wie viel Geld gibst du ca. durchschnittlich am Tag aus?",
        "Wie viel Geld wärst du bereit im Monat für wohltätige Zwecke zu spenden?",
        "Wie viel Geld bist du bereit im Supermarkt für einen Wodka auszugeben?",
        "Wie viel Geld gibst du im Monat ca. für Alkohol aus?",
        "Was war die höchste Geldsumme, die du jemals verloren hast?",
        "Wie viel Geld gibst du im Monat ca. für Zigaretten aus?",
        "Wie viel Geld gibst du ca. im Monat für Lieferdienste aus?",
        "Wie viel Geld gibst du ca. im Monat für Streaming-Anbieter aus?",
        "Welche Summe pro Person ist deine Schmerzgrenze, wenn du mit Freunden Essen gehst?",
        "Wie viel Geld würden dir deine Eltern für einen einwöchigen Urlaub geben, wenn du sie darum fragst?"
    ],
    // 14. Uhrzeiten
    "14": [
        "Wann ist die perfekte Uhrzeit, um sonntags aufzustehen?",
        "Wann ist die beste Uhrzeit fürs Fitnessstudio?",
        "Wann ist die beste Uhrzeit, um etwas zu essen?",
        "Wann ist die beste Uhrzeit um den Wocheneinkauf zu erledigen?",
        "Wann sollte man am besten zu Abend essen?",
        "Wann ist die perfekte Zeit, um ins Büro zu kommen?",
        "Um wie viel Uhr gehst du idealerweise schlafen?",
        "Wann ist die beste Uhrzeit zum Masturbieren?",
        "Wann solltest du samstags deine nervigen Pflichten erledigen?",
        "Wann darf am Samstag das erste Bierchen aufgemacht werden?",
        "Um wie viel Uhr gehst du in der Regel duschen?"
    ],
    // 15. Lieder
    "15": [
        "Welches Lied ist ein absoluter Party-Hit?",
        "Welches Lied kannst du derzeit gar nicht mehr hören?",
        "Welches Lied bringt dich zum Weinen?",
        "Welches Lied verbindest du immer mit genau einer Person?",
        "Welches Lied ist perfekt zum Kuscheln?",
        "Welches Lied würdest du auf deiner Beerdigung spielen lassen?",
        "Welches Lied wäre dein Go-To Song beim Karaoke?",
        "Welches Lied verbindest du am Meisten mit Liebeskummer?",
        "Welches Lied eignet sich perfekt zum Autofahren?",
        "Welches Lied verbindest du mit Sommer?",
        "Welches Lied hast du zuletzt heruntergeladen?",
        "Welches Lied erinnert dich an deine Kindheit?"
    ],
    // 16. Stars & Sternchen
    "16": [
        "Welchem Promi würdest du sofort einen Heiratsantrag machen?",
        "Welchen Promi würdest du gerne mal im Dschungelcamp sehen?",
        "Welcher Promi sollte seine eigene Reality-TV Show kriegen?",
        "Welchen Promi würdest du deine Kinder babysitten lassen?",
        "Welcher Promi wäre bei Kiss, Marry, Kill auf jeden Fall dein Kiss?",
        "Welcher Promi wäre bei Kiss, Marry, Kill auf jeden Fall dein Marry?",
        "Welcher Promi wäre bei Kiss, Marry, Kill auf jeden Fall dein Kill?",
        "Bei welchem Promi fragst du dich, warum dieser überhaupt berühmt ist?",
        "Mit welchem Promi würdest du gerne mal ein Bierchen trinken?",
        "Welchen Promi würdest du in einem 1v1 Kampf besiegen?",
        "Welcher Promi ist deiner Meinung nach dumm wie Brot?",
        "Wer ist die bekannteste Person, die du schon persönlich gesehen hast?"
    ],
    // 17. Machen & Tun
    "17": [
        "Was machst abends immer, bevor du schlafen gehst?",
        "Was ist etwas, dass du jedes Wochenende machst?",
        "Was würdest du in deiner eigenen TV-Show machen?",
        "Was machst du so oft, dass es schon eine Sucht ist?",
        "Was wäre dein Kernthema auf deinem TikTok-Kanal?",
        "Wenn du eine nervige Angewohnheit für immer abstellen könntest. Welche wäre es?",
        "Was tust du am liebsten an einem freien Nachmittag?",
        "Was machst du morgens immer, bevor du ins Büro oder zur Schule gehst?",
        "Was würdest du tun, wenn du für einen Tag das andere Geschlecht wärst?",
        "Was machst du am liebsten, wenn du im Urlaub bist?",
        "Was würdest du dir gönnen, wenn du jetzt 100€ bekämst?",
        "Was hast du während des Corona-Lockdowns ständig gemacht?",
        "Was war früher dein absolutes Lieblingshobby?"
    ],
    // 18. Tiere
    "18": [
        "Welches Tier schmeckt am besten?",
        "Auf welchem Tier würdest du gerne mal reiten?",
        "Welches Tier findest du absolut hässlich?",
        "In welches Tier würdest du dich am liebsten für einen Tag verwandeln?",
        "Welches Tier sollte ausgerottet werden?",
        "Welches Tier käme für dich niemals als Haustier in Frage?",
        "Welches Tier könntest du in einem Kampf besiegen?",
        "Welches Tier würdest du auf das Wappen deines eigenen Sportvereins tun?",
        "Welches Tier ist dein Lieblingstier?",
        "Welches Tier fasziniert dich am meisten?",
        "Welches Tier sieht lustig aus?",
        "Welches Tier würdest du gerne mal essen?",
        "Welches Tier würdest du niemals essen?"
    ],
// 19. 1/10
    "19": [
    "Auf einer Skala von 1 bis 10: Wie attraktiv findest du dich?",
    "Auf einer Skala von 1 bis 10: Wie gut kannst du dir Namen merken?",
    "Auf einer Skala von 1 bis 10: Wie wichtig ist es dir, was andere von dir denken?",
    "Auf einer Skala von 1 bis 10: Wie attraktiv findest du Ryan Gosling?",
    "Auf einer Skala von 1 bis 10: Wie handysüchtig bist du?",
    "Auf einer Skala von 1 bis 10: Wie witzig findest du dich?",
    "Auf einer Skala von 1 bis 10: Wie gut verträgst du Alkohol?",
    "Auf einer Skala von 1 bis 10: Wie anfällig bist du für Süchte?",
    "Auf einer Skala von 1 bis 10: Wie schön ist deine Handschrift?",
    "Auf einer Skala von 1 bis 10: Wie gut kannst du Kopfrechnen?",
    "Auf einer Skala von 1 bis 10: Wie fandest du die Filmreihe Harry Potter?",
    "Auf einer Skala von 1 bis 10: Wie findest du die Musik von One Direction?",
    "Auf einer Skala von 1 bis 10: Wie attraktiv findest du Kim Kardashian?",
    "Auf einer Skala von 1 bis 10: Wie gut kannst du singen?",
    "Auf einer Skala von 1 bis 10: Wie karrierefixiert bist du?",
    "Auf einer Skala von 1 bis 10: Wie sehr könntest du dir vorstellen in die Selbstständigkeit zu gehen?",
    "Auf einer Skala von 1 bis 10: Als wie Fußballverrückt würdest du dich bezeichnen?",
    "Auf einer Skala von 1 bis 10: Wie ordentlich findest du dich?",
    "Auf einer Skala von 1 bis 10: Wie attraktiv findest du die Person rechts von dir?",
    "Auf einer Skala von 1 bis 10: Wie schnell bist du beim Vorglühen betrunken?",
    "Auf einer Skala von 1 bis 10: Wie peinlich war dein letzter Alkoholrausch?"
    ],
    // 20. [Aktivitäten]
    "20": [
        "Was ist die beste Aktivität, die man mit seinen männlichen Freunden machen kann?",
        "Was ist die beste Aktivität, die man mit seinen Eltern machen kann?",
        "Was ist die beste Aktivität, die man mit seinen Großeltern machen kann?",
        "Was ist die beste Aktivität, die man beim 1. Date machen kann?",
        "Was ist die beste Aktivität, die man mit seinen weiblichen Freundinnen machen kann?",
        "Was machst du am liebsten mit deinen Freunden im Sommer?",
        "Was machst du am liebsten mit deinen Freunden im Winter?",
        "Was ist die beste Aktivität, die man mit seinem Partner an einem Freitagabend machen kann?",
        "Zu welcher Aktivität würdest du niemals ja sagen?",
        "Welche Aktivität haben deine Eltern früher häufig mit dir gemacht als du ein Kind warst?",
        "Welches Hobby würdest du gerne in Perfektion können?",
        "Was wäre eine Aktivität, die dein linker Nachbar sofort vorschlagen würde?",
        "Was wäre eine Aktivität, die dein rechter Nachbar sofort vorschlagen würde?",
        "Welche Aktivität würdest du niemals mit deinen Eltern machen?"
    ],
    // 21. [Sportevents]
    "21": [
        "Welches Sportevent liebst du zu gucken?",
        "Welches Sportevent hättest du gerne bald in deiner Stadt?",
        "Auf welches Sportevent würdest du allein schon wegen den Fans gehen?",
        "Welches Sportevent findest du sehr unterbewertet?",
        "Welches Sportevent findest du sehr überbewertet?",
        "Was war das erste Sportevent, bei dem du live vor Ort warst?",
        "Welches Sportevent willst du noch unbedingt live vor Ort ansehen?",
        "Bei welchem Sportevent könntest du dich deiner Meinung nach am ehesten noch für qualifizieren?",
        "Welche olympische Disziplin würdest du dir niemals live anschauen?",
        "Welches Sportevent gibt es deiner Meinung nach noch in 1.000 Jahren?",
        "Welche olympische Disziplin schaust du dir gerne an?"
    ],
    // 22. [Emojis]
    "22": [
        "Welchen Emoji versendest du am liebsten?",
        "Welchen Emoji benutzt du zwar, aber sehr selten?",
        "Du kannst nur noch genau einen Emoji für den Rest deines Lebens verwenden. Welcher wäre es?",
        "Welcher Emoji beschreibt dich am besten?",
        "Welcher Emoji beschreibt deinen linken Nachbarn am besten?",
        "Welchen Emoji bekommst du am häufigsten zu gesendet?",
        "Welcher Emoji beschreibt deinen rechten Nachbarn am besten?",
        "Mit welchem Emoji kann man am besten in Instagram DMs sliden?",
        "Was war der letzte Emoji, den du versendet hast?",
        "Welchen Emoji würdest du als Profilbild verwenden?",
        "Welcher Emoji kommt bei dir nie zum Einsatz, obwohl du ihn eigentlich magst?",
    ],
    // 23. [Kleine Zeiträume]
    "23": [
        "Wie viel Zeit sollte zwischen dem Ende einer alten und dem Beginn einer neuen Beziehung liegen?",
        "Wie lange würdest du brauchen, um eine lange nicht mehr gesprochene Sprache, wieder einigermaßen fließend zu können?",
        "Wie viel Urlaub bräuchtest du am Stück, um endlich mal komplett zu entspannen?",
        "Wie lange sollte man jemanden daten, bevor man offiziell zusammen kommt?",
        "Was war der längste Zeitraum, an dem du am Stück keinen Alkohol getrunken hast, seitdem du aktiv Alkohol trinkst?",
        "Was war der längste Zeitraum, an den du dich erinnern kannst, in dem du kein Fleisch gegessen hast?",
        "Wie viel Zeit vergeht bei dir zwischen zwei Friseurbesuchen?",
        "Wie lange dauert es, bis du deine Bettwäsche wechselst?",
        "Wie lange dauert es bei dir ca. bis du dein (Haupt-)Shampoo aufgebraucht hast?",
        "Wie lange würdest du eine Saftkur (Fasten, nur Säfte) durchhalten?",
        "Wie lange könntest du dich von deinem Lieblingsessen ernähren bis du es nicht mehr sehen/essen kannst?"
    ],
    // 24. [Sehr kleine Zeiträume]
    "24": [
        "Wie lange brauchst du um 3 Big Macs zu essen?",
        "Wie lange bist du durchschnittlich auf der Toilette?",
        "Wie lange brauchst du ca. um 1km zu laufen?",
        "Wie lange kannst du Liegestützen am Stück machen?",
        "Wie lange brauchst du durchschnittlich beim Kochen?",
        "Wie lange brauchst du durchschnittlich beim Duschen?",
        "Ab wann ist ein Spaziergang deiner Meinung nach zu lang?",
        "Wie lange dauerte ca. deine längste erhaltene oder verschickte Sprachnachricht?",
        "Wie lange könntest du deiner Meinung nach in einem Gehege voller hungriger Löwen überleben?",
        "Wie lange war ca. das längste Lied, dass du je gehört hast?"
    ],
    // 25. Erste Male (10 - 18 Jahre)
    "25": [
        "Mit wie vielen Jahren hattest du deinen ersten Crush?",
        "Mit wie vielen Jahren hattest du deine erste 6 in der Schule?",
        "Mit wie vielen Jahren hattest du deinen ersten Kuss?",
        "Mit wie vielen Jahren hast du das erste mal gekurbelt?",
        "Mit wie vielen Jahren hast du das erste Mal die Schule geschwänzt?",
        "Mit wie vielen Jahren hast du das erste Mal Geld verdient?",
        "Mit wie vielen Jahren hast du das erste Mal eine Hausparty veranstaltet?",
        "Mit wie vielen Jahren warst du das erste Mal mit dem Tod eines Familienmitglieds/engen Freundes konfrontiert?",
        "Mit wie vielen Jahren warst du das erste Mal alleine im Urlaub?",
        "Mit wie vielen Jahren warst du das erste Mal betrunken?" 
     ],
        // 26. Berufe
    "26": [
        "Was war dein erster Berufswunsch als Kind?",
        "Was wäre dein Traumberuf?",
        "Welchen Beruf könntest du niemals machen?",
        "In welchem Beruf sollte man mehr Geld verdienen?",
        "Welcher Beruf hat deiner Meinung nach mehr Anerkennung verdient?",
        "Welchen Beruf sollte deiner Meinung nach dein linker Nachbar ausüben?",
        "Welchen Beruf sollte deiner Meinung nach dein rechter Nachbar ausüben?",
        "In welchem Beruf hätten dich gerne deine Eltern gesehen?",
        "Welchen Beruf sollte mindestens eine Person in deinem Freundeskreis im Idealfall haben?",
        "In welchem Beruf erlebt man deiner Meinung nach die lustigsten Sachen?" 
     ],
        // 27. Schulfächer
    "27": [
        "Welches Schulfach hast du früher gehasst?",
        "Bei welchem Schulfach konnte man immer am meisten chillen?",
        "Für welches Schulfach hast du am meisten gelernt?",
        "Welches Schulfach war deiner Meinung nach am wichtigsten?",
        "In welchem Schulfach hattest du den besten Lehrer?",
        "In welchem Schulfach könntest du jetzt spontan am ehesten noch Nachhilfe geben?",
        "In welchem Schulfach hattest du den schlechtesten Lehrer?",
        "Welches Schulfach könntest du am ehesten ohne Studium deiner Meinung nach unterrichten?",
        "Welches Schulfach hättest du als Lehrer auf jeden Fall unterrichtet?",
        "Welches Schulfach fandest du am einfachsten?",
        "Welches Schulfach könnte deiner Meinung nach getrost abgeschafft werden?",
        "Vor welchem Schulfach hattest du am Abend davor immer am meisten Schiss?",
        "Aus welchem Schulfach hast du bereits das Meiste vergessen?",
        "Aus welchem Schulfach hast du am meisten Nützliches mitgenommen?" 
   ],
        // 28. Fiktive Charaktere
    "28": [
        "Welcher fiktive Charakter beschreibt dich am besten?",
        "Welchen fiktiven Charakter hättest du gerne als Elternteil?",
        "Welchen fiktiven Charakter hättest du gerne als Geschwister?",
        "Mit welchem fiktiven Charakter wärst du gerne befreundet?",
        "Mit welchem fiktiven Charakter würdest du dich gerne selbstständig machen?",
        "In der Welt welches fiktiven Charakters würdest du gerne leben?",
        "In der Welt welches fiktiven Charakters würdest du gerne Urlaub machen?",
        "Welchen fiktiven Charakter würdest du für deinen einzigen Anruf aus dem Knast wählen?",
        "Welchen fiktiven Charakter würdest du sofort heiraten?",
        "Welcher fiktive Charakter sollte wirklich existieren?",
        "Nenne einen fiktiven Charakter, den vermutlich nur du aus der Runde kennst!",
        "Welchen fiktiven Charakter findest du attraktiv?",
        "Welchen fiktiven Charakter würdest du im Armdrücken besiegen?",
        "Mit welchem fiktiven Charakter wärst du am liebsten auf einer einsamen Insel?",
        "Welchen fiktiven Charakter kannst du nicht ausstehen?" 
 ],
        // 29. Gegenstände
    "29": [
        "Welcher Gegenstand darf bei einem Festival nicht fehlen?",
        "Welcher Gegenstand darf in deinem Urlaub nicht fehlen?",
        "Welchen Gegenstand verbindest du mit deinem Elternhaus?",
        "Den Kauf welches Gegenstands bereust du keine einzige Sekunde?",
        "Welchen Gegenstand würdest du dir nie holen, egal wie sehr er im Trend ist?",
        "Was ist der teuerster Gegenstand, den du in diesem Monat gekauft hast?",
        "Welchen Gegenstand willst du dir demnächst unbedingt kaufen?",
        "Welcher Gegenstand, der dir gehört, ist für dich unbezahlbar?",
        "Welchen Gegenstand nimmst du nach dem Aufwachen als Erstes in die Hand?",
        "Ohne welchen Gegenstand könntest du nicht mehr leben?",
        "Nenne einen Gegenstand, den du niemals Gebraucht kaufen würdest!",
        "Du musst einen deiner Gegenstände sofort verkaufen! Welcher wäre es?",
        "Welchen Gegenstand würdest du auf eine einsame Insel mitnehmen?",
        "Nenne einen Gegenstand, den vermutlich sonst niemand aus der Runde hier besitzt!",
        "Nenne einen Gegenstand, von dem man deiner Meinung nach nie genug haben kann!" 
 ], 
    // 30. Zahlenzauber (18 - aufwärts)
    "30": [
        "Was ist ein gutes Alter, um zu heiraten?",
        "Was ist ein gutes Alter, um einen ersten Vollzeit-Job zu haben?",
        "Was ist ein gutes Alter, um eine große Weltreise zu machen?",
        "In welchem Alter sollte man spätestens mit der Planung der eigenen Altersversorgung anfangen?",
        "In welchem Alter sollte man spätestens anfangen gesünder zu leben und sich mehr zu schonen?",
        "Was ist ein gutes Alter, um ca. die Hälfte der eigenen Life Goals erreicht zu haben?",
        "Was ist das jüngste Alter, dass du daten würdest?",
        "Was ist ein gutes Alter, um bei den Eltern auszuziehen?",
        "Ab welchem Alter lebt man deiner Meinung nach zu 100% selbstständig?",
        "Was ist das älteste Alter, dass du daten würdest?",
        "Was ist ein gutes Alter, um das erste Kind zu bekommen?"    
    ]
};

const TOTAL_ROUNDS = 15;

/* ============ Lokaler State ============ */
let roomCode = null;
let playerId = null;
let playerName = null;
let roomRef = null;

let answeringKey = null;   // "<round>-<phase>" – wird nur bei Änderung neu gerendert
let hasSubmittedLocally = false;

let votingKey = null;
let hasVotedLocally = false;
let selectedSuspectId = null;

/* ============ Helpers ============ */
function $(id) { return document.getElementById(id); }
function show(id) { $(id).classList.remove('hidden'); }
function hide(id) { $(id).classList.add('hidden'); }

function showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.add('hidden'));
    show(id);

    if (id === 'landing-screen') {
        hide('leave-icon');
    } else {
        show('leave-icon');
    }
}

function randInt(n) { return Math.floor(Math.random() * n); }

function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
        const j = randInt(i + 1);
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function generatePlayerId() {
    return 'p_' + Math.random().toString(36).slice(2, 10) + Date.now().toString(36);
}

function generateRoomCode() {
    return String(1000 + randInt(9000));
}

function persistLocal() {
    localStorage.setItem('imposter_room', roomCode);
    localStorage.setItem('imposter_playerId', playerId);
    localStorage.setItem('imposter_name', playerName);
}

function clearLocal() {
    localStorage.removeItem('imposter_room');
    localStorage.removeItem('imposter_playerId');
    localStorage.removeItem('imposter_name');
}

/* ============ Info-Popup ============ */
function openInfoPopup() {
    show('info-popup');
}
function closeInfoPopup() {
    hide('info-popup');
}

/* ============ Landing: Raum erstellen / beitreten ============ */
function setLandingError(msg) {
    const el = $('landing-error');
    if (!msg) { hide('landing-error'); el.innerText = ''; return; }
    el.innerText = msg;
    show('landing-error');
}

async function handleCreateRoom() {
    const name = $('landing-name').value.trim();
    if (!name) { setLandingError('Bitte gib deinen Namen ein.'); return; }
    setLandingError('');

    playerName = name;
    playerId = generatePlayerId();

    let code;
    for (let i = 0; i < 10; i++) {
        code = generateRoomCode();
        const snap = await db.ref('rooms/' + code).get();
        if (!snap.exists() || snap.val().status === 'finished') break;
        code = null;
    }
    if (!code) { setLandingError('Konnte keinen Raum anlegen, bitte nochmal versuchen.'); return; }

    roomCode = code;

    await db.ref('rooms/' + roomCode).set({
        status: 'lobby',
        hostId: playerId,
        createdAt: firebase.database.ServerValue.TIMESTAMP,
        currentRound: 0,
        players: { [playerId]: { name: playerName } }
    });

    persistLocal();
    attachRoomListener();
}

async function handleJoinRoom() {
    const name = $('landing-name').value.trim();
    const code = $('landing-code').value.trim();
    if (!name) { setLandingError('Bitte gib deinen Namen ein.'); return; }
    if (!/^\d{4}$/.test(code)) { setLandingError('Bitte einen gültigen 4-stelligen Code eingeben.'); return; }
    setLandingError('');

    const snap = await db.ref('rooms/' + code).get();
    if (!snap.exists()) { setLandingError('Diesen Raum gibt es nicht.'); return; }
    const room = snap.val();
    if (room.status !== 'lobby') { setLandingError('Dieses Spiel läuft schon.'); return; }
    const playerCount = room.players ? Object.keys(room.players).length : 0;
    if (playerCount >= 8) { setLandingError('Der Raum ist bereits voll (max. 8 Spieler).'); return; }

    playerName = name;
    playerId = generatePlayerId();
    roomCode = code;

    await db.ref(`rooms/${roomCode}/players/${playerId}`).set({ name: playerName });

    persistLocal();
    attachRoomListener();
}

/* ============ Reconnect nach Reload ============ */
async function tryResume() {
    const r = localStorage.getItem('imposter_room');
    const pid = localStorage.getItem('imposter_playerId');
    const nm = localStorage.getItem('imposter_name');

    if (!r || !pid || !nm) { showScreen('landing-screen'); return; }

    const snap = await db.ref('rooms/' + r).get();
    const room = snap.val();

    if (!room || room.status === 'finished' && false) { /* noop, finished rooms are still resumable to see ranking */ }

    if (!room || !room.players || !room.players[pid]) {
        clearLocal();
        showScreen('landing-screen');
        return;
    }

    roomCode = r;
    playerId = pid;
    playerName = nm;
    attachRoomListener();
}

/* ============ Realtime Listener ============ */
function attachRoomListener() {
    if (roomRef) roomRef.off();
    roomRef = db.ref('rooms/' + roomCode);
    roomRef.on('value', (snap) => {
        const room = snap.val();
        if (!room) {
            clearLocal();
            alert('Der Raum wurde geschlossen.');
            location.reload();
            return;
        }
        renderRoom(room);
    });
}

function isHost(room) {
    return room.hostId === playerId;
}

/* ============ Render-Dispatch ============ */
function renderRoom(room) {
    if (room.status === 'lobby') {
        renderLobby(room);
    } else if (room.status === 'playing') {
        renderGame(room);
    } else if (room.status === 'finished') {
        renderFinal(room);
    }
}

/* ============ Lobby ============ */
function renderLobby(room) {
    showScreen('lobby-screen');
    $('lobby-code').innerText = roomCode;

    const players = room.players || {};
    const ids = Object.keys(players);

    const list = $('lobby-players');
    list.innerHTML = '';
    ids.forEach(pid => {
        const li = document.createElement('li');
        li.innerText = players[pid].name;
        if (pid === room.hostId) li.classList.add('is-host');
        list.appendChild(li);
    });

    if (isHost(room)) {
        if (ids.length >= 3) {
            show('lobby-start-btn');
            $('lobby-hint').innerText = `${ids.length} Spieler bereit. Zeig allen den Code ${roomCode}, dann starten.`;
        } else {
            hide('lobby-start-btn');
            $('lobby-hint').innerText = `Warte auf mehr Spieler … (mind. 3, aktuell ${ids.length}) – Code: ${roomCode}`;
        }
    } else {
        hide('lobby-start-btn');
        $('lobby-hint').innerText = 'Warte, bis der Host das Spiel startet …';
    }
}

function handleStartGame() {
    db.ref('rooms/' + roomCode).get().then(snap => {
        const room = snap.val();
        if (!isHost(room)) return;
        const ids = Object.keys(room.players || {});
        if (ids.length < 3) return;

        const gameCategories = shuffle(Object.keys(categories));
        const roundSetup = buildRound(gameCategories, 0, ids);

        const drinkCounts = {};
        ids.forEach(pid => drinkCounts[pid] = 0);

        roomRef.update({
            status: 'playing',
            phase: 'answering',
            currentRound: 0,
            gameCategories,
            drinkCounts,
            answers: null,
            votes: null,
            ...roundSetup
        });
    });
}

function buildRound(gameCategories, roundIndex, playerIds) {
    const category = gameCategories[roundIndex];
    const questions = categories[category];

    const majIdx = randInt(questions.length);
    const majorityQuestion = questions[majIdx];
    let impIdx;
    do { impIdx = randInt(questions.length); } while (impIdx === majIdx);
    const imposterQuestion = questions[impIdx];

    const imposterId = playerIds[randInt(playerIds.length)];

    return { majorityQuestion, imposterQuestion, imposterId };
}

/* ============ Spiel: Phasen-Dispatch ============ */
function renderGame(room) {
    switch (room.phase) {
        case 'answering': renderAnswering(room); break;
        case 'answers': renderAnswers(room); break;
        case 'voting': renderVoting(room); break;
        case 'correct': renderCorrect(room); break;
        case 'imposter': renderImposter(room); break;
        case 'drinks': renderDrinks(room); break;
    }
}

/* ---- Antwort-Phase ---- */
function renderAnswering(room) {
    showScreen('answering-screen');
    $('answering-round').innerText = `Runde ${room.currentRound + 1} / ${TOTAL_ROUNDS}`;

    const players = room.players || {};
    const answers = room.answers || {};
    const ids = Object.keys(players);
    const answeredCount = Object.keys(answers).length;

    const key = room.currentRound + '-' + room.phase;
    const alreadyAnswered = !!answers[playerId];

    if (key !== answeringKey) {
        answeringKey = key;
        hasSubmittedLocally = alreadyAnswered;
        $('player-answer').value = '';
    }

    // Frage immer aktuell halten (auch nach "Neue Frage ziehen")
    const question = (playerId === room.imposterId) ? room.imposterQuestion : room.majorityQuestion;
    $('question-text').innerText = question;

    const hostAndNoAnswersYet = isHost(room) && answeredCount === 0;
    if (hostAndNoAnswersYet) show('reshuffle-btn'); else hide('reshuffle-btn');

    if (hasSubmittedLocally || alreadyAnswered) {
        hide('answering-form');
        show('answering-wait');
        $('answering-progress').innerText = `${answeredCount} von ${ids.length} haben geantwortet.`;
    } else {
        show('answering-form');
        hide('answering-wait');
    }

    if (isHost(room) && answeredCount === ids.length && ids.length > 0) {
        roomRef.update({ phase: 'answers' });
    }
}

function handleSubmitAnswer() {
    const val = $('player-answer').value.trim();
    if (!val) return;
    hasSubmittedLocally = true;
    db.ref(`rooms/${roomCode}/answers/${playerId}`).set({ name: playerName, answer: val });
}

function handleReshuffle() {
    db.ref('rooms/' + roomCode).get().then(snap => {
        const room = snap.val();
        if (!isHost(room)) return;
        const category = room.gameCategories[room.currentRound];
        const questions = categories[category];

        const majIdx = randInt(questions.length);
        const majorityQuestion = questions[majIdx];
        let impIdx;
        do { impIdx = randInt(questions.length); } while (impIdx === majIdx);
        const imposterQuestion = questions[impIdx];

        roomRef.update({ majorityQuestion, imposterQuestion });
    });
}

/* ---- Antworten-Übersicht ---- */
function renderAnswers(room) {
    showScreen('answers-screen');
    const list = $('answers-list');
    list.innerHTML = '';
    const answers = room.answers || {};
    Object.values(answers).forEach(a => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${escapeHtml(a.name)}:</strong> ${escapeHtml(a.answer)}`;
        list.appendChild(li);
    });

    if (isHost(room)) {
        show('answers-next-btn');
        hide('answers-wait-hint');
    } else {
        hide('answers-next-btn');
        show('answers-wait-hint');
    }
}

/* ---- Abstimmung ---- */
function renderVoting(room) {
    showScreen('voting-screen');

    const players = room.players || {};
    const votes = room.votes || {};
    const ids = Object.keys(players);
    const votedCount = Object.keys(votes).length;

    const key = room.currentRound + '-voting';
    const alreadyVoted = !!votes[playerId];

    if (key !== votingKey) {
        votingKey = key;
        hasVotedLocally = alreadyVoted;
        selectedSuspectId = null;

        const optionsList = $('voting-options');
        optionsList.innerHTML = '';
        ids.forEach(pid => {
            const li = document.createElement('li');
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.classList.add('vote-option');
            btn.dataset.pid = pid;
            btn.innerText = players[pid].name;
            btn.onclick = () => selectSuspect(pid);
            li.appendChild(btn);
            optionsList.appendChild(li);
        });
        $('voting-submit-btn').disabled = true;
    }

    if (hasVotedLocally || alreadyVoted) {
        hide('voting-form');
        show('voting-wait');
        $('voting-progress').innerText = `${votedCount} von ${ids.length} haben abgestimmt.`;
    } else {
        show('voting-form');
        hide('voting-wait');
    }

    const allVoted = ids.length > 0 && votedCount === ids.length;
    if (isHost(room) && allVoted) {
        show('voting-next-btn');
        hide('voting-wait-hint');
    } else {
        hide('voting-next-btn');
        if (!isHost(room)) show('voting-wait-hint'); else hide('voting-wait-hint');
    }
}

function selectSuspect(pid) {
    selectedSuspectId = pid;
    const buttons = document.querySelectorAll('#voting-options .vote-option');
    buttons.forEach(btn => btn.classList.toggle('selected', btn.dataset.pid === pid));
    $('voting-submit-btn').disabled = false;
}

function handleSubmitVote() {
    if (!selectedSuspectId) return;
    hasVotedLocally = true;
    db.ref(`rooms/${roomCode}/votes/${playerId}`).set(selectedSuspectId);
}

/* ---- Richtige Frage ---- */
function renderCorrect(room) {
    showScreen('correct-screen');
    $('correct-question-text').innerText = room.majorityQuestion;

    const list = $('correct-answers-list');
    list.innerHTML = '';
    const answers = room.answers || {};
    Object.values(answers).forEach(a => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${escapeHtml(a.name)}:</strong> ${escapeHtml(a.answer)}`;
        list.appendChild(li);
    });

    if (isHost(room)) {
        show('correct-next-btn');
        hide('correct-wait-hint');
    } else {
        hide('correct-next-btn');
        show('correct-wait-hint');
    }
}

/* ---- Imposter-Enthüllung ---- */
function renderImposter(room) {
    showScreen('imposter-screen');
    const players = room.players || {};
    const name = players[room.imposterId] ? players[room.imposterId].name : '???';
    $('imposter-text').innerText = `Imposter war:\n${name}`;

    // Redact-Bar Animation bei jedem Betreten dieser Phase neu abspielen
    const bar = $('redact-bar');
    bar.classList.remove('replay');
    void bar.offsetWidth;
    bar.style.animation = 'none';
    void bar.offsetWidth;
    bar.style.animation = '';

    const votes = room.votes || {};
    const voteIds = Object.keys(votes);
    const correctGuesses = voteIds.filter(pid => votes[pid] === room.imposterId).length;

    const summaryEl = $('votes-correct-summary');
    const listEl = $('votes-summary-list');
    listEl.innerHTML = '';

    if (voteIds.length > 0) {
        summaryEl.innerText = `${correctGuesses} von ${voteIds.length} haben richtig getippt.`;
        voteIds.forEach(pid => {
            const voterName = players[pid] ? players[pid].name : '???';
            const suspectId = votes[pid];
            const suspectName = players[suspectId] ? players[suspectId].name : '???';
            const li = document.createElement('li');
            li.innerText = `${voterName} → ${suspectName}`;
            li.classList.add(suspectId === room.imposterId ? 'correct-guess' : 'wrong-guess');
            listEl.appendChild(li);
        });
    } else {
        summaryEl.innerText = '';
    }

    if (isHost(room)) {
        show('imposter-next-btn');
        hide('imposter-wait-hint');
    } else {
        hide('imposter-next-btn');
        show('imposter-wait-hint');
    }
}

/* ---- Schluckvergabe ---- */
function renderDrinks(room) {
    showScreen('drinks-screen');
    const players = room.players || {};
    const drinkCounts = room.drinkCounts || {};

    const list = $('drinks-list');
    list.innerHTML = '';

    Object.keys(players).forEach(pid => {
        const count = drinkCounts[pid] || 0;

        const row = document.createElement('div');
        row.classList.add('drink-counter');

        const nameSpan = document.createElement('span');
        nameSpan.innerText = players[pid].name;
        nameSpan.classList.add('player-name');

        const controls = document.createElement('div');
        controls.classList.add('counter-controls');

        const minusBtn = document.createElement('button');
        minusBtn.innerText = '-';
        minusBtn.classList.add('counter-button');
        minusBtn.onclick = () => adjustDrinkCount(pid, -1);

        const box = document.createElement('div');
        box.classList.add('drink-box');
        box.innerText = count;

        const plusBtn = document.createElement('button');
        plusBtn.innerText = '+';
        plusBtn.classList.add('counter-button');
        plusBtn.onclick = () => adjustDrinkCount(pid, 1);

        controls.appendChild(minusBtn);
        controls.appendChild(box);
        controls.appendChild(plusBtn);

        row.appendChild(nameSpan);
        row.appendChild(controls);
        list.appendChild(row);
    });

    if (isHost(room)) {
        show('drinks-next-btn');
        hide('drinks-wait-hint');
    } else {
        hide('drinks-next-btn');
        show('drinks-wait-hint');
    }
}

function adjustDrinkCount(pid, delta) {
    const ref = db.ref(`rooms/${roomCode}/drinkCounts/${pid}`);
    ref.transaction(current => Math.max(0, (current || 0) + delta));
}

/* ---- Host: Phasenwechsel ---- */
function hostAdvance(nextPhase) {
    db.ref('rooms/' + roomCode).get().then(snap => {
        const room = snap.val();
        if (!isHost(room)) return;
        roomRef.update({ phase: nextPhase });
    });
}

function hostNextRound() {
    db.ref('rooms/' + roomCode).get().then(snap => {
        const room = snap.val();
        if (!isHost(room)) return;

        const nextRoundIndex = room.currentRound + 1;
        if (nextRoundIndex >= TOTAL_ROUNDS) {
            roomRef.update({ status: 'finished' });
            return;
        }

        const ids = Object.keys(room.players || {});
        const roundSetup = buildRound(room.gameCategories, nextRoundIndex, ids);

        roomRef.update({
            currentRound: nextRoundIndex,
            phase: 'answering',
            answers: null,
            votes: null,
            ...roundSetup
        });
    });
}

/* ============ Finale Rangliste ============ */
function renderFinal(room) {
    showScreen('final-screen');
    const players = room.players || {};
    const drinkCounts = room.drinkCounts || {};

    const ranking = Object.keys(players)
        .map(pid => ({ pid, name: players[pid].name, count: drinkCounts[pid] || 0 }))
        .sort((a, b) => a.count - b.count);

    const list = $('ranking-list');
    list.innerHTML = '';
    ranking.forEach(r => {
        const li = document.createElement('li');
        li.innerText = `${r.name} – ${r.count} Schlücke`;
        list.appendChild(li);
    });

    const playerCount = Object.keys(players).length;
    if (ranking.length > 0) {
        $('reward-summary').innerText = `${ranking[0].name} darf ${playerCount * 2} Schlücke verteilen.`;
    }

    if (isHost(room)) {
        show('final-restart-btn');
        hide('final-wait-hint');
    } else {
        hide('final-restart-btn');
        show('final-wait-hint');
    }
}

function hostRestart() {
    db.ref('rooms/' + roomCode).get().then(snap => {
        const room = snap.val();
        if (!isHost(room)) return;
        roomRef.update({
            status: 'lobby',
            phase: null,
            currentRound: 0,
            answers: null,
            votes: null,
            drinkCounts: null,
            gameCategories: null,
            majorityQuestion: null,
            imposterQuestion: null,
            imposterId: null
        });
        answeringKey = null;
        votingKey = null;
        hasSubmittedLocally = false;
        hasVotedLocally = false;
        selectedSuspectId = null;
    });
}

/* ============ Utils ============ */
function escapeHtml(str) {
    const div = document.createElement('div');
    div.innerText = str;
    return div.innerHTML;
}

/* ============ Spiel verlassen ============ */
async function handleLeaveGame() {
    if (!roomCode) return;
    if (!confirm('Möchtest du das Spiel wirklich verlassen?')) return;

    try {
        const snap = await db.ref('rooms/' + roomCode).get();
        const room = snap.val();

        if (room) {
            const players = room.players || {};
            const remainingIds = Object.keys(players).filter(id => id !== playerId);

            if (remainingIds.length === 0) {
                await db.ref('rooms/' + roomCode).remove();
            } else {
                const updates = {};
                updates[`players/${playerId}`] = null;
                if (room.hostId === playerId) {
                    updates.hostId = remainingIds[0];
                }
                await db.ref('rooms/' + roomCode).update(updates);
            }
        }
    } catch (e) {
        console.error('Fehler beim Verlassen:', e);
    }

    if (roomRef) roomRef.off();
    clearLocal();
    location.reload();
}

/* ============ Init ============ */
document.addEventListener('DOMContentLoaded', () => {
    const countSpan = $('reward-info');
    if (countSpan) countSpan.innerText = '2× Spieleranzahl';
    tryResume();
});
