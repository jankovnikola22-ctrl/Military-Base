(() => {
  "use strict";

  const STORAGE_KEY = "military-base-language";
  const translations = {
    "Skip to content": "Preskoči na sadržaj",
    "Toggle navigation": "Uključi/isključi navigaciju",
    "Toggle navigation menu": "Uključi/isključi navigacioni meni",
    "Main navigation": "Glavna navigacija",
    "Home": "Početna",
    "World Militaries": "Vojske sveta",
    "Military Units": "Vojne jedinice",
    "Military Ranks": "Vojni činovi",
    "Weapons": "Naoružanje",
    "Military Aviation": "Vojna avijacija",
    "Land Systems": "Kopneni sistemi",
    "Naval Forces": "Pomorske snage",
    "Hunting": "Lov",
    "Hunting Rifles | MILITARY BASE": "Lovačke puške | MILITARY BASE",
    "Hunting Firearms | MILITARY BASE": "Lovačko oružje | MILITARY BASE",
    "Shotguns | MILITARY BASE": "Sačmarice | MILITARY BASE",
    "Hunting Carbines | MILITARY BASE": "Lovački karabini | MILITARY BASE",
    "Beretta Sporting Firearms | MILITARY BASE": "Beretino sportsko oružje | MILITARY BASE",
    "Hunting Equipment | MILITARY BASE": "Lovačka oprema | MILITARY BASE",
    "Animals & Hunting Season | MILITARY BASE": "Životinje i lovna sezona | MILITARY BASE",
    "Hunting Ground | MILITARY BASE": "Lovište | MILITARY BASE",
    "Search and filter a reference catalog of notable hunting and sporting shotguns.": "Pretražite i filtrirajte katalog poznatih lovačkih i sportskih sačmarica.",
    "Search and filter a reference catalog of notable sporting and hunting carbines.": "Pretražite i filtrirajte katalog poznatih sportskih i lovačkih karabina.",
    "Search and filter Beretta hunting and sporting firearm models.": "Pretražite i filtrirajte Beretine modele lovačkog i sportskog oružja.",
    "© 2026 MILITARY BASE. ALL RIGHTS RESERVED.": "© 2026 MILITARY BASE. SVA PRAVA ZADRŽANA.",
    "← Back to Hunting": "← Nazad na lov",
    "Back to Hunting": "Nazad na lov",
    "Military History": "Vojna istorija",
    "Commander Profiles": "Profili komandanata",
    "Browse categories": "Pregledaj kategorije",
    "Browse all categories": "Pregledaj sve kategorije",
    "Back to Military History": "Nazad na vojnu istoriju",
    "Skip to main content": "Preskoči na glavni sadržaj",
    "THE GLOBAL DEFENSE ENCYCLOPEDIA": "GLOBALNA ENCIKLOPEDIJA ODBRANE",
    "LEADERSHIP THROUGH HISTORY": "VOĐSTVO KROZ ISTORIJU",
    "PEOPLE & FORMATIONS": "LJUDI I FORMACIJE",
    "COUNTRIES & ORGANIZATION": "DRŽAVE I ORGANIZACIJA",
    "INSIGNIA & HIERARCHY": "OZNAKE I HIJERARHIJA",
    "SYSTEMS & SMALL ARMS": "SISTEMI I LAKO NAORUŽANJE",
    "AIRCRAFT & TECHNOLOGY": "VAZDUHOPLOVI I TEHNOLOGIJA",
    "VEHICLES & ARTILLERY": "VOZILA I ARTILJERIJA",
    "FLEETS & MARITIME POWER": "FLOTE I POMORSKA MOĆ",
    "LESSONS THROUGH TIME": "POUKE KROZ VREME",
    "EXPLORE THE DATABASE": "ISTRAŽI BAZU",
    "EXPLORE THIS SECTION": "ISTRAŽI OVU CELINU",
    "EXPLORE": "ISTRAŽI",
    "DISCOVER": "OTKRIJ",
    "ABOUT MILITARY BASE": "O PROJEKTU MILITARY BASE",
    "All categories": "Sve kategorije",
    "← All categories": "← Sve kategorije",
    "← Back to Commander Profiles": "← Nazad na profile komandanata",
    "Back to Commander Profiles": "Nazad na profile komandanata",
    "BACK TO TOP ↑": "NA VRH ↑",
    "INFORMATION. CONTEXT. UNDERSTANDING.": "INFORMACIJE. KONTEKST. RAZUMEVANJE.",
    "A WORLD OF": "SVET",
    "KNOWLEDGE": "ZNANJA",
    "Choose a subject to explore its dedicated section of the Military Base encyclopedia.": "Izaberite temu i istražite odgovarajuću celinu enciklopedije Military Base.",
    "Explore the world's armed forces, military technology, hunting equipment, and military history at Military Base.": "Istražite oružane snage sveta, vojnu tehnologiju, lovačku opremu i vojnu istoriju na sajtu Military Base.",
    "MILITARY BASE — Explore the World of Military and Defense": "MILITARY BASE — Istražite svet vojske i odbrane",
    "Explore the world's armed forces, military units, weapons, aircraft, vehicles, hunting equipment, and military history — all in one place.": "Istražite oružane snage sveta, vojne jedinice, naoružanje, letelice, vozila, lovačku opremu i vojnu istoriju — sve na jednom mestu.",
    "Explore the Database": "Istraži bazu",
    "Browse Categories": "Pregledaj kategorije",
    "KNOWLEDGE. CONTEXT. PERSPECTIVE.": "ZNANJE. KONTEKST. PERSPEKTIVA.",
    "A clearer view of defense, technology, and history.": "Jasniji pogled na odbranu, tehnologiju i istoriju.",
    "INDEPENDENT KNOWLEDGE FOR THE CURIOUS": "NEZAVISNO ZNANJE ZA ZNATIŽELJNE",
    "Armed forces around the world, their branches, equipment, organization, and history.": "Oružane snage širom sveta, njihovi rodovi, oprema, organizacija i istorija.",
    "Publicly documented units from countries around the world.": "Javno dokumentovane jedinice iz država širom sveta.",
    "Rank structures, insignia, and comparisons, including the Serbian Armed Forces.": "Strukture činova, oznake i poređenja, uključujući Vojsku Srbije.",
    "A reference to firearm models and weapon systems, from pistols and rifles to larger platforms.": "Pregled modela vatrenog oružja i sistema naoružanja, od pištolja i pušaka do većih platformi.",
    "Fighters, bombers, transports, helicopters, trainers, and drones.": "Lovci, bombarderi, transportni avioni, helikopteri, školski avioni i bespilotne letelice.",
    "Tanks, armored vehicles, artillery, transport, and air defense.": "Tenkovi, oklopna vozila, artiljerija, transport i protivvazdušna odbrana.",
    "Aircraft carriers, submarines, surface fleets, naval aviation, and the forces behind them.": "Nosači aviona, podmornice, površinske flote, pomorska avijacija i snage koje ih podržavaju.",
    "Explore section": "Istraži celinu",
    "Country Profiles": "Profili država",
    "Service Branches": "Rodovi vojske",
    "Organization": "Organizacija",
    "Equipment & History": "Oprema i istorija",
    "Unit Profiles": "Profili jedinica",
    "Branches & Roles": "Rodovi i uloge",
    "Insignia & Traditions": "Oznake i tradicija",
    "By Country": "Po državama",
    "Wars & Conflicts": "Ratovi i sukobi",
    "World War I": "Prvi svetski rat",
    "World War II": "Drugi svetski rat",
    "Cold War Conflicts": "Sukobi tokom Hladnog rata",
    "Modern Conflicts": "Savremeni sukobi",
    "Understanding the past.": "Razumevanje prošlosti.",
    "A thoughtful reference to the forces, equipment, and stories that shape our world.": "Promišljen pregled snaga, opreme i priča koje oblikuju naš svet.",
    "A thoughtful reference to military history and commanders.": "Promišljen pregled vojne istorije i komandanata.",
    "Building an accessible, well-organized encyclopedia of military and outdoor knowledge.": "Gradimo dostupnu i preglednu enciklopediju vojnog znanja i znanja o aktivnostima na otvorenom.",
    "ALL RIGHTS RESERVED.": "SVA PRAVA ZADRŽANA.",
    "Personal Information": "Lični podaci",
    "Biography & Background": "Biografija i životni put",
    "Military Career & Achievements": "Vojna karijera i dostignuća",
    "Historical Legacy": "Istorijsko nasleđe",
    "Born": "Rođen/a",
    "Died": "Preminuo/la",
    "Rank & titles": "Čin i titule",
    "Affiliation": "Pripadnost",
    "View profile": "Pogledaj profil",
    "Historical portrait": "Istorijski portret",
    "Portrait to be added": "Portret će biti dodat",
    "Portrait placeholder": "Mesto za portret",
    "Research note:": "Napomena o istraživanju:",
    "by birth date": "prema godini rođenja",
    "Serbia Commanders & Military Person": "Srpski komandanti i vojne ličnosti",
    "United States Commanders & Military Person": "Komandanti i vojne ličnosti Sjedinjenih Država",
    "United Kingdom Commanders & Military Person": "Komandanti i vojne ličnosti Ujedinjenog Kraljevstva",
    "Italy Commanders & Military Person": "Italijanski komandanti i vojne ličnosti",
    "Russia & Soviet Union Commanders & Military Person": "Komandanti i vojne ličnosti Rusije i Sovjetskog Saveza",
    "Germany Commanders & Military Person": "Nemački komandanti i vojne ličnosti",
    "France Commanders & Military Person": "Francuski komandanti i vojne ličnosti",
    "Japan Commanders & Military Person": "Japanski komandanti i vojne ličnosti",
    "China Commanders & Military Person": "Kineski komandanti i vojne ličnosti",
    "Vietnam Commanders & Military Person": "Vijetnamski komandanti i vojne ličnosti",
    "Iran Commanders & Military Person": "Iranski komandanti i vojne ličnosti",
    "Iraq Commanders & Military Person": "Irački komandanti i vojne ličnosti",
    "Ottoman Empire & Turkey Commanders & Military Person": "Komandanti i vojne ličnosti Osmanskog carstva i Turske",
    "Ancient Greece Commanders & Military Person": "Komandanti i vojne ličnosti antičke Grčke",
    "Ancient Rome Commanders & Military Person": "Komandanti i vojne ličnosti antičkog Rima",
    "Israel Commanders & Military Person": "Izraelski komandanti i vojne ličnosti",
    "Poland Commanders & Military Person": "Poljski komandanti i vojne ličnosti",
    "No Polish commander profiles have been added yet.": "Profili poljskih komandanata još nisu dodati.",
    "English": "Engleski",
    "Serbian": "Srpski",
    "MILITARY": "VOJNA",
    "AVIATION": "AVIJACIJA",
    "HISTORY": "ISTORIJA",
    "UNITS": "JEDINICE",
    "RANKS": "ČINOVI",
    "WEAPONS": "NAORUŽANJE",
    "REFERENCE": "PREGLED",
    "CATALOG": "KATALOG",
    "ARMED FORCES": "ORUŽANE SNAGE",
    "WORLDWIDE": "ŠIROM SVETA",
    "STRUCTURES": "STRUKTURE",
    "SKIES": "NEBO",
    "INSIGNIA": "OZNAKE",
    "THE PAST": "PROŠLOST",
    "Country Profiles": "Profili država",
    "Service Branches": "Rodovi vojske",
    "Fighter Aircraft": "Borbeni avioni",
    "Bombers & Transport": "Bombarderi i transportni avioni",
    "Helicopters": "Helikopteri",
    "Reconnaissance & Drones": "Izviđački avioni i bespilotne letelice",
    "Officer Ranks": "Oficirski činovi",
    "Enlisted Ranks": "Podoficirski i vojnički činovi",
    "Rank Insignia": "Oznake činova",
    "Serbian Armed Forces": "Vojska Srbije",
    "Revolvers": "Revolveri",
    "Pistols": "Pištolji",
    "Assault Rifles": "Jurišne puške",
    "Sniper Rifles": "Snajperske puške",
    "Machine Guns": "Mitraljezi",
    "Light Machine Guns": "Laki mitraljezi",
    "Shotguns": "Sačmarice",
    "Light Submachine Guns": "Laki automati",
    "Anti-Materiel Rifles": "Protivmaterijalne puške",
    "View Details": "Pogledaj detalje",
    "SEMI-AUTOMATIC PISTOL": "POLUAUTOMATSKI PIŠTOLJ",
    "Type": "Tip",
    "Caliber": "Kalibar",
    "Country of origin": "Zemlja porekla",
    "Manufacturer": "Proizvođač",
    "Introduced": "Uveden u upotrebu",
    "Calibers": "Kalibri",
    "All calibers": "Svi kalibri",
    "All manufacturers": "Svi proizvođači",
    "All countries": "Sve države",
    "All types": "Svi tipovi",
    "Catalog filters preview": "Pregled filtera kataloga",
    "Search and filters are visual placeholders for a future update.": "Pretraga i filteri su vizuelni prikaz funkcija planiranih za buduće ažuriranje.",
    "Search": "Pretraga",
    "Country": "Država",
    "Separate Section": "Posebna celina",
    "SEPARATE SECTION": "POSEBNA CELINA",
    "Hunting rifles, shotguns, optics, and field equipment are covered in": "Lovačke puške, sačmarice, optika i terenska oprema obrađeni su u odeljku",
    "World Militaries | MILITARY BASE": "Vojske sveta | MILITARY BASE",
    "Military Units | MILITARY BASE": "Vojne jedinice | MILITARY BASE",
    "Military Ranks | MILITARY BASE": "Vojni činovi | MILITARY BASE",
    "Weapons | MILITARY BASE": "Naoružanje | MILITARY BASE",
    "Military Aviation | MILITARY BASE": "Vojna avijacija | MILITARY BASE",
    "Land Systems | MILITARY BASE": "Kopneni sistemi | MILITARY BASE",
    "Naval Forces | MILITARY BASE": "Pomorske snage | MILITARY BASE",
    "Hunting | MILITARY BASE": "Lov | MILITARY BASE",
    "Military History | MILITARY BASE": "Vojna istorija | MILITARY BASE",
    "Pistol Catalog | MILITARY BASE": "Katalog pištolja | MILITARY BASE",
    "World War I | MILITARY BASE": "Prvi svetski rat | MILITARY BASE",
    "World War II | MILITARY BASE": "Drugi svetski rat | MILITARY BASE",
    "Cold War | MILITARY BASE": "Hladni rat | MILITARY BASE",
    "Modern Conflicts | MILITARY BASE": "Savremeni sukobi | MILITARY BASE",
    "Serbia Commanders & Military Person | MILITARY BASE": "Srpski komandanti i vojne ličnosti | MILITARY BASE",
    "United States Commanders & Military Person | MILITARY BASE": "Komandanti i vojne ličnosti Sjedinjenih Država | MILITARY BASE",
    "United Kingdom Commanders & Military Person | MILITARY BASE": "Komandanti i vojne ličnosti Ujedinjenog Kraljevstva | MILITARY BASE",
    "Italy Commanders & Military Person | MILITARY BASE": "Italijanski komandanti i vojne ličnosti | MILITARY BASE",
    "Russia & Soviet Union Commanders & Military Person | MILITARY BASE": "Komandanti i vojne ličnosti Rusije i Sovjetskog Saveza | MILITARY BASE",
    "Germany Commanders & Military Person | MILITARY BASE": "Nemački komandanti i vojne ličnosti | MILITARY BASE",
    "France Commanders & Military Person | MILITARY BASE": "Francuski komandanti i vojne ličnosti | MILITARY BASE",
    "Japan Commanders & Military Person | MILITARY BASE": "Japanski komandanti i vojne ličnosti | MILITARY BASE",
    "China Commanders & Military Person | MILITARY BASE": "Kineski komandanti i vojne ličnosti | MILITARY BASE",
    "Vietnam Commanders & Military Person | MILITARY BASE": "Vijetnamski komandanti i vojne ličnosti | MILITARY BASE",
    "Iran Commanders & Military Person | MILITARY BASE": "Iranski komandanti i vojne ličnosti | MILITARY BASE",
    "Iraq Commanders & Military Person | MILITARY BASE": "Irački komandanti i vojne ličnosti | MILITARY BASE",
    "Ottoman Empire & Turkey Commanders & Military Person | MILITARY BASE": "Komandanti i vojne ličnosti Osmanskog carstva i Turske | MILITARY BASE",
    "Ancient Greece Commanders & Military Person | MILITARY BASE": "Komandanti i vojne ličnosti antičke Grčke | MILITARY BASE",
    "Ancient Rome Commanders & Military Person | MILITARY BASE": "Komandanti i vojne ličnosti antičkog Rima | MILITARY BASE",
    "Israel Commanders & Military Person | MILITARY BASE": "Izraelski komandanti i vojne ličnosti | MILITARY BASE",
    "Poland Commanders & Military Person | MILITARY BASE": "Poljski komandanti i vojne ličnosti | MILITARY BASE",
    "Explore armed forces around the world, their organization, branches, and equipment.": "Istražite oružane snage širom sveta, njihovu organizaciju, rodove i opremu.",
    "Learn about publicly documented military units from countries around the world.": "Upoznajte javno dokumentovane vojne jedinice iz država širom sveta.",
    "Explore military ranks, insignia, hierarchy, and comparisons around the world.": "Istražite vojne činove, oznake, hijerarhiju i poređenja širom sveta.",
    "Browse reference information on military and civilian firearm models and weapon systems.": "Pregledajte referentne informacije o vojnim i civilnim modelima vatrenog oružja i sistemima naoružanja.",
    "Explore military aircraft including fighters, transports, bombers, helicopters, and drones.": "Istražite vojne letelice, uključujući lovce, transportne avione, bombardere, helikoptere i bespilotne letelice.",
    "Explore historical battles, military conflicts, uniforms, technology, and defining events.": "Istražite istorijske bitke, vojne sukobe, uniforme, tehnologiju i događaje koji su obeležili istoriju.",
    "Explore armed forces around the world: how they are organized, the capabilities they maintain, and the histories that shaped them.": "Istražite oružane snage sveta: njihovu organizaciju, sposobnosti i istoriju koja ih je oblikovala.",
    "Country profiles and reference topics will be organized here as the encyclopedia grows.": "Profili država i referentne teme biće organizovani ovde kako se enciklopedija bude širila.",
    "A reference framework for unit profiles and publicly available background information.": "Referentni okvir za profile jedinica i javno dostupne informacije o njihovoj pozadini.",
    "Understand rank structures, insignia, and the systems used to compare military hierarchy across services and nations.": "Upoznajte strukture činova, oznake i sisteme za poređenje vojne hijerarhije među rodovima i državama.",
    "Compare rank systems with context for national terminology and service traditions.": "Uporedite sisteme činova uz objašnjenja nacionalne terminologije i tradicije rodova.",
    "Explore the aircraft and technologies that serve military aviation, from fast jets to transport and reconnaissance platforms.": "Istražite letelice i tehnologije vojne avijacije, od brzih mlaznih aviona do transportnih i izviđačkih platformi.",
    "Aircraft references will bring together roles, development, and service histories.": "Pregledi letelica obuhvatiće njihove uloge, razvoj i istoriju upotrebe.",
    "Fighters and multirole aircraft from different eras and air forces.": "Lovci i višenamenski avioni iz različitih razdoblja i vazduhoplovstava.",
    "Strategic and tactical bombers, transports, and support aircraft.": "Strateški i taktički bombarderi, transportni i avioni za podršku.",
    "Military rotary-wing aircraft and their varied service roles.": "Vojni helikopteri i njihove različite uloge u službi.",
    "Training, surveillance, reconnaissance aircraft, and unmanned systems.": "Školski, nadzorni i izviđački avioni, kao i bespilotni sistemi.",
    "Officer ranks and their place in service hierarchies.": "Oficirski činovi i njihovo mesto u hijerarhiji rodova.",
    "Enlisted and non-commissioned rank structures across services.": "Strukture vojničkih i podoficirskih činova u različitim rodovima.",
    "Uniform insignia and the conventions used to identify rank.": "Oznake na uniformama i načini prepoznavanja činova.",
    "A dedicated reference to ranks and insignia of the Serbian Armed Forces.": "Poseban pregled činova i oznaka Vojske Srbije.",
    "Wars and Conflicts": "Ratovi i sukobi",
    "COLD": "HLADNI",
    "WAR": "RAT",
    "MODERN CONFLICTS": "SAVREMENI SUKOBI",
    "A clear view of military history": "Jasan pregled vojne istorije",
    "Commander Profiles | MILITARY BASE": "Profili komandanata | MILITARY BASE",
    "COMMANDER PROFILES": "PROFILI KOMANDANATA",
    "COMMANDERS & MILITARY PERSON": "KOMANDANTI I VOJNE LIČNOSTI",
    "Back to": "Nazad na",
    "Military Base home": "Početna stranica Military Base",
    "WORLD": "SVETSKE",
    "MILITARIES": "VOJSKE",
    "MILITARY HISTORY": "VOJNA ISTORIJA",
    "Explore Serbian commanders and military history.": "Istražite srpske komandante i vojnu istoriju.",
    "Explore United States commanders and military history.": "Istražite komandante Sjedinjenih Država i vojnu istoriju.",
    "Explore British commanders and military history.": "Istražite britanske komandante i vojnu istoriju.",
    "Explore Italian commanders and military history.": "Istražite italijanske komandante i vojnu istoriju.",
    "Explore Russian and Soviet commanders and military history.": "Istražite ruske i sovjetske komandante i vojnu istoriju.",
    "Explore German commanders and military history.": "Istražite nemačke komandante i vojnu istoriju.",
    "Explore French commanders and military history.": "Istražite francuske komandante i vojnu istoriju.",
    "Explore Japanese commanders and military history.": "Istražite japanske komandante i vojnu istoriju.",
    "Explore Chinese commanders and military history.": "Istražite kineske komandante i vojnu istoriju.",
    "Explore Vietnamese commanders and military history.": "Istražite vijetnamske komandante i vojnu istoriju.",
    "Explore Iranian commanders and military history.": "Istražite iranske komandante i vojnu istoriju.",
    "Explore Iraqi commanders and military history.": "Istražite iračke komandante i vojnu istoriju.",
    "Explore Ottoman and Turkish commanders and military history.": "Istražite osmanske i turske komandante i vojnu istoriju.",
    "Explore ancient Greek commanders and military history.": "Istražite komandante antičke Grčke i njenu vojnu istoriju.",
    "Explore ancient Roman commanders and military history.": "Istražite komandante antičkog Rima i njegovu vojnu istoriju.",
    "Explore Israeli commanders and military history.": "Istražite izraelske komandante i vojnu istoriju.",
    "Explore Polish commanders and military history.": "Istražite poljske komandante i vojnu istoriju.",
    "View profiles": "Pogledaj profile",
    "Browse commanders": "Pregledaj komandante",
    "Serbia": "Srbija",
    "United States": "Sjedinjene Države",
    "United Kingdom": "Ujedinjeno Kraljevstvo",
    "Russia & Soviet Union": "Rusija i Sovjetski Savez",
    "Ottoman Empire & Turkey": "Osmansko carstvo i Turska",
    "Ancient Greece": "Antička Grčka",
    "Ancient Rome": "Antički Rim",
    "Back to Serbia Commanders": "Nazad na srpske komandante",
    "Explore the conflicts, people, technology, uniforms, and events that have shaped the course of history.": "Istražite sukobe, ljude, tehnologiju, uniforme i događaje koji su oblikovali istoriju.",
    "Historical topics presented with context, chronology, and attention to the people and events involved.": "Istorijske teme predstavljene uz kontekst, hronologiju i pažnju posvećenu ljudima i događajima.",
    "UNDERSTANDING": "RAZUMEVANJE",
    "PAST": "PROŠLOST",
    "Contact: contact@militarybase.example": "Kontakt: contact@militarybase.example",
    "Search and filter the catalog": "Pretražite i filtrirajte katalog",
    "Search catalog": "Pretraži katalog",
    "Back to catalog": "Nazad na katalog",
    "Description": "Opis",
    "Specifications": "Specifikacije",
    "A guide to the vehicles and systems that support land forces, from armored platforms to artillery and air defense.": "Pregled vozila i sistema koji podržavaju kopnene snage, od oklopnih platformi do artiljerije i protivvazdušne odbrane.",
    "Browse land equipment by platform, role, and documented development history.": "Pregledajte kopnenu opremu prema platformi, ulozi i dokumentovanoj istoriji razvoja.",
    "Tanks": "Tenkovi",
    "Main battle tanks and other tracked armored fighting vehicles.": "Glavni borbeni tenkovi i druga gusenična oklopna borbena vozila.",
    "Armored Vehicles": "Oklopna vozila",
    "Infantry fighting vehicles, personnel carriers, and protected mobility.": "Borbena vozila pešadije, transporteri i vozila zaštićene pokretljivosti.",
    "Artillery": "Artiljerija",
    "Artillery platforms and supporting systems across land forces.": "Artiljerijske platforme i prateći sistemi kopnenih snaga.",
    "Transport & Air Defense": "Transport i protivvazdušna odbrana",
    "Military transport vehicles and ground-based air defense systems.": "Vojna transportna vozila i kopneni sistemi protivvazdušne odbrane.",
    "Discover the ships, aircraft, and organizations that make up naval forces and shape maritime security around the world.": "Upoznajte brodove, letelice i organizacije koje čine pomorske snage i oblikuju pomorsku bezbednost širom sveta.",
    "A developing reference to naval platforms, fleets, and the people and systems behind them.": "Pregled pomorskih platformi, flota, ljudi i sistema koji stoje iza njih, u stalnom je razvoju.",
    "Aircraft Carriers": "Nosači aviona",
    "Carrier types, their aviation role, and notable examples.": "Vrste nosača aviona, njihova uloga u avijaciji i značajni primeri.",
    "Surface Fleets": "Površinske flote",
    "Destroyers, frigates, patrol vessels, and other surface ships.": "Razarači, fregate, patrolni brodovi i druga površinska plovila.",
    "Submarines": "Podmornice",
    "Submarine classes, roles, and service histories.": "Klase podmornica, njihove uloge i istorija službe.",
    "Naval Aviation": "Pomorska avijacija",
    "Aircraft and aviation units operated by naval forces.": "Letelice i vazduhoplovne jedinice pomorskih snaga.",
    "A dedicated guide to hunting firearms, optics, outdoor equipment, traditions, and wildlife.": "Vodič kroz lovačko vatreno oružje, optiku, opremu za boravak u prirodi, tradiciju i divlje životinje.",
    "FIELDCRAFT & OUTDOORS": "VEŠTINE BORAVKA U PRIRODI",
    "THE ART OF": "UMEĆE",
    "THE OUTDOORS": "BORAVKA U PRIRODI",
    "A dedicated destination for hunting equipment, field traditions, and wildlife. Separate from our military weapons coverage, this section explores the outdoor world on its own terms.": "Posebna celina posvećena lovačkoj opremi, terenskoj tradiciji i divljim životinjama. Odvojeno od prikaza vojnog naoružanja, ovaj odeljak istražuje svet boravka u prirodi.",
    "A DISTINCT DESTINATION": "POSEBNA CELINA",
    "HUNTING &": "LOV I",
    "FIELDCRAFT": "VEŠTINE BORAVKA U PRIRODI",
    "Hunting is an independent category with its own equipment, knowledge, and outdoor heritage.": "Lov je zasebna kategorija sa sopstvenom opremom, znanjem i tradicijom boravka u prirodi.",
    "Hunting Rifles": "Lovačke puške",
    "Hunting Firearms": "Lovačko oružje",
    "Hunting Carbines": "Lovački karabini",
    "Shotguns": "Sačmarice",
    "Beretta": "Bereta",
    "Beretta Sporting Firearms": "Beretino sportsko oružje",
    "Browse shotguns": "Pregledaj sačmarice",
    "Browse carbines": "Pregledaj karabine",
    "Browse Beretta": "Pregledaj Beretu",
    "Choose a collection": "Izaberite kolekciju",
    "Model catalogs": "Katalozi modela",
    "A curated starting catalog of established hunting and sporting models. Gauge availability varies by model variant and production period.": "Izbor poznatih lovačkih i sportskih modela. Dostupnost kalibra zavisi od varijante i perioda proizvodnje.",
    "A curated selection of recognized sporting carbines. Listed chamberings are examples and may not be offered for every production run.": "Izbor poznatih sportskih karabina. Navedeni kalibri su primeri i nisu nužno dostupni za svaku seriju proizvodnje.",
    "A selected collection of Beretta sporting and hunting shotguns. Caliber/gauge and model dates can vary by specific version.": "Izbor Beretinih sportskih i lovačkih sačmarica. Kalibar i datumi modela mogu se razlikovati među verzijama.",
    "Search models": "Pretraga modela",
    "Name or manufacturer": "Naziv ili proizvođač",
    "Filter by gauge": "Filtriraj po kalibru",
    "Filter by caliber": "Filtriraj po kalibru",
    "Catalog filters and sorting": "Filteri i sortiranje kataloga",
    "Photograph placeholder": "Mesto za fotografiju",
    "All gauges": "Svi kalibri",
    "All calibers": "Svi kalibri",
    "Sort": "Sortiraj",
    "Name (A–Z)": "Naziv (A–Š)",
    "Name (Z–A)": "Naziv (Š–A)",
    "Year (oldest first)": "Godina (od najstarije)",
    "Year (newest first)": "Godina (od najnovije)",
    "Gauge (A–Z)": "Kalibar (A–Š)",
    "Gauge (Z–A)": "Kalibar (Š–A)",
    "Caliber (A–Z)": "Kalibar (A–Š)",
    "Caliber (Z–A)": "Kalibar (Š–A)",
    "Manufacturer": "Proizvođač",
    "Introduced": "Predstavljen",
    "Not specified": "Nije navedeno",
    "Gauge": "Kalibar",
    "Caliber / Gauge": "Kalibar",
    "Germany": "Nemačka",
    "Finland": "Finska",
    "Czech Republic": "Češka",
    "Belgium": "Belgija",
    "Belgium / United States": "Belgija / Sjedinjene Države",
    "Austria": "Austrija",
    "Japan": "Japan",
    "Italy": "Italija",
    "12 gauge": "kalibar 12",
    "16 gauge": "kalibar 16",
    "20 gauge": "kalibar 20",
    "28 gauge": "kalibar 28",
    ".410 bore": ".410 inča",
    "1990s": "devedesetih godina",
    "PHOTO PLACEHOLDER": "MESTO ZA FOTOGRAFIJU",
    "No models match your filters.": "Nijedan model ne odgovara izabranim filterima.",
    "Back to Hunting Firearms": "Nazad na lovačko oružje",
    "← Back to Hunting Firearms": "← Nazad na lovačko oružje",
    "MODEL CATALOGS": "KATALOZI MODELA",
    "REFERENCE CATALOG": "REFERENTNI KATALOG",
    "SPORTING FIREARMS CATALOG": "KATALOG SPORTSKOG ORUŽJA",
    "ITALIAN SPORTING FIREARMS": "ITALIJANSKO SPORTSKO ORUŽJE",
    "MANUFACTURER COLLECTION": "KOLEKCIJA PROIZVOĐAČA",
    "SHOTGUN MODELS": "MODELI SAČMARICA",
    "CARBINE MODELS": "MODELI KARABINA",
    "BERETTA MODELS": "BERETINI MODELI",
    "A focused reference to notable Beretta hunting and sporting shotgun families.": "Pregled poznatih Beretinih porodica lovačkih i sportskih sačmarica.",
    "Well-known sporting and hunting shotgun models from international manufacturers.": "Poznati modeli sportskih i lovačkih sačmarica proizvođača iz celog sveta.",
    "Compact sporting rifles and carbines from established manufacturers.": "Kompaktne sportske puške i karabini poznatih proizvođača.",
    "A dedicated catalog of Beretta's notable hunting and sporting firearms.": "Poseban katalog poznatog Beretinog lovačkog i sportskog oružja.",
    "Browse notable sporting shotgun models, manufacturers, introduction dates, and available gauges.": "Pregledajte poznate sportske sačmarice, proizvođače, godine predstavljanja i dostupne kalibre.",
    "Browse compact sporting rifles and carbines, their makers, model dates, and chamberings.": "Pregledajte kompaktne sportske puške i karabine, proizvođače, godine modela i kalibre.",
    "Each collection includes model cards, searchable specifications, and filters for gauge or caliber.": "Svaka kolekcija sadrži kartice modela, pretražive specifikacije i filtere za kalibar.",
    "Years identify the model's introduction, not every later variant. Gauge availability differs across editions; verify specifications with the manufacturer before relying on them.": "Godine označavaju predstavljanje modela, ne svake kasnije varijante. Dostupni kalibri se razlikuju; proverite specifikacije kod proizvođača.",
    "Years refer to the model's introduction or the earliest commonly documented production period; some entries give a decade where a precise year is not established. Chamberings vary by variant; verify current manufacturer specifications.": "Godine se odnose na predstavljanje modela ili najraniji uobičajeno dokumentovan period proizvodnje; za neke je navedena decenija jer tačna godina nije utvrđena. Kalibri zavise od varijante; proverite aktuelne specifikacije proizvođača.",
    "Dates identify the model family's introduction and are approximate where product histories use different launch or production milestones. Verify exact variant specifications with Beretta.": "Datumi označavaju predstavljanje porodice modela i približni su kada istorijski pregledi navode različite datume lansiranja ili početka proizvodnje. Proverite tačne specifikacije verzije kod Berette.",
    "Hunting Equipment": "Lovačka oprema",
    "Animals & Hunting Season": "Životinje i lovna sezona",
    "Hunting Ground": "Lovište",
    "Explore four focused guides covering equipment, wildlife, seasons, and the places where hunting takes place.": "Istražite četiri vodiča o opremi, divljim životinjama, sezonama i lovištima.",
    "Learn about hunting rifle types, features, safe handling, and sporting use.": "Upoznajte vrste lovačkih pušaka, njihove karakteristike, bezbedno rukovanje i sportsku primenu.",
    "Explore clothing, optics, field gear, and other practical outdoor equipment.": "Istražite odeću, optiku, terensku opremu i druge praktične potrepštine za boravak u prirodi.",
    "Discover wildlife and understand why permitted seasons vary by species and location.": "Upoznajte divlje životinje i saznajte zašto se dozvoljene sezone razlikuju po vrstama i lokacijama.",
    "Explore habitats, terrain, conservation, and responsible access to hunting areas.": "Istražite staništa, teren, zaštitu prirode i odgovoran pristup lovištima.",
    "An introductory reference to sporting rifle categories, design considerations, and safe, lawful ownership.": "Uvodni pregled lovačkih pušaka, njihovih konstrukcijskih osobina i bezbednog, zakonitog posedovanja.",
    "SPORTING FIREARMS": "LOVAČKO VATRENO ORUŽJE",
    "This section will provide an accessible overview of hunting rifles and their place in responsible sporting practice.": "Ova celina pruža pregled lovačkih pušaka i njihove uloge u odgovornoj sportskoj praksi.",
    "Types & Design": "Vrste i konstrukcija",
    "Compare broad rifle categories and the features that distinguish their intended sporting roles.": "Upoznajte osnovne kategorije pušaka i osobine koje određuju njihovu sportsku namenu.",
    "Responsible Use": "Odgovorna upotreba",
    "Safe storage, lawful possession, and careful handling are essential responsibilities for every firearm owner.": "Bezbedno čuvanje, zakonito posedovanje i pažljivo rukovanje osnovne su obaveze svakog vlasnika vatrenog oružja.",
    "Rules & Suitability": "Propisi i namena",
    "Requirements and permitted equipment differ by jurisdiction; consult current local regulations and qualified instruction.": "Uslovi i dozvoljena oprema razlikuju se prema nadležnosti; proverite važeće lokalne propise i potražite obuku od kvalifikovanih instruktora.",
    "A practical overview of clothing, optics, field gear, and other equipment used for outdoor activities.": "Praktičan pregled odeće, optike, terenske opreme i drugih potrepština za aktivnosti na otvorenom.",
    "PREPARATION & FIELDCRAFT": "PRIPREMA I VEŠTINE NA TERENU",
    "Good preparation supports comfort, awareness, and responsible conduct in the field.": "Dobra priprema doprinosi udobnosti, pažnji i odgovornom ponašanju na terenu.",
    "Clothing & Footwear": "Odeća i obuća",
    "Consider weather, terrain, visibility, and comfort when selecting appropriate outdoor clothing.": "Pri izboru odeće za boravak na otvorenom uzmite u obzir vremenske uslove, teren, vidljivost i udobnost.",
    "Optics & Navigation": "Optika i navigacija",
    "Field observation and reliable navigation tools help users stay aware of their surroundings.": "Oprema za posmatranje i pouzdani navigacioni alati pomažu u snalaženju i praćenju okoline.",
    "Field Essentials": "Osnovna terenska oprema",
    "Plan for communication, first aid, hydration, and safe return according to the outing and local guidance.": "U skladu sa aktivnošću i lokalnim smernicama, isplanirajte komunikaciju, prvu pomoć, vodu i bezbedan povratak.",
    "A guide to wildlife, conservation, and the local rules that define hunting seasons.": "Vodič kroz divlje životinje, zaštitu prirode i lokalne propise koji određuju lovne sezone.",
    "WILDLIFE & CONSERVATION": "DIVLJE ŽIVOTINJE I ZAŠTITA PRIRODE",
    "Explore wildlife and the principles behind seasonal rules, conservation, and responsible management.": "Upoznajte divlje životinje i načela sezonskih propisa, zaštite prirode i odgovornog upravljanja.",
    "SPECIES & SEASONS": "VRSTE I SEZONE",
    "Species, permitted seasons, and restrictions vary by location. Always check current official rules before taking part in any hunting activity.": "Vrste, dozvoljene sezone i ograničenja razlikuju se po lokaciji. Pre lova uvek proverite važeće zvanične propise.",
    "Wildlife Profiles": "Pregled životinjskih vrsta",
    "Learn about animal habitats, behavior, and conservation status using reliable local references.": "Informišite se o staništima, ponašanju i statusu zaštite životinja koristeći pouzdane lokalne izvore.",
    "Seasonal Rules": "Sezonski propisi",
    "Dates and permitted activities are set by local authorities and may change from year to year.": "Datume i dozvoljene aktivnosti određuju lokalne vlasti; oni se mogu menjati iz godine u godinu.",
    "Conservation": "Zaštita prirode",
    "Responsible wildlife management considers population health, habitats, and applicable protections.": "Odgovorno upravljanje divljim životinjama uzima u obzir stanje populacija, staništa i važeće mere zaštite.",
    "Explore hunting grounds, habitats, access, and responsible outdoor stewardship.": "Istražite lovišta, staništa, pristup i odgovorno očuvanje prirode.",
    "LAND & HABITAT": "ZEMLJIŠTE I STANIŠTE",
    "An introduction to habitats, terrain, access, and care for the places that support wildlife.": "Uvod u staništa, teren, pristup i očuvanje prostora koji podržavaju divlji svet.",
    "PLACES & STEWARDSHIP": "PROSTOR I OČUVANJE",
    "Hunting areas differ in habitat, land ownership, access rules, and environmental conditions. Follow local requirements and respect protected areas.": "Lovišta se razlikuju po staništu, vlasništvu nad zemljištem, pravilima pristupa i uslovima životne sredine. Poštujte lokalne propise i zaštićena područja.",
    "Habitats & Terrain": "Staništa i teren",
    "Woodlands, wetlands, mountains, and open country each support different wildlife and require different awareness.": "Šume, močvare, planine i otvoreni predeli imaju različit živi svet i zahtevaju prilagođenu pažnju.",
    "Access & Boundaries": "Pristup i granice",
    "Confirm permissions, boundaries, and land-use restrictions before entering any area.": "Pre ulaska proverite dozvole, granice i ograničenja korišćenja zemljišta.",
    "Care for the Ground": "Briga o prirodi",
    "Protect habitats, avoid disturbance, and leave the area in good condition for others and for wildlife.": "Čuvajte staništa, izbegavajte uznemiravanje životinja i ostavite prostor u dobrom stanju za druge i divlji svet.",
    "BACK TO HUNTING ↑": "NAZAD NA LOV ↑",
    "Hunting rifle types, models, and their sporting applications.": "Vrste i modeli lovačkih pušaka i njihova sportska primena.",
    "Shotguns": "Sačmarice",
    "Shotgun platforms and sporting uses in hunting traditions.": "Tipovi sačmarica i njihova sportska primena u lovačkoj tradiciji.",
    "Optics & Scopes": "Optika i nišani",
    "Hunting scopes, binoculars, and other field observation optics.": "Lovački nišani, dvogledi i druga optika za posmatranje na terenu.",
    "Outdoor Equipment": "Oprema za boravak u prirodi",
    "Field gear, accessories, traditions, habitats, and wildlife.": "Terenska oprema, dodaci, tradicija, staništa i divlje životinje.",
    "DEDICATED CATEGORY": "POSEBNA KATEGORIJA",
    "This Hunting section is independent of": "Ovaj odeljak o lovu nezavisan je od",
    "Discover tanks, armored vehicles, military transport, artillery, and air defense systems.": "Upoznajte tenkove, oklopna vozila, vojni transport, artiljeriju i sisteme protivvazdušne odbrane.",
    "Explore naval forces, warships, submarines, fleets, and naval aviation from around the world.": "Istražite pomorske snage, ratne brodove, podmornice, flote i pomorsku avijaciju širom sveta.",
    "LESSONS THROUGH TIME": "POUKE KROZ VREME",
    "Explore the conflicts, people, technology, uniforms, and events that have shaped the course of history.": "Istražite sukobe, ljude, tehnologiju, uniforme i događaje koji su oblikovali tok istorije.",
    "Historical topics presented with context, chronology, and attention to the people and events involved.": "Istorijske teme predstavljene uz kontekst, hronologiju i pažnju posvećenu ljudima i događajima.",
    "The origins, major campaigns, and lasting impact of the First World War, 1914–1918.": "Poreklo, glavne kampanje i trajni uticaj Prvog svetskog rata, 1914–1918.",
    "Key theaters, turning points, and global consequences of the Second World War, 1939–1945.": "Glavna ratišta, prekretnice i globalne posledice Drugog svetskog rata, 1939–1945.",
    "Proxy wars, regional crises, and military strategy shaped by Cold War rivalries.": "Posrednički ratovi, regionalne krize i vojna strategija oblikovani rivalstvom tokom Hladnog rata.",
    "Conflicts since 1990, viewed through their historical, political, and human contexts.": "Sukobi od 1990. godine, sagledani kroz istorijski, politički i ljudski kontekst.",
    "Decisive battles across eras, with their commanders, strategies, and outcomes.": "Presudne bitke iz različitih razdoblja, njihovi komandanti, strategije i ishodi.",
    "Warfare in ancient civilizations and medieval societies, from armies to tactics.": "Ratovanje u antičkim civilizacijama i srednjovekovnim društvima, od vojski do taktika.",
    "Profiles of commanders whose decisions shaped military campaigns and institutions.": "Profili komandanata čije su odluke oblikovale vojne kampanje i institucije.",
    "How weapons, logistics, communications, and doctrine changed over time.": "Kako su se naoružanje, logistika, komunikacija i doktrina menjali kroz vreme.",
    "Key conflicts, forces, and turning points in the military history of Serbia.": "Ključni sukobi, snage i prekretnice u vojnoj istoriji Srbije.",
    "Famous Battles": "Poznate bitke",
    "Ancient & Medieval Warfare": "Antičko i srednjovekovno ratovanje",
    "Military Commanders": "Vojni komandanti",
    "Military Technology": "Vojna tehnologija",
    "Serbian Military History": "Vojna istorija Srbije"
  };

  const originalValues = new WeakMap();
  const commanderProfileOriginals = new WeakMap();
  let contextualTranslations = new WeakMap();
  let language = "en";
  const commanderProfileTranslations = {
    "alexander-suvorov": [
      "Moskva, Rusko carstvo",
      "Sankt Peterburg, Rusko carstvo",
      "Generalisimus; feldmaršal",
      "Carska ruska vojska",
      "Suvorov je stupio u službu ruske vojske i napredovao kroz pohode protiv Osmanskog carstva i u Poljskoj.",
      "Predvodio je ruske snage u rusko-turskim ratovima, kao i u italijanskom i švajcarskom pohodu 1799. godine.",
      "Pamti se kao jedan od najuspešnijih komandanata Carske Rusije; njegova karijera obuhvatila je nekoliko velikih evropskih sukoba."
    ],
    "mikhail-kutuzov": [
      "Sankt Peterburg, Rusko carstvo",
      "Bunzlau, Kraljevina Bohemija",
      "Feldmaršal",
      "Carska ruska vojska",
      "Kutuzov je učestvovao u ratovima protiv Osmanskog carstva i postao viši ruski komandant u Napoleonovo doba.",
      "Kao glavnokomandujući tokom Napoleonove invazije 1812. godine, nadgledao je povlačenje ruske vojske, bitku kod Borodina i pohod koji je primorao Francuze na povlačenje.",
      "Njegova strategija tokom pohoda 1812. godine postala je važan deo ruskog istorijskog sećanja na poraz Napoleonove invazije."
    ],
    "semyon-budyonny": [
      "Kozyurin, Rusko carstvo",
      "Moskva, Sovjetski Savez",
      "Maršal Sovjetskog Saveza",
      "Carska ruska vojska; Crvena armija",
      "Budjoni je služio u konjici Carske Rusije, a nakon revolucija 1917. godine postao je boljševički vojni vođa.",
      "Komandovao je Prvom konjičkom armijom tokom Ruskog građanskog rata, a kasnije je obavljao visoke konjičke i vojne dužnosti u Sovjetskom Savezu.",
      "Istaknuti komandant konjice tokom građanskog rata i ranog sovjetskog perioda; njegovo kasnije komandovanje u Drugom svetskom ratu bilo je neujednačeno."
    ],
    "mikhail-tukhachevsky": [
      "Slednevo, Rusko carstvo",
      "Moskva, Sovjetski Savez",
      "Maršal Sovjetskog Saveza",
      "Carska ruska vojska; Crvena armija",
      "Tuhačevski je služio u Prvom svetskom ratu, bio zarobljen, a potom se nakon Ruske revolucije pridružio Crvenoj armiji.",
      "Komandovao je snagama Crvene armije tokom Ruskog građanskog rata i obavljao visoke dužnosti, uključujući položaj zamenika narodnog komesara odbrane.",
      "Pisao je o modernizaciji Crvene armije i mehanizovanih snaga. Pogubljen je tokom Velike čistke, a kasnije rehabilitovan. Portret se može dodati kada bude dostupan."
    ],
    "aleksandr-vasilevsky": [
      "Novaja Golčikha, Rusko carstvo",
      "Moskva, Sovjetski Savez",
      "Maršal Sovjetskog Saveza; načelnik Generalštaba",
      "Crvena armija; Oružane snage Sovjetskog Saveza",
      "Vasilevski je prošao oficirsku obuku i napredovao kroz štabnu službu u Crvenoj armiji.",
      "Kao načelnik Generalštaba, učestvovao je u planiranju velikih sovjetskih operacija tokom Drugog svetskog rata, a kasnije je komandovao sovjetskim pohodom protiv Japana.",
      "Jedan od vodećih sovjetskih štabnih planera, čija je ratna uloga obuhvatala koordinaciju velikih ofanziva na Istočnom frontu."
    ],
    "georgy-zhukov": [
      "Strelkovka, Rusko carstvo",
      "Moskva, Sovjetski Savez",
      "Maršal Sovjetskog Saveza",
      "Crvena armija; Oružane snage Sovjetskog Saveza",
      "Žukov je služio u Carskoj ruskoj vojsci, a nakon revolucija 1917. godine pridružio se Crvenoj armiji.",
      "Tokom Drugog svetskog rata obavljao je važne komandne dužnosti, uključujući odbranu Moskve, Staljingrad, Kursk i zauzimanje Berlina.",
      "Jedan od najpoznatijih sovjetskih komandanata Drugog svetskog rata; njegova karijera odražavala je i političke pritiske na visoke oficire pod Staljinom."
    ],
    "konstantin-rokossovsky": [
      "Velikije Luki, Rusko carstvo",
      "Moskva, Sovjetski Savez",
      "Maršal Sovjetskog Saveza; maršal Poljske",
      "Crvena armija; Poljska narodna armija",
      "Rokosovski je služio u Prvom svetskom ratu, a tokom Ruskog građanskog rata pridružio se Crvenoj armiji.",
      "Komandovao je sovjetskim frontovima u velikim operacijama Drugog svetskog rata, uključujući operaciju Bagration, a kasnije je bio ministar odbrane Poljske.",
      "Istaknuti sovjetski komandant fronta; njegova karijera obuhvatila je zatvoreništvo tokom čistki i povratak na komandnu dužnost tokom rata."
    ],
    "ivan-konev": [
      "Lodejno, Rusko carstvo",
      "Moskva, Sovjetski Savez",
      "Maršal Sovjetskog Saveza",
      "Crvena armija; Oružane snage Sovjetskog Saveza",
      "Konev je služio u Carskoj ruskoj vojsci, a nakon revolucija 1917. godine pridružio se Crvenoj armiji.",
      "Komandovao je sovjetskim frontovima tokom Drugog svetskog rata, uključujući operacije oslobađanja Ukrajine i napredovanje u srednju Evropu.",
      "Visoki komandant Istočnog fronta koji je kasnije obavljao istaknute vojne dužnosti u Varšavskom paktu i sovjetskim oružanim snagama."
    ],
    "vasily-chuikov": [
      "Serebrjanye Prudy, Rusko carstvo",
      "Moskva, Sovjetski Savez",
      "Maršal Sovjetskog Saveza",
      "Crvena armija; Oružane snage Sovjetskog Saveza",
      "Čujkov se kao mladić pridružio Crvenoj armiji i služio tokom Ruskog građanskog rata i kasnijih vojnih misija u inostranstvu.",
      "Komandovao je sovjetskom 62. armijom u odbrani Staljingrada, a kasnije je predvodio snage u napredovanju prema Berlinu.",
      "Njegovo komandovanje u Staljingradu postalo je jedno od ključnih poglavlja sovjetske pobede na Istočnom frontu."
    ]
  };
  const countryCommanderTranslations = {
    serbia: {
      "tanasko-rajic": ["Rajić se pamti kao komandant tokom Prvog srpskog ustanka.", "Istorijski izvori ga povezuju sa borbama na Ljubiću tokom Drugog srpskog ustanka, gde je poginuo 1815. godine.", "Pamti se među komandantima iz perioda srpskih ustanaka."],
      karadjordje: ["Karađorđe je postao glavni vojni i politički vođa Prvog srpskog ustanka, započetog 1804. godine.", "Predvodio je srpske snage protiv osmanske vlasti do sloma ustanka 1813. godine. Vratio se iz izgnanstva 1817. i ubrzo potom je ubijen.", "Jedna je od ključnih ličnosti moderne srpske državnosti i osnivač dinastije Karađorđević."],
      "stanoje-glavas": ["Glavaš je bio istaknuti komandant Prvog srpskog ustanka i učestvovao je u operacijama u Šumadiji.", "Prema istorijskim izvorima, poginuo je 1815. godine tokom osmanskog odgovora na obnovljeni ustanak.", "Pamti se među ranim komandantima srpskih ustanaka."],
      "milos-obrenovic": ["Obrenović je imao vodeću ulogu u Drugom srpskom ustanku 1815. godine i pregovarao je sa osmanskim vlastima.", "Njegovo vođstvo doprinelo je sticanju široke autonomije Srbije; u dva perioda vladao je kao knez.", "Jedan je od utemeljivača moderne srpske kneževine i osnivač dinastije Obrenović."],
      "hajduk-veljko": ["Veljko Petrović postao je istaknuti komandant tokom Prvog srpskog ustanka.", "Branio je Negotinsku krajinu od osmanskih snaga i poginuo u borbama 1813. godine.", "Pamti se kao jedan od najpoznatijih regionalnih komandanata ustanka; tačan datum rođenja i pojedinosti zahtevaju proveru."],
      "radomir-putnik": ["Putnik je služio u srpskoj vojsci tokom srpsko-osmanskih ratova, Srpsko-bugarskog rata, balkanskih ratova i Prvog svetskog rata.", "Obavljao je visoke štabne i komandne dužnosti, učestvovao u vojnom planiranju Srbije i povlačenju vojske preko Albanije 1915. godine.", "Pamti se kao jedan od najznačajnijih srpskih profesionalnih oficira i vojnih stratega."],
      "pavle-sturm": ["Rođen kao Paulus Sturm u Pruskoj, doselio se u Srbiju i služio u njenoj vojsci.", "Služio je u srpsko-osmanskim ratovima, Srpsko-bugarskom ratu, balkanskim ratovima i Prvom svetskom ratu, obavljajući visoke komandne dužnosti.", "Značajan je kao oficir rođen u inostranstvu koji je postao jedan od visokih srpskih komandanata."],
      "zivojin-misic": ["Mišić je završio Srpsku vojnu akademiju i učestvovao u Srpsko-bugarskom ratu, balkanskim ratovima i Prvom svetskom ratu.", "Tokom Kolubarske bitke 1914. godine preuzeo je komandu nad Prvom armijom i predvodio protivofanzivu.", "Pamti se po ulozi u srpskoj pobedi na Kolubari i kao jedan od vodećih srpskih komandanata na terenu."],
      "stepa-stepanovic": ["Stepanović je učestvovao u Srpsko-bugarskom ratu, oba balkanska rata i Prvom svetskom ratu.", "Obavljao je visoke komandne i državne dužnosti i komandovao Drugom srpskom armijom, koja je imala važnu ulogu u Cerskoj bici.", "Pamti se kao jedan od srpskih vojvoda iz balkanskih ratova i Prvog svetskog rata."],
      "petar-bojovic": ["Bojović je pohađao Srpsku vojnu akademiju i učestvovao u ratovima od kraja 19. veka do Prvog svetskog rata.", "Obavljao je visoke komandne dužnosti u balkanskim ratovima i Prvom svetskom ratu, uključujući komandu nad Prvom armijom tokom proboja 1918. godine.", "Jedan je od srpskih vojvoda i istaknutih komandanata u ratnoj istoriji Srbije."],
      "vojin-popovic": ["Popović je postao poznat kao gerilski komandant i vođa dobrovoljačkih odreda.", "Učestvovao je u balkanskim ratovima i Prvom svetskom ratu, a poginuo je u borbama kod Gruništa 1916. godine.", "Pamti se po ulozi u srpskim dobrovoljačkim i gerilskim jedinicama."],
      "dragutin-gavrilovic": ["Gavrilović je bio srpski oficir čija je karijera obuhvatila balkanske ratove i Prvi svetski rat.", "Naročito se povezuje sa odbranom Beograda u oktobru 1915. godine.", "Pamti se po komandovanju tokom odbrane Beograda; tačne činove i pojedinosti kasnije službe treba proveriti."],
      "milunka-savic": ["Savić je učestvovala u balkanskim ratovima i Prvom svetskom ratu, stupivši u vojsku pod muškim identitetom.", "Kada je nakon ranjavanja otkriven njen pol, nastavila je da služi kao borac; ratni put obuhvatao je i Solunski front.", "Široko je poznata kao jedna od najodlikovanijih žena vojnika Prvog svetskog rata; pojedinačna odlikovanja treba proveriti."],
      "gavrilo-princip": ["Princip je bio bosanski Srbin, nacionalista i pripadnik revolucionarnog pokreta Mlada Bosna.", "Dana 28. juna 1914. u Sarajevu je izvršio atentat na nadvojvodu Franca Ferdinanda i Sofiju. Atentat je bio neposredan povod Julske krize koja je prethodila Prvom svetskom ratu.", "Njegov čin imao je dalekosežne istorijske posledice. Osuđen je i zatvoren, a umro je u zatvoru 1918. godine."],
      "pane-djukic": ["Đukić je rođen u selu Kapljuh, blizu Bosanskog Petrovca. Posle osnovne škole preselio se u Beograd i Kruševac, gde je izučio limarski zanat i uključio se u revolucionarni omladinski radnički pokret. Nakon okupacije Jugoslavije 1941. pridružio se partizanskom pokretu i Komunističkoj partiji Jugoslavije. Najpre je bio mitraljezac u Rasinskom partizanskom odredu, a zatim je napredovao zahvaljujući hrabrosti i komandnim sposobnostima. Godine 1943. postavljen je za komandanta Rasinskog udarnog bataljona, potom za zamenika komandanta 3. južnomoravske brigade, a aprila 1944. za komandanta 16. srpske brigade. Posle oslobođenja bio je savezni poslanik, a zatim službenik Uprave državne bezbednosti. Poginuo je jula 1952. kod sela Trnjane, blizu Leskovca, u oružanom sukobu sa dvojicom ljudi koji su prešli jugoslovensko-bugarsku granicu. U trenutku smrti imao je čin potpukovnika JNA.", "Vojnu karijeru započeo je 1941. pristupanjem Rasinskom partizanskom odredu tokom Narodnooslobodilačkog rata. Od mitraljesca je napredovao do komandnih dužnosti, od vođe odeljenja do komandanta odreda. Godine 1943. postao je komandant Rasinskog udarnog bataljona, a zatim zamenik komandanta 3. južnomoravske brigade. Aprila 1944. imenovan je za komandanta 16. srpske brigade. Bio je poznat po hrabrosti i sposobnosti da vodi jedinice u teškim borbenim uslovima. Posle oslobođenja 1945. nastavio je državnu službu u Upravi državne bezbednosti. U trenutku smrti, jula 1952, imao je čin potpukovnika JNA.", "Đukić se pamti kao partizanski komandant koji je od običnog borca napredovao do vođstva srpske brigade tokom Drugog svetskog rata. Njegova služba i smrt 1952. godine deo su istorije jugoslovenskog partizanskog pokreta i posleratnih bezbednosnih službi."]
    },
    "united-states": {
      "george-washington": ["Virdžinijski plantažer i politički vođa koji je 1775. postao vrhovni komandant Kontinentalne armije.", "Predvodio je Kontinentalnu armiju tokom Američkog rata za nezavisnost i 1781. prihvatio britansku predaju kod Jorktauna.", "Njegovo vođstvo doprinelo je sticanju nezavisnosti; postao je prvi predsednik Sjedinjenih Država."],
      "robert-e-lee": ["Završio je Vojnu akademiju Vest Point i služio u američkoj vojsci pre nego što se 1861. priključio Konfederaciji.", "Komandovao je Armijom Severne Virdžinije tokom Američkog građanskog rata i predao se kod Apozmatoksa 1865. godine.", "Istaknuti, ali osporavani komandant Građanskog rata, čije nasleđe ostaje nerazdvojno od Konfederacije i ropstva."],
      "ulysses-s-grant": ["Grant je završio Vest Point i vratio se vojnoj službi na početku Građanskog rata.", "Predvodio je snage Unije na zapadnom ratištu, postao glavnokomandujući i 1865. prihvatio Lijevu predaju.", "Njegovo komandovanje značajno je doprinelo pobedi Unije; kasnije je bio predsednik SAD."],
      "john-j-pershing": ["Pershing je pre Prvog svetskog rata služio u ratovima protiv starosedelaca, Špansko-američkom ratu i filipinsko-američkom sukobu.", "Kao komandant Američkih ekspedicionih snaga predvodio je američke trupe u Francuskoj 1917–1918.", "Doprineo je oblikovanju moderne američke vojske i njenoj samostalnoj ulozi među savezničkim snagama u Prvom svetskom ratu."],
      "douglas-macarthur": ["Makartur je bio najbolji student svoje klase na Vest Pointu i služio je u Prvom svetskom ratu.", "Predvodio je savezničke snage na jugozapadnom Pacifiku, nadgledao okupaciju Japana i komandovao snagama UN na početku Korejskog rata.", "Jedan od najistaknutijih američkih komandanata 20. veka, zapamćen po komandovanju na Pacifiku i po kontroverzama."],
      "chester-w-nimitz": ["Nimic je izgradio karijeru u američkoj mornarici, specijalizujući se za podmorničko i flotno komandovanje.", "Kao vrhovni komandant oblasti Tihog okeana predvodio je velike savezničke pomorske operacije protiv Japana.", "Jedan od ključnih američkih pomorskih komandanata u ratu na Pacifiku; posle rata bio je načelnik pomorskih operacija."],
      "george-s-patton": ["Paton se školovao za konjičkog oficira i rano zastupao razvoj oklopnog ratovanja u SAD.", "Komandovao je američkim snagama u Severnoj Africi, na Siciliji i u zapadnoj Evropi tokom Drugog svetskog rata.", "Poznat po brzim oklopnim operacijama i energičnom stilu vođenja; njegovo javno ponašanje često je izazivalo kritike."],
      "dwight-d-eisenhower": ["Ajzenhauer je između svetskih ratova gradio karijeru štabnog oficira i planera.", "Koordinisao je savezničke snage u Severnoj Africi i Evropi, a kao vrhovni saveznički komandant predvodio je pripreme za invaziju na Normandiju 1944.", "Njegovo vođstvo savezničke koalicije prethodilo je dvama predsedničkim mandatima u SAD."],
      "norman-schwarzkopf": ["Švarckopf je služio u Vijetnamu i obavljao visoke dužnosti u američkoj Centralnoj komandi.", "Komandovao je koalicionim snagama tokom operacije Pustinjska oluja 1991. godine.", "Komandovanje koalicijom u Zalivskom ratu postalo je najpoznatiji deo njegove vojne karijere."]
    },
    "united-kingdom": {
      "oliver-cromwell": ["Kromvel je postao vodeći parlamentarni komandant tokom Engleskog građanskog rata.", "Pomogao je u stvaranju i komandovanju Novom modelskom armijom, koja je porazila rojalističke snage.", "Uticajan vojni i politički vođa čija vlast i ratni pohodi ostaju predmet istorijskih rasprava."],
      "john-churchill-marlborough": ["Čerčil je kroz vojnu i dvorsku službu postao jedan od vodećih engleskih komandanata.", "Predvodio je savezničke armije u Ratu za špansko nasleđe, uključujući bitke kod Blenhajma, Ramijea, Oudenaardea i Malplakea.", "Njegovi pohodi ojačali su Veliku alijansu protiv Francuske; kalendarske razlike utiču na datume iz njegovog vremena."],
      "james-wolfe": ["Vulf je stupio u vojsku kao tinejdžer i služio u evropskim i kolonijalnim pohodima.", "Komandovao je britanskom ekspedicijom koja je 1759. zauzela Kvebek; poginuo je u bici na Abrahamovim ravnicama.", "Njegova pobeda uticala je na ishod Sedmogodišnjeg rata u Severnoj Americi."],
      "horatio-nelson": ["Nelson se kao dečak pridružio Kraljevskoj mornarici i napredovao tokom ratova protiv revolucionarne Francuske.", "Ostvario je velike pomorske pobede kod Nila i Kopenhagena, a komandovao je flotom kod Trafalgara, gde je smrtno ranjen.", "Pobeda kod Trafalgara osigurala je britansku pomorsku nadmoć tokom Napoleonovih ratova."],
      "duke-of-wellington": ["Velzli je služio u Indiji pre nego što je predvodio britanske i savezničke snage u Poluostrvskom ratu.", "Posle dugog pohoda u Španiji i Portugalu, 1815. je kod Vaterloa porazio Napoleona.", "Vodeći britanski komandant i državnik, koji je dva puta bio premijer."],
      "douglas-haig": ["Hejg je pre Prvog svetskog rata služio u konjici i pohodima u Indiji i Južnoj Africi.", "Kao glavnokomandujući Britanskih ekspedicionih snaga rukovodio je britanskim trupama na Zapadnom frontu.", "Njegovo komandovanje u Prvom svetskom ratu i dalje je predmet opsežnih istorijskih rasprava."],
      "bernard-montgomery": ["Montgomeri je služio u Prvom svetskom ratu, a između ratova bio je viši instruktor i komandant.", "Komandovao je Osmom armijom kod El Alamejna, a zatim 21. armijskom grupom u severozapadnoj Evropi.", "Istaknuti saveznički komandant Drugog svetskog rata, poznat po pažljivim pripremama i zahtevnom stilu."],
      "william-slim": ["Slim je služio u Prvom svetskom ratu, a između ratova na dužnostima u Indiji i na Bliskom istoku.", "Komandovao je Četrnaestom armijom u pohodu na Burmu, uključujući savezničko napredovanje kojim je Burma ponovo zauzeta.", "Poznat po obnovi i vođstvu multinacionalnih snaga u teškim uslovima džungle i snabdevanja."]
    },
    italy: {
      "giuseppe-garibaldi": ["Garibaldi je bio republikanski revolucionar i veteran pohoda u Južnoj Americi i Evropi.", "Njegova Ekspedicija hiljade 1860. doprinela je uključivanju južne Italije u proces ujedinjenja.", "Jedna od ključnih ličnosti Risorđimenta i ujedinjenja Italije."],
      "luigi-cadorna": ["Kadorna je napredovao u italijanskoj vojsci i 1914. postao načelnik Generalštaba.", "Rukovodio je italijanskim snagama u ranim pohodima Prvog svetskog rata, sve do poraza kod Kaporeta 1917.", "Njegovo komandovanje povezano je sa ofanzivama na Isoncu i neuspesima razotkrivenim kod Kaporeta."],
      "armando-diaz": ["Dijaz je služio kao artiljerijski oficir i visoki štabni oficir pre preuzimanja ratne komande.", "Posle Kaporeta postavljen je za načelnika Generalštaba; predvodio je vojsku u odbrani i završnim pohodima 1918.", "Njegovo vođstvo povezuje se sa italijanskom pobedom kod Vitorio Veneta i završetkom Prvog svetskog rata."],
      "pietro-badoglio": ["Badoljo je služio u kolonijalnim pohodima i napredovao do visokih komandi u italijanskoj vojsci.", "Imao je visoku komandu u pohodu na Etiopiju, a 1943. postao je premijer dok je Italija tražila primirje sa Saveznicima.", "Njegova karijera obuhvata italijansku monarhiju, fašistički period i izlazak iz Drugog svetskog rata."],
      "rodolfo-graziani": ["Gracijani je izgradio karijeru u italijanskim kolonijalnim ratovima, a kasnije služio fašističkom režimu.", "Komandovao je u Libiji i Etiopiji, a zatim postao visoki vojni funkcioner Italijanske Socijalne Republike.", "Njegova biografija nerazdvojna je od kolonijalnog nasilja i fašističke države."],
      "giovanni-messe": ["Mese je služio u Italijansko-turskom ratu i Prvom svetskom ratu pre nego što je napredovao do visokih komandi.", "Komandovao je italijanskim snagama u Severnoj Africi i italijanskim ekspedicionim korpusom na Istočnom frontu u Drugom svetskom ratu.", "Visoki italijanski komandant u oba svetska rata; njegove ratne dužnosti bile su deo pohoda fašističke Italije."],
      "italo-balbo": ["Balbo je bio rani fašistički vođa, a kasnije istaknuta ličnost italijanskog vazduhoplovstva i guverner Libije.", "Organizovao je grupni transatlantski let italijanskih aviona 1933. i obavljao visoke kolonijalne i vazduhoplovne dužnosti.", "Značajan organizator avijacije čija je politička karijera bila važna za fašističku Italiju."]
    },
    germany: {
      "helmuth-von-moltke-elder": ["Molke je razvijao pruski Generalštab i isticao značaj planiranja, železničke mobilizacije i operativne prilagodljivosti.", "Rukovodio je pruskim pohodima protiv Danske, Austrije i Francuske, uključujući ratove 1866. i 1870–1871.", "Njegov štabni sistem uticao je na moderno vojno planiranje i organizaciju Nemačkog carstva."],
      "paul-von-hindenburg": ["Hindenburg je služio u ratovima protiv Austrije i Francuske, a 1914. se vratio aktivnoj komandi.", "Postao je vodeći nemački komandant na Istočnom frontu, a kasnije načelnik Generalštaba; od 1925. bio je predsednik Nemačke.", "Njegovo vojno i političko nasleđe povezano je sa Prvim svetskim ratom i slomom Vajmarske republike."],
      "erich-ludendorff": ["Ludendorf se istakao kao štabni oficir i komandant na početku Prvog svetskog rata.", "Od 1916. bio je jedan od najuticajnijih nemačkih ratnih vođa i de facto učestvovao u upravljanju državnom politikom i operacijama.", "Njegovo nasleđe obuhvata vojno vođstvo, ali i kasniju političku aktivnost krajnje desnice."],
      "gerd-von-rundstedt": ["Rundštet je u Prvom svetskom ratu služio kao štabni oficir, a ostao je u Rajhsveru između ratova.", "Tokom Drugog svetskog rata obavljao je visoke komandne dužnosti na Istočnom i Zapadnom frontu.", "Bio je visoki nemački komandant u ratnim pohodima i okupaciji nacističke Nemačke."],
      "erich-von-manstein": ["Manštajn je u Prvom svetskom ratu i međuratnom Rajhsveru služio kao štabni oficir i komandant.", "Imao je visoke komande tokom nemačkih invazija na Francusku i Sovjetski Savez u Drugom svetskom ratu.", "Sposoban operativni komandant čija je služba bila deo nacističkog osvajačkog rata; posle rata osuđen je za ratne zločine."],
      "heinz-guderian": ["Guderijan je proučavao vezu i mehanizovano ratovanje i postao istaknuti zagovornik oklopnih snaga.", "Komandovao je oklopnim jedinicama tokom invazija na Poljsku, Francusku i Sovjetski Savez, a kasnije bio generalni inspektor oklopnih trupa.", "Njegovi tekstovi i ratna uloga oblikovali su rasprave o oklopnom ratovanju; služio je u pohodima nacističke Nemačke."],
      "erwin-rommel": ["Romel je služio u oba svetska rata i stekao reputaciju komandanta pokretnog ratovanja.", "Predvodio je nemačke i italijanske snage u Severnoj Africi, a kasnije komandovao u Francuskoj. Zbog povezanosti sa otporom Hitleru primoran je na samoubistvo.", "Njegov taktički ugled treba sagledati uz službu nacističkoj Nemačkoj i posleratno osporavanje mita o njegovoj ulozi."],
      "claus-von-stauffenberg": ["Štaufenberg je bio profesionalni oficir koji je služio u Drugom svetskom ratu i uključio se u nemački pokret otpora.", "Bio je jedan od organizatora pokušaja atentata na Hitlera i svrgavanja nacističkog režima 20. jula 1944.", "Pogubljen posle neuspelog puča, pamti se kao jedna od vodećih ličnosti vojnog otpora nacizmu."]
    },
    france: {
      "jean-baptiste-jourdan": ["Žurdan je služio u Američkom ratu za nezavisnost, a zatim postao general tokom Francuske revolucije.", "Komandovao je Armijom Severa i pobedio kod Flerisa 1794; kasnije je obavljao vojne i političke dužnosti pod Napoleonom.", "Istaknuti revolucionarni i Napoleonov komandant, povezan sa odbranom istočne granice Francuske."],
      "michel-ney": ["Nej je od običnog vojnika napredovao do jednog od Napoleonovih maršala.", "Učestvovao je u revolucionarnim i Napoleonovim ratovima, uključujući Napoleonov pohod 1815. i Vaterlo.", "Napoleon ga je hvalio kao hrabrog komandanta; pogubljen je posle obnove Burbonske monarhije."],
      "napoleon-bonaparte": ["Napoleon se školovao za artiljerijskog oficira i istakao se tokom Francuske revolucije.", "Predvodio je pohode širom Evrope, postao car 1804. i konačno je poražen kod Vaterloa 1815.", "Njegovi ratovi preoblikovali su Evropu, dok su Napoleonov zakonik i državne reforme ostavili trajan uticaj."],
      "louis-nicolas-davout": ["Davu je bio aristokratski oficir koji je podržao revoluciju i postao jedan od Napoleonovih najpouzdanijih maršala.", "Komandovao je kod Auerštata 1806. i učestvovao u pohodima u srednjoj Evropi, Rusiji i Nemačkoj.", "Poznat po disciplinovanom komandovanju, važio je za jednog od najuspešnijih Napoleonovih maršala."],
      "ferdinand-foch": ["Foš je predavao vojnu istoriju i strategiju pre nego što je preuzeo komandu na terenu tokom Prvog svetskog rata.", "Koordinisao je savezničke snage na Zapadnom frontu i 1918. postao njihov vrhovni komandant.", "Koordinacija savezničkih operacija pod njegovim vođstvom doprinela je primirju kojim je završen Prvi svetski rat."],
      "philippe-petain": ["Peten je napredovao u vojsci i postao poznat po odbrambenom komandovanju u Prvom svetskom ratu.", "Imao je važnu ulogu kod Verdena; u Drugom svetskom ratu predvodio je Višijev režim, sarađivao sa nacističkom Nemačkom i osuđen je za izdaju.", "Njegovo nasleđe je duboko osporavano zbog službe u Prvom svetskom ratu i vođstva Višijevske Francuske."],
      "jean-de-lattre-de-tassigny": ["De Latr je služio u Prvom svetskom ratu i obavljao komandne dužnosti u francuskoj vojsci između ratova.", "Komandovao je Prvom francuskom armijom tokom oslobađanja Francuske, a kasnije predvodio francuske snage u Indokini.", "Jedan od visokih francuskih komandanata u završnim pohodima Drugog svetskog rata i ranom ratu u Indokini."],
      "charles-de-gaulle": ["De Gol je služio u Prvom svetskom ratu i između ratova zagovarao profesionalnu, mehanizovanu vojsku.", "Predvodio je Slobodnu Francusku tokom Drugog svetskog rata, a kasnije osnovao Petu republiku i postao njen prvi predsednik.", "Jedan od ključnih francuskih vojnih i političkih vođa, zapamćen po pokretu otpora i posleratnoj obnovi države."]
    },
    japan: {
      "oda-nobunaga": ["Nobunaga je od regionalnog gospodara postao jedan od najmoćnijih vojnih vođa japanskog perioda Sengoku.", "Koristio je saveze, vatreno oružje i pohode za širenje vlasti; umro je tokom incidenta u hramu Honno-dži.", "Njegovi pohodi na ujedinjenje postavili su temelje kasnijem ujedinjenju Japana."],
      "tokugawa-ieyasu": ["Ijejasu je jačao svoju moć promenljivim savezima tokom perioda Sengoku.", "Pobedio je kod Sekigahare 1600, postao šogun 1603. i uspostavio šogunat Tokugava.", "Njegova vlast započela je dug period vladavine Tokugava i političke stabilnosti."],
      "isoroku-yamamoto": ["Jamamoto se školovao na Japanskoj pomorskoj akademiji i služio u Rusko-japanskom ratu i na prekomorskim dužnostima.", "Komandovao je Kombinovanom flotom u početnoj fazi rata na Pacifiku; poginuo je 1943. kada je njegov avion presretnut.", "Jedan od ključnih japanskih pomorskih komandanata čija se karijera i odluke proučavaju u istoriji rata na Pacifiku."]
    },
    china: {
      "sun-tzu": ["Sun Cuu se tradicionalno pripisuje delo „Umeće ratovanja“, ali njegov identitet, datiranje i biografija ostaju sporni.", "Tekst koji mu se pripisuje razmatra strategiju, obaveštajni rad, planiranje i upotrebu sile.", "Njegov uticaj na vojnu misao je veliki, iako autorstvo i istorijsko postojanje nisu pouzdano utvrđeni."],
      "chiang-kai-shek": ["Čang Kaj-šek se školovao u Japanu i napredovao u nacionalističkom pokretu posle Revolucije 1911. godine.", "Predvodio je nacionalističke snage tokom Drugog kinesko-japanskog rata i Kineskog građanskog rata, a kasnije vladao sa Tajvana.", "Važan kineski vođa 20. veka čije nasleđe obuhvata ratni otpor, ali i autoritarnu vlast."]
    },
    vietnam: {
      "vo-nguyen-giap": ["Ziap je bio nastavnik istorije i revolucionarni organizator pre nego što je postao vojni vođa.", "Komandovao je snagama Vijet Mina kod Điện Biên Phủa 1954. godine, a kasnije obavljao visoke dužnosti u Severnom Vijetnamu i ujedinjenom Vijetnamu.", "Jedna od ključnih ličnosti vijetnamskih ratova protiv francuske kolonijalne vlasti, a potom i protiv Južnog Vijetnama uz podršku SAD."]
    },
    iran: {
      "nader-shah": ["Nader je započeo vojnu karijeru u periodu političkih previranja i osnovao dinastiju Afšarida.", "Obnovio je persijsku moć i napao Mogulsko carstvo; 1739. zauzeo je Delhi.", "Pamti se kao moćan osvajač čiji su pohodi doneli teritorijalno širenje, ali i velike ljudske i materijalne gubitke."],
      "qasem-soleimani": ["Soleimani se posle revolucije 1979. pridružio Korpusu islamske revolucionarne garde i služio u Iransko-iračkom ratu.", "Predvodio je jedinicu Kuds IRGC-a i iranske operacije u inostranstvu; poginuo je u američkom vazdušnom napadu u Bagdadu 2020. godine.", "Uticajna i kontroverzna ličnost iranske regionalne politike i savremenih sukoba na Bliskom istoku."]
    },
    iraq: {
      "abdul-karim-qasim": ["Kasem je bio irački oficir koji je napredovao kroz činove tokom monarhije.", "Predvodio je državni udar 1958. kojim je okončana monarhija i postao premijer; svrgnut je i ubijen 1963. godine.", "Ključna ličnost moderne iračke politike i rane vojne vlasti republike."],
      "saddam-hussein": ["Sadam je napredovao u Baas partiji i tokom 1970-ih učvrstio vlast u Iraku.", "Kao predsednik, vodio je Irak tokom Iransko-iračkog rata i invazije na Kuvajt 1990; zarobljen je 2003. i pogubljen 2006. godine.", "Njegovu vlast obeležili su diktatura, ratovi, represija i masovni zločini; taj kontekst je neophodan za razumevanje vojne istorije."]
    },
    "ottoman-turkey": {
      "mehmed-ii": ["Mehmed je postao sultan kao mlad vladar i usmerio se na osvajanje Carigrada.", "Zauzeo je Carigrad 1453. godine i proširio osmansku vlast na Balkanu i u Anadoliji.", "Njegovo osvajanje preobrazilo je Osmansko carstvo i učinilo Carigrad njegovom prestonicom."],
      "hayreddin-barbarossa": ["Barbarosa je od mediteranskog gusara postao vodeći admiral Osmanskog carstva.", "Komandovao je osmanskim pomorskim snagama, uključujući u bici kod Preveze 1538. godine.", "Njegovo vođstvo pomoglo je uspostavljanju osmanske pomorske moći na Sredozemlju; godina rođenja je približna."],
      "suleiman-the-magnificent": ["Sulejman je nasledio moćno carstvo, vodio vojne pohode i istovremeno sprovodio pravne i upravne reforme.", "Tokom njegove vladavine vođeni su pohodi u srednjoj Evropi i na Sredozemlju, uključujući opsadu Beča i osvajanje velikog dela Ugarske.", "U osmanskoj tradiciji poznat kao Zakonodavac; njegova vladavina označila je politički i kulturni vrhunac carstva."],
      "mustafa-kemal-ataturk": ["Kemal je bio osmanski oficir koji se istakao na Galipolju, a posle Prvog svetskog rata predvodio turski nacionalni pokret.", "Komandovao je nacionalističkim snagama u Turskom ratu za nezavisnost i 1923. osnovao Republiku Tursku.", "Osnivač i prvi predsednik moderne Turske; tačan datum njegovog rođenja nije utvrđen."],
      "enver-pasha": ["Enver je bio oficir Mladoturaka koji je došao na vlast posle revolucije 1908. godine.", "Kao ministar rata tokom Prvog svetskog rata bio je jedan od glavnih osmanskih vođa, a kasnije se borio u srednjoj Aziji.", "Njegova uloga u osmanskoj ratnoj politici i genocidu nad Jermenima ključna je za procenu njegovog nasleđa."]
    },
    "ancient-greece": {
      miltiades: ["Miltiad je bio atinski komandant i političar tokom grčko-persijskih ratova.", "Najviše se povezuje sa grčkom pobedom nad persijskom vojskom kod Maratona 490. godine pre nove ere.", "Pamti se kao jedan od ključnih komandanata kod Maratona; godina rođenja i pojedinosti biografije su procene."],
      "leonidas-i": ["Leonida je vladao Spartom tokom persijske invazije na Grčku.", "Predvodio je grčku odbranu kod Termopila 480. godine pre nove ere i poginuo u bici.", "Njegov otpor kod Termopila postao je trajan simbol grčkog otpora; godina rođenja je približna."],
      themistocles: ["Temistokle je podsticao razvoj atinske pomorske moći pre persijske invazije.", "Pomogao je u organizovanju grčke pomorske pobede kod Salamine 480. godine pre nove ere, a kasnije je živeo na persijskoj teritoriji.", "Njegova pomorska strategija oblikovala je ravnotežu snaga u klasičnoj Grčkoj; datumi su približni."],
      pericles: ["Perikle je bio vodeći atinski političar u klasičnom periodu grada.", "Više puta je obavljao vojne komande i predvodio Atinu u ranim godinama Peloponeskog rata.", "U njegovo doba nastali su veliki kulturni spomenici, uključujući Partenon; godina rođenja je približna."],
      epaminondas: ["Epaminonda se istakao dok se Teba suprotstavljala spartanskoj prevlasti u Grčkoj.", "Doprineo je pobedi kod Leuktre 371. godine pre nove ere, a poginuo je kod Mantineje 362. godine pre nove ere.", "Njegova taktika i pohodi privremeno su učinili Tebu vodećom grčkom silom; godina rođenja je približna."],
      "alexander-the-great": ["Aleksandar se školovao kod Aristotela i nasledio oca Filipa II na prestolu Makedonije.", "Porazio je Persijsko carstvo i sa pohodima stigao do doline Inda.", "Njegova osvajanja stvorila su prostrano carstvo i proširila helenističku kulturu širom zapadne Azije i Egipta."]
    },
    "ancient-rome": {
      "scipio-africanus": ["Scipion je napredovao u rimskoj vojnoj službi tokom Drugog punskog rata.", "Predvodio je rimski pohod u Severnoj Africi i 202. godine pre nove ere porazio Hanibala kod Zame.", "Njegova pobeda okončala je Drugi punski rat i učinila ga jednim od najpoznatijih rimskih generala."],
      "gaius-marius": ["Marije je bio rimski državnik i vojskovođa iz porodice italijanskog porekla izvan Rima.", "Ratovao je protiv Jugurte i predvodio rimske snage protiv Kimbra i Tevtonaca; sedam puta je biran za konzula.", "Njegova vojna i politička karijera obeležila je period velikih promena i sukoba u kasnoj republici."],
      "julius-caesar": ["Cezar je napredovao kroz rimske političke službe i stekao uticaj vojnim komandovanjem.", "Osvojio je Galiju, prešao Rubikon 49. godine pre nove ere i postao diktator pre nego što je ubijen.", "Njegovi pohodi i građanski rat okončali su politički poredak Rimske republike i otvorili put carskoj vlasti."],
      "pompey-the-great": ["Pompej se istakao vojnim pohodima u kasnoj Rimskoj republici.", "Ratovao je na Istoku i sa Cezarom i Krasom osnovao Prvi trijumvirat; Cezar ga je porazio kod Farsala.", "Njegovo suparništvo sa Cezarom bilo je ključno u završnim građanskim ratovima republike."],
      "marcus-agrippa": ["Agripa je bio blizak saradnik Oktavijana, kasnije Avgusta, i obavljao važne vojne i političke dužnosti.", "Pomogao je u porazu Antonija i Kleopatre kod Akcija 31. godine pre nove ere i predvodio velike građevinske projekte u Rimu.", "Bio je jedan od ključnih vojnih tvoraca Avgustove pobede i ranog Rimskog carstva; godina rođenja navodi se kao 64. ili 63. pre nove ere."],
      trajan: ["Trajan je napredovao u rimskoj vojsci i pokrajinskoj upravi pre nego što je 98. godine postao car.", "Tokom njegove vladavine vođeni su pohodi u Dakiji i Partiji, a carstvo je dostiglo najveću teritorijalnu površinu.", "Pamti se kao jedan od najuspešnijih rimskih careva i veliki graditelj; često se ubraja među „pet dobrih careva“."]
    },
    israel: {
      "moshe-dayan": ["Dajan se pridružio Hagani i izgubio oko dok je služio tokom Drugog svetskog rata.", "Postao je načelnik Generalštaba, a zatim ministar odbrane tokom Šestodnevnog rata 1967. godine.", "Istaknuti izraelski komandant i političar čija karijera obuhvata i period posle Jomkipurskog rata 1973."],
      "yitzhak-rabin": ["Rabin se pridružio Palmahu i učestvovao u Arapsko-izraelskom ratu 1948. pre napredovanja u Izraelskim odbrambenim snagama.", "Tokom Šestodnevnog rata 1967. postao je načelnik Generalštaba, a kasnije je dva puta bio premijer.", "Za mirovne napore sa Palestincima dobio je Nobelovu nagradu za mir 1994. godine; ubijen je 1995."],
      "ariel-sharon": ["Šaron se kao mladić pridružio Hagani i učestvovao u izraelskim ratovima nakon sticanja nezavisnosti.", "Komandovao je snagama u ratovima 1967. i 1973. godine, a kasnije postao premijer.", "Uticajan i kontroverzan vojni i politički vođa savremene izraelske istorije."]
    }
  };
  const commanderFactTranslations = {
    "General; commander in chief": "General; vrhovni komandant",
    "Ottoman general; war minister": "Osmanski general; ministar rata",
    "Generalissimo; field marshal": "Generalisimus; feldmaršal",
    "Fleet Admiral": "Admiral flote",
    "General": "General",
    "Shah; military commander": "Šah; vojni komandant",
    "Major general; Quds Force commander": "General-major; komandant jedinice Kuds",
    "Brigadier; prime minister": "Brigadir; premijer",
    "President; commander in chief": "Predsednik; vrhovni komandant",
    "Sultan; military commander": "Sultan; vojni komandant",
    "Grand admiral": "Veliki admiral",
    "Sultan; commander in chief": "Sultan; vrhovni komandant",
    "Strategist; traditionally described as a general": "Strateg; u tradiciji opisan kao general",
    "Generalissimo; political and military leader": "Generalisimus; politički i vojni vođa",
    "General; defense minister": "General; ministar odbrane",
    "King of Sparta": "Kralj Sparte",
    "Field marshal; commander in chief": "Feldmaršal; vrhovni komandant",
    "Chief of staff; prime minister": "Načelnik Generalštaba; premijer",
    "General; chief of staff": "General; načelnik Generalštaba",
    "Insurgent commander; commonly styled vojvoda": "Ustanički komandant; uobičajeno nazivan vojvoda",
    "Supreme Leader (Vožd)": "Vrhovni vođa (vožd)",
    "Prince of Serbia; leader of the Second Serbian Uprising": "Knez Srbije; vođa Drugog srpskog ustanka",
    "Field marshal (vojvoda); Chief of the General Staff": "Vojvoda; načelnik Generalštaba",
    "Serbian general; commonly styled vojvoda": "Srpski general; uobičajeno nazivan vojvoda",
    "Field marshal (vojvoda); senior army commander": "Vojvoda; visoki komandant vojske",
    "Field marshal (vojvoda)": "Vojvoda",
    "Chetnik vojvoda": "Četnički vojvoda",
    "Serbian Army soldier; rank descriptions vary across sources": "Vojnik srpske vojske; izvori se razlikuju u navođenju čina",
    "Political activist; member of Young Bosnia": "Politički aktivista; pripadnik Mlade Bosne",
    "Young Bosnia": "Mlada Bosna",
    "Lieutenant Colonel (Yugoslav People's Army – JNA). Commander of the 16th Serbian Brigade; People's Hero of Yugoslavia": "Potpukovnik Jugoslovenske narodne armije (JNA); komandant 16. srpske brigade; narodni heroj Jugoslavije",
    "General; national leader": "General; nacionalni vođa",
    "Marshal of Italy": "Maršal Italije",
    "Air marshal; Fascist official": "Maršal vazduhoplovstva; fašistički funkcioner",
    "Field marshal; chief of the General Staff": "Feldmaršal; načelnik Generalštaba",
    "General of Infantry": "General pešadije",
    "Generaloberst": "General-pukovnik",
    "Emperor of the French; general": "Car Francuza; general",
    "General; leader of Free France": "General; vođa Slobodne Francuske",
    "Daimyō": "Daimjo",
    "Shōgun": "Šogun",
    "Athenian general": "Atinski general",
    "Athenian general and statesman": "Atinski general i državnik",
    "Theban general and statesman": "Tebanski general i državnik",
    "Roman general and consul": "Rimski general i konzul",
    "Consul; Roman general": "Konzul; rimski general",
    "Dictator; consul; Roman general": "Diktator; konzul; rimski general",
    "Roman general and statesman": "Rimski general i državnik",
    "Marshal; president": "Maršal; predsednik",
    "Lieutenant general; chief of staff": "General-potpukovnik; načelnik Generalštaba",
    "Major general; prime minister": "General-major; premijer",
    "General; General of the Army": "General; general armije",
    "General of the Armies": "General armija",
    "General of the Army": "General armije",
    "General; Supreme Allied Commander": "General; vrhovni saveznički komandant",
    "General; Lord Protector": "General; lord protektor",
    "General; captain-general": "General; kapetan-general",
    "Major general": "General-major",
    "Vice admiral": "Viceadmiral",
    "Field marshal": "Feldmaršal",
    "Field marshal; chief of the General Staff": "Feldmaršal; načelnik Generalštaba",
    "Marshal of Italy; chief of staff": "Maršal Italije; načelnik Generalštaba",
    "Marshal of the Soviet Union": "Maršal Sovjetskog Saveza",
    "Marshal of France; Allied commander in chief": "Maršal Francuske; vrhovni saveznički komandant",
    "Marshal of France": "Maršal Francuske",
    "Marshal of the Empire": "Maršal Carstva",
    "Lieutenant Colonel": "Potpukovnik",
    "Colonel; later general": "Pukovnik; kasnije general",
    "Colonel": "Pukovnik",
    "Admiral; commander in chief, Combined Fleet": "Admiral; vrhovni komandant Kombinovane flote",
    "King of Macedon; military commander": "Kralj Makedonije; vojni komandant",
    "Roman emperor; commander in chief": "Rimski car; vrhovni komandant",
    "United States Army": "Vojska Sjedinjenih Država",
    "United States Army; Confederate States Army": "Vojska Sjedinjenih Država; Vojska Konfederativnih Država",
    "United States Navy": "Mornarica Sjedinjenih Država",
    "Continental Army; United States Army": "Kontinentalna armija; Vojska Sjedinjenih Država",
    "Imperial Russian Army": "Carska ruska vojska",
    "Imperial Russian Army; Red Army": "Carska ruska vojska; Crvena armija",
    "Red Army; Soviet Armed Forces": "Crvena armija; Oružane snage Sovjetskog Saveza",
    "Army of the Kingdom of Serbia": "Vojska Kraljevine Srbije",
    "Serbian insurgent forces": "Srpske ustaničke snage",
    "Serbian insurgent forces; Principality of Serbia": "Srpske ustaničke snage; Kneževina Srbija",
    "Army of the Kingdom of Serbia; later Yugoslav service": "Vojska Kraljevine Srbije; kasnije služba u Jugoslaviji",
    "Serbian Army; Serbian volunteer detachments": "Srpska vojska; srpski dobrovoljački odredi",
    "Army of the Kingdom of Serbia; Yugoslav Army": "Vojska Kraljevine Srbije; Jugoslovenska vojska",
    "Serbian Army": "Srpska vojska",
    "Communist Party of Yugoslavia (KPJ); Yugoslav Partisans; Yugoslav People's Army(JNA);": "Komunistička partija Jugoslavije (KPJ); jugoslovenski partizani; Jugoslovenska narodna armija (JNA)",
    "British Army": "Britanska vojska",
    "English and British Army": "Engleska i britanska vojska",
    "Parliamentarian New Model Army": "Parlamentarna Nova modelska armija",
    "Royal Navy": "Kraljevska mornarica",
    "Royal Italian Army": "Kraljevska italijanska vojska",
    "Royal Italian Army; Italian armed forces": "Kraljevska italijanska vojska; italijanske oružane snage",
    "Royal Italian Army; Italian Social Republic forces": "Kraljevska italijanska vojska; snage Italijanske Socijalne Republike",
    "Italian and volunteer forces": "Italijanske i dobrovoljačke snage",
    "Italian Royal Air Force": "Kraljevsko italijansko ratno vazduhoplovstvo",
    "French Army": "Francuska vojska",
    "French Revolutionary Army; French Empire": "Francuska revolucionarna vojska; Francusko carstvo",
    "French Army; Vichy France": "Francuska vojska; Višijevska Francuska",
    "French Army; Free French Forces": "Francuska vojska; Slobodne francuske snage",
    "Ottoman Empire": "Osmansko carstvo",
    "Ottoman Army": "Osmanska vojska",
    "Ottoman Navy": "Osmanska mornarica",
    "Japanese Imperial Navy": "Carska japanska mornarica",
    "Imperial Japanese Navy": "Carska japanska mornarica",
    "Oda clan forces": "Snage klana Oda",
    "Tokugawa clan; Japan": "Klan Tokugava; Japan",
    "People's Army of Vietnam": "Vijetnamska narodna armija",
    "National Revolutionary Army; Republic of China": "Nacionalna revolucionarna armija; Republika Kina",
    "Traditionally associated with the state of Wu": "Tradicionalno se povezuje sa državom Vu",
    "Traditionally associated with the state of Qi or Wu; uncertain": "Tradicionalno se povezuje sa državom Ci ili Vu; nije pouzdano utvrđeno",
    "Unknown; historical details uncertain": "Nepoznato; istorijski podaci nisu pouzdani",
    "Afsharid forces; Persian Empire": "Snage Afšarida; Persijsko carstvo",
    "Islamic Revolutionary Guard Corps": "Korpus islamske revolucionarne garde",
    "Iraqi Army; Republic of Iraq": "Iračka vojska; Republika Irak",
    "Iraqi Armed Forces; Ba'athist Iraq": "Oružane snage Iraka; Irak pod vlašću Baas partije",
    "Ottoman Army; Turkish Armed Forces": "Osmanska vojska; Oružane snage Turske",
    "Prussian Army; German Army": "Pruska vojska; Nemačka vojska",
    "Prussian Army; Imperial German Army; Reichswehr": "Pruska vojska; Carska nemačka vojska; Rajhsver",
    "German Army; German Resistance": "Nemačka vojska; nemački pokret otpora",
    "German Army": "Nemačka vojska",
    "Roman Republic; Roman Empire": "Rimska republika; Rimsko carstvo",
    "Haganah; Israel Defense Forces": "Hagana; Izraelske odbrambene snage",
    "Palmach; Israel Defense Forces": "Palmah; Izraelske odbrambene snage",
    "Roman Republic": "Rimska republika",
    "Roman Empire": "Rimsko carstvo",
    "Athens": "Atina",
    "Spartan Army": "Spartanska vojska",
    "Thebes": "Teba",
    "Macedonian Army; Corinthian League": "Makedonska vojska; Korintski savez"
  };
  const commanderPlaceReplacements = [
    ["(year/place to verify)", "(godinu/mesto treba proveriti)"],
    ["(date/place to verify)", "(datum/mesto treba proveriti)"],
    ["(place/date to verify)", "(mesto/datum treba proveriti)"],
    ["(date to verify)", "(datum treba proveriti)"],
    ["(place to verify)", "(mesto treba proveriti)"],
    ["(exact birthplace uncertain)", "(tačno mesto rođenja nije utvrđeno)"],
    ["(exact date uncertain)", "(tačan datum nije utvrđen)"],
    ["(ancient sources vary)", "(antički izvori se razlikuju)"],
    ["(birth year approximate)", "(godina rođenja je približna)"],
    [" (approximate)", " (približno)"],
    ["United States", "Sjedinjene Države"],
    ["Bosnia and Herzegovina", "Bosna i Hercegovina"],
    ["Westmoreland County", "Okrug Vestmorlend"],
    ["Mount Vernon", "Maunt Vernon"],
    ["Point Pleasant", "Point Plezant"],
    ["Little Rock", "Litl Rok"],
    ["San Gabriel", "San Gabrijel"],
    ["New Jersey", "Nju Džersi"],
    ["New York", "Njujork"],
    ["California", "Kalifornija"],
    ["Virginia", "Virdžinija"],
    ["Missouri", "Misuri"],
    ["Arkansas", "Arkanzas"],
    ["Texas", "Teksas"],
    ["Ohio", "Ohajo"],
    ["Saint Petersburg", "Sankt Peterburg"],
    ["Moscow", "Moskva"],
    ["Nice", "Nica"],
    ["Paris", "Pariz"],
    ["Rome", "Rim"],
    ["Naples", "Napulj"],
    ["Macedonia", "Makedonija"],
    ["Macedon", "Makedonija"],
    ["Russian Empire", "Rusko carstvo"],
    ["Soviet Union", "Sovjetski Savez"],
    ["German Empire", "Nemačko carstvo"],
    ["West Germany", "Zapadna Nemačka"],
    ["Kingdom of Bohemia", "Kraljevina Bohemija"],
    ["Kingdom of Hungary", "Kraljevina Ugarska"],
    ["Kingdom of Sardinia", "Kraljevina Sardinija"],
    ["Ottoman Palestine", "Osmanska Palestina"],
    ["Ottoman Iraq", "Osmanski Irak"],
    ["Ottoman Empire", "Osmansko carstvo"],
    ["Mandatory Palestine", "Mandatna Palestina"],
    ["Roman Republic", "Rimska republika"],
    ["Roman Empire", "Rimsko carstvo"],
    ["Roman Hispania", "Rimska Hispanija"],
    ["Persian Empire", "Persijsko carstvo"],
    ["Persia", "Persija"],
    ["New France", "Nova Francuska"],
    ["France", "Francuska"],
    ["England", "Engleska"],
    ["Scotland", "Škotska"],
    ["Germany", "Nemačka"],
    ["Prussia", "Pruska"],
    ["Italy", "Italija"],
    ["Japan", "Japan"],
    ["China", "Kina"],
    ["Vietnam", "Vijetnam"],
    ["Israel", "Izrael"],
    ["Iraq", "Irak"],
    ["Iran", "Iran"],
    ["Athens", "Atina"],
    ["Thebes", "Teba"],
    ["near ", "blizu "],
    [" area", " oblast"]
  ];

  function translateCommanderPlace(place) {
    if (commanderFactTranslations[place]) return commanderFactTranslations[place];
    return commanderPlaceReplacements.reduce(
      (translated, [source, replacement]) => translated.split(source).join(replacement),
      place
    );
  }
  const headingTranslations = {
    "EXPLORE THE WORLD OF MILITARY AND DEFENSE": ["ISTRAŽITE SVET", "VOJSKE I ", "ODBRANE", ""],
    "WORLD MILITARIES": ["VOJSKE ", "SVETA"],
    "MILITARY UNITS": ["VOJNE ", "JEDINICE"],
    "MILITARY RANKS": ["VOJNI ", "ČINOVI"],
    "MILITARY AVIATION": ["VOJNA ", "AVIJACIJA"],
    "MILITARY HISTORY": ["VOJNA ", "ISTORIJA"],
    "LAND SYSTEMS": ["KOPNENI ", "SISTEMI"],
    "NAVAL FORCES": ["POMORSKE ", "SNAGE"],
    "WEAPONS REFERENCE": ["PREGLED ", "NAORUŽANJA"],
    "WORLD WAR I": ["PRVI SVETSKI RAT", ""],
    "WORLD WAR II": ["DRUGI SVETSKI RAT", ""],
    "COLD WAR": ["HLADNI ", "RAT"],
    "THE ART OF THE OUTDOORS": ["UMEĆE ", "BORAVKA U PRIRODI"],
    "HUNTING RIFLES": ["LOVAČKE ", "PUŠKE"],
    "HUNTING FIREARMS": ["LOVAČKO ", "ORUŽJE"],
    "HUNTING SHOTGUNS": ["LOVAČKE ", "SAČMARICE"],
    "HUNTING CARBINES": ["LOVAČKI ", "KARABINI"],
    "BERETTA COLLECTION": ["BERETTA ", "KOLEKCIJA"],
    "SHOTGUN MODELS": ["MODELI ", "SAČMARICA"],
    "CARBINE MODELS": ["MODELI ", "KARABINA"],
    "BERETTA MODELS": ["BERETTA ", "MODELI"],
    "RIFLES IN THE FIELD": ["PUŠKE NA ", "TERENU"],
    "GEAR FOR THE OUTDOORS": ["OPREMA ZA ", "BORAVAK U PRIRODI"],
    "ANIMALS & HUNTING SEASON": ["ŽIVOTINJE I ", "LOVNA SEZONA"],
    "WILDLIFE THROUGH THE YEAR": ["DIVLJE ŽIVOTINJE ", "TOKOM GODINE"],
    "HUNTING GROUND": ["LOVIŠTE"],
    "UNDERSTANDING THE LAND": ["UPOZNAJMO ", "PREDEO"],
    "MILITARY COMMANDERS": ["VOJNI ", "KOMANDANTI"]
  };

  function rememberAndTranslate(node, attribute = null) {
    const current = attribute ? node.getAttribute(attribute) : node.nodeValue;
    if (current === null) return;

    let originals = originalValues.get(node);
    if (!originals) {
      originals = {};
      originalValues.set(node, originals);
    }

    const keyName = attribute || "text";
    if (!(keyName in originals)) originals[keyName] = current;

    const original = originals[keyName];
    const key = original.trim().replace(/\s+/g, " ");
    const contextual = contextualTranslations.has(node) ? contextualTranslations.get(node) : undefined;
    const translated = language === "sr" ? (contextual ?? translations[key]) : original;
    if (translated === undefined) return;
    const leading = original.match(/^\s*/)[0];
    const trailing = original.match(/\s*$/)[0];
    const value = language === "sr" ? `${leading}${translated}${trailing}` : original;
    if (attribute) node.setAttribute(attribute, value);
    else node.nodeValue = value;
  }

  function translatePage() {
    document.documentElement.lang = language === "sr" ? "sr" : "en";
    contextualTranslations = new WeakMap();
    document.querySelectorAll("h1, h2").forEach((heading) => {
      const walker = document.createTreeWalker(heading, NodeFilter.SHOW_TEXT);
      const textNodes = [];
      while (walker.nextNode()) textNodes.push(walker.currentNode);
      const originalText = textNodes.reduce((text, node) => {
        const source = originalValues.get(node)?.text ?? node.nodeValue;
        return `${text}${node.previousSibling?.nodeName === "BR" ? " " : ""}${source}`;
      }, "").replace(/\s+/g, " ").trim();
      const translatedParts = headingTranslations[originalText];
      if (translatedParts && translatedParts.length === textNodes.length) {
        textNodes.forEach((node, index) => contextualTranslations.set(node, translatedParts[index]));
      }
    });

    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    while (walker.nextNode()) {
      const node = walker.currentNode;
      if (node.parentElement && !node.parentElement.closest(".brand") && !["SCRIPT", "STYLE", "NOSCRIPT"].includes(node.parentElement.tagName)) {
        rememberAndTranslate(node);
      }
    }

    document.querySelectorAll("[aria-label], [title], [alt], [placeholder]").forEach((element) => {
      ["aria-label", "title", "alt", "placeholder"].forEach((attribute) => {
        if (element.hasAttribute(attribute)) rememberAndTranslate(element, attribute);
      });
    });

    const title = document.querySelector("title");
    const description = document.querySelector('meta[name="description"]');
    if (title) rememberAndTranslate(title.firstChild);
    if (description) rememberAndTranslate(description, "content");
    translateCommanderProfiles();
    updateSelector();
  }

  function translateCommanderProfiles() {
    const countryId = document.body.dataset.commanderCountry;
    if (!countryId) return;

    document.querySelectorAll(".serbia-commander-card-years, .serbia-profile-years").forEach((element) => {
      if (!commanderProfileOriginals.has(element)) {
        commanderProfileOriginals.set(element, element.textContent);
      }
      const original = commanderProfileOriginals.get(element);
      const translated = original
        .replace(/\bc\.\s*/g, "oko ")
        .replace(/\bBCE\b/g, "p. n. e.")
        .replace(/\bCE\b/g, "n. e.");
      const text = language === "sr" ? translated : original;
      if (element.textContent !== text) element.textContent = text;
    });

    const reviewNote = document.querySelector(".serbia-review-note");
    if (reviewNote) {
      const noteOriginal = commanderProfileOriginals.get(reviewNote) ?? reviewNote.textContent;
      if (!commanderProfileOriginals.has(reviewNote)) commanderProfileOriginals.set(reviewNote, noteOriginal);
      const noteText = language === "sr"
        ? countryId === "serbia"
          ? "Napomena o istraživanju: Biografije su radna verzija. Pre objavljivanja proverite podatke i dodajte pouzdane izvore. Tačni datumi rođenja nisu dostupni za sve rane ličnosti; redosled osoba rođenih iste godine može biti privremen."
          : "Napomena o istraživanju: Datumi su navedeni sa dostupnim stepenom preciznosti; antički i nesigurni datumi označeni su kao procene. Proverite tačne datume i mesta u pouzdanim izvorima."
        : noteOriginal;
      if (reviewNote.textContent !== noteText) reviewNote.textContent = noteText;
    }

    const countryBackLabels = {
      serbia: "srpske komandante i vojne ličnosti",
      "united-states": "komandante i vojne ličnosti Sjedinjenih Država",
      "united-kingdom": "komandante i vojne ličnosti Ujedinjenog Kraljevstva",
      russia: "komandante i vojne ličnosti Rusije i Sovjetskog Saveza",
      italy: "italijanske komandante i vojne ličnosti",
      germany: "nemačke komandante i vojne ličnosti",
      france: "francuske komandante i vojne ličnosti",
      japan: "japanske komandante i vojne ličnosti",
      china: "kineske komandante i vojne ličnosti",
      vietnam: "vijetnamske komandante i vojne ličnosti",
      iran: "iranske komandante i vojne ličnosti",
      iraq: "iračke komandante i vojne ličnosti",
      "ottoman-turkey": "komandante i vojne ličnosti Osmanskog carstva i Turske",
      "ancient-greece": "komandante i vojne ličnosti antičke Grčke",
      "ancient-rome": "komandante i vojne ličnosti antičkog Rima",
      israel: "izraelske komandante i vojne ličnosti"
    };

    document.querySelectorAll(`.serbia-profile[id^='profile-${countryId}-']`).forEach((profile) => {
      const personId = profile.id.replace(`profile-${countryId}-`, "");
      const translated = countryCommanderTranslations[countryId]?.[personId]
        ?? (countryId === "russia" ? commanderProfileTranslations[personId] : undefined);
      const fields = [
        ...profile.querySelectorAll(".serbia-profile-facts dd"),
        ...profile.querySelectorAll(".serbia-profile-block > p")
      ];
      fields.forEach((element, index) => {
        if (!commanderProfileOriginals.has(element)) {
          commanderProfileOriginals.set(element, element.textContent);
        }
        const original = commanderProfileOriginals.get(element);
        let translatedText;
        if (translated?.length === 7) {
          translatedText = translated[index];
        } else if (index >= 4) {
          translatedText = translated?.[index - 4];
        } else if (index < 2) {
          translatedText = translateCommanderPlace(original);
        } else {
          translatedText = commanderFactTranslations[original];
        }
        const text = language === "sr" ? (translatedText ?? original) : original;
        if (element.textContent !== text) element.textContent = text;
      });

      const backLink = profile.querySelector(".serbia-profile-back");
      if (backLink) {
        if (!commanderProfileOriginals.has(backLink)) commanderProfileOriginals.set(backLink, backLink.textContent);
        const linkText = language === "sr"
          ? `↑ Nazad na ${countryBackLabels[countryId] ?? "komandante"}`
          : commanderProfileOriginals.get(backLink);
        if (backLink.textContent !== linkText) backLink.textContent = linkText;
      }
    });
  }

  function updateSelector() {
    const selector = document.querySelector(".language-switcher");
    if (!selector) return;
    selector.querySelectorAll("button").forEach((button) => {
      const active = button.dataset.language === language;
      button.setAttribute("aria-pressed", String(active));
      button.classList.toggle("is-active", active);
    });
    selector.setAttribute("aria-label", language === "sr" ? "Izbor jezika" : "Language selector");
  }

  function setLanguage(nextLanguage) {
    if (nextLanguage !== "en" && nextLanguage !== "sr") return;
    language = nextLanguage;
    try {
      localStorage.setItem(STORAGE_KEY, language);
    } catch (error) {
      console.error("Could not save the selected language.", error);
    }
    translatePage();
  }

  function addSelector() {
    const headerInner = document.querySelector(".site-header .header-inner");
    if (!headerInner || headerInner.querySelector(".language-switcher")) return;

    const selector = document.createElement("div");
    selector.className = "language-switcher";
    selector.setAttribute("role", "group");
    selector.setAttribute("aria-label", "Language selector");
    selector.innerHTML = '<button type="button" data-language="en" aria-label="English">EN</button><button type="button" data-language="sr" aria-label="Serbian">SR</button>';
    selector.addEventListener("click", (event) => {
      const button = event.target.closest("button[data-language]");
      if (button) setLanguage(button.dataset.language);
    });

    const search = headerInner.querySelector(".header-search");
    if (search) headerInner.insertBefore(selector, search);
    else headerInner.append(selector);
  }

  function addSelectorStyles() {
    if (document.getElementById("language-switcher-styles")) return;
    const style = document.createElement("style");
    style.id = "language-switcher-styles";
    style.textContent = `
      .language-switcher{display:inline-flex;flex:0 0 auto;align-items:center;gap:2px;padding:3px;border:1px solid rgba(195,195,148,.28);background:rgba(195,195,148,.045)}
      .language-switcher button{min-width:34px;padding:7px 8px;border:0;background:transparent;color:#b8bbae;font:600 11px/1 "DM Sans",sans-serif;cursor:pointer;transition:background 180ms ease,color 180ms ease}
      .language-switcher button:hover,.language-switcher button:focus-visible{color:#f2f1e9;outline:1px solid rgba(195,195,148,.5)}
      .language-switcher button.is-active{background:rgba(195,195,148,.18);color:#d3d5ad}
      @media(max-width:1020px){.language-switcher{order:2;margin-left:auto}.header-search{margin-left:8px!important}}
      @media(max-width:720px){.language-switcher button{min-width:31px;padding:7px 6px}}
    `;
    document.head.append(style);
  }

  function initialize() {
    try {
      const savedLanguage = localStorage.getItem(STORAGE_KEY);
      if (savedLanguage === "sr" || savedLanguage === "en") language = savedLanguage;
    } catch (error) {
      console.error("Could not read the saved language preference.", error);
    }
    addSelectorStyles();
    addSelector();
    translatePage();

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.TEXT_NODE) rememberAndTranslate(node);
          else if (node.nodeType === Node.ELEMENT_NODE) {
            const walker = document.createTreeWalker(node, NodeFilter.SHOW_TEXT);
            while (walker.nextNode()) rememberAndTranslate(walker.currentNode);
            if (node.matches("[aria-label], [title], [alt], [placeholder]")) {
              ["aria-label", "title", "alt", "placeholder"].forEach((attribute) => {
                if (node.hasAttribute(attribute)) rememberAndTranslate(node, attribute);
              });
            }
            node.querySelectorAll?.("[aria-label], [title], [alt], [placeholder]").forEach((element) => {
              ["aria-label", "title", "alt", "placeholder"].forEach((attribute) => {
                if (element.hasAttribute(attribute)) rememberAndTranslate(element, attribute);
              });
              if (mutations.some((mutation) => mutation.addedNodes.length > 0)) {
                translateCommanderProfiles();
              }
            });
          }
        });
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initialize, { once: true });
  } else {
    initialize();
  }
})();
