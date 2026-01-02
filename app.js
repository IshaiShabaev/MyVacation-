/* ========================================
   VACATION CALCULATOR v21 - FULL QA/QC
   With Super Funny Humor System 🎭
   All bugs fixed + Enhanced WhatsApp Share
   ======================================== */

// ============ HUMOR SYSTEM ============
const HUMOR = {
    zeev: {
        names: ['זאב', 'זאביק', 'וולף', 'wolf', 'zeev'],
        emoji: '🐺',
        openingPopup: [
            { emoji: '🐺', text: 'BREAKING NEWS: זאב עוזב את המקלדת! העורך התעלף, הקפה מתקרר, המדינה בהלם!' },
            { emoji: '📰', text: '"כאן זאב, משדר חי מהסלון!" - אחי, אתה מתכנן חופשה, לא מסקר מלחמה. תירגע.' }
        ],
        travelers: ['עוד נוסעים? זאב, אתה בונה צוות חקירה או נוסע לחופשה?', 'שינית מספר נוסעים? תכף תבקש גם צלם ועורך!'],
        days: ['כמה ימים? מעל שבוע בלי לדווח - בטוח תתחיל לשדר מהבריכה!', 'בחרת ימים! מספיק זמן לריב עם 3 מלצרים.'],
        destination: ['בחרת יעד! העיקר שיש WiFi - אתה חייב לבדוק מה קורה בעולם!', 'יעד חדש! כבר מתכנן את הסטורי? 🏖️📱'],
        flight: ['מחיר טיסה! תשב ליד חלון ותדווח: "אנחנו מעל ענן. פרטים בהמשך."', 'הזנת מחיר! אם תמצא זול יותר תכתוב כתבת חשיפה! 😱'],
        hotel: ['מלון! תביא את הכרית מהבית - אתה מתלונן שהכרית "לא כמו בבית".', 'בחרת מלון! ביום הראשון תכיר את כל הצוות בשמות!'],
        budget: ['תקציב! אם תחרוג - תכתוב מאמר: "המערכת הפיננסית נגדי!" 💸', 'קבעת תקציב! תעקוב אחרי כל שקל כאילו זו פרשיית שחיתות.'],
        meals: ['בחרת אוכל! אתה מצלם את האוכל מ-17 זוויות. "לתיעוד!"', 'ארוחות! אם לא טוב - ביקורת הורסת בגוגל. 1 כוכב!'],
        share: ['משתף! מחכה ל-500 לייקים ופאנל בערוץ 12.', 'שיתפת! BREAKING: "זאב בחופשה!" 😤'],
        result: ['התוצאה! מסתכל על המספרים כאילו חושף תקציב מדינה!', 'חישוב סופי! אם לא מתאים - מייל תלונה בן 3 עמודים.']
    },
    amir: {
        names: ['אמיר', 'אדי', 'adi', 'amir'],
        emoji: '👑',
        openingPopup: [
            { emoji: '👑', text: 'אמיר נכנס! המחשבה הראשונה: "איפה אוכלים?" השנייה: "ואיפה משיגים ירוק?"' },
            { emoji: '🌿', text: 'המלך הגיע! מחפש: "מסעדה אתיופית + מקום לעשן + בחורות יפות" - הטריפקטה!' }
        ],
        travelers: ['כמה נוסעים? יותר אנשים = יותר מנות "לשולחן" לאכול לבד!', 'הוספת נוסעים! מישהו יעזור לסיים. LOL. אתה תסיים הכל לבד.'],
        days: ['כמה ימים? כל יום = 7 ארוחות. 28 ארוחות בשבוע!', 'בחרת ימים! הבטן: "CHALLENGE ACCEPTED!" 🍔🍕🍜🍰'],
        destination: ['בחרת יעד! 1. אוכל ✓ 2. ירוק ✓ 3. בחורות אתיופיות ✓ 4. נוף? מה זה?', 'יעד! אמיר בוחר מדינה לפי המטבח. אתיופיה? גן עדן! 🇪🇹❤️'],
        flight: ['מחיר טיסה! מושב במעבר - קל ללכת לבקש עוד אוכל מהדיילת!', 'טיסה! "את יכולה לתת לי את המנה של מי שלא רעב?" ✈️🍽️'],
        hotel: ['מלון! "יש שירות חדרים 24/7?" אם לא - הבא!', 'בחרת מלון! "יש מרפסת?" "לעשן. מה זה נוף?" 🌿'],
        budget: ['תקציב! חלוקה: 70% אוכל, 15% ירוק, 10% מלון, 5% בחורות. מושלם!', 'קבעת תקציב! ביום הראשון תפוצץ 50% על ארוחה.'],
        meals: ['"3 ארוחות"? אתה מתכוון 3 ראשיות + 47 נשנושים, נכון?', 'אחרי ג\'וינט: "אני לא רעב" *מזמין 4 ראשונות ו-3 קינוחים*'],
        share: ['משתף! "מי בא?" = "מי בא לראות אותי אוכל?"', 'שיתפת! אזהרה: אמיר מתכנן חופשה = סיור אוכל!'],
        result: ['"יופי, נשאר כסף לאוכל!" זה היה רק על אוכל מההתחלה!', 'אמיר חוזר: +5 קילו, -5000 שקל, +50 תמונות אוכל. Worth it! 👑']
    },
    boris: {
        names: ['בוריס', 'בורקה', 'boris', 'borka'],
        emoji: '🇷🇺',
        openingPopup: [
            { emoji: '🇷🇺', text: 'בוריס נכנס! הצלחת לברוח מהעבודה? עבדת רק 16 שעות? חצי משמרת!' },
            { emoji: '💨', text: 'הרוסי בבניין! *כולם פותחים חלונות* משי נתנה אישור יציאה?' }
        ],
        travelers: ['עוד נוסעים? הזהרת אותם שאתה נשק ביולוגי מהלך?', 'הוספת נוסעים! אמיצים. אחרי ארוחה אתה צריך חדר לבד.'],
        days: ['כמה ימים? משי אישרה? או שאתה מסתכן בחיים?', 'בחרת ימים! כמה שעות נוספות = יום חופשה? מתמטיקה עצובה!'],
        destination: ['בחרת יעד! עדיף מקום עם הרבה רוח. אתה יודע למה. 🌬️', 'יעד! משי יודעת או זו בריחה? קח יעד בלי הסגרה! 🏃‍♂️'],
        flight: ['מחיר טיסה! תתפלל למושב ליד חלון שנפתח. 💨✈️', 'טיסה! מחיר ÷ שעות נוספות = כמה חיים נתת.'],
        hotel: ['מלון! חדר בקומה העליונה עם מרפסת. לאוורור. 🏨💨', 'בחרת מלון! משי אישרה או מתכנן "להפתיע"? (RIP בוריס)'],
        budget: ['תקציב! יש הרשמי (שמשי יודעת) והאמיתי. באיזה אנחנו?', 'כל שקל = שעת עבודה נוספת. מיליונר בשעות! עני בחיים! 💪😅'],
        meals: ['אוכל! תימנע מחריף. בשביל האנושות ושכבת האוזון. 🌶️☢️', 'בחרת ארוחות! מסכן מי שיושב איתך *אחרי*!'],
        share: ['משתף! בטוח שמשי לא רואה? בדקת פעמיים?! 👀😱', 'שיתפת! החברים: "וואו!" משי: "איזו חופשה?" בוריס: *בורח לסיביר* ❄️'],
        result: ['המחיר = 847 שעות נוספות. משי סופרת. תמיד סופרת.', 'אם משי תגיד כן - חופשה! אם לא - חלום! בהצלחה! 🇷🇺❤️']
    }
};

