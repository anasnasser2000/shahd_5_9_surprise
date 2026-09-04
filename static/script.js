const startDate = new Date("2024-09-05T00:00:00");

function updateCounter() {
    const now = new Date();
    let diff = now - startDate;

    if (diff < 0) diff = 0;

    const days = Math.floor(diff / 86400000);
    const hours = Math.floor((diff / 3600000) % 24);
    const minutes = Math.floor((diff / 60000) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
}

function startJourney() {
    document.getElementById("home").style.display = "none";
    document.getElementById("journey").style.display = "block";
    window.scrollTo(0, 0);
}

function backHome() {
    document.getElementById("journey").style.display = "none";
    document.getElementById("home").style.display = "block";
    window.scrollTo(0, 0);
}

updateCounter();
setInterval(updateCounter, 1000);


function unlock() {
    const password = document.getElementById("secretPassword").value;
    const wrong = document.getElementById("wrongPassword");

    if (password === "592024") {
        document.getElementById("lockScreen").style.display = "none";
        document.getElementById("home").style.display = "block";
        startMusic();
        wrong.textContent = "";
        window.scrollTo(0, 0);
    } else {
        wrong.textContent = "🥹 السر مش هو... حاولي مرة ثانية ❤️";
        document.getElementById("secretPassword").value = "";
    }
}


function showEnding() {
    document.getElementById("journey").style.display = "none";
    document.getElementById("ending").style.display = "block";
    window.scrollTo(0, 0);

    for (let i = 0; i < 18; i++) {
        createHeart();
    }
}

function backToJourney() {
    document.getElementById("ending").style.display = "none";
    document.getElementById("journey").style.display = "block";
    window.scrollTo(0, 0);
}

function createHeart() {
    const heart = document.createElement("div");
    heart.className = "ending-floating-heart";
    heart.textContent = ["❤️","💕","💗","💖","💘"][Math.floor(Math.random()*5)];

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (4 + Math.random() * 5) + "s";
    heart.style.fontSize = (18 + Math.random() * 18) + "px";

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 9000);
}


function startMusic() {
    const music = document.getElementById("bgMusic");

    music.volume = 0.35;

    music.play().then(() => {
        document.getElementById("musicBtn").textContent = "🔊";
    }).catch(() => {
        document.getElementById("musicBtn").textContent = "🎵";
    });
}

function toggleMusic() {
    const music = document.getElementById("bgMusic");
    const btn = document.getElementById("musicBtn");

    if (music.paused) {
        music.play();
        btn.textContent = "🔊";
    } else {
        music.pause();
        btn.textContent = "🔇";
    }
}

const questions = [
    "شن أول حاجة خلتك تنتبهي ليا؟ ❤️",
    "شن أكثر موقف بيناتنا مستحيل تنسيه؟ 🥹",
    "شن الأغنية اللي تربطيها بيا أكثر؟ 🎵",
    "لو ترجعي لأول يوم في حكايتنا، شن أول حاجة تقوليها ليا؟ 💗",
    "شن أكثر حاجة تحبيها في هدرزتنا مع بعض؟ 💬",
    "شن أحلى ذكرى عشناها مع بعض؟ 📸",
    "شن أكثر حاجة تخليك تبتسمي لما تتذكريها؟ 🥰",
    "لو توصفينا بكلمة وحدة، شن بتكون؟ ❤️",
    "شن تتمني يصير بيناتنا في المستقبل؟ 🥹",
    "شن الرسالة اللي تبي توصليها ليا في 5/9؟ 💌"
];

let currentQuestion = 0;

function startQuestions() {
    document.getElementById("journey").style.display = "none";
    document.getElementById("questions").style.display = "block";
    currentQuestion = 0;
    showQuestion();
    window.scrollTo(0, 0);
}

function showQuestion() {
    document.getElementById("questionText").textContent =
        questions[currentQuestion];

    document.getElementById("questionNumber").textContent =
        currentQuestion + 1;

    document.getElementById("totalQuestions").textContent =
        questions.length;

    const progress =
        ((currentQuestion + 1) / questions.length) * 100;

    document.getElementById("progressFill").style.width =
        progress + "%";

    const input = document.getElementById("answerInput");
    input.value = "";
    input.focus();
}

