function doNothing(milliseconds) {
    const startTime = new Date().getTime();
    while (new Date().getTime() < startTime + milliseconds) {
    }
  }

function meditate() {
    const words = ['inhale', 'exhale'];
    let i = 0;
    let j = 0;

    function logWord() {
        process.stdout.write(words[i][j]);
        j++;

        if (j === words[i].length) {
            process.stdout.write('\n');
            i = (i + 1) % words.length;
            j = 0;
            doNothing(1200);
        } else {
            doNothing(500);
        }
        logWord();
    }

    logWord();
}

module.exports = meditate;
