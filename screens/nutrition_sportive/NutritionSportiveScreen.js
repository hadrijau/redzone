import React, {useEffect, useState} from 'react';
import {ImageBackground, Text, TextInput, TouchableOpacity, Image, FlatList, View, StyleSheet, ScrollView, Dimensions} from 'react-native';
import {Formik} from "formik";
import EquipementSportifCard from "../equipement_sportif/components/EquipementSportifCard";
import firebase from "firebase";

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const NutritionSportiveScreen = ({navigation}) => {

    const [ridge, setRidge] = useState([]);
    const [sportus, setSportus] = useState([]);

    useEffect(() => {
        let getRidge = async () => {
            await firebase
                .firestore()
                .collection('Ridge')
                .get()
                .then(snapshot => {
                    let productsBoosted = snapshot.docs.map(doc => {
                        const data = doc.data()
                        const id = doc.id;
                        return {id, ...data}
                    })
                    setRidge(productsBoosted)
                })
        }
        let getSportus = async () => {
            await firebase
                .firestore()
                .collection('SportusCompany')
                .get().then(snapshot => {
                    let productsBoosted = snapshot.docs.map(doc => {
                        const data = doc.data()
                        const id = doc.id;
                        return {id, ...data}
                    })
                    setSportus(productsBoosted)
                })
        }
        getRidge()
        getSportus()
    }, []);

    console.log('ridge', ridge);
    console.log('sportus', sportus)

    return (
        <View style={styles.container}>

            <ImageBackground source={require('../../assets/bigLogo.jpg')} resizeMode="cover" style={styles.image}>

                <ScrollView style={styles.scrollView}>

                    <Image source={require('../../assets/CF7logo.png')} style={styles.imageRidge}/>

                    <View style={styles.row}>
                        <EquipementSportifCard
                            handleNavigation={() => navigation.navigate('EquipementDetailScreen', {
                                description1 : "Stimulant naturel qui permet d'accroitre la production naturelle de testostérone libre.",
                                description2: "Complément alimentaire conçu à base de plantes comme le tribulus et le maca, notre TESTOFULL CF7 vous permettra de rehausser votre production de testostérone naturelle dans le but de vous aider à gagner du muscle, à mieux récupérer à obtenir plus de résultats en un laps de temps réduis !",
                                description3: "Les avantages de TESTOFULL CF7",
                                description4: "–\tAugmente la force",
                                description5: "–\tAugmente la libido",
                                description6: "–\tAugmente la récupération musculaire",
                                description7: "–\tFavorise l'anabolisme musculaire",
                                description8: "–\tAugmente le volume musculaire",
                                description9: "–\tStimule l'appétit et la synthèse des protéines",
                                description10: "Il n'y a plus de secret, la fonction hormonale est celle qui domine dans notre sport qui est la culture physique. Ce produit est naturel et il n'est en aucun cas un produit dopant, il s'agit d'un complément alimentaire à base de plantes qui permet de favoriser votre propre production de testostérone. Il n'y a donc aucun dérèglement de votre organisme.",
                                description11: "Code d'achat ( en remplacement du code promo ): YRZ7",
                                lien : 'https://www.cf7.fr/tous-nos-produits-cf7/testofull-cf7-100-caps-booster-de-testosterone/',
                                prix : 24.90,
                                titre : 'TESTOFULL CF7',
                                image: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/produit%20nutrition%2FCF7_Testofull.png?alt=media&token=f610b4e3-36fc-48a4-a459-6c0b2ee055b4"
                            })}
                            image="https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/produit%20nutrition%2FCF7_Testofull.png?alt=media&token=f610b4e3-36fc-48a4-a459-6c0b2ee055b4"
                            prix={24.90}
                            titre="TESTOFULL CF7"
                        />

                        <EquipementSportifCard
                            handleNavigation={() => navigation.navigate('EquipementDetailScreen', {
                                description1 : "Si vous aimez l'effet de congestion maximal durant vos entrainements alors ce complément est fait pour vous ! Nombreux sont les bienfaits de la l-Arginine sur les sportifs.",
                                description2: "Les avantages de notre ARGININE FULL CF7",
                                description3: "–\tQuantité de 750mg de L-Arginine par capsule",
                                description4: "–\tFavorise la congestion musculaire et la vascularisation",
                                description5: "–\tAméliore la force et les performances à l’entraînement",
                                description6: "–\tAugmente l'endurance musculaire",
                                description7: "–\tPermet d'augmenter les réserves de glycogène dans les muscles",
                                description8: "–\tAméliore l'afflux sanguin, l'apport en oxygène et nutriments dans les muscles",
                                description9: "–\tCapsules ultra dosées pour vos besoins journaliers en L-Arginine",
                                description10: "–\tPrécurseur de l'oxyde nitrique (N0) et de la créatine",
                                description11: "Code d'achat ( en remplacement du code promo ): YRZ7",
                                lien : 'https://www.cf7.fr/nutrition/arginine-full-cf7-100-caps/',
                                prix : 19.90,
                                titre : 'ARGININE FULL',
                                image : "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/produit%20nutrition%2FCF7_ArginineFull.png?alt=media&token=0b1e626c-82cb-4906-a608-0f6dc48ef11b"
                            })}
                            image="https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/produit%20nutrition%2FCF7_ArginineFull.png?alt=media&token=0b1e626c-82cb-4906-a608-0f6dc48ef11b"
                            prix={19.90}
                            titre="ARGININE FULL"
                        />
                    </View>

                    <View style={styles.row}>
                        <EquipementSportifCard
                            handleNavigation={() => navigation.navigate('EquipementDetailScreen', {
                                description1 : "Savez-vous que l'intra entraînement est le moment le plus stratégique ?",
                                description2: "Apporter des BCAA et de la GLUTAMINE pendant votre séance de sport, au cours du stress musculaire peux avoir bien des avantages.",
                                description3: "Dans un premier temps, vous apportez du carburant à vos muscles, parfait pour produire de l'énergie et surtout éviter de puiser dans vos propres ressources d'acides aminés intramusculaire.\n" +
                                    "( En gros éviter la dégradation et le catabolisme )\n",
                                description4: "Deux puissants ANTI-CATABOLIC qui freinera l'arrivée du cortisol (hormone du stress) qui survient au cours de vos séances de sport et qui est contre productif et dégradant pour vos tissus musculaires.",
                                description5: "De plus les acides aminés BCAA + GLUTAMINE ensemble contribuent à plusieurs facteurs essentiels.",
                                description6: "–\tAméliorer la synthèse des protéines",
                                description7: "–\tAugmenter le taux naturel de GH (hormones de croissance )",
                                decsription8: "–\tBloquer le catabolisme musculaire ( cortisol )",
                                description9: "–\tProduire de l'énergie pendant l'effort",
                                description10: "–\tFixer les protéines",
                                description11: "Code d'achat ( en remplacement du code promo ): YRZ7",
                                lien: "https://www.cf7.fr/tous-nos-produits-cf7/intra-pro-zero-500g-bcaa-glutamine/",
                                prix : 39.90,
                                titre : 'BCAA INTRA – PRO 2 EN 1',
                                image: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/produit%20nutrition%2FCF7_IntraProZero.png?alt=media&token=ea9cebb1-549d-43da-82f3-5e5d3d3f814a"
                            })}
                            image="https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/produit%20nutrition%2FCF7_IntraProZero.png?alt=media&token=ea9cebb1-549d-43da-82f3-5e5d3d3f814a"
                            prix={39.90}
                            titre="BCAA INTRA – PRO 2 EN 1"
                        />

                        <EquipementSportifCard
                            handleNavigation={() => navigation.navigate('EquipementDetailScreen', {
                                description1 : "Notre super-flex est un produit qui contient un label de qualité Ovomet",
                                description2: "La haute qualité des matières premières et les formules de nos compléments sont pour nous une priorité, de ce fait nous avons développé un complément adapté et réellement efficace dans le cadre de douleurs et d'usure prématurée du aux entraînements répétitif et intensif de tous types de sport.",
                                description3: "Une action préventive est également possible et vivement recommandée une fois par an pour un sportif qui pratique la musculation par exemple.",
                                description4: "Personnes arthrosique souffrant d'une douleur modérée, des runners, des Croissfitters, culturistes etc...\n" +
                                    "Des études récentes ont démontré une diminution de 28% de la douleur après seulement 5 jours de traitement sur des personnes pratiquant une activité physique modérée.\n",
                                description5: "Après 50 jours de traitement, on observe une diminution de la douleur allant jusqu'à 50% sur des personnes pratiquant la course à pied et 60% sur des personnes pratiquant du Cross-fit.",
                                description6: "AU-delà des améliorations constatées sur la douleur, la raideur et la fonctionnalité articulaire, il a également été démontré qu'ovomet prévient l'apparition de lésions sur les tendons et les ligaments. En effet, la prise quotidienne de 300mg d'ovomet permet d'augmenter l'élasticité de ces tissus de 40% comparativement au groupe contrôle.",
                                description7: "Par conséquent, Ovomet permet le maintien d'une activité physique quotidienne et aide à réduire le risque de lésions.",
                                description8: "Code d'achat ( en remplacement du code promo ): YRZ7",
                                lien : 'https://www.cf7.fr/nutrition/100-omega3-sauvage-90-softgels/',
                                prix : 24.90,
                                titre : 'SUPERFLEX-7 OVOMET',
                                image: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/produit%20nutrition%2FCF7_AestetikBomb_Bote_500g.png?alt=media&token=c2032e18-f857-4730-91bd-729138209511",
                            })}
                            image="https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/produit%20nutrition%2FCF7_AestetikBomb_Bote_500g.png?alt=media&token=c2032e18-f857-4730-91bd-729138209511"
                            prix={24.90}
                            titre="SUPERFLEX-7 OVOMET"
                        />


                    </View>

                    <View style={styles.row}>
                        <EquipementSportifCard
                            handleNavigation={() => navigation.navigate('EquipementDetailScreen', {
                                description1 : "Notre complexe de créatines bi-sources CREAFULL CF7 est une synergie entre la créatine Monohydrate et le TRI-CREATINE MALATE.",
                                description2: "L'avantage majeur est son assimilation et sa synthèse qui grâce à cette combinaison stratégique limite la dégradation et la perte de la créatine avant d'atteindre son but. De plus, il n'y a pas de rétention d'eau et ce complément vous permettra une récupération et une reconstruction musculaire optimale grâce à l'anabolisme qu'il procure.",
                                description3: "De nombreux facteurs comme les sucs de l'estomac et d'autres dégradent la créatine ce qui a un impact sur la quantité réellement assimilée. Grâce à notre synergie ce n'est plus un problème.",
                                description4: "Il est recommandé de prendre 3g de CRA-FULL de suite après votre séance avec un sucre rapide du type Vitargo ou Maltodextrine ou mime un jus de raison ou une compote par exemple.",
                                description5: "Ainsi qu'une dose le matin au réveil les jours de repos toujours avec un sucre rapide.",
                                description6: "Le CRAFULL CF7 vous apportera un gain de poids et de masse musculaire et une récupération optimale limitant les courbatures si vous l'utilise correctement et avec régularité.",
                                description7: "Code d'achat ( en remplacement du code promo ): YRZ7",
                                lien: "https://www.cf7.fr/tous-nos-produits-cf7/cf7-creafull-complexe-de-deux-sources-de-creatines-500g/",
                                prix : 34.90,
                                titre : 'CF7 CREAFULL – POUDRE',
                                image: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/produit%20nutrition%2FCF7_CreaFull.png?alt=media&token=84072e36-2f60-4d7b-b428-ece9484f8553"
                            })}
                            image="https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/produit%20nutrition%2FCF7_CreaFull.png?alt=media&token=84072e36-2f60-4d7b-b428-ece9484f8553"
                            prix={34.90}
                            titre="CF7 CREAFULL – POUDRE"
                        />

                        <EquipementSportifCard
                            handleNavigation={() => navigation.navigate('EquipementDetailScreen', {
                                description1 : "La casein est une protéine dite en règle générale \" nocturne \" ce qui veut dire que son utilisation de base est juste avant d'aller ce coucher pour profiter d'une longue phase d'assimilation des protéines et acides aminés qu'elle contient, le but étant de permettre la reconstruction des fibres musculaires la nuit durant le sommeil et éviter à tout prix le catabolisme nocturne, c'est-à-dire que le muscle consomme ses propres ressources de protéines et acide aminés pour se rebâtir en d'autres termes du cannibalisme musculaire qui engendre une fonte musculaire et non l'anabolisme ( reconstruction des fibres plus fortes ).",
                                description2: "C'est essentiellement la nuit que l'a bâtie du muscle et que les hormones comme la testostérone et GH ( Grow Hormone ) sont sécrétées par l'organisme.",
                                description3: "Il est donc impératif d'avoir un bon sommeil récupérateur et de préserver son organisme du catabolisme avec une source à assimilation longue de protéines et acides aminés avant d'aller se coucher.",
                                description4: "Notre casein CF7 Pronight vous assure de 6 à 7h d'assimilation et une des meilleures qualités de casein MICELLAIRE du marché provenant du lait. Son goût est irréprochable et son aminogramme est complet.",
                                decsription5: "Optez pour la qualité et la transparence CF7 sport nutrition.",
                                description6: "Code d'achat ( en remplacement du code promo ): YRZ7",
                                lien: "https://www.cf7.fr/tvcf7/casein-cf7-pronight-2kg/",
                                prix : 34.90,
                                titre : 'CASEIN MICELLAIRE',
                                image: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/produit%20nutrition%2FCF7_CaseinProNight.png?alt=media&token=43ea1a11-ea1b-4722-8368-f718cac77afb"
                            })}
                            image="https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/produit%20nutrition%2FCF7_CaseinProNight.png?alt=media&token=43ea1a11-ea1b-4722-8368-f718cac77afb"
                            prix={34.90}
                            titre="CASEIN MICELLAIRE"
                        />
                    </View>

                    <View style={styles.row}>
                        <EquipementSportifCard
                            handleNavigation={() => navigation.navigate('EquipementDetailScreen', {
                                description1 : "L-Carnitine CF7 CARNIFIRE est un complément alimentaire sous forme de capsules pour la perte de gras accélérée.",
                                description2: "CF7 Carnifire sont des capsules ultra-concentrées de L-Carnitine pour vous aider à perdre du poids et accélérer le déstockage des graisses.",
                                description3: "La stratégie consiste à utiliser les graisses comme source d'énergies.",
                                description4: "Grace à seulement trois capsules par jour, vous apportez une forte dose de L-Carnitine à votre corps qui vous aide à déstocker les graisses.\n" +
                                    "Déstockez vos graisses avec CF7 Carnifire !\n",
                                description5: "La L-Carnitine entre en jeu dans le transport des acides gras vers les muscles.\n" +
                                    "Dans ce procédé dit d'oxydation, les acides gras sont transformés en énergie musculaire et donc drulés. Plusieurs études ont démontré que la L-Cartine permet à vos muscles de dépendre de vos réserves de graisses pour produire de l'énergie.\n",
                                description6: "Code d'achat ( en remplacement du code promo ): YRZ7",
                                lien : 'https://www.cf7.fr/tous-nos-produits-cf7/cf7-carnifire-pure-l-carnitine-100-tabs-brule-graisses/',
                                prix : 29.90,
                                titre : 'CF7 CARNIFIRE',
                                image: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/produit%20nutrition%2FCF7_Carnifire.png?alt=media&token=81f23803-a342-48fc-beda-9cc45da77f8b"
                            })}
                            image="https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/produit%20nutrition%2FCF7_Carnifire.png?alt=media&token=81f23803-a342-48fc-beda-9cc45da77f8b"
                            prix={29.90}
                            titre="CF7 CARNIFIRE"
                        />

                        <EquipementSportifCard
                            handleNavigation={() => navigation.navigate('EquipementDetailScreen', {
                                description1 : "Les sports d'endurances, de force, de concentration ont désormais leur propre référence pour atteindre leurs objectifs avec un conditionnement pour deux mois !",
                                description2: "Un véritable PRE-WORKOUT booster en comprimés végétales, multi-sport et polyvalent.",
                                description3: "Quelque soit votre sport, comme par exemple\n" +
                                    "\n" +
                                    "–\tLe MMA\n" +
                                    "–\tLa Boxe\n" +
                                    "–\tLe Rugby\n" +
                                    "–\tLe Football Américain\n" +
                                    "–\tLe Cross-fit\n" +
                                    "–\tLa Musculation\n" +
                                    "–\tetc....\n",
                                description4: "Un complément de la gamme #RACE Multi-sport avec pour objectifs ?",
                                description5: "–\tAugmentation des performances physiques dans la globalité, endurance, explosive, force, récupération",
                                description6: "–\tAugmentation de la densité musculaire ( femmes pour les entrainements cuisses, fressiers, ischios )",
                                description7: "Augmentation de la récupération intra-training avec la présence du Magnésium",
                                description8: "–\tBooster de concentration ( Caféine 200mg ) et de testostérone naturelle grace au ZINC et au DAA présent",
                                description9: "–\tVasodilatateur inclut également avec la L-Arginine et la L-Citruline",
                                description10: "–\tCe qui favorise l'oxygénation musculaire et le transport des nutriments dans le sang vers les muscles ( ajout de BCAA intra-training )",
                                description11: "–\tFacilité de consommation et de stockage avec un format en 180 comprimés, soit 3 gélules seulement pour une dose.",
                                description12: "Code d'achat ( en remplacement du code promo ): YRZ7",
                                lien: "https://www.cf7.fr/nutrition/booster-entrainement/force-oxygene-booster-pre-workout-comprimes-vegetales/",
                                prix : 49.90,
                                titre : 'FORCE & OXYGENE',
                                image: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/produit%20nutrition%2FPHOTO-2020-10-20-12-16-36.jpg?alt=media&token=ec6c41e1-eec0-483f-9aa0-93f4b5e53f1f"
                            })}
                            image="https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/produit%20nutrition%2FPHOTO-2020-10-20-12-16-36.jpg?alt=media&token=ec6c41e1-eec0-483f-9aa0-93f4b5e53f1f"
                            prix={49.90}
                            titre="FORCE & OXYGENE"
                        />
                    </View>

                    <View style={styles.row}>
                        <EquipementSportifCard
                            handleNavigation={() => navigation.navigate('EquipementDetailScreen', {
                                description1 : "ZMA+B6 CF7 est un complément alimentaire composé des minéraux de Zinc, Magnésium et Vitamine B6. Cette association est devenue très populaire et appréciée parmi les pratiquants de musculation.",
                                description2: "En effet, le ZMA permet d'améliorer la reconstruction musculaire par une amélioration de la qualité de sommeil.",
                                description3: "C'est un complément alimentaire entièrement naturel élaboré pour fournir à votre organisme, les minéraux dont il a besoin pour assurer certains processus biologiques qui contribuent au maintien de la performance athlétique et du fonctionnement musculaire normal.",
                                description4: "ZMA+B6 CF7 est un produit qui permet donc d'améliorer la force, l'endurance, la récupération et la croissance musculaire grâce à son apport équilibré en minéraux essentiels.\n" +
                                    "\n" +
                                    "C'est un produit principalement destiné au sportifs cherchant à améliorer leur récupération ainsi que leur reconstruction musculaire afin de permettre un développement musculaire optimal et de qualité.\n",
                                description5: "ZMA+B6 CF7 permet également de stimuler naturellement la production de testotérone pour une meilleure récupération physique et un sommeil réparateur.\n" +
                                    "\n" +
                                    "En effet, en renforçant la qualité du sommeil, cette formule permet de maximiser les effets récupérateurs du sommeil et de favoriser les sécrétions hormonales qui se passe la nuit.\n" +
                                    "\n" +
                                    "Vos phases de sommeil profond seront favorisées et c'est durant cette période que de nombreuses hormones sont sécrétées dont l'hormone de croissance et la testostérone.\n" +
                                    "\n" +
                                    "Une meilleure qualité du sommeil engendre une sécrétion hormonale plus intense.\n",
                                description6: "ZMA+B6 CF7 Présente donc une formule optimale qui va vous permettre d'améliorer l'efficacité de votre prise de masse musculaire. En effet, le Zinc et le Magnésium participent grandement à la synthèse des protéines pour la reconstruction musculaire alors que la vitamine B6 maintient le bon fonctionnement normal des muscles.\n" +
                                    "\n" +
                                    "Cette combinaison très utilisée et appréciée dans le domaine de la musculation est plus que recommandée pour les sportifs souhaitant récupérer au maximum entre leurs séances intensives pour construire du muscle rapidement.\n" +
                                    "\n" +
                                    "Vous l'aurez donc compris ZMA+B6 est un produit faisant partie des anabolisants naturels, uniquement composé d'ingrédients naturels pour vous permettre d'améliorer votre récupération, construction musculaire ainsi que votre force et performances physiques et sportives.\n" +
                                    "\n" +
                                    "Ainsi, vous allez pouvoir mieux récupérer entre vos séances, avoir un meilleure sommeil réparateur pour plus de résultats à l'entrainement. Il vas également jouer un rôle majeur dans l'augmentation du taux de testostérone ainsi que la sécrétion d'hormone de croissance.\n",
                                description7: "La composition de ZMA+B6 CF7",
                                description8: "–\tZINC : permet de jouer un rôle primordial dans la régulation de la croissance cellulaire ainsi que la réparation des tissus musculaires. Il permet de maintenir un taux normal de testostérones dans le sang tout en participant à la synthèse des protéines pour maximiser la construction musculaire.",
                                description9: "–\tMagnésium : Joue un rôle essentiel dans le mintien de l'équilibre des électrolytes, dans la production d'énergie ainsi que dans une fonction neuromusculaire normale tout en participant à la synthèse des protéines pour une reconstruction musculaire maximale.",
                                description10: "–\tVitamine B6 : Permet de jouer un rôle important dans la synthèse des lipides et des protéines telles que l'hémoglobine. Elle permet de maintenir le bon fonctionnement normal des muscles.",
                                description11: "Code d'achat ( en remplacement du code promo ): YRZ7",
                                lien: "https://www.cf7.fr/tous-nos-produits-cf7/zmab6-60-capsules-testo-booster-qualite-du-sommeil/",
                                prix : 12.90,
                                titre : 'ZMA+B6',
                                image: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/produit%20nutrition%2FCF7_ZmaB6.png?alt=media&token=766b55f2-7cf9-4e23-b60b-e648ee1da9cb"
                            })}
                            image="https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/produit%20nutrition%2FCF7_ZmaB6.png?alt=media&token=766b55f2-7cf9-4e23-b60b-e648ee1da9cb"
                            prix={12.90}
                            titre="ZMA+B6"
                        />

                        <EquipementSportifCard
                            handleNavigation={() => navigation.navigate('EquipementDetailScreen', {
                                description1 : "Un brûleur de graisses se présente comme un complément alimentaire. Il a pour but d'accélérer le métabolisme, l'ensemble des processus de transformation des substances dans l'organisme et des phénomènes qui s'y rattachent. Les brûleurs de graisses  favorisent alors la dépense calorique et l'activation de la lipolyse, phénomène de destruction des lipides dans l'organisme, dans les adipocytes. ( petits sacs graisseux )",
                                description2: "Le phénomène de lipolyse se présente comme la transformation des grosses molécules d'acides gras libres facilement utilisables par l'organisme les rendant donc plus simple à éliminer.",
                                description3: "Les actions de CF7 GOLDS 2.0 :",
                                description4: "–\tBrûle les graisses stockés",
                                description5: "–\tUtilise les graisses en énergies",
                                description6: "–\tAugmente la dépense calorique",
                                description7: "–\tStimule la thermogenèse",
                                description8: "–\tAction coupe faim avec le chrome.",
                                description9: "Le guarana, la caféine, le chrome, ces produits sont pour la plupart, des extraits de plantes, des acides aminés ou des vitamines, qui ont la propriété d'augmenter la consommation de calories par l'organisme tout en capturant les graisses avant que celles-ci ne pénètrent dans le sang pour certains tandis que pour d'autres ont la capacité de favoriser l'élimination des graisses.",
                                decsription10: "Code d'achat ( en remplacement du code promo ): YRZ7",
                                lien: "https://www.cf7.fr/tous-nos-produits-cf7/cf7-gold-2-0-90-caps-bruleur-de-graisses/",
                                prix : 29.90,
                                titre : 'Brûleur de graisse',
                                image: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/produit%20nutrition%2FCF7_Gold20.png?alt=media&token=803c65ba-57a7-4e64-9eba-86078fc5fe4a"
                            })}
                            image="https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/produit%20nutrition%2FCF7_Gold20.png?alt=media&token=803c65ba-57a7-4e64-9eba-86078fc5fe4a"
                            prix={29.90}
                            titre="Brûleur de graisse"
                        />
                    </View>

                    <View style={styles.row}>
                        <EquipementSportifCard
                            handleNavigation={() => navigation.navigate('EquipementDetailScreen', {
                                description1 : "L'iso shape est un produit polyvalent, elle peut aussi bien s'utiliser dans le cadre d'une sèche extrême que d'une prise de masse de qualité, tout vas dépendre de votre mode d'alimentation et du calcul de vos macros nutriments ( protéines – glucides – lipides )",
                                description2: "Le petit plus : l'iso shape pro peut aussi se cuisiner pour réaliser des pancakes ou gâteaux protéinés",
                                description3: "Protéines issues 100% du petit-lait micro-filtré à froid ! ( procédé qui ne dénature pas les protéines à l'extraction )",
                                description4: "Un goût très léger que nous avons réalisé, testé et approuvé par de nombreux clients pour que jamais votre produit ne soit écœurant, même sur du long terme !",
                                description5: "Gros point fort du produit :  ISO SHAPE PRO est enrichie en créatine soit 1500mg par prise. Cela vous évite d'acheter en plus de la créatine et vous fait donc économiser de l'argent et qui est idéale pour faire du muscle et bien récupérer !",
                                description6: "Code d'achat ( en remplacement du code promo ): YRZ7",
                                lien: "https://www.cf7.fr/nutrition/iso-shape-pro-proteine-3-en-1/",
                                prix : 29.90,
                                titre : 'ISO SHAPE PRO',
                                image: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/produit%20nutrition%2FCF7_IsoShapePro.png?alt=media&token=f59ee733-f3bc-424d-9873-830a5efd9c38"
                            })}
                            image="https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/produit%20nutrition%2FCF7_IsoShapePro.png?alt=media&token=f59ee733-f3bc-424d-9873-830a5efd9c38"
                            prix={29.90}
                            titre="ISO SHAPE PRO"
                        />

                        <EquipementSportifCard
                            handleNavigation={() => navigation.navigate('EquipementDetailScreen', {
                                description1 : "Nouvelle gamme de compléments à base d'acides aminés Peptides CF7 SPORT NUTRITION boisson d'effort anti-catabolisme,",
                                description2: "–\tChaîne complète d'acides aminées essentiels + incluant les BCAA",
                                description3: "–\tFractionnés en peptides pour une meilleure assimilation",
                                description4: "–\tAméliore la récupération et la reconstruction musculaire – stop le catabolisme",
                                description5: "–\tPermet de produire de l'énergie durant une séance d’entraînement grâce à la libération d'acides aminés",
                                description6: "–\tPoudre à mélanger à l'eau pour prise avant/après l'effort ou bien durant l'effort",
                                description7: "–\tSaveur agréable pêche ou fruits des bois",
                                description8: "–\tFormat de 500g soit 50 prises",
                                description9: "–\tUne dose de 10g par prise",
                                description10: "Code d'achat ( en remplacement du code promo ): YRZ7",
                                lien: "https://www.cf7.fr/tvcf7/eaa-pro7-peptides/",
                                prix : 44.90,
                                titre : 'EAA PRO7 PEPTIDES',
                                image: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/produit%20nutrition%2FCF7_EAApro7_Bote_500g.png?alt=media&token=17c88901-4bcf-4206-8e7f-365ee44a74ea"
                            })}
                            image="https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/produit%20nutrition%2FCF7_EAApro7_Bote_500g.png?alt=media&token=17c88901-4bcf-4206-8e7f-365ee44a74ea"
                            prix={44.90}
                            titre="EAA PRO7 PEPTIDES"
                        />
                    </View>

                    <View style={styles.row}>
                        <EquipementSportifCard
                            handleNavigation={() => navigation.navigate('EquipementDetailScreen', {
                                description1 : "MULTIVITAMINES CF7 – Conditionnement de 60 gélules",
                                description2: "VITAFULL7 est une formule complète de multi vitamines, fabriquée par la marque CF7 SPORT NUTRITION.",
                                description3: "Nos aliments quotidiens sont de plus en plus pauvres en vitamines et minéraux et il peut etre intéressant de se supplémenter en multi vitamines pour combler les besoins. Les sportifs ont des besoins plus importants en vitamines et minéraux du fait de la pratique sportive.",
                                description4: "Caractéristiques VITAFULL7 – Micro Nutriments",
                                description5: "- Vitamines et minéraux",
                                description6: "–\tAssure le bon fonctionnement du système immunitaire",
                                description7: "–\tFormat économique cure de deux mois",
                                description8: "–\tFormat pratique sous forme de gélules molles Soft gel",
                                description9: "La vitamine C contribue à maintenir le fonctionnement normal du système immunitaire, à une fonction normale du collagène, au métabolisme énergétique normal et au fonctionnement normal du système nerveux.",
                                description10: "La vitamine D3 contribue au maintien d'une ossature normale, au maintien d'une fonction musculaire normale et au fonctionnement normal du système immunitaire.\n" +
                                    "\n" +
                                    "Les vitamines B ( B2 – B1 – B6 – B8 – B9 – B5 – B3 – B12 ) contribuent au métabolisme énergétique normale, au fonctionnement normal du système nerveux et à réduire la fatigue.\n" +
                                    "\n" +
                                    "Le Zinc contribue à un métabolisme acido-basique normal, à une fonction cognitive normal et au maintien d'une ossature normale\n" +
                                    "\n" +
                                    "Le magnésium contribue à réduire la fatigue, à l'équilibre électrolytique et à une fonction musculaire normale.\n" +
                                    "\n" +
                                    "Le fer contribue à un fonction cognitive normale et au fonctionnement normal du système immunitaire\n" +
                                    "\n" +
                                    "Le calcium contribue à un métabolisme énergétique normal et au maintien d'une ossature normale\n",
                                description11: "Code d'achat ( en remplacement du code promo ): YRZ7",
                                lien: "https://www.cf7.fr/tous-nos-produits-cf7/vita-full-7/",
                                prix : 19.90,
                                titre : 'VITA FULL 7',
                                image: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/produit%20nutrition%2FCF7_Vitafull.png?alt=media&token=20b92c6c-22ad-45bf-abcd-2279109d368b"
                            })}
                            image="https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/produit%20nutrition%2FCF7_Vitafull.png?alt=media&token=20b92c6c-22ad-45bf-abcd-2279109d368b"
                            prix={19.90}
                            titre="VITA FULL 7"
                        />

                        <EquipementSportifCard
                            handleNavigation={() => navigation.navigate('EquipementDetailScreen', {
                                description1 : "Les acides gras oméga-3, notés également n-3, sont des acides gras polyinsaturés que l'on trouve en grandes quantités dans certains poissons gras ( comme le saumon ), dans les graines de chia, le lin, la noix, la cameline, le colza et le soja.",
                                description2: "Les oméga-3 et les oméga-6 sont classés acides gras essentiels car l'organisme humain en a absolument besoin mais ne peut pas les produire lui-même, il doit donc les trouver tels quels dans son alimentation.\n" +
                                    "\n" +
                                    "Les poissons gras vivant en eaux froides sont riches en EPA et DHA.\n",
                                description3: "Ce sont principalement le saumon ( surtout sauvage ), le flétan, le hareng, le maquereau, les anchois et les sardines. Ces poissons contiennent environ sept fois plus d'oméga-3 que d'oméga-6. D'autres poissons gras comme le thon sont assez riches en oméga-3 mais sont susceptibles de contenir de fortes quantités de métaux lourds et polluants. Les fabricants de compléments en oméga-3 éliminent ces polluants par divers procédés.",
                                description4: "Les poissons ne synthétisent pas eux-mêmes les acides gras, ils ingèrent des micro-algues qui contiennent et les assimilent, ce qui explique pourquoi les poissons d'élevage – nourris en partie de protéines végétales – contiennent moins d'oméga-3 que les poissons sauvages.",
                                description5: "L'absorption d'oméga-3 contribue à un taux de cholestérol normal. Parallèlement, les oméga-3 diminuent le taux de triglycérides sanguins. Ils semblent diminuer légèrement le niveau de pression artérielle ainsi que la fréquence cardiaque. Ils diminueraient également l'agrégabilité plaquettaire.",
                                description6: "Sur la question de l'inflammation, plusieurs études montrent qu'ils ont un effet anti-inflammatoire à partir de 3g par jour.",
                                description7: "Code d'achat ( en remplacement du code promo ): YRZ7",
                                lien : 'https://www.cf7.fr/nutrition/100-omega3-sauvage-90-softgels/',
                                prix : 14.90,
                                titre : '100% OMEGA3 EPA DHA',
                                image: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/produit%20nutrition%2FCF7_Omega3.png?alt=media&token=20d482f5-d021-474f-8318-23500b357356"
                            })}
                            image="https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/produit%20nutrition%2FCF7_Omega3.png?alt=media&token=20d482f5-d021-474f-8318-23500b357356"
                            prix={14.90}
                            titre="OMEGA3 EPA DHA"
                        />
                    </View>

                    <View style={styles.row}>
                        <EquipementSportifCard
                            handleNavigation={() => navigation.navigate('EquipementDetailScreen', {
                                description1 : "Notre protéine whey isolate 90% Gold séries est une protéine pure micro-filtrée à froid. Native 100% laitière de très haute qualité.",
                                description2: "Fabriquée avec les meilleurs matières premières du marché, petit lait Arla et l'ajout en glutamine Kyowa.",
                                description3: "De plus la grande spécificité de cette protéine se retrouve dans sa fluidité parfaite, et ses goûts toujours très léger qui plaisent énormément, nos clients aime la Gold Séries 90% tout simplement car elle n'est pas écœurante, elle n'est pas lourde, et elle s'assimile très rapidement une fois consommée.",
                                description4: "Elle dispose d'une teneur en protéine de 90% sans lactose, elle est idéale pour les intolérants par exemple.",
                                description5: "–\tSans sucre ( parfait pour une prise de muscle sec, une sèche ou un régime )",
                                description6: "–\tSans graisse, ce qui en fait une pure protéine haut de gamme pour tous types de sportifs.",
                                description7: "–\tCe produit s'adapte à vos besoins de par sa haute digestibilité et sa pureté.",
                                description8: "–\tNous apportons une exigence particulière à la qualité et la transparence de nos compléments alimentaires.",
                                description9: "–\tTous nos produits sont testés et approuvés par nos équipes dans la fabrication.",
                                description10: "Code d'achat ( en remplacement du code promo ): YRZ7",
                                lien: "https://www.cf7.fr/nutrition/whey-proteine/proteine-whey-isolate-gold-series-90-arla-native/",
                                prix : 34.90,
                                titre : 'WHEY ISOLATE',
                                image: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/produit%20nutrition%2FCF7_IsoGold90.png?alt=media&token=e7214216-5fcb-47cf-b703-f1eaeb9bdbba"
                            })}
                            image="https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/produit%20nutrition%2FCF7_IsoGold90.png?alt=media&token=e7214216-5fcb-47cf-b703-f1eaeb9bdbba"
                            prix={34.90}
                            titre="WHEY ISOLATE"
                        />

                        <EquipementSportifCard
                            handleNavigation={() => navigation.navigate('EquipementDetailScreen', {
                                description1 : "BOOSTER ET BRULEUR DE GRAISSE, avec inclus en bonus des BCAA",
                                description2: "3 Composants booster :",
                                description3: "–\tCAFEINE",
                                description4: "–\tL-CITRULINE",
                                description5: "–\tL-ARGININE",
                                description6: "3 Composants bruleur de graisses :",
                                description7: "–\tCAFEINE",
                                description8: "–\tL-CARNITINE",
                                description9: "–\tTHE VERT",
                                description10: "Et en bonus un ajout de 5g de BCAA pour protéger votre masse musculaire du catabolisme et pouvoir utiliser les graisses adipeuses en source d'énergie.",
                                description11: "Ce complément très efficace est idéal dans un objectif de sèche et perte de poids ou simplement pour être affûté toute l'année, en association d'un mode de vie et d'une alimentation fitness.",
                                description12: "Code d'achat ( en remplacement du code promo ): YRZ7",
                                lien : 'https://www.cf7.fr/tous-nos-produits-cf7/aestetic-bomb-500g-booster-bruleur-bcaa/',
                                prix : 39.90,
                                titre : 'AESTETIC BOMB 3 EN 1',
                                image: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/produit%20nutrition%2FCF7_AestetikBomb_Bote_500g.png?alt=media&token=c2032e18-f857-4730-91bd-729138209511"
                            })}
                            image="https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/produit%20nutrition%2FCF7_AestetikBomb_Bote_500g.png?alt=media&token=c2032e18-f857-4730-91bd-729138209511"
                            prix={39.90}
                            titre="AESTETIC BOMB 3 EN 1"
                        />
                    </View>

                    <View style={styles.row}>
                        <EquipementSportifCard
                            handleNavigation={() => navigation.navigate('EquipementDetailScreen', {
                                description1 : "CF7 DESTOCK CLA PURE est l'acide linoléique conjugué et issu de l'huile de carthame.",
                                description2: "Cet acide est obtenu à partir de l'acide linoléique, un acide gras non synthétisé par l'organisme et dont l'apport doit se faire par la nourriture.\n" +
                                    "\n" +
                                    "Une supplémentation en CLA permet de favoriser la mise à disposition des acides gras libres et du glucose au niveau des muscles, limitant ainsi leur stockage au niveau du tissu adipeux.\n",
                                description3: "Le CLA est donc recommandé pour lutter contre les excès de graisses localisés car il favorise leur combustion.\n" +
                                    "\n" +
                                    "Ainsi, en cure d'1 mois renouvelable, ce complément alimentaire sera votre allié pour combattre localement vos excès de graisses !\n",
                                description4: "–\tAide au déstockage des graisses",
                                description5: "–\tRégule le métabolisme des glucides",
                                description6: "–\tAccélère la perte de poids",
                                description8: "–\tAide à la sèche",
                                description9: "Code d'achat ( en remplacement du code promo ): YRZ7",
                                lien: "https://www.cf7.fr/tous-nos-produits-cf7/cf7-destock-cla-pure-90-softgel/",
                                prix : 14.90,
                                titre : 'CLA – CF7 DESTOCK',
                                image: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/produit%20nutrition%2FCF7_Destock.png?alt=media&token=e6749db2-82a5-4016-8e20-dd9408d19e49"
                            })}
                            image="https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/produit%20nutrition%2FCF7_Destock.png?alt=media&token=e6749db2-82a5-4016-8e20-dd9408d19e49"
                            prix={14.90}
                            titre="CLA – CF7 DESTOCK"
                        />

                        <EquipementSportifCard
                            handleNavigation={() => navigation.navigate('EquipementDetailScreen', {
                                description1 : "Vous cherchez un booster Explosif qui augmentera vos sensations de congestion et vos performances à l’entraînement le RX7 booster CF7 est idéal.",
                                description2: "Nous avons volontairement retiré les colorants qui pour nous n'ont pas d'utilité.",
                                description3: "Le RX7 contient de la BETA  ALANINE",
                                description4: "Ce booster d’entraînement favorisera :",
                                description5: "– La concentration, l'éveil et l'endurance",
                                description6: "–\tLe pumping ( congestion )",
                                description7: "–\tLes performances ( force )",
                                description8: "–\tLa récupération intra-training",
                                description9: "–\tLa motivation",
                                description10: "Comme tous les boosters il n'est pas recommandé aux personnes ayant des problèmes cardiaques ou malades, il est à privilégier pour la musculation et le fitness.",
                                description11: "Code d'achat ( en remplacement du code promo ): YRZ7",
                                lien : 'https://www.cf7.fr/tous-nos-produits-cf7/rx7-booster-sans-colorants-sans-creatine/',
                                prix : 34.90,
                                titre : 'RX7 BOOSTER PRE-WORK',
                                image: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/produit%20nutrition%2F22032019-plantilla_gold_bote300g_RX7%20(Medium).png?alt=media&token=65fd7177-c374-4294-81ba-515dceb8f466"
                            })}
                            image="https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/produit%20nutrition%2F22032019-plantilla_gold_bote300g_RX7%20(Medium).png?alt=media&token=65fd7177-c374-4294-81ba-515dceb8f466"
                            prix={34.90}
                            titre="RX7 BOOSTER"
                        />
                    </View>

                    <View style={styles.row}>
                        <EquipementSportifCard
                            handleNavigation={() => navigation.navigate('EquipementDetailScreen', {
                                description1 : "La WHEY R77 est la première whey sur le marché qui dispose d'un ingrédient booster de testostérone naturel.",
                                description2: "Inclut également la créatine mono-hydrate et une chaîné complète d'acides aminés.\n" +
                                    "L'acide aspartique DAA favorise la Production naturelle d'hormone anabolisante !\n" +
                                    "Associer stratégiquement à une chaîné d'acides aminés complète EAA incluse ( Essentiel Aminos Acides ) et aussi de la CREATINE MONOHYDRATE et le petit lait ARLA pour confectionner et parfaire notre Whey R77.\n",
                                description3: "Une formule très performante qui vous permettra de prendre de la masse tout en restant sec sans avoir d'impact sur votre physique. Il est même possible d'utiliser la Whey R77 en phase de sèche, elle s'avérera très efficace pour reconstruire les fibres musculaires dégradées à l’entraînement et lutter contre le catabolisme ou la sécrétion de cortisol liée au stress des entraînements et du régime.",
                                description4: "En conclusion sèche ou prise de masse en fonction de votre alimentation ce complément est idéal",
                                description5: "Code d'achat ( en remplacement du code promo ): YRZ7",
                                lien: "https://www.cf7.fr/nutrition/whey-proteine/r77-whey-proteine-creatine-daa-eaa/",
                                prix : 79.90,
                                titre : 'R77 WHEY TESTO',
                                image: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/produit%20nutrition%2F3d_R77-Proteina__ChocoNutd%5B1%5D.jpg?alt=media&token=0569b0d1-0ae1-4c86-b1eb-1e12dc590719"
                            })}
                            image="https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/produit%20nutrition%2F3d_R77-Proteina__ChocoNutd%5B1%5D.jpg?alt=media&token=0569b0d1-0ae1-4c86-b1eb-1e12dc590719"
                            prix={79.90}
                            titre="R77 WHEY TESTO"
                        />

                        <EquipementSportifCard
                            handleNavigation={() => navigation.navigate('EquipementDetailScreen', {
                                description1 : "Booste la production naturelle de GH ( hormone de croissance ) et augmente la production naturelle de testostérone.",
                                description2: "Les avantages de notre booster GH FULL :",
                                description3: "–\tBoost la production naturelle de GH ( hormone de croissance )",
                                description4: "–\tAugmente la production naturelle de testostérones",
                                description5: "–\tAugmente les performances à l’entraînement",
                                description6: "–\tFavorise la reconstruction musculaires",
                                description7: "–\tFavorise l'anabolisme",
                                description8: "–\tIdéale en phase de prise de masse et aussi de sèche pour le maintiens des gains musculaires",
                                description9: "Composition ultra complète : DAA + TRIBULUS + ARGININE + ZMA+B6 + AVOINE",
                                description10: "Code d'achat ( en remplacement du code promo ): YRZ7",
                                lien: "https://www.cf7.fr/tous-nos-produits-cf7/testosterone-booster-cf7-gh-full-100-caps-3-en-1/",
                                prix : 29.90,
                                titre : 'GH FULL – TESTO/GH BOOSTER',
                                image: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/produit%20nutrition%2FCF7_GHfull.png?alt=media&token=09a24509-7832-4377-a5ee-1fdbcd954bed"
                            })}
                            image="https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/produit%20nutrition%2FCF7_GHfull.png?alt=media&token=09a24509-7832-4377-a5ee-1fdbcd954bed"
                            prix={29.90}
                            titre="GH FULL"
                        />
                    </View>

                    <View style={styles.row}>
                        <EquipementSportifCard
                            handleNavigation={() => navigation.navigate('EquipementDetailScreen', {
                                description1 : "Apporter des BCAA, les trois acides aminés principaux qui ne sont pas fabriqués par le corps humain et qui sont essentiels, avant ou après votre séance de sport, et au cours du stress musculaire peut avoir bien des avantages.",
                                description2: "Dans un premier temps, vous apportez du carburant à vos muscle, parfait pour produire de l'énergie et surtout éviter de puiser dans vos propres ressources d'acides aminés intramusculaires. ( En gros éviter la dégradation et le catabolisme )",
                                description3: "BCAA 10.1.1 250 tabs ! Est économique et productif et performant car son dosage en L-leucine et 10x plus important que la L-isoleucine et L-valine.",
                                description4: "\n" +
                                    "C'est de ce fait un puissant ANTI-CATABOLIC qui freinera l'arrivée du cortisol ( hormone du stress ) qui survient au cours de vos séances de sport et qui est contre productif et dégradant pour vos tissus musculaires.\n",
                                description5: "De plus les acides aminés BCAA 10.1.1 contribuent à plusieurs facteurs essentiels.",
                                description6: "–\tRatio en L-leucine 10x plus élevé que chez la concurrence",
                                description7: "–\tAméliorer la synthèse des protéines musculaires",
                                description8: "–\tBloquer le catabolisme musculaires",
                                description9: "–\tProduire de l'énergie pendant l'effort",
                                descirption10: "–\tDiriger et fixer les protéines.",
                                description11: "Code d'achat ( en remplacement du code promo ): YRZ7",
                                lien: "https://www.cf7.fr/tous-nos-produits-cf7/acides-amines-bcaa-10-1-1-a-croquer-250-comprimes/",
                                prix : 34.90,
                                titre : 'BCAA 10.1.1 A CROQUER',
                                image: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/produit%20nutrition%2FCF7_Bcaa1011.png?alt=media&token=bdbf2c4d-17b9-4680-a34a-046b04aafe13"
                            })}
                            image="https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/produit%20nutrition%2FCF7_Bcaa1011.png?alt=media&token=bdbf2c4d-17b9-4680-a34a-046b04aafe13"
                            prix={34.90}
                            titre="BCAA 10.1.1 A CROQUER"
                        />

                        <EquipementSportifCard
                            handleNavigation={() => navigation.navigate('EquipementDetailScreen', {
                                description1 : "BCAA 12.1.1 CF7 est une formule d'acides aminés ramifiés (BCAA) qui est fabriquée par la marque française CF7 sport nutrition.\n" +
                                    "\n" +
                                    "Le ratio 12.1.1 comme son nom l'indique contient 12 fois plus de L-leucine qui selon les dernière études démontre une plus grande efficacité sur le plan anabolisme et récupération.\n" +
                                    "\n" +
                                    "La leucine est l'acide aminé qui suscite le plus d’intérêt chez les sportifs.\n",
                                description2: "Ces acides aminés sont dits essentiels car le corps ne peut pas les fabriquer par lui même.",
                                description3: "Si vous souhaitez en apporter à votre corps, il faudra manger des aliments riches en protéines ou consommer des compléments alimentaire.\n" +
                                    "\n" +
                                    "BCAA 12.1.1 ne contient pas de glucides ni de lipides mais seulement des protéines (provenant des acides aminés utilisés dans la composition).\n",
                                description4: "Il ne contient pas non plus d'aspartame et il est fabriqué avec d'excellentes matières première comme l'intégralité des produits de notre marque CF7 sport nutrition.",
                                description5: "Ce produit présente une composition très intéressante pour les sportifs car elle permet d'obtenir une bonne dose de BCAA sans impacter votre diète puisqu'une dose ne contient que très peu de calories.",
                                description6: "Les points forts de cette formule :",
                                description7: "–\tFormules de BCAA hautement dosée avec un ratio 12.1.1",
                                description8: "–\tContient de la vitamine B6",
                                description9: "–\tTrès faible teneur en calories",
                                description10: "–\tMatière première de haute qualité",
                                description11: "Code d'achat ( en remplacement du code promo ): YRZ7",
                                lien: "https://www.cf7.fr/tous-nos-produits-cf7/acides-amines-bcaa-12-1-1-poudre-500g/",
                                prix : 34.90,
                                titre : 'BCAA 12.1.1 – POUDRE',
                                image: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/produit%20nutrition%2FCF7_Bcaa1211_500g.png?alt=media&token=cd78a70a-b5f9-4a30-83ba-a2bedf052311"
                            })}
                            image="https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/produit%20nutrition%2FCF7_Bcaa1211_500g.png?alt=media&token=cd78a70a-b5f9-4a30-83ba-a2bedf052311"
                            prix={34.90}
                            titre="BCAA 12.1.1 – POUDRE"
                        />
                    </View>

                    <View style={styles.row}>
                        <EquipementSportifCard
                            handleNavigation={() => navigation.navigate('EquipementDetailScreen', {
                                description1 : "Nous sommes très heureux de pouvoir vous proposer cette nouvelle référence végétale",
                                description2: "100% protéine de pois fabriquée avec une matière première BIOLOGIQUE.",
                                description3: "Cette protéine convient aux végétariens et végétaliens.",
                                description4: "–\tPoudre de protéine végétale",
                                description5: "–\tSaveur cookies légère, très réussie",
                                description6: "–\tTeneur élevée en protéines",
                                description8: "–\tContient 76 grammes de protéines ( par 100g )",
                                description9: "–\tBiologique et sans additifs",
                                description10: "–\tConvient aux végan et végétaliens",
                                description11: "Code d'achat ( en remplacement du code promo ): YRZ7",
                                lien: "https://www.cf7.fr/tous-nos-produits-cf7/cf7-destock-cla-pure-90-softgel/",
                                prix : 39.90,
                                titre : 'PROTEINE BIO VEGGIE CF7',
                                image: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/produit%20nutrition%2FCF7_VeggieProteine%20copie.png?alt=media&token=d4f1c8d6-dfbb-41c4-9602-76e3ec5ab133"
                            })}
                            image="https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/produit%20nutrition%2FCF7_VeggieProteine%20copie.png?alt=media&token=d4f1c8d6-dfbb-41c4-9602-76e3ec5ab133"
                            prix={39.90}
                            titre="PROTEINE BIO VEGGIE CF7"
                        />
                        <EquipementSportifCard
                            handleNavigation={() => navigation.navigate('EquipementDetailScreen', {
                                description1 : "Une formule unique, un conditionnement de 180 gélules – Exclusivité CF7 sport Nutrition.",
                                description2: "Ce complément aliment est pensé et développé dans un seul but, apportez valeur et satisfaction.\n" +
                                    "Nous savons que la rétention d'eau est un problème au quotidien, le travail assis, la stagnation dans positions debout et de nombreux facteurs créer la rétention d'eau. Plusieurs caractéristiques techniques rendent notre complément alimentaire R77 brûleur – Drainer très performant.\n",
                                description3: "Ce complément dispose de capsules 100% végétales et convient aux végétariens. ( Végan )\n" +
                                    "Sa composition est une véritable DOUBLE ACTION, brûleur de graisse avec une action diurétique naturel !\n",
                                description4: "Composition R77 Brûleur – Drainer :",
                                description5: "–\tGarcinia cambogia : Réduis le stockage des graisses (régulation des sucres), favorise le déstockage.",
                                description6: "–\tBearberry : Chasse et combat la rétention d'eau, puissant antiseptique naturel",
                                description7: "–\tGuarana : Propriété diurétique, stimulant, anti-fatigue",
                                description8: "–\tPissenlit : Propriété diurétique naturelle",
                                description9: "–\tL-Carnitine : Utilise les graisses sous forme d'énergie durant les efforts",
                                description10: "–\tCaféine : Bruleur de graisse, augmente l'énergie et la concentration",
                                description11: "–\tPoudre de feuilles de Persil : Action diurétique naturelle",
                                description12: "–\tPicolinate de chrome : Régule l'envie de sucre, favorise la perte de poids ( réducteur d'appétit )",
                                description13: "–\tNoix de Kola : Vertus stimulantes, augmente l'énergie",
                                description14: "–\tJuniper Berry : Propriétés anti-infectieux et antiseptiques",
                                description15: "Code d'achat ( en remplacement du code promo ): YRZ7",
                                lien : 'https://www.cf7.fr/nutrition/bruleur-de-graisse-selection-multimarques/r77-bruleur-de-graisse-action-diuretique-naturelle/',
                                prix : 49.90,
                                titre : 'R77 DRAINEUR',
                                image: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/produit%20nutrition%2F3d_R77_Bruleur_copie%5B1%5D.png?alt=media&token=350c8366-1792-4677-8988-730c39e542e3"
                            })}
                            image="https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/produit%20nutrition%2F3d_R77_Bruleur_copie%5B1%5D.png?alt=media&token=350c8366-1792-4677-8988-730c39e542e3"
                            prix={49.90}
                            titre="R77 DRAINEUR"
                        />
                    </View>

                </ScrollView>

            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: "center"
    },
    container: {
        flex: 1,
    },
    recetteCard: {
        width: windowWidth/2.5,
        backgroundColor: 'white',
        borderColor: 'lightgrey',
        borderWidth: 5,
        height: 150,
        padding: '4%'
    },
    scrollView: {
        flex: 1,
    },
    imageRidge: {
        width: '90%',
        padding: 5,
        height: 140,
        marginBottom: 20,
        alignSelf: 'center'
    },
    imageRidgeContainer: {
        backgroundColor: 'white',
        width: windowWidth/1.1,
        paddingTop: '10%',
        paddingBottom: '2%',
        paddingHorizontal: '2%',
        alignSelf: 'center',
        marginBottom: '5%'
    },
    abonnementFreeText: {
        fontSize: 20,
        color: 'black',
        textAlign: 'center',
        marginTop: 25
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    inscriptionBigText: {
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
        marginBottom: 30
    },
    product: {
        color: 'white',
        textAlign: 'center'
    }

})
export default NutritionSportiveScreen;
