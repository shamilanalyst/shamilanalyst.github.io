// JavaScript source code
// İletişim formu gönderildiğinde çalışacak fonksiyon
function submitForm(event) {
    event.preventDefault(); // Formun otomatik olarak gönderilmesini engelle

    // Form bilgilerini al
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Form bilgilerini kullanarak istediğiniz işlemi yapabilirsiniz
    console.log('Name: ' + name);
    console.log('Email: ' + email);
    console.log('Message: ' + message);

    // Formu temizle
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
}

// Form gönderme işlemi için submit eventini dinleyin
var form = document.querySelector('form');
form.addEventListener('submit', submitForm);