let currentSpecialUser = null;
let lastJokeTime = 0;
let actionCounter = 0;

function randomItem(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

function checkSpecialUser(name) {
    if (!name) return null;
    const n = name.toLowerCase().trim();
    for (const [key, data] of Object.entries(HUMOR)) {
        if (data.names && data.names.some(un => n.includes(un.toLowerCase()))) return key;
    }
    return null;
}

function showSpecialUserPopup(userId) {
    const data = HUMOR[userId];
    if (!data || !data.openingPopup) return;
    const popup = randomItem(data.openingPopup);
    const overlay = document.createElement('div');
    overlay.className = 'special-popup-overlay';
    overlay.innerHTML = `
        <div class="special-popup">
            <div class="special-popup-emoji">${popup.emoji}</div>
            <div class="special-popup-text">${popup.text}</div>
            <button class="special-popup-btn" onclick="this.closest('.special-popup-overlay').remove()">יאללה! 🎉</button>
        </div>`;
    document.body.appendChild(overlay);
    setTimeout(() => overlay.classList.add('show'), 50);
    setTimeout(() => { if (overlay.parentNode) { overlay.classList.remove('show'); setTimeout(() => overlay.remove(), 300); } }, 8000);
}

function showHumorToast(text) {
    if (!currentSpecialUser) return;
    const data = HUMOR[currentSpecialUser];
    const existing = document.querySelector('.humor-toast');
    if (existing) existing.remove();
    const toast = document.createElement('div');
    toast.className = 'humor-toast';
    toast.innerHTML = `<span class="humor-emoji">${data.emoji}</span><span class="humor-text">${text}</span><button class="humor-close" onclick="this.parentElement.remove()">✕</button>`;
    document.body.appendChild(toast);
    setTimeout(() => toast.classList.add('show'), 50);
    setTimeout(() => { if (toast.parentNode) { toast.classList.remove('show'); setTimeout(() => toast.remove(), 300); } }, 5000);
}

function triggerHumor(action) {
    if (!currentSpecialUser) return;
    actionCounter++;
    if (actionCounter % 4 !== 0) return;
    const now = Date.now();
    if (now - lastJokeTime < 2500) return;
    lastJokeTime = now;
    const data = HUMOR[currentSpecialUser];
    let joke = data[action] ? randomItem(data[action]) : null;
    if (!joke) {
        const cats = ['travelers', 'days', 'destination', 'flight', 'hotel', 'budget', 'meals', 'share', 'result'];
        joke = randomItem(data[randomItem(cats)] || []);
    }
    if (joke) setTimeout(() => showHumorToast(joke), 300);
}

// ============ CORE ============
const $ = id => document.getElementById(id);
const COLORS = ['#d4af37', '#6c5ce7', '#00cec9', '#fd79a8', '#f4d03f', '#a29bfe', '#00b894'];
const DEST_MULT = { europe: 1, usa: 1.2, asia: 0.7, local: 0.8 };
const UBER_PRICES = { europe: 15, usa: 20, asia: 8, local: 10 };
const DEST_NAMES = { europe: 'אירופה', usa: 'ארה״ב', asia: 'אסיה', local: 'ישראל' };
const DEST_TIPS = {
    europe: '💡 טיסה: $400-600 | מלון 3★: $100-150/לילה',
    usa: '💡 טיסה: $800-1200 | מלון 3★: $150-200/לילה',
    asia: '💡 טיסה: $600-900 | מלון 3★: $50-100/לילה',
    local: '💡 מלון 3★: ₪400-600/לילה | רכב: ₪150-250/יום'
};
const BASE_MEALS = { breakfast: 15, lunch: 25, dinner: 40 };
const BASE_ATTRS = { museum: 20, tours: 50, parks: 15 };

let state = { travelers: 2, days: 5, destination: null, rate: 3.50, bookingType: 'separate', meals: {}, attrs: {} };
let mealPrices = { ...BASE_MEALS, other: 0 };
let attrPrices = { ...BASE_ATTRS, other: 0 };
let currentTotal = 0;
let alertsShown = {};

const fmt = n => n.toLocaleString('he-IL', { maximumFractionDigits: 0 });
const getVal = id => parseFloat($(id)?.value) || 0;
const isOn = id => $(id)?.checked;
const haptic = () => { try { navigator.vibrate?.(10); } catch(e){} };
function setPrice(inputId, price) {
    const input = $(inputId);
    if (input) {
        input.value = price;
        haptic();
        calculate();
        saveState();
    }
}

// ============ INIT ============
// Auto-update exchange rate from API
async function fetchExchangeRate() {
    try {
        // Try multiple APIs for redundancy
        const apis = [
            'https://api.exchangerate-api.com/v4/latest/USD',
            'https://open.er-api.com/v6/latest/USD'
        ];
        
        for (const api of apis) {
            try {
                const response = await fetch(api, { timeout: 5000 });
                if (response.ok) {
                    const data = await response.json();
                    const rate = data.rates?.ILS;
                    if (rate && rate > 0) {
                        const rateInput = $('rateInput');
                        if (rateInput) {
                            rateInput.value = rate.toFixed(2);
                            state.rate = rate;
                            calculate();
                            saveState();
                            console.log('✅ Exchange rate updated: $1 = ₪' + rate.toFixed(2));
                        }
                        return rate;
                    }
                }
            } catch (e) { continue; }
        }
    } catch (e) {
        console.log('⚠️ Could not fetch exchange rate, using default');
    }
    return null;
}

document.addEventListener('DOMContentLoaded', () => {
    // Ensure custom inputs are hidden initially
    const mealCustom = $('mealCustom');
    const attrCustom = $('attrCustom');
    if (mealCustom) { mealCustom.style.display = 'none'; mealCustom.classList.remove('show'); }
    if (attrCustom) { attrCustom.style.display = 'none'; attrCustom.classList.remove('show'); }
    
    loadState();
    setupEventListeners();
    setupDateSync();
    restoreUIState();
    calculate();
    updateProgress();
    checkAlerts();
    setInterval(checkAlerts, 30000);
    
    // Fetch exchange rate on load
    fetchExchangeRate();
});

function setupEventListeners() {
    // Booking type
    document.querySelectorAll('[data-booking]').forEach(b => {
        b.addEventListener('click', () => {
            document.querySelectorAll('[data-booking]').forEach(x => x.classList.remove('active'));
            b.classList.add('active');
            state.bookingType = b.dataset.booking;
            $('dealSection')?.classList.toggle('show', state.bookingType === 'deal');
            $('separateSection')?.classList.toggle('show', state.bookingType === 'separate');
            haptic(); calculate(); saveState(); triggerHumor('flight');
        });
    });
    
    // Quick buttons
    document.querySelectorAll('.q-btn[data-val]').forEach(b => {
        b.addEventListener('click', () => {
            const p = b.parentElement;
            p.querySelectorAll('.q-btn').forEach(x => x.classList.remove('active'));
            b.classList.add('active');
            if (p.id === 'travelersSelect') {
                if (b.dataset.val === 'other') $('travelersCustom')?.classList.add('show');
                else { $('travelersCustom')?.classList.remove('show'); state.travelers = parseInt(b.dataset.val); }
                triggerHumor('travelers');
            } else if (p.id === 'daysSelect') {
                if (b.dataset.val === 'other') $('daysCustom')?.classList.add('show');
                else { $('daysCustom')?.classList.remove('show'); state.days = parseInt(b.dataset.val); syncEndDateFromDays(); }
                triggerHumor('days');
            }
            haptic(); calculate(); saveState(); updateProgress();
        });
    });
    
    // Destination
    document.querySelectorAll('.dest-btn').forEach(b => {
        b.addEventListener('click', () => {
            document.querySelectorAll('.dest-btn').forEach(x => x.classList.remove('active'));
            b.classList.add('active');
            state.destination = b.dataset.dest;
            const tip = $('destTip');
            if (tip) { tip.textContent = DEST_TIPS[state.destination] || ''; tip.style.display = state.destination ? 'block' : 'none'; }
            haptic(); updatePrices(); calculate(); saveState(); updateProgress(); triggerHumor('destination');
        });
    });
    
    // Name field
    const nameField = $('tripName');
    if (nameField) {
        nameField.addEventListener('blur', () => {
            const name = nameField.value.trim();
            if (name) {
                const specialUser = checkSpecialUser(name);
                if (specialUser && specialUser !== currentSpecialUser) {
                    currentSpecialUser = specialUser;
                    actionCounter = 0;
                    showSpecialUserPopup(specialUser);
                }
            }
        });
        nameField.addEventListener('input', saveState);
    }
    
    const plannerField = $('tripPlanner');
    if (plannerField) {
        plannerField.addEventListener('blur', () => {
            const name = plannerField.value.trim();
            if (name && !currentSpecialUser) {
                const specialUser = checkSpecialUser(name);
                if (specialUser) {
                    currentSpecialUser = specialUser;
                    actionCounter = 0;
                    showSpecialUserPopup(specialUser);
                }
            }
        });
        plannerField.addEventListener('input', saveState);
    }
    
    // Custom inputs
    ['travelersInput', 'daysInput', 'mealOtherCost', 'attrOtherCost'].forEach(id => {
        $(id)?.addEventListener('input', () => {
            if (id === 'travelersInput') state.travelers = parseInt($(id).value) || 2;
            if (id === 'daysInput') { state.days = parseInt($(id).value) || 5; syncEndDateFromDays(); }
            if (id === 'mealOtherCost') { mealPrices.other = parseFloat($(id).value) || 0; updateTotals(); }
            if (id === 'attrOtherCost') { attrPrices.other = parseFloat($(id).value) || 0; updateTotals(); }
            calculate(); saveState();
        });
    });
    
    // Rate
    $('rateInput')?.addEventListener('input', () => {
        state.rate = parseFloat($('rateInput').value) || 3.50;
        calculate(); saveState();
    });
    
    // Cost inputs
    ['dealCost', 'flightCost', 'hotelCost', 'trolleyCost', 'luggageCost', 'transferCost', 
     'cancelInsCost', 'healthDaily', 'carDaily', 'publicDaily', 'uberDaily', 
     'simCost', 'shoppingCost', 'tripBudget'].forEach(id => {
        $(id)?.addEventListener('input', () => {
            calculate(); saveState();
            if (['dealCost', 'flightCost', 'hotelCost'].includes(id)) triggerHumor('flight');
            if (id === 'tripBudget') triggerHumor('budget');
        });
    });
    
    // Global humor
    document.querySelectorAll('button, .toggle-row, .meal-btn, .attr-btn').forEach(el => {
        el.addEventListener('click', () => triggerHumor('general'));
    });
}

function setupDateSync() {
    $('tripDateStart')?.addEventListener('change', () => { if ($('tripDateStart').value && state.days > 0) syncEndDateFromDays(); saveState(); });
    $('tripDateEnd')?.addEventListener('change', () => { if ($('tripDateStart')?.value && $('tripDateEnd')?.value) syncDaysFromDates(); saveState(); });
}

function syncEndDateFromDays() {
    const s = $('tripDateStart'), e = $('tripDateEnd');
    if (s && e && s.value && state.days > 0) { const d = new Date(s.value); d.setDate(d.getDate() + state.days - 1); e.value = d.toISOString().split('T')[0]; }
}

function syncDaysFromDates() {
    const s = $('tripDateStart'), e = $('tripDateEnd');
    if (s && e && s.value && e.value) {
        const diff = Math.ceil((new Date(e.value) - new Date(s.value)) / 86400000) + 1;
        if (diff > 0 && diff <= 90) { state.days = diff; updateDaysButtons(diff); calculate(); }
    }
}

function updateDaysButtons(days) {
    $('daysSelect')?.querySelectorAll('.q-btn').forEach(b => {
        b.classList.remove('active');
        if (parseInt(b.dataset.val) === days) b.classList.add('active');
        else if (b.dataset.val === 'other' && ![2, 3, 4, 5, 7].includes(days)) { b.classList.add('active'); $('daysCustom')?.classList.add('show'); if ($('daysInput')) $('daysInput').value = days; }
    });
}

function updateTravelersButtons(travelers) {
    $('travelersSelect')?.querySelectorAll('.q-btn').forEach(b => {
        b.classList.remove('active');
        if (parseInt(b.dataset.val) === travelers) b.classList.add('active');
        else if (b.dataset.val === 'other' && ![1, 2, 3, 4, 5].includes(travelers)) { b.classList.add('active'); $('travelersCustom')?.classList.add('show'); if ($('travelersInput')) $('travelersInput').value = travelers; }
    });
}

function updatePrices() {
    const m = state.destination ? DEST_MULT[state.destination] : 1;
    const u = state.destination ? UBER_PRICES[state.destination] : 15;
    mealPrices = { breakfast: Math.round(BASE_MEALS.breakfast * m), lunch: Math.round(BASE_MEALS.lunch * m), dinner: Math.round(BASE_MEALS.dinner * m), other: mealPrices.other };
    attrPrices = { museum: Math.round(BASE_ATTRS.museum * m), tours: Math.round(BASE_ATTRS.tours * m), parks: Math.round(BASE_ATTRS.parks * m), other: attrPrices.other };
    if ($('breakfastPrice')) $('breakfastPrice').textContent = '$' + mealPrices.breakfast;
    if ($('lunchPrice')) $('lunchPrice').textContent = '$' + mealPrices.lunch;
    if ($('dinnerPrice')) $('dinnerPrice').textContent = '$' + mealPrices.dinner;
    if ($('museumPrice')) $('museumPrice').textContent = '$' + attrPrices.museum;
    if ($('toursPrice')) $('toursPrice').textContent = '$' + attrPrices.tours;
    if ($('parksPrice')) $('parksPrice').textContent = '$' + attrPrices.parks;
    if ($('uberDaily')) $('uberDaily').value = u;
    updateTotals();
}

function toggleOption(name, fromCb) {
    const cb = $('check' + name.charAt(0).toUpperCase() + name.slice(1));
    const row = $(name + 'Toggle'), content = $(name + 'Content');
    if (!fromCb && cb) cb.checked = !cb.checked;
    row?.classList.toggle('active', cb?.checked);
    content?.classList.toggle('show', cb?.checked);
    haptic(); calculate(); saveState(); checkAlerts(); updateProgress(); triggerHumor('hotel');
}

function toggleMeal(m) {
    state.meals[m] = !state.meals[m];
    document.querySelector(`[data-meal="${m}"]`)?.classList.toggle('active', state.meals[m]);
    const mealCustom = $('mealCustom');
    if (mealCustom) {
        if (state.meals.other) {
            mealCustom.style.display = 'block';
            mealCustom.classList.add('show');
        } else {
            mealCustom.style.display = 'none';
            mealCustom.classList.remove('show');
        }
    }
    haptic(); updateTotals(); calculate(); saveState(); updateProgress(); triggerHumor('meals');
}

function toggleAttr(a) {
    state.attrs[a] = !state.attrs[a];
    document.querySelector(`[data-attr="${a}"]`)?.classList.toggle('active', state.attrs[a]);
    const attrCustom = $('attrCustom');
    if (attrCustom) {
        if (state.attrs.other) {
            attrCustom.style.display = 'block';
            attrCustom.classList.add('show');
        } else {
            attrCustom.style.display = 'none';
            attrCustom.classList.remove('show');
        }
    }
    haptic(); updateTotals(); calculate(); saveState(); updateProgress();
}

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
    if ($('foodTotal')) $('foodTotal').textContent = '$' + food;
    if ($('attrTotal')) $('attrTotal').textContent = '$' + attr;
    return { food, attr };
}

