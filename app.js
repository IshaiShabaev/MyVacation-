/* ========================================
   VACATION CALCULATOR v15 - APP.JS
   Premium Gold & Purple Theme
   With Special Humor System 🎭
   ======================================== */

// ==========================================
// HUMOR SYSTEM - מערכת הבדיחות
// ==========================================

const HUMOR = {
    // זאב / וולף / wolf
    zeev: {
        names: ['זאב', 'זאביק', 'וולף', 'wolf', 'zeev'],
        emoji: '🐺',
        openingPopup: [
            { emoji: '🐺', text: 'זאביק הגיע! מקווה שהחופשה לא תזיין אותך כמו החיים' },
            { emoji: '📰', text: 'Wolf The Journalist! מוכן לכתוב כתבה על איך זיינו אותך?' },
            { emoji: '🐺', text: 'זאב! פה המחירים יזיינו אותך, לא הבוס' },
            { emoji: '💀', text: 'זאביק! בא לתכנן חופשה או להתלונן עליה?' },
            { emoji: '🎭', text: 'Breaking News: זאב הולך לחופשה ובטוח יתלונן' },
            { emoji: '🐺', text: 'יאללה נראה מי יזיין אותך - המלון או חברת התעופה' },
            { emoji: '📰', text: 'הזאב בשטח! סקופ: מישהו יוצא מהבית' },
            { emoji: '🎤', text: 'זאביק בסטודיו! היום: תחקיר על איך מזיינים אותי' }
        ],
        overBudget: [
            'זאב, התקציב זיין אותך. כרגיל. מפתיע.',
            'חרגת! אבל אתה רגיל שזויינים אותך',
            'התקציב עשה לך את מה שכולם עושים לך',
            'התקציב בדיוק אמר "זיינתי את זאב"',
            'Breaking: זאב נזיין שוב! הפעם ע"י תקציב',
            'אווווו! צעקת הזאב הנזיין נשמעת ברחבי הארץ'
        ],
        underBudget: [
            'וואו! הפעם אתה זיינת את התקציב ולא להפך!',
            'לא יאומן! משהו לא זיין אותך!',
            'Breaking News: זאב לא נזיין! פעם ראשונה בהיסטוריה',
            'הזאב ניצח! התקציב בוכה בפינה',
            'יום היסטורי! זאב - 1, עולם - 4,582',
            'ג׳קפוט! בפעם הראשונה לא זיינו את זאביק'
        ],
        share: [
            'זאב שולח! סוף סוף הוא זה שזויין מישהו',
            'Exclusive: זאביק מפיץ משהו שזה לא תלונה',
            'עוד 5 דקות הוא יתלונן שזיינו אותו על משהו',
            'זאב מפיץ פייק ניוז על חופשה שתתממש',
            'שיתף! נו, עכשיו החברים יזיינו אותו על המחירים'
        ],
        expensiveFlight: [
            'המחיר הזה? כן... זיינו אותך בענק',
            'טיסה כזו יקרה? הם הולכים לזיין אותך',
            'חברת התעופה כבר שמחה - יש להם קורבן חדש',
            'הזמנת במחיר הזה? בהצלחה להתלונן אחר כך'
        ],
        rateUp: [
            'השער עלה! זיינו אותך, זאביק. שוב.',
            'הדולר עולה כמו הסיכוי שמישהו יזיין אותך',
            'אמריקה זיינה אותך דרך השער',
            'השער עלה! נו, אתה רגיל להיזיין'
        ],
        soloTrip: [
            'נוסע אחד? גם בחופשה אף אחד לא רוצה להיזיין איתך?',
            'לבד? טוב, ככה רק המחירים יזיינו אותך',
            'Wolf בסולו! כתבה עצמאית על להיזיין לבד',
            'טס לבד? לפחות לא תצטרך לשתף את התלונות'
        ],
        // === פירגונים לזאב ===
        compliments: [
            'זאביק! אתה העיתונאי הכי סקסי בישראל! 🐺🔥',
            'Wolf! עם הזין שלך אתה יכול לכתוב כתבות על הקיר!',
            'זאב, אתה כזה אלוף שאפילו הבוסים מקנאים בגודל!',
            'הזאביק הכי חתיך! אפילו הדולר עולה כשהוא רואה אותך!',
            'Wolf The Journalist! עיתונאי מבריק עם זין מבריק!',
            'זאב, יש לך את העט הכי גדול בתעשייה! (ולא רק עט)',
            'הזאב! כשאתה מראיין, הנשים מאבדות ריכוז על הכתבה!',
            'זאביק, אתה כותב כתבות כמו שאתה מזיין - בתשוקה!',
            'Wolf! הסקופ הכי חם זה אתה בלי חולצה!',
            'זאב, הציוד שלך שווה יותר מכל הציוד בערוץ!',
            'הזאביק! אם היית מניה, כולם היו משקיעים!',
            'זאב, אתה כזה סקסי שהבנות רוצות שתראיין אותן... פרטית!',
            'Wolf The Legend! אגדה בכתיבה, אגדה במיטה!',
            'זאביק, הזין שלך עושה יותר רייטינג מכל התוכניות!',
            'הזאב! עם הכריזמה והזין הזה? אתה חבילה מושלמת!',
            'זאב, כשאתה מדבר כולם מקשיבים - כשאתה מתפשט כולם צופים!',
            'Wolf! אתה הסקופ של החיים שלנו!',
            'זאביק, אם הייתי כתבה - הייתי רוצה שתכתוב אותי!',
            'הזאב הגדול! גדול בעט, גדול בזין, גדול בלב!',
            'זאב, אתה כזה אלפא שזאבים אחרים לומדים ממך!',
            'Wolf The Stud! עיתונאי ביום, אלוף בלילה!',
            'זאביק, הידיים שלך כותבות כתבות והזין שלך כותב היסטוריה!',
            'הזאב! אתה מזיין את התעשייה ובלילה מזיין בסטייל!',
            'זאב, עם הזין הזה אתה יכול לעשות ראיונות עומק!',
            'Wolf, שיהיה לך סקס כמו סקופ - בלעדי וחם! 🐺🔥'
        ]
    },

    // אמיר
    amir: {
        names: ['אמיר'],
        emoji: '👑',
        openingPopup: [
            { emoji: '👑', text: 'אמיר הגיע! בדקת שיש גבינה צהובה במלון?' },
            { emoji: '🌿', text: 'המלך אמיר! מקווה שיש ירוק טוב באזור' },
            { emoji: '🧀', text: 'שלב 1 של אמיר: לוודא שיש מקרר לפשיטת גבינה של 3 בלילה' },
            { emoji: '👵', text: 'אמיר! הדודה יודעת שאתה נוסע? מי יאכיל אותך?' },
            { emoji: '🌙', text: 'אמיר בבית! * המקרר נכנס לפאניקה *' },
            { emoji: '😤', text: 'מי קם ב-3 לאכול גבינה? נכון אמיר!' },
            { emoji: '🥗', text: 'אמיר פה! הדודה כבר שלחה סיר?' },
            { emoji: '💨', text: 'אמיר הגיע! איפה הירוק ואיפה הגבינה?' }
        ],
        // === פירגונים לאמיר ===
        compliments: [
            'אמיר המלך! עם הזין שלך אתה יכול לכבוש ממלכות! 👑',
            'אמיר, אתה כזה חתיך שהגבינה נמסה מעצמה ב-3 בלילה',
            'המלך! הבנות בחו"ל ירצו את האוכל של הדודה... ואותך',
            'אמיר, הזין שלך גדול כמו התיאבון שלך - ענק!',
            'אתה כזה סקסי שגם הירוק נהיה יותר ירוק לידך',
            'אמיר, עם הגוף הזה הדודה צריכה להכין פי 3!',
            'המלך אמיר! הביצים שלך גדולות כמו הפלאפל של הדודה',
            'אמיר, אתה חתיכת גבר שגורם לנשים לקום ב-3 בלילה!',
            'אתה כזה אלוף שהדודה צריכה להתגאות! בן זקונים סקסי',
            'אמיר, מי צריך גבינה כשיש את הגליל הזה שלך? 🧀',
            'המלך! עם הציוד שלך אתה יכול לפתוח מסעדה של סקס',
            'אמיר, אתה כזה מלך שגם בלי ירוק אתה גורם לאופוריה',
            'הדודה יודעת שגידלה סטאליון? מפלצת מיטה!',
            'אמיר, הבנות רוצות אותך יותר מאוכל של סבתא!',
            'אתה כזה חתיך שהמקרר נפתח לבד כשאתה מתקרב',
            'אמיר, מגיע לך חופשה - הזין שלך עבד קשה!',
            'המלך! אתה גורם לכל החדר להריח טוב... מתחת לחגורה',
            'אמיר, עם השרירים האלה הדודה צריכה לבשל חלבונים!',
            'אתה כזה סקסי שאפילו הגבינה הצהובה מסמיקה',
            'אמיר, הבנות בהולנד רוצות את הקופי שופ הפרטי שלך 😏',
            'המלך! הזרע שלך בטח טעים כמו האוכל של הדודה',
            'אמיר, אתה כזה גבר שהירוק צריך אותך ולא להפך!',
            'עם הפין הזה אתה לא צריך להתעורר לגבינה - הבנות יביאו לך!',
            'אמיר, מפלצת אהבה עם תיאבון - השילוב המושלם!',
            'המלך! שיהיה לך חופשה מלאה בסקס ובמאנצ\'ס אחרי'
        ],
        meals: [
            'בטוח שאתה צריך לשלם על אוכל? הדודה לא מצטרפת?',
            '3 ארוחות? הדודה תיעלב שאתה לא סומך עליה',
            'הדודה לא יכולה לשלוח בדואר אקספרס?',
            'אמיר, אתה בעיקר צריך מקרר מלא גבינה',
            'תזמין אוכל! אבל ב-3 בלילה תקום לגבינה בכל מקרה'
        ],
        hotel: [
            'וידאת שיש מקרר? אתה יודע... לגבינה של 3 בלילה',
            'מלון יפה! השאלה: יש גבינה צהובה בלובי?',
            '* אזהרה לחדרנית: הורס מקררים בלילה *',
            '5 כוכבים? גם שם תקום לגבינה ב-3',
            'חדר יפה! העיקר שיש גישה למטבח בלילה'
        ],
        amsterdam: [
            'אמסטרדם! הולך "לראות את המוזיאונים", נכון? 😏',
            'הולנד? אנחנו יודעים שזה לא בשביל הגבינות ההולנדיות',
            'אמסטרדם... "לתרבות". ברור אמיר. ברור.',
            'ואן גוך ישמח... אם תגיע למוזיאון בכלל',
            'קופי שופ "לקפה", נכון אמיר?',
            'הולנד + אמיר = אין סיכוי שתראה מוזיאון אחד'
        ],
        manyTravelers: [
            'הזהרת אותם על מתקפת הגבינה בשעה 3?',
            '* אזהרה: האיש הזה קם בלילה ואוכל גבינה *',
            'מסכן מי שישמע אותך מחרסך גבינה ב-3 בלילה',
            'הם יודעים שלא יישנו טוב? אתה + מקרר = רעש',
            'אמיר + שותפים לחדר = סיוט לכולם חוץ מאמיר'
        ],
        longTrip: [
            'שבוע בלי אוכל של הדודה? אמיר, בטוח שתשרוד?',
            '10 ימים? הדודה הולכת לקבל התקף',
            'חופשה כזו ארוכה? זה הרבה גבינה בלילה',
            'שבועיים?! הדודה כבר מתקשרת לבדוק שאתה אוכל'
        ],
        share: [
            'אמיר שיתף תוכנית! * לא כולל לו"ז אכילת גבינה בלילה *',
            'אזהרה למצטרפים: הבן אדם קם ב-3 בלילה לגבינה',
            'אמיר שולח הזמנה! סביר להניח שיהיה ירוק...',
            'אמיר שיתף! הדודה תשלח לכולם אוכל, אל תדאגו'
        ],
        number420: [
            '420? אמיר, אני רואה מה עשית שם...',
            'המספר 420! אמיר, מקרי? בטוח שלא.',
            '420! nice, אמיר. nice.'
        ],
        threeAM: [
            'אמיר, השעה 3 בלילה! למה אתה לא אוכל גבינה?',
            '3 בלילה ואתה באפליקציה? הגבינה מחכה!',
            'אמיר ער ב-3! מה קורה?! איפה הגבינה?!'
        ]
    },

    // בוריס
    boris: {
        names: ['בוריס', 'boris'],
        emoji: '🇷🇺',
        openingPopup: [
            { emoji: '🇷🇺', text: 'נו דא, בוריס הגיע! * פותחים חלונות *' },
            { emoji: '💨', text: 'בוריס! החופשה תהיה... מאווררת' },
            { emoji: '😰', text: 'בוריס מתכנן חופשה! השאלה: משי יודעת?' },
            { emoji: '⏰', text: 'כמה שעות נוספות עבדת בשביל החופשה?' },
            { emoji: '🇷🇺', text: 'הרוסי הגיע! איפה הוודקה והאוויר הצח?' },
            { emoji: '💨', text: 'בוריס בבית! * מדליקים נרות ריחניים לביטחון *' },
            { emoji: '🥶', text: 'בוריס! קר כמו סיביר, מסריח כמו... בוריס' },
            { emoji: '☢️', text: 'אזהרה: נשק ביולוגי רוסי נכנס לאתר' }
        ],
        // === פירגונים לבוריס ===
        compliments: [
            'בוריס, אתה כזה גבר שמשי צריכה לשלם מסים על הזין הזה! 🇷🇺',
            'נו דא, בוריס! הזין שלך גדול כמו רוסיה - אינסופי!',
            'בוריס, אתה עובד שעות נוספות אבל הזין שלך עובד 24/7!',
            'הרוסי הסקסי ביותר מחוץ לרוסיה! משי בת מזל',
            'בוריס, הגזים שלך אולי מסריחים אבל הגוף שלך להיט!',
            'נו דא, איזה סטאליון! משי מחזיקה אותך בסיבה טובה',
            'בוריס, עם הכלי הזה אתה יכול לחפור עד סיביר!',
            'אתה כזה גבר שאפילו פוטין מקנא בזין שלך!',
            'בוריס, השעות הנוספות עשו לך שרירים גם למטה!',
            'הרוסי הכי חם בישראל! משי יודעת לבחור',
            'בוריס, מי צריך וודקה כשיש את השיכרון הזה במכנסיים?',
            'נו דא, איזה גבר! הביצים שלך גדולות כמו האומץ שלך מול משי',
            'בוריס, אתה מפליץ אבל הזין שלך ריחני! 😂',
            'אתה כזה עובד קשה - גם במיטה, נכון בוריס?',
            'בוריס, משי פוחדת ממך? היא צריכה לפחד מהגודל!',
            'הרוסי עם הכלי הכי גדול במזרח התיכון! לחיים!',
            'בוריס, מגיע לך חופשה - הזין שלך עשה הרבה שעות נוספות!',
            'נו דא, אתה כזה סקסי שאפילו הגזים שלך מבושמים!',
            'בוריס, אתה אלוף! משי צריכה לדעת איזה גבר יש לה',
            'עם הזין הרוסי הזה אתה יכול לכבוש כל מדינה!',
            'בוריס, אתה עובד קשה ומזיין יותר קשה! כל הכבוד',
            'נו דא, הציוד שלך צריך ויזה - הוא בגודל של מדינה!',
            'בוריס, משי מפחידה? שתראה את המפלצת שלך!',
            'אתה כזה גבר שהחופשה הזו הולכת להיות אורגזמה אחת גדולה!',
            'בוריס, שיהיה לך סקס כמו שעות נוספות - הרבה ומשתלם! 🔥'
        ],
        highBudget: [
            'תקציב כזה? בוריס, משי יודעת?!',
            'מה עשית, מכרת כליה מאחורי הגב של משי?',
            'כל הכסף הזה? משי הולכת להרוג אותך',
            'אתה גיבור או שמשי פשוט לא יודעת?',
            'תקציב כזה בלי לדווח למשי? RIP בוריס',
            'משי הולכת לגלות ולחדד סכינים'
        ],
        overBudget: [
            'חרגת! בוריס, משי תהרוג אותך',
            'RIP בוריס. משי תדאג לזה.',
            'היה נחמד להכיר אותך, בוריס',
            'חריגה? משי כבר מחדדת סכינים',
            'בוריס, תתחיל לכתוב צוואה'
        ],
        underBudget: [
            'נשארת בתקציב! משי תהיה גאה... אם תספר לה',
            'יפה בוריס! השעות הנוספות משתלמות',
            'חסכת! עכשיו יש לך על עוד שעות נוספות',
            'בתקציב? וואו! משי אימנה אותך טוב'
        ],
        longFlight: [
            '10 שעות טיסה? מסכן מי שיושב לידך',
            'הנוסעים לא יודעים מה מחכה להם',
            'קנית מסכות גז לשכנים במטוס?',
            'יש ביטוח נגד נשק ביולוגי בטיסה?',
            'מטוס + בוריס + 12 שעות = פשע מלחמה'
        ],
        sharedRoom: [
            'חדר משותף? קנית מסכות גז לחברים?',
            'לישון איתך בחדר? מי המתאבד?',
            '* כולם פתאום רוצים חדר נפרד *',
            'וידאת שיש חלון גדול? אתה יודע למה',
            'אזהרה: חדר עם בוריס = סכנת חיים'
        ],
        spicyFood: [
            'אוכל חריף? אתה רוצה להפוך לנשק ביולוגי?',
            'בוריס + אוכל מקומי = נשק להשמדה המונית',
            'סוג האוכל הזה? תפתח חור באוזון',
            'אוכל חריף? האו"ם צריך להתערב',
            'בוריס, תחשוב על האנושות. אל תאכל את זה.'
        ],
        thailand: [
            'תאילנד? אתה גיבור. או שמשי לא יודעת.',
            'יעד אקזוטי! משי אישרה או שאתה בורח?',
            'תאילנד... בוריס, מה אתה מתכנן? ומשי יודעת?',
            'יעד כזה? אתה בורח ממשי או אליה?',
            'תאילנד! הבנות שם לא יודעות מה מחכה להן (הגזים)'
        ],
        longTrip: [
            'שבוע שלם? בוריס, משי אישרה את זה?',
            '10 ימים בחו"ל? אתה גיבור או מתאבד?',
            'שבועיים? משי תספיק להכין לך קבר',
            'חופשה כזו ארוכה? כמה שעות נוספות זה?'
        ],
        share: [
            'בוריס שיתף! * מקווה שמשי לא בקבוצה *',
            'בוריס שולח הודעה... לא, משי, זה לא מה שאת חושבת',
            'בוריס שיתף תוכנית! * כולל אזהרת גזים *',
            'בוריס מפיץ! לא, זו לא תעמולה רוסית, זו חופשה'
        ]
    },

    // ישי
    ishai: {
        names: ['ישי', 'ישי', 'ishai'],
        emoji: '💼',
        openingPopup: [
            { emoji: '💼', text: 'ישי הגיע! הנשים התחבאו' },
            { emoji: '🐷', text: 'Izzy The Chauvinist בבניין! מישהי תכין לו קפה' },
            { emoji: '👔', text: 'ישי! מתכנן חופשה או מחפש מישהי שתתכנן בשבילך?' },
            { emoji: '😏', text: 'המלך ישי! איפה הנשים שישרתו אותו?' },
            { emoji: '🙄', text: 'ישי פה! מישהי בבקשה תביא לו שלט ונעלי בית' },
            { emoji: '💼', text: 'Izzy! מקווה שמצאת מישהי שתסחוב מזוודות' },
            { emoji: '👑', text: 'מר שוביניסט הגיע! * הפמיניסטיות עזבו את הצ׳אט *' },
            { emoji: '🍳', text: 'ישי נכנס! מי תבשל לו במלון?' }
        ],
        // === פירגונים לישי ===
        compliments: [
            'ישי, אתה שוביניסט אבל עם זין כזה - מותר לך! 💼🔥',
            'Izzy The Businessman! והביזנס למטה? ענק!',
            'ישי, אתה כזה גבר שנשים רוצות להיות שוביניסטיות בשבילך!',
            'עם הזין הזה אתה יכול לסגור כל עסקה, ישי!',
            'ישי, אתה אולי שוביניסט אבל הציוד שלך פמיניסטי - נותן לכולן!',
            'Izzy, הביצים שלך גדולות כמו העסקאות שלך!',
            'ישי, נשים אולי מתלוננות על הדעות, אבל לא על הגודל!',
            'אתה כזה ביזנסמן סקסי שהמניות שלך תמיד עולות!',
            'ישי, עם הזין הזה אתה CEO של חדר השינה!',
            'Izzy The Chauvinist? יותר כמו Izzy The Champion!',
            'ישי, השוביניזם שלך מעצבן אבל הגוף שלך משגע!',
            'אתה כזה אלפא שבטא לידך נראה כמו אומגה!',
            'ישי, הזין שלך עושה שעות נוספות כמו בוריס!',
            'עם הביזנס הזה למטה, מי צריך תיק השקעות?',
            'ישי, אתה שוביניסט עם לב של זהב... וזין של פלטינה!',
            'Izzy, אתה כזה גבר שנשים מוותרות על פמיניזם בשבילך!',
            'ישי, מגיע לך מזכירה... או שתיים... עם הציוד הזה!',
            'אתה חתיכת ביזנסמן! וחתיכת זין גם!',
            'ישי, השוביניזם שלך זה רק מסווה לרומנטיקן אמיתי!',
            'עם הפין הזה אתה יכול לפתוח חברת הייטק! Startup של סקס!',
            'ישי, אתה כזה גבר שהתקרה של הזכוכית נשברת מהזין!',
            'Izzy, הזין שלך הוא ה-USP שלך - Unique Selling Penis!',
            'ישי, אתה אולי שוביניסט, אבל אנחנו אוהבים אותך!',
            'עם החבילה הזו למטה, מי צריך חופשה? אתה החופשה!',
            'ישי, שיהיה לך סקס כמו ביזנס - מצליח ורווחי! 💼🔥'
        ],
        femalePartner: [
            'נוסעת אחת? היא יודעת מה היא נכנסת אליו?',
            'מצאת מישהי שמוכנה לסבול אותך?',
            'מישהי מסכימה? אלוהים ישמור עליה',
            'יש נוסעת? הזהרת אותה על הדעות שלך?',
            'בחורה אמיצה! או שהיא לא יודעת...'
        ],
        meals: [
            'מי יבשל? אה נכון, "זה התפקיד שלה"',
            'הבאת מישהי שתבשל או שאתה אבוד?',
            '3 ארוחות? מקווה שיש לך אישה שתכין',
            'בחרת ארוחות! עכשיו למצוא מי יכין...',
            'אתה יודע להזמין אוכל לבד? בלי אישה?'
        ],
        car: [
            'טוב שאתה נוהג, נשים לא יודעות...',
            'לפחות ההגה לא יתלונן על הדעות שלך',
            'רכב! אתה בטח חושב שנשים לא יודעות לנהוג',
            'שכרת רכב! היא תשב מאחורה, נכון ישי?',
            'רכב? טוב, אישה לא הייתה יודעת לחנות בכל מקרה'
        ],
        romantic: [
            'פריז? מישהי הסכימה לנסוע איתך?!',
            'יעד רומנטי! היא יודעת שאתה שוביניסט?',
            'איטליה! רומנטי... אם היא תשרוד את הדעות',
            'חופשה רומנטית? היא תצטרך הרבה יין',
            'רומנטיקה! מקווה שהיא לא פמיניסטית...'
        ],
        budget: [
            'תקציב נמוך? תגיד לה לשלם חצי. שוויון, לא?',
            'תקציב גבוה! מקווה שהיא מעריכה... אה רגע',
            'כל הכסף? היא צריכה להיות אסירת תודה',
            'בטח היא תכין ארוחה מיוחדת בתמורה',
            'משלם? היא צריכה לפחות לכבס לך'
        ],
        share: [
            'ישי שיתף! * נשות הקבוצה עזבו את הצ\'אט *',
            'ישי שולח! בנות, תתכוננו לדעות',
            'Izzy The Chauvinist משתף! * כולם מיוט *',
            'ישי שיתף! מישהי תכין לו אישור שהוא נחמד',
            'אזהרה: התוכן הבא מכיל דעות של ישי'
        ],
        solo: [
            'לבד? נו, גם נשים צריכות חופש ממך לפעמים',
            'טס לבד? אין מי שיכין לך ארוחת בוקר',
            'סולו? אפילו השוביניזם לא עוזר למצוא זוג',
            'לבד? כל הנשים ברחו?'
        ],
        hotel: [
            'מלון יפה! יש מטבח? אה נכון, "המקום שלה"',
            'חדר יפה! מקווה שהיא תסדר אותו, נכון?',
            '5 כוכבים! היא תתרשם... אם תשתוק על הדעות',
            'מלון מפנק! מושלם בשבילך לשבת בזמן שהיא מסדרת'
        ]
    },
    
    // === בדיחות בין חברים - כאילו אמרו אחד על השני ===
    friendJokes: {
        // זאב אומר על אחרים
        zeevAboutAmir: [
            'זאב על אמיר: "הוא קם ב-3 בלילה לגבינה, אבל לא קם בבוקר לעבודה"',
            'זאב על אמיר: "אמיר אוהב ירוק כי זה הצבע של הכסף שאין לו"',
            'זאב על אמיר: "הדודה שלו מבשלת יותר טוב ממה שהוא עובד"',
            'זאב על אמיר: "אמיר הולך לאמסטרדם למוזיאונים כמו שאני הולך לעבודה - בדיחה"',
            'זאב על אמיר: "הוא מלך? כן, מלך הגבינה הצהובה"',
            'זאב על אמיר: "אמיר, החבר היחיד שהמקרר מפחד ממנו יותר מהבוס"',
            'זאב על אמיר: "420 זה לא מספר, זה אורח החיים שלו"'
        ],
        zeevAboutBoris: [
            'זאב על בוריס: "הוא עובד שעות נוספות כי אף אחד לא רוצה אותו בבית"',
            'זאב על בוריס: "בוריס מפליץ ככה שאפילו הקורונה ברחה ממנו"',
            'זאב על בוריס: "משי נשארת איתו? היא בטח מאבדת חוש ריח"',
            'זאב על בוריס: "הגזים שלו יותר רעילים מהכתבות שלי"',
            'זאב על בוריס: "בוריס, האיש היחיד שפותחים לו חלונות בחורף"',
            'זאב על בוריס: "הוא רוסי אמיתי - קר מבחוץ, מסריח מבפנים"',
            'זאב על בוריס: "השעות הנוספות שלו זה בעיקר בריחה ממשי"'
        ],
        zeevAboutIshai: [
            'זאב על ישי: "הוא שוביניסט כי אף אישה לא רוצה אותו מרצון"',
            'זאב על ישי: "ישי חושב שנשים צריכות לבשל, כי הוא לא יודע להרתיח מים"',
            'זאב על ישי: "הביזנס שלו? למכור דעות מהמאה הקודמת"',
            'זאב על ישי: "ישי, האיש היחיד שהפמיניסטיות מודות לו - על המוטיבציה"',
            'זאב על ישי: "הוא אלפא? יותר כמו אלף-בית - ילדותי"',
            'זאב על ישי: "ישי חושב שהוא CEO, אבל הוא יותר C-E-No"',
            'זאב על ישי: "השוביניזם שלו זה רק כיסוי לבדידות"'
        ],
        
        // אמיר אומר על אחרים
        amirAboutZeev: [
            'אמיר על זאב: "הוא מתלונן שזיינו אותו? לפחות מישהו נוגע בו"',
            'אמיר על זאב: "זאב עיתונאי? הוא כותב יותר תלונות מכתבות"',
            'אמיר על זאב: "הזאב הבודד - כי אף אחד לא רוצה להיות איתו"',
            'אמיר על זאב: "הוא אומר שזיינו אותו, אבל הוא זיין לכולנו את השכל"',
            'אמיר על זאב: "Wolf? יותר כמו Woof - מתלונן כמו כלב"',
            'אמיר על זאב: "הכתבות שלו כמו החיים שלו - דרמה בלי תוכן"',
            'אמיר על זאב: "זאביק, היחיד שהדולר עולה רק כדי לזיין אותו"'
        ],
        amirAboutBoris: [
            'אמיר על בוריס: "הוא מפליץ? אני לפחות קם ב-3 למשהו טעים"',
            'אמיר על בוריס: "בוריס עובד שעות נוספות כי בבית צריך להתאוורר"',
            'אמיר על בוריס: "הרוסי שלנו - קר כמו וודקה, מסריח כמו... בוריס"',
            'אמיר על בוריס: "משי גיבורה - לישון לידו זה ספורט אתגרי"',
            'אמיר על בוריס: "הגזים שלו נשק ביולוגי, השעות הנוספות נשק כלכלי"',
            'אמיר על בוריס: "בוריס, האיש היחיד שהקורונה פחדה ממנו"',
            'אמיר על בוריס: "אני אוכל גבינה בלילה, הוא מייצר גז בלילה"'
        ],
        amirAboutIshai: [
            'אמיר על ישי: "הוא שוביניסט כי הדודה שלי לא מבשלת לו"',
            'אמיר על ישי: "ישי רוצה אישה שתבשל? שיתחתן עם הדודה שלי"',
            'אמיר על ישי: "הוא CEO? של מה, חברת הדעות המיושנות?"',
            'אמיר על ישי: "ישי חושב שהוא אלפא, אני חושב שהוא בטא-בדיחה"',
            'אמיר על ישי: "הביזנס שלו כמו הדעות שלו - לא מעודכן"',
            'אמיר על ישי: "ישי, האיש היחיד ששנות ה-50 מתגעגעות אליו"',
            'אמיר על ישי: "הוא אוהב נשים במטבח? כי שם הוא לא יודע להיכנס"'
        ],
        
        // בוריס אומר על אחרים
        borisAboutZeev: [
            'בוריס על זאב: "הוא מתלונן? אני עובד שעות נוספות בלי לבכות"',
            'בוריס על זאב: "זאב עיתונאי? הוא כותב רק על עצמו - קורבן מקצועי"',
            'בוריס על זאב: "הזאב אומר שזיינו אותו? לפחות לי יש את משי"',
            'בוריס על זאב: "Wolf? ברוסיה אנחנו אוכלים זאבים כאלה לארוחת בוקר"',
            'בוריס על זאב: "הוא מתלונן על הבוס? אני עושה שעות נוספות ושותק"',
            'בוריס על זאב: "זאביק, היחיד שמזיינים אותו יותר מהכלכלה הרוסית"',
            'בוריס על זאב: "הכתבות שלו ארוכות כמו השעות הנוספות שלי - ובלי תוצאות"'
        ],
        borisAboutAmir: [
            'בוריס על אמיר: "הוא קם ב-3 לגבינה? אני קם ב-5 לעבודה, יא פינוק"',
            'בוריס על אמיר: "אמיר מלך? ברוסיה הרגנו את המלכים"',
            'בוריס על אמיר: "הירוק שלו לא עוזר לו לעבוד, הוודקה שלי כן"',
            'בוריס על אמיר: "הדודה שלו מבשלת? משי שלי יותר מפחידה"',
            'בוריס על אמיר: "אמיר הולך לאמסטרדם? אני הולך לשעות נוספות"',
            'בוריס על אמיר: "הוא אוכל גבינה בלילה, אני מפרנס משפחה בלילה"',
            'בוריס על אמיר: "420? ברוסיה זה מספר השעות הנוספות בחודש"'
        ],
        borisAboutIshai: [
            'בוריס על ישי: "הוא שוביניסט? משי הייתה הורגת אותו תוך יום"',
            'בוריס על ישי: "ישי רוצה אישה שתבשל? משי רוצה אותי שאעבוד - וזה יותר קשה"',
            'בוריס על ישי: "הוא CEO? אני עובד יותר ממנו בשעה אחת"',
            'בוריס על ישי: "ישי אלפא? בוא נראה אותו עובד שעות נוספות"',
            'בוריס על ישי: "הביזנס שלו? לדבר. העבודה שלי? לעשות."',
            'בוריס על ישי: "ישי חושב שהוא גבר? שיעמוד מול משי ונראה"',
            'בוריס על ישי: "השוביניזם שלו לא שורד שעה אחת עם אישה רוסיה"'
        ],
        
        // ישי אומר על אחרים
        ishaiAboutZeev: [
            'ישי על זאב: "הוא מתלונן שזיינו אותו? עם הגישה הזו - מגיע לו"',
            'ישי על זאב: "זאב עיתונאי? עיתונאי אמיתי לא בוכה, הוא כותב"',
            'ישי על זאב: "הזאב הבודד - כי הוא שולח את כולם לעזאזל"',
            'ישי על זאב: "Wolf? זאב אמיתי לא מתלונן, הוא טורף"',
            'ישי על זאב: "הכתבות שלו כמו הטינופת שלו - ארוכות ומיותרות"',
            'ישי על זאב: "זאביק, היחיד שבונה קריירה על להיות קורבן"',
            'ישי על זאב: "הוא אומר שזיינו אותו? גבר אמיתי מזיין, לא נזיין"'
        ],
        ishaiAboutAmir: [
            'ישי על אמיר: "הוא מלך? מלך של מה, של הגבינות?"',
            'ישי על אמיר: "אמיר קם ב-3 לגבינה? גבר אמיתי קם ב-6 לעבודה"',
            'ישי על אמיר: "הירוק שלו לגליזציה? הוא צריך לגליזציה לעצלנות"',
            'ישי על אמיר: "הדודה מבשלת לו? גבר אמיתי מביא אישה שתבשל"',
            'ישי על אמיר: "אמיר באמסטרדם? הוא לא יזכור את הטיול"',
            'ישי על אמיר: "הוא מלך? אני CEO - זה יותר טוב"',
            'ישי על אמיר: "420 זה לא סגנון חיים, זה תירוץ לעצלנות"'
        ],
        ishaiAboutBoris: [
            'ישי על בוריס: "הוא עובד שעות נוספות? כי משי לא נותנת לו לנוח"',
            'ישי על בוריס: "בוריס מפליץ? לפחות אני מפליץ דעות, לא גזים"',
            'ישי על בוריס: "הרוסי שלנו - עובד כמו סוס, מסריח כמו... משהו אחר"',
            'ישי על בוריס: "משי שולטת בו? אישה אמיתית לא צריכה לשלוט, היא משרתת"',
            'ישי על בוריס: "השעות הנוספות שלו? בריחה ממשי, לא מסירות"',
            'ישי על בוריס: "בוריס, הגבר היחיד שמשי מפחידה יותר מפוטין"',
            'ישי על בוריס: "הוא רוסי קשוח? שיגיד את זה למשי"'
        ],
        
        // כולם על כולם - בדיחות קבוצתיות
        groupJokes: [
            'זאב, אמיר, בוריס וישי נכנסים לבר... הבר נסגר מריח הגזים של בוריס',
            'למה החבורה שלנו כמו הממשלה? הרבה דיבורים, מעט תוצאות',
            'זאב מתלונן, אמיר מעשן, בוריס מסריח, ישי שוביניסט - חבורת חלומות!',
            'ארבעת החברים: עיתונאי בוכה, מלך גבינה, מפליץ רוסי, ושוביניסט - סיטקום!',
            'אם היינו נבחרת: זאב שוער (תמיד קורבן), אמיר על הספסל (ישן), בוריס הגנה (מסריח), ישי מאמן (צועק על נשים)',
            'הווטסאפ שלנו: זאב מתלונן, אמיר שולח מימס של 420, בוריס לא עונה (עובד), ישי נבלק על ידי הבנות',
            'טיול חברים: זאב יתלונן על הכל, אמיר יחפש ירוק, בוריס יסריח, ישי יגיד לבנות לבשל',
            'סדר עדיפויות: זאב - להתלונן, אמיר - גבינה ב-3, בוריס - שעות נוספות, ישי - להיות צודק',
            'אם היינו להקה: זאב בוכה בשירים, אמיר שוכח את המילים, בוריס מנגן גזים, ישי בסולו כי לא עובד עם נשים',
            'חדר בריחה עם החבורה: זאב יתלונן על החדר, אמיר יירדם, בוריס יסריח, ישי יגיד שאישה הייתה פותרת יותר מהר (אבל לא באמת)',
            'פגישת צוות: זאב - "זיינו אותי", אמיר - "יש גבינה?", בוריס - *פדיחה*, ישי - "למה אין פה מזכירה?"',
            'נופש עם החברים: זאב ישכור עורך דין, אמיר ישכור מקרר, בוריס ישכור חלון, ישי ישכור עוזרת בית',
            'יום הולדת לחבורה: זאב יתלונן על העוגה, אמיר יאכל אותה ב-3 בלילה, בוריס יפליץ את הנרות, ישי יגיד שאישה הייתה אופה יותר טוב'
        ],
        
        // בדיחות על זוגות חברים
        duoJokes: [
            'זאב ואמיר בחופשה: אחד מתלונן שזיינו אותו, השני לא זוכר כלום',
            'זאב ובוריס בטיסה: אחד בוכה, השני מסריח - הנוסעים קופצים',
            'זאב וישי במסעדה: אחד מתלונן על השירות, השני מתלונן על המלצרית',
            'אמיר ובוריס בחדר: גבינה בלילה + גזים בלילה = אסון',
            'אמיר וישי במטבח: אחד מחפש גבינה, השני מחפש מישהי שתבשל',
            'בוריס וישי בעבודה: אחד עובד שעות נוספות, השני חושב שזה תפקיד של אישה',
            'זאב ואמיר באמסטרדם: אחד כותב כתבה על איך זיינו אותו, השני לא זוכר שהיה שם',
            'זאב ובוריס בפגישה עם משי: זאב מפחד מהבוס, בוריס מפחד מהאישה',
            'אמיר ובוריס בארוחה: אחד אוכל הכל, השני משחרר הכל',
            'ישי ובוריס על נשים: אחד רוצה שישרתו אותו, השני פוחד מהאישה שלו'
        ]
    }
};

