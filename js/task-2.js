//formatMessage(message, maxLength) adında bir işlev(fonksiyon) ilan et, bu işlev bir dizeyi(string) (message parametresi) alır ve maksimum uzunluğa (maxLength parametresi) göre uzunluğunu kontrol eder.
//Fonksiyon kodunu aşağıdaki gibi tamamla:

//Dize uzunluğu maxLength'e eşit veya daha kısa ise, işlev değişiklik yapmadan orijinal diziyi döndürür.
//Eğer uzunluk maxLength'i aşıyorsa, işlev diziyi maxLength karaktere kadar kısaltır, sonuna üç nokta "..." ekler ve kısaltılmış versiyonu döndürür.


function formatMessage(message, maxLength){
    
    if (message.length<=maxLength){
        return message;
    }else{
        return message.substring(0, maxLength) + "..."; 
    }

}


console.log(formatMessage("Curabitur ligula sapien", 16)); // "Curabitur ligula..."
console.log(formatMessage("Curabitur ligula sapien", 23)); // "Curabitur ligula sapien"
console.log(formatMessage("Vestibulum facilisis purus nec", 20)); // "Vestibulum facilisis..."
console.log(formatMessage("Vestibulum facilisis purus nec", 30)); // "Vestibulum facilisis purus nec"
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15)); // "Nunc sed turpis..."
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41)); // "Nunc sed turpis a felis in nunc fringilla"