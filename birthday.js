function showPage(pageId) {

    document
        .querySelectorAll(".page")
        .forEach(page => {

            page.classList.add("hidden");

        });

    document
        .getElementById(pageId)
        .classList.remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


function openBirthday() {

    const envelope =
        document.querySelector(".envelope");

    envelope.classList.add("open");


    // Start music after user interaction.
    const music =
        document.getElementById("bgMusic");

    music.volume = 0.35;

    music
        .play()
        .catch(() => {

            console.log(
                "Music could not autoplay."
            );

        });


    setTimeout(() => {

        showPage("introPage");

    }, 1500);
}


function showMemories() {

    showPage("memoryPage");
}


function showLetter() {

    showPage("letterPage");
}


function showFinalPage() {

    showPage("finalPage");

    createConfetti();
}


function createConfetti() {

    const symbols = [
        "❤️",
        "🌷",
        "🌸",
        "✨"
    ];


    for (let i = 0; i < 50; i++) {

        const item =
            document.createElement("div");

        item.classList.add("confetti");

        item.innerText =
            symbols[
                Math.floor(
                    Math.random()
                    * symbols.length
                )
            ];

        item.style.left =
            Math.random() * 100 + "vw";

        item.style.animationDuration =
            (
                Math.random() * 3 + 3
            ) + "s";

        item.style.animationDelay =
            (
                Math.random() * 2
            ) + "s";

        document.body.appendChild(item);


        setTimeout(() => {

            item.remove();

        }, 7000);
    }
}

let specialLetterOpened = false;

function openSpecialLetter() {

    if (specialLetterOpened) {
        return;
    }

    specialLetterOpened = true;

    const envelope =
        document.getElementById("bigEnvelope");

    const hint =
        document.getElementById("openHint");

    envelope.classList.add("open");

    hint.style.opacity = "0";


    setTimeout(() => {

        typeBirthdayLetter();

    }, 1500);
}


function typeBirthdayLetter() {

    const message =
        "Happy Birthday Mom. "
        + "Thank you for always being there for me, "
        + "for caring for our family, "
        + "and for loving us more than words can explain. "
        + "You have always been one of the strongest "
        + "and kindest people in my life. "
        + "I hope this year brings you happiness, peace, "
        + "good health, and all the love you deserve. ❤️";


    const target =
        document.getElementById("typedMessage");


    let index = 0;


    const typing =
        setInterval(() => {

            target.textContent +=
                message.charAt(index);

            index++;


            if (index >= message.length) {

                clearInterval(typing);

                setTimeout(() => {

                    document
                        .getElementById("letterEnding")
                        .classList
                        .remove("hidden-letter-content");

                }, 700);
            }

        }, 35);
}