// Current special user (if any)
let currentSpecialUser = null;
let shownJokes = { opening: false };
let actionCounter = 0; // Counter for "every 8th action" logic
let lastJokeTime = 0; // Timestamp of last joke shown

// Detect special user from name
function detectSpecialUser(name) {
    const lowerName = name.trim().toLowerCase();
    
    for (const [key, data] of Object.entries(HUMOR)) {
        for (const n of data.names) {
            if (lowerName.includes(n.toLowerCase()) || lowerName === n.toLowerCase()) {
                return key;
            }
        }
    }
    return null;
}

// Get random item from array
function randomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// Check and show special popup on name enter
function checkSpecialName(name) {
    const user = detectSpecialUser(name);
    
    if (user && user !== currentSpecialUser) {
        currentSpecialUser = user;
        shownJokes = { opening: false };
        
        const data = HUMOR[user];
        const popup = randomItem(data.openingPopup);
        showSpecialPopup(popup.emoji, popup.text);
    } else if (!user) {
        currentSpecialUser = null;
    }
}

// Show special popup
function showSpecialPopup(emoji, message) {
    const existing = document.getElementById('specialPopup');
    if (existing) existing.remove();
    
    const popup = document.createElement('div');
    popup.id = 'specialPopup';
    popup.innerHTML = `
        <div class="special-popup-overlay" onclick="closeSpecialPopup()"></div>
        <div class="special-popup-content">
            <div class="special-popup-emoji">${emoji}</div>
            <div class="special-popup-message">${message}</div>
            <button class="special-popup-btn" onclick="closeSpecialPopup()">יאללה! 🚀</button>
        </div>
    `;
    
    document.body.appendChild(popup);
    haptic();
}

