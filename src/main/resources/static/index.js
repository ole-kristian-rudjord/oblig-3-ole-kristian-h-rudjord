$(() => {
    $("#kjop-billet-btn").on("click", function () {
        let inputMissing = false;
        if ($("#film-dropdown option:selected").val() === "") {
            $("#film-varsel").html("Vennligst velg en film");
            inputMissing = true;
        } else {
            $("#film-varsel").html("");
        }
        if ($("#antall-input").val() === "") {
            $("#antall-varsel").html("Velg antall billetter som skal kjøpes");
            inputMissing = true;
        } else {
            $("#antall-varsel").html("");
        }
        if ($("#fornavn-input").val() === "") {
            $("#fornavn-varsel").html("Skriv inn fornavn");
            inputMissing = true;
        } else {
            $("#fornavn-varsel").html("");
        }
        if ($("#etternavn-input").val() === "") {
            $("#etternavn-varsel").html("Skriv inn etternavn");
            inputMissing = true;
        } else {
            $("#etternavn-varsel").html("");
        }
        if ($("#telefonnr-input").val() === "") {
            $("#telefonnr-varsel").html("Skriv inn telefonnr");
            inputMissing = true;
        } else {
            $("#telefonnr-varsel").html("");
        }
        if ($("#epost-input").val() === "") {
            $("#epost-varsel").html("Skriv inn epost");
            inputMissing = true;
        } else {
            $("#epost-varsel").html("");
        }
        if (!inputMissing) {
            $('#result').html('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/dQw4w9WgXcQ?controls=0&autoplay=1" frameborder="0" allow="autoplay;" allowfullscreen></iframe>');
            setTimeout(function () {
                $('#result').css('opacity', '1');
            }, 300);
        }
    });
});