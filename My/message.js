function testCont() {
    if (form1.FIO.value == "") {
        form1.FIO.select();
        alert ("Введите Имя");
        return false;
    }

    if (form1.EMail.value == "") {
        form1.EMail.select();
        alert ("Введите E-mail");
        return false;
    }

    if (form1.EMail.value.indexOf("@") <= 0 || form1.EMail.value.indexOf("@") == form1.EMail.value.length - 1 ) {
        form1.EMail.select();
        alert ("Введите корректный E-mail");
        return false;
        }
    return true;
}