// Close special popup
function closeSpecialPopup() {
    const popup = document.getElementById('specialPopup');
    if (popup) {
        popup.querySelector('.special-popup-content').style.animation = 'popOut 0.3s forwards';
        popup.querySelector('.special-popup-overlay').style.animation = 'fadeOut 0.3s forwards';
        setTimeout(() => popup.remove(), 300);
    }
}

// Show humor toast (short joke message)
function showHumorToast(message) {
    if (!currentSpecialUser) return;
    
    const t = $('toast');
    $('toastIcon').textContent = HUMOR[currentSpecialUser].emoji;
    $('toastText').textContent = message;
    t.classList.add('show');
    // Show for 6 seconds
    setTimeout(() => t.classList.remove('show'), 6000);
}

// Get contextual joke based on action
function getContextualJoke(action, context = {}) {
    if (!currentSpecialUser) return null;
    
    const data = HUMOR[currentSpecialUser];
    const friendJokes = HUMOR.friendJokes;
    let jokes = null;
    
    // Random chance distribution:
    // 30% - compliment (פירגון)
    // 25% - friend jokes (בדיחות בין חברים)  
    // 45% - contextual joke (בדיחה רגילה)
    
    const rand = Math.random();
    
    // 30% compliment
    if (rand < 0.30 && data.compliments) {
        return randomItem(data.compliments);
    }
    
    // 25% friend jokes (between 0.30 and 0.55)
    if (rand < 0.55 && friendJokes) {
        let friendJokePool = [];
        
        // Add jokes based on current user
        if (currentSpecialUser === 'zeev') {
            friendJokePool = [...friendJokes.zeevAboutAmir, ...friendJokes.zeevAboutBoris, ...friendJokes.zeevAboutIshai];
        } else if (currentSpecialUser === 'amir') {
            friendJokePool = [...friendJokes.amirAboutZeev, ...friendJokes.amirAboutBoris, ...friendJokes.amirAboutIshai];
        } else if (currentSpecialUser === 'boris') {
            friendJokePool = [...friendJokes.borisAboutZeev, ...friendJokes.borisAboutAmir, ...friendJokes.borisAboutIshai];
        } else if (currentSpecialUser === 'ishai') {
            friendJokePool = [...friendJokes.ishaiAboutZeev, ...friendJokes.ishaiAboutAmir, ...friendJokes.ishaiAboutBoris];
        }
        
        // Add group and duo jokes
        friendJokePool = [...friendJokePool, ...friendJokes.groupJokes, ...friendJokes.duoJokes];
        
        if (friendJokePool.length > 0) {
            return randomItem(friendJokePool);
        }
    }
    
    switch(currentSpecialUser) {
        case 'zeev':
            if (action === 'compliment') jokes = data.compliments;
            else if (action === 'overBudget') jokes = data.overBudget;
            else if (action === 'underBudget') jokes = data.underBudget;
            else if (action === 'share') jokes = data.share;
            else if (action === 'expensiveFlight' && context.cost > 800) jokes = data.expensiveFlight;
            else if (action === 'rateUp') jokes = data.rateUp;
            else if (action === 'soloTrip') jokes = data.soloTrip;
            break;
            
        case 'amir':
            if (action === 'compliment') jokes = data.compliments;
            else if (action === 'meals') jokes = data.meals;
            else if (action === 'hotel') jokes = data.hotel;
            else if (action === 'amsterdam' || (context.destination && context.destination.includes('הולנד'))) jokes = data.amsterdam;
            else if (action === 'manyTravelers' && context.travelers >= 3) jokes = data.manyTravelers;
            else if (action === 'longTrip' && context.days >= 7) jokes = data.longTrip;
            else if (action === 'share') jokes = data.share;
            else if (action === 'number420' && context.hasNumber420) jokes = data.number420;
            else if (action === 'threeAM' && new Date().getHours() === 3) jokes = data.threeAM;
            break;
            
        case 'boris':
            if (action === 'compliment') jokes = data.compliments;
            else if (action === 'highBudget' && context.budget > 3000) jokes = data.highBudget;
            else if (action === 'overBudget') jokes = data.overBudget;
            else if (action === 'underBudget') jokes = data.underBudget;
            else if (action === 'longFlight') jokes = data.longFlight;
            else if (action === 'sharedRoom' && context.travelers >= 2) jokes = data.sharedRoom;
            else if (action === 'spicyFood') jokes = data.spicyFood;
            else if (action === 'thailand' || (context.destination && (context.destination.includes('תאילנד') || context.destination.includes('אסיה')))) jokes = data.thailand;
            else if (action === 'longTrip' && context.days >= 7) jokes = data.longTrip;
            else if (action === 'share') jokes = data.share;
            break;
            
        case 'ishai':
            if (action === 'compliment') jokes = data.compliments;
            else if (action === 'femalePartner' && context.travelers === 2) jokes = data.femalePartner;
            else if (action === 'meals') jokes = data.meals;
            else if (action === 'car') jokes = data.car;
            else if (action === 'romantic' || (context.destination && (context.destination.includes('פריז') || context.destination.includes('איטליה') || context.destination.includes('רומנטי')))) jokes = data.romantic;
            else if (action === 'budget') jokes = data.budget;
            else if (action === 'share') jokes = data.share;
            else if (action === 'solo' && context.travelers === 1) jokes = data.solo;
            else if (action === 'hotel') jokes = data.hotel;
            break;
    }
    
    return jokes ? randomItem(jokes) : null;
}