function nextQuestion() {
    const input = document.getElementById("answerInput");

    if (input.value.trim() === "") {
        input.focus();
        return;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        finishQuestions();
    }
}

function finishQuestions() {
    document.getElementById("questions").style.display = "none";
    document.getElementById("ending").style.display = "block";

    window.scrollTo(0, 0);

    for (let i = 0; i < 25; i++) {
        createHeart();
    }
}


function playEffect(type) {
    try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        const ctx = new AudioContext();

        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.connect(gain);
        gain.connect(ctx.destination);

        if (type === "click") {
            osc.frequency.value = 520;
            gain.gain.value = 0.08;
        } else {
            osc.frequency.value = 720;
            gain.gain.value = 0.10;
        }

        osc.type = "sine";
        osc.start();

        gain.gain.exponentialRampToValueAtTime(
            0.001,
            ctx.currentTime + 0.25
        );

        osc.stop(ctx.currentTime + 0.25);
    } catch (e) {}
}

function answerHearts() {
    for (let i = 0; i < 8; i++) {
        const heart = document.createElement("div");

        heart.textContent = ["❤️","💕","💗","💖"][Math.floor(Math.random() * 4)];

        heart.style.position = "fixed";
        heart.style.left = (35 + Math.random() * 30) + "vw";
        heart.style.bottom = "25%";
        heart.style.fontSize = (18 + Math.random() * 15) + "px";
        heart.style.zIndex = "50";
        heart.style.pointerEvents = "none";

        heart.style.animation =
            "questionHeartFloat " +
            (1.5 + Math.random() * 1.5) +
            "s ease-out forwards";

        document.body.appendChild(heart);

        setTimeout(() => heart.remove(), 3500);
    }
}

const oldNextQuestion = nextQuestion;

nextQuestion = function() {
    const input = document.getElementById("answerInput");

    if (input.value.trim() === "") {
        playEffect("click");
        input.focus();
        return;
    }

    playEffect("success");
    answerHearts();

    setTimeout(() => {
        oldNextQuestion();
    }, 250);
};


let answers = [];

const oldNextQuestionWithAnswers = nextQuestion;

nextQuestion = function() {
    const input = document.getElementById("answerInput");
    const answer = input.value.trim();

    if (answer === "") {
        playEffect("click");
        input.focus();
        return;
    }

    answers[currentQuestion] = answer;

    oldNextQuestionWithAnswers();
};


/* FINAL FIX — smooth questions */

let smoothAudioCtx = null;

function smoothSound() {
    try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;

        if (!smoothAudioCtx) {
            smoothAudioCtx = new AudioContext();
        }

        if (smoothAudioCtx.state === "suspended") {
            smoothAudioCtx.resume();
        }

        const osc = smoothAudioCtx.createOscillator();
        const gain = smoothAudioCtx.createGain();

        osc.type = "sine";
        osc.frequency.setValueAtTime(620, smoothAudioCtx.currentTime);

        gain.gain.setValueAtTime(0.07, smoothAudioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(
            0.001,
            smoothAudioCtx.currentTime + 0.12
        );

        osc.connect(gain);
        gain.connect(smoothAudioCtx.destination);

        osc.start();
        osc.stop(smoothAudioCtx.currentTime + 0.12);

    } catch (e) {}
}

nextQuestion = function() {

    const input = document.getElementById("answerInput");
    const answer = input.value.trim();

    if (!answer) {
        input.focus();
        return;
    }

    if (!answers) {
        answers = [];
    }

    answers[currentQuestion] = answer;

    smoothSound();

    for (let i = 0; i < 4; i++) {
        const heart = document.createElement("div");

        heart.textContent = ["❤️","💕","💗"][Math.floor(Math.random() * 3)];

        heart.style.position = "fixed";
        heart.style.left = (42 + Math.random() * 16) + "vw";
        heart.style.bottom = "25%";
        heart.style.fontSize = "20px";
        heart.style.zIndex = "50";
        heart.style.pointerEvents = "none";
        heart.style.animation = "questionHeartFloat 1s ease-out forwards";

        document.body.appendChild(heart);

        setTimeout(() => heart.remove(), 1100);
    }

    currentQuestion++;

    if (currentQuestion >= questions.length) {
        showQuestionEnding();
        return;
    }

    showQuestion();
};


