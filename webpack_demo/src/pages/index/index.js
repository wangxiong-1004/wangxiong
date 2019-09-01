document.getElementById('app').onclick = function () {
    console.log(this);
    import('./test.js').then(test => {
        console.log(test);
        console.log(test.show());
    })
};
