"use strict";
const tc = document.getElementById("#tcInput");
const btn = document.getElementById("btn");
const p = document.getElementById("sonuc");
const check = (x) => {
<<<<<<< HEAD
    let a = ((+x[1] + +x[3] + +x[7] + +x[9]) * 7 - +x[2] - +x[4] - +x[6] - +x[8]) % 10;
    if (!(a == +x[10])) {
        return alert("TC numarsı geçersizdir");
    }
};
=======
    let a = ((+x[0] + +x[2] + +x[4] + +x[6] + +x[8]) * 7 -
        (+x[1] + +x[3] + +x[5] + +x[7])) %
        10;
    if (a !== +x[9]) {
        alert("TC numarası geçersizdir");
    }
    else {
        let b = 0;
        for (let i = 0; i < 10; i++) {
            b += +x[i];
        }
        b = b % 10;
        if (b !== +x[10]) {
            alert("Tc kimlik numarası geçersizdir");
        }
        else {
            alert("TC kimlik numarası gecerlidir");
        }
    }
};
btn.addEventListener("click", () => {
    const inputValue = tc.value;
    check(inputValue);
    p.innerText = "Sonuç: Kontrol ediliyor...";
});
>>>>>>> 6c21478344d78c1c67123834d44b4058374271d4