// ============ CALCULATE ============
function calculate() {
    const t = Math.max(1, state.travelers || 2), d = Math.max(1, state.days || 5), r = state.rate || 3.50;
    const { food, attr } = updateTotals();
    const cat = { 'טיסה ומלון': 0, 'כבודה': 0, 'תוספות': 0, 'אוכל': 0, 'אטרקציות': 0, 'תחבורה': 0, 'שונות': 0 };
    
    cat['טיסה ומלון'] = state.bookingType === 'deal' ? getVal('dealCost') * t : (getVal('flightCost') * t) + getVal('hotelCost');
    if (isOn('checkTrolley')) cat['כבודה'] += getVal('trolleyCost') * t * 2;
    if (isOn('checkLuggage')) cat['כבודה'] += getVal('luggageCost') * t * 2;
    if (isOn('checkTransfer')) cat['תוספות'] += getVal('transferCost');
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
    
    if ($('totalUSD')) $('totalUSD').textContent = '$' + fmt(total);
    if ($('totalILS')) $('totalILS').textContent = '₪' + fmt(totalILS);
    if ($('perPersonUSD')) $('perPersonUSD').textContent = '$' + fmt(pp);
    if ($('perPersonILS')) $('perPersonILS').textContent = '₪' + fmt(ppILS);
    if ($('pieValue')) $('pieValue').textContent = '$' + fmt(total);
    
    const budget = getVal('tripBudget');
    const budgetProgress = $('budgetProgress');
    const footer = $('mainFooter');
    
    if (budget > 0 && budgetProgress) {
        budgetProgress.classList.add('show');
        const pct = Math.min((total / budget) * 100, 100);
        const fill = $('budgetFill');
        if (fill) { fill.style.width = pct + '%'; fill.classList.toggle('over', total > budget); }
        if ($('budgetUsed')) $('budgetUsed').textContent = '$' + fmt(total) + ' מתוך $' + fmt(budget);
        if (total <= budget) {
            if ($('budgetRemaining')) $('budgetRemaining').textContent = '✅ נשארו $' + fmt(budget - total);
            footer?.classList.add('in-budget');
        } else {
            if ($('budgetRemaining')) $('budgetRemaining').textContent = '⚠️ חריגה $' + fmt(total - budget);
            footer?.classList.remove('in-budget');
        }
    } else { budgetProgress?.classList.remove('show'); footer?.classList.remove('in-budget'); }
    
    updateChart(cat, total, r); updateProgress(); updateShareLink();
}

