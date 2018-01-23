function rseed() {

    var TRYTE_ALPHABET = "9ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var SEED_LEN = 81;
    var SEED = "";

    for (var i = 0; i < SEED_LEN; i++) {

        SEED += TRYTE_ALPHABET.charAt(Math.floor(Math.random() * TRYTE_ALPHABET.length));

    }

    $( "input.rsg" ).replaceWith( "<h5 style='word-break: break-all;'>"+ SEED +"</h5>");

}