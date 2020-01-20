const decodeMorse = message => {
    
    const morse = {
        ".-"    : "A",
        "-..."  : "B",
        "-.-."  : "C",
        "-.."   : "D",
        "."     : "E",
        "..-."  : "F",
        "--."   : "G",
        "...."  : "H",
        ".."    : "I",
        ".---"  : "J",
        "-.-"   : "K",
        ".-.."  : "L",
        "--"    : "M",
        "-."    : "N",
        "---"   : "O",
        ".--."  : "P",
        "--.-"  : "Q",
        ".-."   : "R",
        "..."   : "S",
        "-"     : "T",
        "..-"   : "U",
        "...-"  : "V",
        ".--"   : "W",
        "-..-"  : "X",
        "-.--"  : "Y",
        "--.."  : "Z",
        "_"     : " ",//space between words
    };
    
    const code = message.replace('   ', ' _ ').split(' ');

    const output = code.map(element => morse[element]);
    
    return output.join('');

}

decodeMorse('.... . -.--   .--- ..- -.. .');
console.log(decodeMorse('.... . -.--   .--- ..- -.. .'));