function updateChart(cat, total, rate) {
    const active = Object.entries(cat).filter(([_, v]) => v > 0).sort((a, b) => b[1] - a[1]);
    const pie = $('pieChart'), leg = $('legend'), bd = $('breakdown');
    const content = $('chartContent'), empty = $('emptyState');
    if (!content || !empty) return;
    if (!active.length || total === 0) { content.classList.add('hidden'); empty.classList.add('show'); return; }
    content.classList.remove('hidden'); empty.classList.remove('show');
    let stops = [], angle = 0;
    active.forEach(([_, v], i) => { const pct = (v / total) * 100; stops.push(`${COLORS[i % COLORS.length]} ${angle}deg ${angle + pct * 3.6}deg`); angle += pct * 3.6; });
    if (pie) pie.style.background = `conic-gradient(${stops.join(', ')})`;
    if (leg) leg.innerHTML = active.map(([k, v], i) => `<div class="legend-item"><span class="legend-color" style="background:${COLORS[i % COLORS.length]}"></span><span class="legend-label">${k}</span><span class="legend-value">${Math.round((v / total) * 100)}%</span></div>`).join('');
    if (bd) bd.innerHTML = active.map(([k, v], i) => `<div class="breakdown-item"><span class="breakdown-color" style="background:${COLORS[i % COLORS.length]}"></span><span class="breakdown-label">${k}</span><span class="breakdown-value">$${fmt(v)} | ₪${fmt(v * rate)}</span></div>`).join('');
}

