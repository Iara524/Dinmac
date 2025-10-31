
document.getElementById("whatsappIcon").addEventListener("click", function () {
    // Número en formato internacional SIN signos, espacios ni +
    const numero = "541168742472"; 
    const mensaje = encodeURIComponent("Hola Diego,vengo del sitio web de DINMAC.");
    window.location.href = `https://wa.me/${numero}?text=${mensaje}`;
});