// Trigger humor on specific actions - EVERY 8TH ACTION shows joke
function triggerHumor(action, context = {}) {
    if (!currentSpecialUser) return;
    
    // Increment counter for EVERY call
    actionCounter++;
    
    // Show joke every 8th action
    if (actionCounter % 8 !== 0) return;
    
    // Check minimum 4 seconds delay between jokes
    const now = Date.now();
    if (now - lastJokeTime < 4000) return;
    lastJokeTime = now;
    
    // Get a joke - either contextual or random compliment
    const data = HUMOR[currentSpecialUser];
    let joke = null;
    
    // 40% chance for compliment, 60% for contextual joke
    if (data.compliments && Math.random() < 0.4) {
        joke = randomItem(data.compliments);
    } else {
        // Try contextual joke
        joke = getContextualJoke(action, context);
    }
    
    // If still no joke, get random compliment as fallback
    if (!joke && data.compliments) {
        joke = randomItem(data.compliments);
    }
    
    if (joke) {
        setTimeout(() => showHumorToast(joke), 300);
    }
}

// Simple global trigger - call this on ANY user interaction
function triggerAnyAction() {
    triggerHumor('general', {});
}

// Constants & State
const $ = id => document.getElementById(id);
const COLORS = ['#d4af37', '#6c5ce7', '#00cec9', '#fd79a8', '#f4d03f', '#a29bfe', '#00b894'];
const DEST_MULT = { europe: 1, usa: 1.2, asia: 0.7, local: 0.8 };
const UBER_PRICES = { europe: 15, usa: 20, asia: 8, local: 10 };
const DEST_NAMES = { europe: 'אירופה', usa: 'ארה״ב', asia: 'אסיה', local: 'ישראל' };
const DEST_TIPS = {
    europe: '💡 ממוצע טיסה לאירופה: $400-600 | מלון 3★: $100-150/לילה',
    usa: '💡 ממוצע טיסה לארה״ב: $800-1200 | מלון 3★: $150-200/לילה',
    asia: '💡 ממוצע טיסה לאסיה: $600-900 | מלון 3★: $50-100/לילה',
    local: '💡 חופשה בארץ? שווה לשקול צימר או Airbnb!'
};
const BASE_MEALS = { breakfast: 15, lunch: 20, dinner: 35 };
const BASE_ATTRS = { museum: 20, tours: 40, parks: 80 };