function updateProgress() {
    const checks = [state.destination, state.bookingType === 'deal' ? getVal('dealCost') > 0 : (getVal('flightCost') > 0 || getVal('hotelCost') > 0), Object.values(state.meals).some(v => v), isOn('checkTrolley') || isOn('checkLuggage'), isOn('checkCar') || isOn('checkPublic') || isOn('checkUber')];
    const done = checks.filter(Boolean).length;
    const pct = (done / checks.length) * 100;
    if ($('progressFill')) $('progressFill').style.width = pct + '%';
    if ($('progressText')) $('progressText').textContent = done === checks.length ? '✓ הכל מוכן!' : `${done}/${checks.length} שלבים`;
}

function checkAlerts() {
    const alerts = $('alerts');
    if (!alerts) return;
    const items = [];
    const startDate = $('tripDateStart')?.value;
    if (startDate) {
        const daysUntil = Math.ceil((new Date(startDate) - new Date()) / 86400000);
        if (daysUntil > 0 && daysUntil <= 14) items.push({ icon: '⏰', text: `נשארו ${daysUntil} ימים לטיסה!`, type: 'warning' });
        if (daysUntil > 30 && daysUntil <= 60) items.push({ icon: '💡', text: 'עוד זמן - שווה להשוות מחירים', type: 'tip' });
    }
    const budget = getVal('tripBudget');
    if (budget > 0 && currentTotal > budget) items.push({ icon: '💰', text: `חרגת ב-$${fmt(currentTotal - budget)}!`, type: 'error' });
    if (items.length) { alerts.innerHTML = items.map(a => `<div class="alert-item ${a.type}"><span class="alert-icon">${a.icon}</span><span>${a.text}</span></div>`).join(''); alerts.classList.add('show'); }
    else alerts.classList.remove('show');
}

