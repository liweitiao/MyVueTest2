let div
function getShouldDecode (href) {
    div = div || document.createElement('div')
    div.innerHTML = href ? `<a href="\n"/>` : `<div a="\n"/>`
    return div.innerHTML.indexOf('&#10;') > 0
}

console.log(getShouldDecode(true))