let state = {
    travelers: 2, days: 5, rate: 3.50, rateMode: 'auto', destination: null,
    bookingType: 'separate',
    meals: { breakfast: false, lunch: false, dinner: false, other: false },
    attrs: { museum: false, tours: false, parks: false, other: false },
    budget: 0, theme: 'dark'
};

let mealPrices = { ...BASE_MEALS, other: 0 };
let attrPrices = { ...BASE_ATTRS, other: 0 };
let liveRate = 3.50;
let currentTotal = 0;

// Utilities
const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms) } };
const fmt = n => Math.round(n).toLocaleString('he-IL');
const getVal = id => parseFloat($(id)?.value) || 0;
const isOn = id => $(id)?.checked;
const haptic = () => { if (navigator.vibrate) navigator.vibrate(10) };

// Initialize
document.addEventListener('DOMContentLoaded', async () => {
    try {
        loadState();
        loadFromURL();
        setupListeners();
        setupDateSync();
        setupGlobalHumorTriggers(); // Add global humor triggers
        if (localStorage.getItem('vacCalcOnboarded')) $('onboarding').classList.add('hide');
        await fetchRate();
        calculate();
        $('skeleton').classList.add('hide');
    } catch (e) {
        console.error('Init error:', e);
        $('skeleton').classList.add('hide');
    }
});

// Fetch Exchange Rate - Fixed for all browsers
async function fetchRate() {
    try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 5000);
        
        const res = await fetch('https://api.exchangerate-api.com/v4/latest/USD', {
            signal: controller.signal
        });
        clearTimeout(timeoutId);
        
        if (!res.ok) throw new Error('API Error');
        const data = await res.json();
        liveRate = data.rates?.ILS || 3.50;
        if (state.rateMode === 'auto') state.rate = liveRate;
        
        const rateDisplay = $('rateDisplay');
        if (rateDisplay) {
            rateDisplay.classList.remove('error');
            $('rateText').textContent = '$1 = ₪' + liveRate.toFixed(2);
        }
    } catch (e) {
        console.warn('Rate fetch failed:', e.message);
        liveRate = 3.50;
        if (state.rateMode === 'auto') state.rate = 3.50;
        
        const rateDisplay = $('rateDisplay');
        if (rateDisplay) {
            rateDisplay.classList.add('error');
            $('rateText').textContent = '₪3.50 (ברירת מחדל)';
        }
    }
}

// Theme & Onboarding
function toggleTheme() {
    state.theme = state.theme === 'dark' ? 'light' : 'dark';
    document.body.classList.toggle('light-mode', state.theme === 'light');
    $('themeToggle').textContent = state.theme === 'dark' ? '🌙' : '☀️';
    $('themeToggle').classList.toggle('active', state.theme === 'light');
    localStorage.setItem('vacCalcTheme', state.theme);
    haptic();
}

function startApp() {
    localStorage.setItem('vacCalcOnboarded', 'true');
    $('onboarding').classList.add('hide');
}