// ============ WHATSAPP - ENHANCED ============
function buildWhatsAppMessage() {
    const tripName = $('tripName')?.value?.trim() || 'החופשה שלנו';
    const destName = state.destination ? DEST_NAMES[state.destination] : '';
    const startDate = $('tripDateStart')?.value;
    const endDate = $('tripDateEnd')?.value;
    const t = state.travelers, d = state.days, r = state.rate || 3.50;
    const pp = currentTotal / t;
    
    let dateStr = '';
    if (startDate) {
        const start = new Date(startDate);
        const startF = start.toLocaleDateString('he-IL', { day: 'numeric', month: 'short' });
        if (endDate) {
            const end = new Date(endDate);
            const endF = end.toLocaleDateString('he-IL', { day: 'numeric', month: 'short', year: 'numeric' });
            dateStr = `${startF} - ${endF}`;
        } else { dateStr = startF; }
    }
    
    let msg = `✈️ *${tripName}*`;
    if (destName) msg += ` ל${destName}`;
    msg += '\n━━━━━━━━━━━━━━\n';
    msg += `👥 *נוסעים:* ${t}\n`;
    msg += `📅 *ימים:* ${d}`;
    if (dateStr) msg += ` (${dateStr})`;
    msg += '\n━━━━━━━━━━━━━━\n';
    msg += `💰 *סה״כ:* $${fmt(currentTotal)} (₪${fmt(currentTotal * r)})\n`;
    msg += `👤 *לאדם:* $${fmt(pp)} (₪${fmt(pp * r)})\n`;
    
    const budget = getVal('tripBudget');
    if (budget > 0) {
        if (currentTotal <= budget) msg += `✅ *בתקציב!* נשארו $${fmt(budget - currentTotal)}\n`;
        else msg += `⚠️ *חריגה:* $${fmt(currentTotal - budget)} מעל\n`;
    }
    msg += '━━━━━━━━━━━━━━\n';
    msg += '🤖 _מחשבון חופשה AI_';
    return msg;
}

