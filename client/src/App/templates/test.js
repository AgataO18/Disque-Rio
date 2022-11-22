function isNull (word){
    let test = false
    if (word.length === 0) test = true
    console.log('')
    return test
}
function isBlank (word){
    let test = false
    word = word.replace(/\s/g, '')
    if (word.length === 0) test = true
    console.log('')
    return test
}
function isDigit(word){
    let test = false
    word = word.replace(/\s/g, '')
    if ( /^\d+$/.test(word)) test = true
    console.log('')
    return test
}
function isSmall(word){
    let test = false
    word = word.replace(/\s/g, '')
    if (word.length < 10) test = true
    console.log('')
    return test
}

function isLong(word){
    let test = false
    if (word.length > 140) test = true
    console.log('')
    return test
}

export function testPass(word, input){
    let testPass = false
    // ainda não decidimos os criterios da cada campo, então no momento todos os campos estão com todos os teste
    if (input === 'local')        testPass = !Boolean(isNull(word) | isBlank(word) | isDigit(word) | isSmall(word) | isLong(word))
    if (input === 'aggressor')    testPass = !Boolean(isNull(word) | isBlank(word) | isDigit(word) | isSmall(word) | isLong(word))
    if (input === 'victim')       testPass = !Boolean(isNull(word) | isBlank(word) | isDigit(word) | isSmall(word) | isLong(word))
    if (input === 'report')       testPass = !Boolean(isNull(word) | isBlank(word) | isDigit(word) | isSmall(word) | isLong(word))
    
    return testPass
}

// let t= ' ywasdasdasd  0'
// console.log(testPass(t,'local'))




// export function test(word){
//     let test = true
//     if (!isNull(word))   test = false
//     if (!isBlank(word))  test = false
//     if (!isDigit(word))  test = false
//     if (!isSmall(word))  test = false
//     if (!isLong(word))   test = false
//     return test
// }

// export function testLocal(word){
//     let test = true
//     if (!isNull(word))   test = false
//     if (!isBlank(word))  test = false
//     if (!isDigit(word))  test = false
//     if (!isSmall(word))  test = false
//     if (!isLong(word))   test = false
//     return test
// }