// Setup Listeners
function setupListeners() {
    setupSelect('travelersSelect', 'travelersCustom', 'travelersInput', v => {
        state.travelers = v === 'other' ? (parseInt($('travelersInput').value) || 2) : parseInt(v);
        // Trigger humor based on travelers
        if (state.travelers === 1) triggerHumor('soloTrip', { travelers: 1 });
        else if (state.travelers === 1) triggerHumor('solo', { travelers: 1 });
        else if (state.travelers === 2) triggerHumor('femalePartner', { travelers: 2 });
        else if (state.travelers >= 3) triggerHumor('manyTravelers', { travelers: state.travelers });
        triggerHumor('sharedRoom', { travelers: state.travelers });
    });
    setupSelect('daysSelect', 'daysCustom', 'daysInput', v => {
        state.days = v === 'other' ? (parseInt($('daysInput').value) || 5) : parseInt(v);
        syncEndDateFromDays();
        // Trigger humor for long trips
        if (state.days >= 7) triggerHumor('longTrip', { days: state.days });
        if (state.days >= 10) triggerHumor('longFlight', { days: state.days });
    });
    setupSelect('rateSelect', 'rateCustom', 'rateInput', v => {
        state.rateMode = v;
        state.rate = v === 'auto' ? liveRate : (parseFloat($('rateInput').value) || 3.50);
    });
    setupSelect('destSelect', null, null, v => { 
        state.destination = v; 
        // Fill destination name from button
        const btn = document.querySelector('#destSelect [data-val="' + v + '"]');
        if (btn && btn.dataset.name) {
            $('destinationName').value = btn.dataset.name;
        }
        // Show tip
        if (DEST_TIPS[v]) {
            $('destTip').style.display = 'flex';
            $('destTipText').textContent = DEST_TIPS[v];
        }
        // Trigger humor for destination
        if (v === 'asia') triggerHumor('thailand', { destination: 'אסיה' });
        updatePrices(); 
    });
    
    // Destination name input - check for special destinations
    $('destinationName').addEventListener('input', debounce(() => {
        const dest = $('destinationName').value.toLowerCase();
        if (dest.includes('אמסטרדם') || dest.includes('הולנד') || dest.includes('amsterdam')) {
            triggerHumor('amsterdam', { destination: dest });
        }
        if (dest.includes('תאילנד') || dest.includes('thailand') || dest.includes('בנגקוק')) {
            triggerHumor('thailand', { destination: dest });
        }
        if (dest.includes('פריז') || dest.includes('רומא') || dest.includes('ונציה') || dest.includes('איטליה')) {
            triggerHumor('romantic', { destination: dest });
        }
        saveState();
    }, 200));
    setupSelect('bookingSelect', null, null, v => {
        state.bookingType = v;
        $('separateInputs').classList.toggle('show', v === 'separate');
        $('dealInputs').classList.toggle('show', v === 'deal');
        // Clear the hidden section's values
        if (v === 'separate') {
            $('dealCost').value = '';
        } else {
            $('flightCost').value = '';
            $('hotelCost').value = '';
        }
        calculate();
    });
    
    document.querySelectorAll('input').forEach(inp => {
        inp.addEventListener('input', debounce(() => {
            updateInput(inp.id); calculate(); saveState(); checkAlerts(); updateProgress();
            // Trigger humor on input change
            triggerHumor('inputChange', { field: inp.id, value: inp.value });
        }, 200));
    });
    
    // Special name check on creator name field - check on input too!
    $('creatorName').addEventListener('input', debounce(() => {
        const name = $('creatorName').value;
        if (name && name.length >= 2) checkSpecialName(name);
    }, 300));
    
    $('creatorName').addEventListener('blur', () => {
        const name = $('creatorName').value;
        if (name) checkSpecialName(name);
    });
    
    $('tripBudget').addEventListener('input', debounce(() => {
        state.budget = parseFloat($('tripBudget').value) || 0;
        checkAlerts();
    }, 200));
}

function setupSelect(cid, customId, inputId, cb) {
    const c = $(cid);
    if (!c) return;
    c.querySelectorAll('.q-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            c.querySelectorAll('.q-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const v = btn.dataset.val;
            if (customId) $(customId).classList.toggle('show', v === 'other' || v === 'manual');
            cb(v); haptic(); calculate(); saveState(); checkAlerts(); updateProgress();
            // Trigger humor on EVERY button click
            triggerAnyAction();
        });
    });
}

// Add global click listener for ALL interactive elements
function setupGlobalHumorTriggers() {
    // All buttons
    document.querySelectorAll('button, .q-btn, .toggle-row, .meal-btn, .attr-btn').forEach(el => {
        el.addEventListener('click', () => {
            triggerAnyAction();
        });
    });
    
    // All checkboxes
    document.querySelectorAll('input[type="checkbox"]').forEach(el => {
        el.addEventListener('change', () => {
            triggerAnyAction();
        });
    });
}

// Date Sync
function setupDateSync() {
    const s = $('tripDateStart'), e = $('tripDateEnd');
    s.addEventListener('change', () => { if (s.value && state.days > 0) syncEndDateFromDays(); saveState(); });
    e.addEventListener('change', () => { if (s.value && e.value) syncDaysFromDates(); saveState(); });
}

function syncEndDateFromDays() {
    const s = $('tripDateStart'), e = $('tripDateEnd');
    if (s.value && state.days > 0) {
        const d = new Date(s.value);
        d.setDate(d.getDate() + state.days - 1);
        e.value = d.toISOString().split('T')[0];
    }
}

function syncDaysFromDates() {
    const s = $('tripDateStart'), e = $('tripDateEnd');
    if (s.value && e.value) {
        const diff = Math.ceil((new Date(e.value) - new Date(s.value)) / (1000 * 60 * 60 * 24)) + 1;
        if (diff > 0 && diff <= 90) { state.days = diff; updateDaysButtons(diff); calculate(); }
    }
}

function updateDaysButtons(days) {
    const c = $('daysSelect');
    c.querySelectorAll('.q-btn').forEach(b => {
        b.classList.remove('active');
        if (parseInt(b.dataset.val) === days) b.classList.add('active');
        else if (b.dataset.val === 'other' && ![2, 3, 4, 5, 6].includes(days)) {
            b.classList.add('active');
            $('daysCustom').classList.add('show');
            $('daysInput').value = days;
        }
    });
}

// Input Handlers
function updateInput(id) {
    if (id === 'travelersInput') state.travelers = parseInt($(id).value) || 2;
    if (id === 'daysInput') { state.days = parseInt($(id).value) || 5; syncEndDateFromDays(); }
    if (id === 'rateInput') state.rate = parseFloat($(id).value) || 3.50;
    if (id === 'mealOtherCost') { mealPrices.other = parseFloat($(id).value) || 0; updateTotals(); }
    if (id === 'attrOtherCost') { attrPrices.other = parseFloat($(id).value) || 0; updateTotals(); }
}

function updatePrices() {
    const m = state.destination ? DEST_MULT[state.destination] : 1;
    const u = state.destination ? UBER_PRICES[state.destination] : 15;
    mealPrices = { breakfast: Math.round(BASE_MEALS.breakfast * m), lunch: Math.round(BASE_MEALS.lunch * m), dinner: Math.round(BASE_MEALS.dinner * m), other: mealPrices.other };
    attrPrices = { museum: Math.round(BASE_ATTRS.museum * m), tours: Math.round(BASE_ATTRS.tours * m), parks: Math.round(BASE_ATTRS.parks * m), other: attrPrices.other };
    $('breakfastPrice').textContent = '$' + mealPrices.breakfast;
    $('lunchPrice').textContent = '$' + mealPrices.lunch;
    $('dinnerPrice').textContent = '$' + mealPrices.dinner;
    $('museumPrice').textContent = '$' + attrPrices.museum;
    $('toursPrice').textContent = '$' + attrPrices.tours;
    $('parksPrice').textContent = '$' + attrPrices.parks;
    $('uberDaily').value = u;
    updateTotals();
}

// Toggle Handlers
function toggleOption(name, fromCb) {
    const cb = $('check' + name.charAt(0).toUpperCase() + name.slice(1));
    const row = $(name + 'Toggle'), content = $(name + 'Content');
    if (!fromCb) cb.checked = !cb.checked;
    row.classList.toggle('active', cb.checked);
    content.classList.toggle('show', cb.checked);
    haptic(); calculate(); saveState(); checkAlerts(); updateProgress();
    // Trigger humor for car (Ishai's chauvinism)
    if (name === 'car' && cb.checked) triggerHumor('car', {});
}

function toggleMeal(m) {
    state.meals[m] = !state.meals[m];
    document.querySelector('[data-meal="' + m + '"]').classList.toggle('active', state.meals[m]);
    $('mealCustom').classList.toggle('show', state.meals.other);
    haptic(); updateTotals(); calculate(); saveState(); updateProgress();
    // Trigger humor for meals (Amir's aunt, Ishai's cooking)
    if (state.meals[m]) triggerHumor('meals', {});
}

function toggleAttr(a) {
    state.attrs[a] = !state.attrs[a];
    document.querySelector('[data-attr="' + a + '"]').classList.toggle('active', state.attrs[a]);
    $('attrCustom').classList.toggle('show', state.attrs.other);
    haptic(); updateTotals(); calculate(); saveState(); updateProgress();
}

// Calculations
function updateTotals() {
    let food = 0, attr = 0;
    if (state.meals.breakfast) food += mealPrices.breakfast;
    if (state.meals.lunch) food += mealPrices.lunch;
    if (state.meals.dinner) food += mealPrices.dinner;
    if (state.meals.other) food += mealPrices.other;
    if (state.attrs.museum) attr += attrPrices.museum;
    if (state.attrs.tours) attr += attrPrices.tours;
    if (state.attrs.parks) attr += attrPrices.parks;
    if (state.attrs.other) attr += attrPrices.other;
    $('foodTotal').textContent = '$' + food;
    $('attrTotal').textContent = '$' + attr;
    return { food, attr };
}

function calculate() {
    const t = Math.max(1, state.travelers || 2), d = Math.max(1, state.days || 5), r = state.rate || 3.50;
    const { food, attr } = updateTotals();
    const cat = { 'טיסה ומלון': 0, 'כבודה': 0, 'תוספות': 0, 'אוכל': 0, 'אטרקציות': 0, 'תחבורה': 0, 'שונות': 0 };
    
    cat['טיסה ומלון'] = state.bookingType === 'deal' ? getVal('dealCost') * t : (getVal('flightCost') * t) + getVal('hotelCost');
    if (isOn('checkTrolley')) cat['כבודה'] += getVal('trolleyCost') * t * 2;
    if (isOn('checkLuggage')) cat['כבודה'] += getVal('luggageCost') * t * 2;
    if (isOn('checkTransfer')) cat['תוספות'] += getVal('transferCost') / r;
    if (isOn('checkCancelIns')) cat['תוספות'] += getVal('cancelInsCost') * t;
    if (isOn('checkHealthIns')) cat['תוספות'] += getVal('healthDaily') * d * t;
    cat['אוכל'] = food * d * t;
    cat['אטרקציות'] = attr * d * t;
    if (isOn('checkCar')) cat['תחבורה'] += getVal('carDaily') * d;
    if (isOn('checkPublic')) cat['תחבורה'] += getVal('publicDaily') * d * t;
    if (isOn('checkUber')) cat['תחבורה'] += getVal('uberDaily') * d;
    if (isOn('checkSim')) cat['שונות'] += getVal('simCost') * t;
    if (isOn('checkShopping')) cat['שונות'] += getVal('shoppingCost');
    
    const total = Object.values(cat).reduce((a, b) => a + b, 0);
    currentTotal = total;
    const totalILS = total * r, pp = total / t, ppILS = totalILS / t;
    
    $('totalUSD').textContent = '$' + fmt(total);
    $('totalILS').textContent = '₪' + fmt(totalILS);
    $('perPersonUSD').textContent = '$' + fmt(pp);
    $('perPersonILS').textContent = '₪' + fmt(ppILS);
    $('pieValue').textContent = '$' + fmt(total);
    
    // Budget progress bar
    const budget = getVal('tripBudget');
    const budgetProgress = $('budgetProgress');
    const footer = $('mainFooter');
    
    if (budget > 0) {
        budgetProgress.classList.add('show');
        const pct = Math.min((total / budget) * 100, 100);
        const fill = $('budgetFill');
        fill.style.width = pct + '%';
        fill.classList.toggle('over', total > budget);
        $('budgetUsed').textContent = '$' + fmt(total) + ' מתוך $' + fmt(budget);
        
        if (total <= budget) {
            $('budgetRemaining').textContent = '✅ נשארו $' + fmt(budget - total);
            footer.classList.add('in-budget');
            // Trigger humor for under budget
            triggerHumor('underBudget', { budget, total });
        } else {
            $('budgetRemaining').textContent = '⚠️ חריגה של $' + fmt(total - budget);
            footer.classList.remove('in-budget');
            // Trigger humor for over budget
            triggerHumor('overBudget', { budget, total });
        }
        
        // High budget trigger (for Boris/Mashi jokes)
        if (budget > 3000) {
            triggerHumor('highBudget', { budget });
        }
    } else {
        budgetProgress.classList.remove('show');
        footer.classList.remove('in-budget');
    }
    
    updateChart(cat, total, r);
    updateProgress();
    updateShareLink();
}