function updateShareLink() {
    const params = new URLSearchParams({ t: state.travelers, d: state.days, dest: state.destination || '', total: Math.round(currentTotal) });
    const url = window.location.origin + window.location.pathname + '?' + params.toString();
    const wa = $('waShareBtn');
    if (wa) { const text = buildWhatsAppMessage() + '\n\n' + url; wa.href = `https://wa.me/?text=${encodeURIComponent(text)}`; }
}

function shareWhatsApp() { triggerHumor('share'); const wa = $('waShareBtn'); if (wa) { wa.click(); showToast('📤 נפתח WhatsApp...'); } }

function copyLink() {
    triggerHumor('share');
    const params = new URLSearchParams({ t: state.travelers, d: state.days, dest: state.destination || '', total: Math.round(currentTotal) });
    const url = window.location.origin + window.location.pathname + '?' + params.toString();
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(url).then(() => showToast('✓ הקישור הועתק!')).catch(() => fallbackCopy(url));
    } else { fallbackCopy(url); }
}

function fallbackCopy(text) {
    const ta = document.createElement('textarea');
    ta.value = text; ta.style.cssText = 'position:fixed;opacity:0';
    document.body.appendChild(ta); ta.select();
    try { document.execCommand('copy'); showToast('✓ הקישור הועתק!'); } catch(e) { showToast('❌ לא ניתן להעתיק'); }
    document.body.removeChild(ta);
}

