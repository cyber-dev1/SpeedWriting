window.addEventListener("DOMContentLoaded", () => {
    "use strict"
    // Wariebles Start

    let btn = document.querySelector(".start_btn")
    let start_count = document.querySelector(".count")
    let randomGame = document.querySelector(".random_number")
    let count = document.querySelector(".count")
    let game_input = document.querySelector(".game_input")
    let result_game = document.querySelector(".result_game")
    let end = document.querySelector(".end")
    let game_text = document.querySelector(".text")
    let start_box = document.querySelector(".box")
    let max_true_words = 15;
    let true_words = 0;
    let game = document.querySelector(".control")
    let number = 5;

    // Wariebles end


    // Start  Count

    end.classList.add("d-none")
    game.classList.add("d-none")
    const handleStart = () => {
        let interval = setInterval(() => {
            if (number > 1) {
                number--
                count.textContent = number;
            } else {
                count.classList.add("d-none")
                clearInterval(interval)
                game.classList.remove("d-none")
                game.classList.add("d-block")
                start_game()
            }
        }, 1000)

    }

    // Start Count End


    start_count.classList.add("d-none")
    const handleClick = (event) => {
        event.target.classList.add("d-none")
        if (event.target.className.includes("d-none")) {
            start_count.classList.add("d-block")
            start_count.classList.remove("d-none")
            handleStart()
        }
    }

    // Game Start

    btn.addEventListener("click", handleClick)

    const words = [
        "hello",
        "world",
        "never",
        "hacking",
        "binali",
        "author",
        "ogabek",
        "developer",
        "important",
        "easy",
        "all",
        "proux",
        "reacjs",
        "red",
        "vue",
        "angular",
        "nextjs",
        "bootstrap",
        "backent",
        "frontend",
        "dificult",
        "action",
        "samarqand",
        "condition",
        "alphabet",
        "mortalcombat",
        "games",
        "desktop",
        "macbookpro",
        "account",
        "off",
        "on",
        "school",
        "pages",
        "interview",
        "linux",
        "pubg",
        "war",
        "lamborgini",
        "bugatti",
        "ronaldo",
        "khabib",
        "class",
        "classname",
        "oop",
        "forloop",
        "json",
        "heart",
        "text",
        "words",
        "long",
        "beautiful",
        "comfortable",
        "big",
        "telephone",
        "guard",
        "echoteropewtswithadultshouses",
        "show",
        "shadow",
        "fight",
        "typinggame",
        "i",
        "function",
        "gradus",
        "example",
        "mouse"

    ]
    let counter = 20;   //   < ---     Game Count
    const randomText = (words) => {
        let random = words[parseInt(Math.random() * words.length)]
        game_text.textContent = random.trim()
        return random
    }
    function start_game() {
        let gameInterval = setInterval(() => {
            if (counter > 0) {
                counter--;
                randomGame.textContent = counter;
            } else {
                clearInterval(gameInterval)
                randomGame.classList.add("d-none")
                game_input.readOnly = true;
                handleEnd(true_words)
                game.classList.add("d-none")
            }
        }, 1000)

        randomText(words)
    }
    const handleKey = (event) => {
        if (event.target.value.length) {
            if (event.target.value.trim() === game_text.textContent.trim()) {
                randomText(words)
                true_words++
                event.target.value = null
            }
        }
    }

    game_input.addEventListener("keyup", handleKey)

    // Game end

    // Result game Start

    function handleEnd(trues) {
        end.classList.remove("d-none")
        if (trues === max_true_words) {
            result_game.textContent = `Bal = ${trues} Sen eng yuqori balni olding tez yozarkansan  supper !`
        } else if (trues === 0) {
            result_game.textContent = `bal = ${trues} bizni lox deb uylashadi aslida sizlar uqiyotgan kitobni men yozganman `
        } else if (trues < 3) {
            result_game.textContent = `bal = ${trues} san yana shu uyinni uynayapsanmi tur yuqol`
        } else if (trues < 5) {
            result_game.textContent = `Bal = ${trues} bratishka san yozolmasekansan uynab nima qilasan  undan kura darsingni qil`
        } else if ((max_true_words / 2) > trues) {
            result_game.textContent = `Bal = ${trues} yaxshi yomon emas dasturlashga buladi :) `
        }
        window.addEventListener("click", (event) => {
            if (event.target.matches(".restart")) {
                window.location.reload()
            }
        })
        // Result  game End 
    }

})
// Speed Writing end  Game is SuccessFull :)