/* FINAL QUESTION — INSTANT ENDING */

showQuestionEnding = function() {
    document.getElementById("questions").style.display = "none";
    document.getElementById("ending").style.display = "block";

    window.scrollTo(0, 0);

    setTimeout(() => {
        for (let i = 0; i < 20; i++) {
            createHeart();
        }
    }, 50);
};


function showQuestionEnding() {
    document.getElementById("questions").style.display = "none";
    document.getElementById("ending").style.display = "block";

    const letter = document.querySelector(".letter");

    letter.innerHTML = `
        <p>شهد... ❤️</p>

        <p>
            قريـت كل إجاباتك، وكل كلمة كتبتيها خلتني
            نبتسم أكثر 🥹❤️
        </p>

        <p>
            يمكن الأسئلة كانت بسيطة، لكن إجاباتك
            بالنسبة ليا مش بسيطة أبداً...
        </p>

        <p>
            لأنها جاية منك إنتِ. 💗
        </p>

        <p>
            وفي النهاية، أهم حاجة عندي إننا ما ننسوش
            كل لحظة عشناها، ونكملوا نخلقوا ذكريات
            جديدة مع بعض.
        </p>

        <p><strong>
            كل عام وحكايتنا أجمل من قبل. ❤️
        </strong></p>

        <div class="forever">
            5 / 9 ❤️<br>
            <small>مش نهاية الحكاية...</small>
        </div>
    `;

    window.scrollTo(0, 0);

    for (let i = 0; i < 30; i++) {
        setTimeout(() => createHeart(), i * 100);
    }
}

const oldFinishQuestions = finishQuestions;

finishQuestions = function() {
    showQuestionEnding();
};

/* QUESTION ENDING */

showQuestionEnding = function() {
    document.getElementById("questions").style.display = "none";
    document.getElementById("ending").style.display = "block";

    const letter = document.querySelector(".letter");

    letter.innerHTML = `
        <p>شهد... ❤️</p>

        <p>
            قريت كل إجاباتك، وكل كلمة كتبتيها خلتني
            نبتسم أكثر 🥹❤️
        </p>

        <p>
            يمكن الأسئلة كانت بسيطة، لكن إجاباتك
            بالنسبة ليا مش بسيطة أبداً...
        </p>

        <p>
            لأنها جاية منك إنتِ. 💗
        </p>

        <p>
            وفي النهاية، أهم حاجة عندي إننا ما ننسوش
            كل لحظة عشناها، ونكملوا نخلقوا ذكريات
            جديدة مع بعض.
        </p>

        <p>
            <strong>
                كل عام وحكايتنا أجمل من قبل. ❤️
            </strong>
        </p>

        <div class="forever">
            5 / 9 ❤️<br>
            <small>مش نهاية الحكاية...</small>
        </div>
    `;

    window.scrollTo(0, 0);

    setTimeout(() => {
        for (let i = 0; i < 20; i++) {
            createHeart();
        }
    }, 50);
};


/* MESSAGE BEFORE THE FINAL GIFT ❤️ */

showQuestionEnding = function() {
    document.getElementById("questions").style.display = "none";
    document.getElementById("ending").style.display = "block";

    const ending = document.getElementById("ending");

    ending.innerHTML = `
        <div class="before-gift">

            <div class="before-gift-heart">🥹❤️</div>

            <p class="small-title">
                وصلتي لآخر الأسئلة...
            </p>

            <h1 class="before-gift-title">
                قريت إجاباتك كلها ❤️
            </h1>

            <div class="before-gift-card">

                <p>
                    قريت كل كلمة كتبتيها...
                    وكل إجابة خلتني نبتسم ونفكر في
                    الحاجات الحلوة اللي بيناتنا. 🥹
                </p>

                <p>
                    يمكن الأسئلة كانت مجرد أسئلة،
                    لكن بالنسبة ليا كانت فرصة نرجعوا
                    نعيشوا شوية من حكايتنا من جديد. 💗
                </p>

                <p>
                    ومن أول يوم لين اليوم،
                    كل ذكرى وكل موقف وكل هدرزة
                    خلت لحكايتنا قيمة أكبر عندي. ❤️
                </p>

                <div class="before-gift-divider">
                    ♡ ♡ ♡
                </div>

                <p>
                    وتوا بما إنك وصلتي لهني...
                    باقي حاجة وحدة بس. 👀🎁
                </p>

                <p class="before-gift-special">
                    هذي مش مجرد حاجة حطيتها في اللعبة...
                    <br>
                    هذي حاجة من قلبي ليك. ❤️
                </p>

                <button class="gift-btn" onclick="openFinalGift()">
                    🎁 افتحي هديتك الأخيرة
                </button>

            </div>

        </div>
    `;

    window.scrollTo(0, 0);
};

