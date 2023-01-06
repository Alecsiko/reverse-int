module.exports = function reverse (n) {
    let a = Math.abs(n);
    let b = a.toString();
    let c = b.split('');
    let d = c.reverse();
    let i = parseInt(d.join(''))
    return(i);
}
