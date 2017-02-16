(function pianoRoll() {
    var keyboardContainerEl,
        keyboardEl,
        rollContainerEl,
        rollEl;

    function initializeKeyboard(pianoRollEl) {
        keyboardContainerEl = document.createElement('div');
        keyboardEl = document.createElement('div');

        keyboardContainerEl.appendChild(keyboardEl);
        keyboardContainerEl.classList.add('piano');

        pianoRollEl.appendChild(keyboardContainerEl);

        keyboardEl.dataset.whiteKeyWidth = pianoRollEl.dataset.keyWidth;
        keyboardEl.dataset.startKey = pianoRollEl.dataset.startKey;
        keyboardEl.dataset.endKey = pianoRollEl.dataset.endKey;
        keyboardEl.dataset.keyProportion = 'balanced';
        keyboardEl.setAttribute('tabindex', -1);
        keyboardEl.classList.add('keyboard');
        new window.PianoKeyboard(keyboardEl);
    }

    function initializeRoll(pianoRollEl) {
        rollContainerEl = document.createElement('div');
        rollEl = document.createElement('div');

        rollContainerEl.appendChild(rollEl);
        rollContainerEl.classList.add('roll');

        pianoRollEl.appendChild(rollContainerEl);
    }

    window.PianoRoll = function initializePianoRoll(pianoRollEl) {
        pianoRollEl.classList.add('piano-roll');

        initializeKeyboard(pianoRollEl);
        initializeRoll(pianoRollEl);
    };
})();