function showToast(msg) {
    const old = document.querySelector('.toast'); if (old) old.remove();
    const toast = document.createElement('div'); toast.className = 'toast'; toast.textContent = msg;
    document.body.appendChild(toast);
    setTimeout(() => toast.classList.add('show'), 50);
    setTimeout(() => { toast.classList.remove('show'); setTimeout(() => toast.remove(), 300); }, 2000);
}

// ============ STATE ============
function saveState() {
    try {
        const data = { state, mealPrices, attrPrices, inputs: {} };
        ['dealCost', 'flightCost', 'hotelCost', 'trolleyCost', 'luggageCost', 'transferCost', 'cancelInsCost', 'healthDaily', 'carDaily', 'publicDaily', 'uberDaily', 'simCost', 'shoppingCost', 'tripBudget', 'tripName', 'tripPlanner', 'tripDateStart', 'tripDateEnd', 'rateInput', 'mealOtherCost', 'attrOtherCost'].forEach(id => { if ($(id)) data.inputs[id] = $(id).value; });
        ['checkTrolley', 'checkLuggage', 'checkTransfer', 'checkCancelIns', 'checkHealthIns', 'checkCar', 'checkPublic', 'checkUber', 'checkSim', 'checkShopping'].forEach(id => { if ($(id)) data.inputs[id] = $(id).checked; });
        sessionStorage.setItem('vacationCalc', JSON.stringify(data));
    } catch(e) {}
}

function loadState() {
    try {
        const params = new URLSearchParams(window.location.search);
        if (params.has('t')) { state.travelers = parseInt(params.get('t')) || 2; state.days = parseInt(params.get('d')) || 5; state.destination = params.get('dest') || null; return; }
        const saved = sessionStorage.getItem('vacationCalc');
        if (saved) {
            const data = JSON.parse(saved);
            Object.assign(state, data.state); Object.assign(mealPrices, data.mealPrices || {}); Object.assign(attrPrices, data.attrPrices || {});
            Object.entries(data.inputs || {}).forEach(([id, val]) => { const el = $(id); if (el) { if (typeof val === 'boolean') el.checked = val; else el.value = val; } });
            const nameField = $('tripName'); 
            const plannerField = $('tripPlanner');
            if (nameField && nameField.value) currentSpecialUser = checkSpecialUser(nameField.value);
            if (!currentSpecialUser && plannerField && plannerField.value) currentSpecialUser = checkSpecialUser(plannerField.value);
        }
    } catch(e) {}
}

function restoreUIState() {
    if (state.destination) {
        document.querySelectorAll('.dest-btn').forEach(b => b.classList.toggle('active', b.dataset.dest === state.destination));
        const tip = $('destTip'); if (tip) { tip.textContent = DEST_TIPS[state.destination] || ''; tip.style.display = 'block'; }
        updatePrices();
    }
    updateTravelersButtons(state.travelers);
    updateDaysButtons(state.days);
    document.querySelectorAll('[data-booking]').forEach(b => b.classList.toggle('active', b.dataset.booking === state.bookingType));
    $('dealSection')?.classList.toggle('show', state.bookingType === 'deal');
    $('separateSection')?.classList.toggle('show', state.bookingType === 'separate');
    Object.keys(state.meals).forEach(m => { if (state.meals[m]) document.querySelector(`[data-meal="${m}"]`)?.classList.add('active'); });
    // Only show mealCustom if state.meals.other is explicitly true
    const mealCustom = $('mealCustom');
    if (mealCustom) {
        if (state.meals.other === true) {
            mealCustom.style.display = 'block';
            mealCustom.classList.add('show');
        } else {
            mealCustom.style.display = 'none';
            mealCustom.classList.remove('show');
        }
    }
    Object.keys(state.attrs).forEach(a => { if (state.attrs[a]) document.querySelector(`[data-attr="${a}"]`)?.classList.add('active'); });
    // Only show attrCustom if state.attrs.other is explicitly true
    const attrCustom = $('attrCustom');
    if (attrCustom) {
        if (state.attrs.other === true) {
            attrCustom.style.display = 'block';
            attrCustom.classList.add('show');
        } else {
            attrCustom.style.display = 'none';
            attrCustom.classList.remove('show');
        }
    }
    ['trolley', 'luggage', 'transfer', 'cancelIns', 'healthIns', 'car', 'public', 'uber', 'sim', 'shopping'].forEach(name => {
        const cb = $('check' + name.charAt(0).toUpperCase() + name.slice(1));
        if (cb?.checked) { $(name + 'Toggle')?.classList.add('active'); $(name + 'Content')?.classList.add('show'); }
    });
}

function resetAll() { if (confirm('האם לאפס את כל הנתונים?')) { sessionStorage.removeItem('vacationCalc'); location.reload(); } }
