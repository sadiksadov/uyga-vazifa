let ism = prompt("Ismingizni kiritng:")
let harf = prompt("Ismingizdagi bironta harfni kiriting:")


if (ism && harf) {
    if (ism.toLowerCase().includes(harf.toLowerCase())) {
        alert("bu ahrf ismingizda bor!")
    } else {
        alert("bu harf ismingizda yoq!")
    }
} 