const PASSWORD = "592024";

function unlock() {
    const input = document.getElementById("password");
    const error = document.getElementById("error");
    const lock = document.getElementById("lockScreen");
    const start = document.getElementById("startScreen");

    if (!input) return;

    if (input.value === PASSWORD) {
        lock.classList.add("hidden");
        start.classList.remove("hidden");
        error.textContent = "";
    } else {
        error.textContent = "الرمز مش صحيح ❤️";
        input.value = "";
        input.focus();
    }
}

function startJourney() {
    document.body.innerHTML = `
        <div class="journey">
            <div class="heart-fall">❤️</div>
            <div class="heart-fall h2">💕</div>
            <div class="heart-fall h3">💗</div>

            <div class="journey-card">
                <div class="small-title">إلى أ. شهد المزوغي ❤️</div>

                <h1>قبل ما نكملوا...</h1>

                <p class="date">
                    5 / 9 / 2024<br>
                    الساعة 9:05 مساءً
                </p>

                <div class="line"></div>

                <p>
                    في الوقت هذا بالضبط، بدت حكاية ما كنتش نعرف
                    وقتها إنها بتولي من أجمل الحاجات اللي صارتلي...
                </p>

                <p>
                    اليوم مش مجرد ذكرى، واليوم مش مجرد تاريخ مكتوب.
                    اليوم ذكرى بداية عامين من الحكايات،
                    والضحك، والزعل، والمصالحة، واللحظات اللي مستحيل ننساها.
                </p>

                <p>
                    وشهد... قبل ما نوريك كل شيء مجهز ليك،
                    نبيك تمشي معاي خطوة بخطوة ❤️
                </p>

                <button class="next-btn" onclick="nextStep()">
                    كملي معاي ❤️
                </button>
            </div>
        </div>
    `;
}

function nextStep() {
    document.body.innerHTML = `
        <div class="journey">
            <div class="journey-card">
                <div class="small-title">الخطوة الأولى 💕</div>

                <h1>تتذكري البداية؟</h1>

                <p>
                    مش مهم شن صار في أول يوم بالضبط...
                    المهم إن من يومها بدت صفحة جديدة في حياتي.
                </p>

                <p>
                    ومع مرور الوقت، الصفحة هذي ما بقتش صفحة عادية...
                    ولات فيها صور، كلام، ضحك، أسرار، مواقف،
                    وأشياء صغيرة يمكن عند غيرنا عادية...
                    لكن عندي أنا غالية واجد.
                </p>

                <div class="memory-date">
                    ❤️ 05 • 09 • 2024 ❤️
                </div>

                <p>
                    وتوا بعد عامين...
                    نبيك تشوفي الحكاية كيفاش كانت من البداية
                    لين وصلت لليوم.
                </p>

                <button class="next-btn" onclick="showComing()">
                    نشوف الذكريات 📸
                </button>
            </div>
        </div>
    `;
}

function showComing() {
    document.body.innerHTML = `
        <div class="journey">
            <div class="journey-card">
                <div class="small-title">ذكرياتنا 📸</div>

                <h1>هني تبدأ الحكاية...</h1>

                <p>
                    توا وصلنا للجزء اللي بنحطوا فيه صورنا
                    وفيديوهاتنا وذكرياتنا ❤️
                </p>

                <p>
                    وكل صورة بنخلوها تحكي جزء من الحكاية،
                    مش مجرد صورة وخلاص.
                </p>

                <button class="next-btn" onclick="location.reload()">
                    نرجع للبداية 🔄
                </button>
            </div>
        </div>
    `;
}