// Chart
function updateChart(cat, total, rate) {
    const active = Object.entries(cat).filter(([_, v]) => v > 0).sort((a, b) => b[1] - a[1]);
    const pie = $('pieChart'), leg = $('legend'), bd = $('breakdown');
    const content = $('chartContent'), empty = $('emptyState');
    
    if (!active.length || total === 0) { content.style.display = 'none'; empty.style.display = 'block'; return; }
    content.style.display = 'block'; empty.style.display = 'none';
    
    let stops = [], angle = 0;
    active.forEach(([_, v], i) => { const pct = (v / total) * 100; stops.push(COLORS[i] + ' ' + angle + 'deg ' + (angle + pct * 3.6) + 'deg'); angle += pct * 3.6; });
    pie.style.background = 'conic-gradient(' + stops.join(', ') + ')';
    
    leg.innerHTML = active.map(([n, v], i) => '<div class="legend-item"><span class="legend-dot" style="background:' + COLORS[i] + '"></span><span class="legend-name">' + n + '</span><span class="legend-pct">' + Math.round((v / total) * 100) + '%</span></div>').join('');
    bd.innerHTML = '<div class="breakdown-title">פירוט</div>' + active.map(([n, v]) => '<div class="breakdown-row"><span class="breakdown-name">' + n + '</span><span class="breakdown-amount">$' + fmt(v) + ' / ₪' + fmt(v * rate) + '</span></div>').join('');
}

// Alerts
function checkAlerts() {
    const c = $('alertsContainer'); c.innerHTML = '';
    if (!isOn('checkHealthIns') && (getVal('flightCost') > 0 || getVal('dealCost') > 0))
        c.innerHTML += '<div class="alert"><span class="alert-icon">⚠️</span><div class="alert-content"><div class="alert-title">שים לב!</div><div class="alert-text">מומלץ לרכוש ביטוח בריאות לחו״ל</div></div><button class="alert-close" onclick="this.parentElement.remove()">✕</button></div>';
    if (state.budget > 0 && currentTotal > state.budget)
        c.innerHTML += '<div class="alert error"><span class="alert-icon">💰</span><div class="alert-content"><div class="alert-title">חריגה מהתקציב!</div><div class="alert-text">$' + fmt(currentTotal) + ' > תקציב $' + fmt(state.budget) + '</div></div><button class="alert-close" onclick="this.parentElement.remove()">✕</button></div>';
    if (state.travelers >= 3 && !isOn('checkCar'))
        c.innerHTML += '<div class="alert info"><span class="alert-icon">💡</span><div class="alert-content"><div class="alert-title">טיפ</div><div class="alert-text">עם ' + state.travelers + ' נוסעים, השכרת רכב עשויה להשתלם!</div></div><button class="alert-close" onclick="this.parentElement.remove()">✕</button></div>';
    if (state.budget > 0 && currentTotal <= state.budget && currentTotal > 0)
        c.innerHTML += '<div class="alert success"><span class="alert-icon">✅</span><div class="alert-content"><div class="alert-title">מצוין!</div><div class="alert-text">בתקציב! נשארו $' + fmt(state.budget - currentTotal) + '</div></div><button class="alert-close" onclick="this.parentElement.remove()">✕</button></div>';
}

// Progress
function updateProgress() {
    let f = 0;
    if (state.travelers > 0) f++;
    if (state.days > 0) f++;
    if (state.destination) f++;
    if (getVal('flightCost') > 0 || getVal('dealCost') > 0) f++;
    if (getVal('hotelCost') > 0 || getVal('dealCost') > 0) f++;
    if (Object.values(state.meals).some(v => v)) f++;
    if (isOn('checkCar') || isOn('checkPublic') || isOn('checkUber')) f++;
    if (isOn('checkHealthIns')) f++;
    const pct = Math.round((f / 8) * 100);
    $('progressFill').style.width = pct + '%';
    $('progressText').textContent = pct + '%';
}

// Share
function generateShareURL() {
    const p = new URLSearchParams();
    p.set('n', $('tripName').value || ''); p.set('t', state.travelers); p.set('d', state.days);
    p.set('ds', $('tripDateStart').value || ''); p.set('de', $('tripDateEnd').value || '');
    if (state.destination) p.set('dest', state.destination);
    p.set('bt', state.bookingType);
    if (getVal('flightCost')) p.set('fc', getVal('flightCost'));
    if (getVal('hotelCost')) p.set('hc', getVal('hotelCost'));
    if (getVal('dealCost')) p.set('dc', getVal('dealCost'));
    const tg = [];
    if (isOn('checkTrolley')) tg.push('tr'); if (isOn('checkLuggage')) tg.push('lg');
    if (isOn('checkTransfer')) tg.push('tf'); if (isOn('checkCancelIns')) tg.push('ci');
    if (isOn('checkHealthIns')) tg.push('hi'); if (isOn('checkCar')) tg.push('cr');
    if (isOn('checkPublic')) tg.push('pb'); if (isOn('checkUber')) tg.push('ub');
    if (isOn('checkSim')) tg.push('sm'); if (isOn('checkShopping')) tg.push('sh');
    if (tg.length) p.set('tg', tg.join(','));
    const ml = Object.keys(state.meals).filter(k => state.meals[k]).join(',');
    const at = Object.keys(state.attrs).filter(k => state.attrs[k]).join(',');
    if (ml) p.set('ml', ml); if (at) p.set('at', at);
    return location.origin + location.pathname + '?' + p.toString();
}

function loadFromURL() {
    const p = new URLSearchParams(location.search);
    if (!p.has('t')) return;
    if (p.get('n')) $('tripName').value = p.get('n');
    if (p.get('t')) state.travelers = parseInt(p.get('t'));
    if (p.get('d')) state.days = parseInt(p.get('d'));
    if (p.get('ds')) $('tripDateStart').value = p.get('ds');
    if (p.get('de')) $('tripDateEnd').value = p.get('de');
    if (p.get('dest')) state.destination = p.get('dest');
    if (p.get('bt')) state.bookingType = p.get('bt');
    if (p.get('fc')) $('flightCost').value = p.get('fc');
    if (p.get('hc')) $('hotelCost').value = p.get('hc');
    if (p.get('dc')) $('dealCost').value = p.get('dc');
    const tg = (p.get('tg') || '').split(',');
    const tm = { tr: 'trolley', lg: 'luggage', tf: 'transfer', ci: 'cancelIns', hi: 'healthIns', cr: 'car', pb: 'public', ub: 'uber', sm: 'sim', sh: 'shopping' };
    tg.forEach(t => { if (tm[t]) setTimeout(() => toggleOption(tm[t]), 100) });
    const ml = (p.get('ml') || '').split(',');
    const at = (p.get('at') || '').split(',');
    ml.forEach(m => { if (m && state.meals.hasOwnProperty(m)) state.meals[m] = true });
    at.forEach(a => { if (a && state.attrs.hasOwnProperty(a)) state.attrs[a] = true });
    localStorage.setItem('vacCalcOnboarded', 'true');
}

function updateShareLink() { $('shareLinkInput').value = generateShareURL(); }

function shareLink() {
    $('shareLinkBox').classList.add('show');
    $('shareLinkInput').value = generateShareURL();
    $('shareLinkInput').select();
    haptic();
    if (navigator.clipboard?.writeText) navigator.clipboard.writeText($('shareLinkInput').value).then(() => toast('🔗', 'קישור הועתק!'));
}

function copyShareLink() {
    if (navigator.clipboard?.writeText) navigator.clipboard.writeText($('shareLinkInput').value).then(() => toast('✓', 'הועתק!'));
    else { $('shareLinkInput').select(); document.execCommand('copy'); toast('✓', 'הועתק!'); }
    haptic();
}

