
    function getRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    var str = "";
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";

    window.onload = function () {
        var container = document.getElementById("container");

        // 在容器中隨機插入1至3個字元
        for (let i = 0; i < getRandom(1, 3); i++) {
            let rnum = Math.floor(Math.random() * characters.length);
            container.textContent += characters.substring(rnum, rnum + 1);
        }

        window.addEventListener("keydown", function (e) {
            let firstChar = container.textContent[0];

            // 比較用戶輸入的字元與容器中的第一個字元是否相等
            if (e.key === firstChar) {
                // 如果相等，消除容器中的第一個字元
                container.textContent = container.textContent.slice(1);
            }

            // 產生新的隨機字元並添加到容器中
           if (str.length<5){
            for (let j = 0; j < getRandom(1, 3); j++) {
                var key_up_num = Math.floor(Math.random() * characters.length);
                container.textContent += characters.substring(key_up_num, key_up_num + 1);
            }
        }
        });
    };