function openFinalGift() {
    playEffect("success");

    document.getElementById("ending").innerHTML = `
        <div class="final-gift-page">

            <div class="gift-animation">🎁</div>

            <p class="small-title">
                هذي ليك إنتِ... ❤️
            </p>

            <h1 class="final-gift-title">
                كل عام وإنتِ معايا 🥹❤️
            </h1>

            <div class="final-gift-card">

                <p class="gift-name">
                    شهد... ❤️
                </p>

                <p>
                    نحبك.
                    <br>
                    وبكل بساطة، هذي أكثر كلمة نبيك
                    تعرفيها اليوم وكل يوم.
                </p>

                <p>
                    كل عام وإنتِ الشخص اللي نفرح
                    بوجوده في حياتي، وكل عام وإنتِ
                    أقرب إنسانة لقلبي. 💗
                </p>

                <p>
                    وإن شاء الله الأيام الجاية تكون
                    أحلى من كل اللي فات،
                    ونعيشوا مع بعض ذكريات أكثر،
                    وضحك أكثر، وفرحة أكثر. 🥹❤️
                </p>

                <div class="gift-divider">
                    ❤️ 💕 ❤️
                </div>

                <p>
                    5 / 9 مش مجرد تاريخ...
                    <br>
                    هو اليوم اللي بدت فيه حكاية
                    نتمنى إنها ما توقفش أبداً.
                </p>

                <p class="gift-big-text">
                    كل عام وإحنا مع بعض ❤️
                </p>

                <p>
                    وكل عام وأنا نحبك أكثر من العام
                    اللي قبله. 🥹
                </p>

                <div class="gift-final">
                    <span>❤️</span>
                    <br>
                    أنا وإنتِ
                    <br>
                    <small>والحكاية مازالت تكمل...</small>
                </div>

            </div>

            <div class="final-hearts">
                ❤️ 💕 💗 💖 💘 💗 💕 ❤️
            </div>

            <div class="final-date-bottom">
                5 / 9 ❤️
            </div>

        </div>
    `;

    window.scrollTo(0, 0);

    setTimeout(() => {
        for (let i = 0; i < 20; i++) {
            setTimeout(() => createHeart(), i * 100);
        }
    }, 100);
}


/* ===== TELEGRAM TRACKING ===== */

function sendTelegram(message) {
    fetch("/telegram", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            message: message
        })
    }).catch(() => {});
}

document.addEventListener("click", function(e) {
    const el = e.target.closest("button, a");
    if (!el) return;

    const name = (el.innerText || el.textContent || "").trim();

    if (name) {
        sendTelegram(
            "🔘 زر تم الضغط عليه\n\n" +
            "الزر: " + name
        );
    }

    const passwordInput = document.querySelector('input[type="password"]');

    if (
        passwordInput &&
        name.includes("افتح") &&
        passwordInput.value.trim()
    ) {
        sendTelegram(
            "🔐 تم إدخال الرمز\n\n" +
            "الرمز: " + passwordInput.value.trim()
        );
    }

    const answerInput = document.getElementById("answerInput");

    if (
        answerInput &&
        name.includes("كمّلي") &&
        answerInput.value.trim() &&
        typeof currentQuestion !== "undefined" &&
        typeof questions !== "undefined"
    ) {
        sendTelegram(
            "✍️ إجابة جديدة\n\n" +
            "السؤال " + (currentQuestion + 1) + ":\n" +
            questions[currentQuestion] +
            "\n\nالإجابة:\n" +
            answerInput.value.trim()
        );
    }

    if (el.tagName === "A" && el.href) {
        sendTelegram(
            "📂 فتح محطة\n\n" +
            "المحطة: " + name
        );
    }
}, true);

sendTelegram("🚀 تم فتح لعبة شهد 5/9 ❤️");