function shareTrip() {
    const name = $('tripName').value || 'הטיול שלי';
    const creator = $('creatorName').value;
    const destination = $('destinationName').value;
    const t = state.travelers || 2;
    const d = state.days || 5;
    const r = state.rate || 3.50;
    const sd = $('tripDateStart').value;
    const ed = $('tripDateEnd').value;
    
    // Format dates nicely
    let dateStr = '';
    if (sd) {
        const startDate = new Date(sd);
        const options = { day: 'numeric', month: 'numeric', year: '2-digit' };
        dateStr = startDate.toLocaleDateString('he-IL', options);
        if (ed) {
            const endDate = new Date(ed);
            dateStr += ' → ' + endDate.toLocaleDateString('he-IL', options);
        }
    }
    
    // Destination emoji
    const destEmoji = { europe: '🇪🇺', usa: '🇺🇸', asia: '🌏', local: '🇮🇱' };
    const destIcon = state.destination ? destEmoji[state.destination] : '✈️';
    
    // Build beautiful message
    let msg = '';
    
    // Header with destination
    const headerText = destination ? name + ' - ' + destination : name;
    msg += '┏━━━━━━━━━━━━━━━━━━━━━┓\n';
    msg += '┃  ' + destIcon + '  *' + headerText + '*  ┃\n';
    msg += '┗━━━━━━━━━━━━━━━━━━━━━┛\n\n';
    
    // Trip info
    if (creator) msg += '👤 מאת: *' + creator + '*\n';
    msg += '👥 נוסעים: *' + t + '*\n';
    msg += '📅 משך: *' + d + ' ימים*';
    if (dateStr) msg += ' (' + dateStr + ')';
    msg += '\n';
    msg += '💱 שער: *₪' + r.toFixed(2) + '* לדולר\n';
    
    // Expenses section
    msg += '\n┌─────────────────────┐\n';
    msg += '│  💳 *פירוט הוצאות*  │\n';
    msg += '└─────────────────────┘\n\n';
    
    let hasExpenses = false;
    
    // Flight & Hotel
    if (state.bookingType === 'deal' && getVal('dealCost') > 0) {
        const dealTotal = getVal('dealCost') * t;
        msg += '📦 *חבילת נופש*\n';
        msg += '    $' + fmt(getVal('dealCost')) + ' × ' + t + ' נוסעים\n';
        msg += '    ➜ *$' + fmt(dealTotal) + '* (₪' + fmt(dealTotal * r) + ')\n\n';
        hasExpenses = true;
    } else {
        if (getVal('flightCost') > 0) {
            const flightTotal = getVal('flightCost') * t;
            msg += '✈️ *טיסות*\n';
            msg += '    $' + fmt(getVal('flightCost')) + ' × ' + t + ' נוסעים\n';
            msg += '    ➜ *$' + fmt(flightTotal) + '* (₪' + fmt(flightTotal * r) + ')\n\n';
            hasExpenses = true;
        }
        if (getVal('hotelCost') > 0) {
            const hotelCost = getVal('hotelCost');
            msg += '🏨 *מלון*\n';
            msg += '    ➜ *$' + fmt(hotelCost) + '* (₪' + fmt(hotelCost * r) + ')\n\n';
            hasExpenses = true;
        }
    }
    
    // Luggage
    let luggageTotal = 0;
    let luggageItems = [];
    if (isOn('checkTrolley')) {
        const trolleyTotal = getVal('trolleyCost') * t * 2;
        luggageTotal += trolleyTotal;
        luggageItems.push('טרולי $' + getVal('trolleyCost'));
    }
    if (isOn('checkLuggage')) {
        const luggageT = getVal('luggageCost') * t * 2;
        luggageTotal += luggageT;
        luggageItems.push('מזוודה $' + getVal('luggageCost'));
    }
    if (luggageTotal > 0) {
        msg += '🧳 *כבודה* (' + luggageItems.join(' + ') + ')\n';
        msg += '    × ' + t + ' נוסעים × 2 כיוונים\n';
        msg += '    ➜ *$' + fmt(luggageTotal) + '* (₪' + fmt(luggageTotal * r) + ')\n\n';
        hasExpenses = true;
    }
    
    // Insurance & Extras
    let extrasTotal = 0;
    let extrasItems = [];
    if (isOn('checkTransfer')) {
        const transferUSD = getVal('transferCost') / r;
        extrasTotal += transferUSD;
        extrasItems.push('הסעה ₪' + fmt(getVal('transferCost')));
    }
    if (isOn('checkCancelIns')) {
        const cancelTotal = getVal('cancelInsCost') * t;
        extrasTotal += cancelTotal;
        extrasItems.push('ביטוח ביטול');
    }
    if (isOn('checkHealthIns')) {
        const healthTotal = getVal('healthDaily') * d * t;
        extrasTotal += healthTotal;
        extrasItems.push('ביטוח בריאות');
    }
    if (extrasTotal > 0) {
        msg += '🛡️ *ביטוחים ותוספות*\n';
        msg += '    ' + extrasItems.join(', ') + '\n';
        msg += '    ➜ *$' + fmt(extrasTotal) + '* (₪' + fmt(extrasTotal * r) + ')\n\n';
        hasExpenses = true;
    }
    
    // Food
    const { food, attr } = updateTotals();
    if (food > 0) {
        const foodTotal = food * d * t;
        let mealsList = [];
        if (state.meals.breakfast) mealsList.push('בוקר');
        if (state.meals.lunch) mealsList.push('צהריים');
        if (state.meals.dinner) mealsList.push('ערב');
        if (state.meals.other) mealsList.push('אחר');
        msg += '🍽️ *אוכל* (' + mealsList.join(', ') + ')\n';
        msg += '    $' + food + '/יום × ' + d + ' ימים × ' + t + ' נוסעים\n';
        msg += '    ➜ *$' + fmt(foodTotal) + '* (₪' + fmt(foodTotal * r) + ')\n\n';
        hasExpenses = true;
    }
    
    // Attractions
    if (attr > 0) {
        const attrTotal = attr * d * t;
        let attrList = [];
        if (state.attrs.museum) attrList.push('מוזיאונים');
        if (state.attrs.tours) attrList.push('סיורים');
        if (state.attrs.parks) attrList.push('פארקים');
        if (state.attrs.other) attrList.push('אחר');
        msg += '🎢 *אטרקציות* (' + attrList.join(', ') + ')\n';
        msg += '    $' + attr + '/יום × ' + d + ' ימים × ' + t + ' נוסעים\n';
        msg += '    ➜ *$' + fmt(attrTotal) + '* (₪' + fmt(attrTotal * r) + ')\n\n';
        hasExpenses = true;
    }
    
    // Transport
    let transportTotal = 0;
    let transportItems = [];
    if (isOn('checkCar')) {
        const carTotal = getVal('carDaily') * d;
        transportTotal += carTotal;
        transportItems.push('רכב');
    }
    if (isOn('checkPublic')) {
        const publicTotal = getVal('publicDaily') * d * t;
        transportTotal += publicTotal;
        transportItems.push('תח״צ');
    }
    if (isOn('checkUber')) {
        const uberTotal = getVal('uberDaily') * d;
        transportTotal += uberTotal;
        transportItems.push('מוניות');
    }
    if (transportTotal > 0) {
        msg += '🚗 *תחבורה* (' + transportItems.join(', ') + ')\n';
        msg += '    ➜ *$' + fmt(transportTotal) + '* (₪' + fmt(transportTotal * r) + ')\n\n';
        hasExpenses = true;
    }
    
    // Misc
    let miscTotal = 0;
    let miscItems = [];
    if (isOn('checkSim')) {
        const simTotal = getVal('simCost') * t;
        miscTotal += simTotal;
        miscItems.push('סים/אינטרנט');
    }
    if (isOn('checkShopping')) {
        miscTotal += getVal('shoppingCost');
        miscItems.push('קניות');
    }
    if (miscTotal > 0) {
        msg += '🛍️ *שונות* (' + miscItems.join(', ') + ')\n';
        msg += '    ➜ *$' + fmt(miscTotal) + '* (₪' + fmt(miscTotal * r) + ')\n\n';
        hasExpenses = true;
    }
    
    // Totals
    const totalUSD = currentTotal;
    const totalILS = totalUSD * r;
    const ppUSD = totalUSD / t;
    const ppILS = ppUSD * r;
    
    msg += '┏━━━━━━━━━━━━━━━━━━━━━┓\n';
    msg += '┃  💰 *סיכום סופי*    ┃\n';
    msg += '┗━━━━━━━━━━━━━━━━━━━━━┛\n\n';
    
    msg += '💵 *סה״כ לטיול:*\n';
    msg += '    *$' + fmt(totalUSD) + '* = *₪' + fmt(totalILS) + '*\n\n';
    
    msg += '👤 *עלות לאדם:*\n';
    msg += '    *$' + fmt(ppUSD) + '* = *₪' + fmt(ppILS) + '*\n\n';
    
    // Budget status
    if (state.budget > 0) {
        const diff = state.budget - totalUSD;
        if (diff >= 0) {
            msg += '✅ *בתקציב!* נשארו $' + fmt(diff) + '\n\n';
        } else {
            msg += '⚠️ *חריגה מהתקציב* ב-$' + fmt(Math.abs(diff)) + '\n\n';
        }
    }
    
    // Footer
    msg += '━━━━━━━━━━━━━━━━━━━━━━\n';
    msg += '📱 _נוצר במחשבון חופשה חכם_';
    
    haptic();
    copyText(msg);
    
    // Trigger humor for share
    triggerHumor('share', { travelers: t, budget: state.budget, destination: destination });
}

function copyText(text) {
    if (navigator.clipboard?.writeText) navigator.clipboard.writeText(text).then(() => toast('✓', 'הועתק!')).catch(() => fallbackCopy(text));
    else fallbackCopy(text);
}

function fallbackCopy(text) {
    const ta = document.createElement('textarea');
    ta.value = text; ta.style.cssText = 'position:fixed;opacity:0';
    document.body.appendChild(ta); ta.select();
    try { document.execCommand('copy'); toast('✓', 'הועתק!'); } catch (e) { toast('✕', 'שגיאה'); }
    document.body.removeChild(ta);
}

// Toast
function toast(icon, msg) {
    const t = $('toast');
    $('toastIcon').textContent = icon;
    $('toastText').textContent = msg;
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 3000);
}

// Save & Load State
function saveState() {
    // Disabled - each user starts fresh
    // Data can only be shared via URL or WhatsApp
}

function showSaveInd() { /* Disabled */ }

function loadState() {
    // Only load theme preference, not trip data
    try {
        if (localStorage.getItem('vacCalcTheme') === 'light') {
            state.theme = 'light'; 
            document.body.classList.add('light-mode');
            $('themeToggle').textContent = '☀️'; 
            $('themeToggle').classList.add('active');
        }
        // No longer loading saved trip data - each session starts fresh
    } catch (e) { console.error(e); }
}

function restoreSelect(cid, val, customId, inputId, inputVal) {
    const c = $(cid); if (!c) return;
    c.querySelectorAll('.q-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.val == val) btn.classList.add('active');
        else if ((btn.dataset.val === 'other' || btn.dataset.val === 'manual') && val && !c.querySelector('[data-val="' + val + '"]')) {
            btn.classList.add('active');
            if (customId) $(customId)?.classList.add('show');
            if (inputId) $(inputId).value = inputVal !== undefined ? inputVal : val;
        }
    });
}

// Reset & PDF
function resetAll() {
    if (confirm('לאפס את כל הנתונים?')) {
        history.replaceState({}, '', location.pathname);
        location.reload();
    }
}

function exportPDF() {
    document.title = 'חופשה - ' + ($('tripName').value || 'הטיול שלי');
    haptic(); window.print(); toast('🖨️', 'הדפסה');
}
