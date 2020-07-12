


const originalText = document.querySelector('#original');
const transformedText = document.querySelector('#transformed');
const effect = document.getElementById('effect');

originalText.addEventListener('input', pickedText);


// 1. Text to transform

function pickedText(event) {

    chain = event.target.value;

    switch (effect.value) {
        case 'reverse':
            chain = backwards(chain);
            break;
        case 'flip':
            chain = flip(chain);
            break;
        case 'reverseflip':
            chain = backwards(flip(chain));
            break;
        case 'parenthesis':
            chain = parenthesis(chain);
            break;
    }
    transformedText.value = chain;
}



// 2. Copy on click

function copyText() {
    transformedText.select();
    document.execCommand('copy');
}



// 3. Backwards effect

function backwards(pString) {
    let saying = "";
    for (let i = pString.length - 1; i >= 0; i--) {
        saying += pString[i];
    }
    return saying;
}

// 4. UpsideDown effect

function flip(pString) {

    const arrFlip = new Array();
    for (let i = 0; i < pString.length; i++) {
        let a = pString.charAt(i);
        let b = flipTable[a];
        if (b == undefined) { b = a };
        arrFlip.push(b);
    }
    return arrFlip.join('');
}

// 5. Parenthesis

function parenthesis(pString) {
    let arrParenthesis = pString.split('');
    for (let i = 0; i < arrParenthesis.length; i++) {
        if (arrParenthesis[i] != " ") {
            arrParenthesis[i] = "(" + arrParenthesis[i] + ")"
        }
    }
    return arrParenthesis.join('');
}



