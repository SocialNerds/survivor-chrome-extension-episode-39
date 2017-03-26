// Survivor dictionary
const spoilers = ['survivor', 'τσανκ', 'κινέζος', 'Ορέστης', 'αγώνισμα', 'Ορέστης', 'Σάρα', 'Τσανγκ', 'Μισθοφόρος',
    'Λάουρα', 'Σπαλιάρας', 'Σπαλ', 'Χρανιώλα', 'Χρανιώτης', 'ΜΠΟ ', 'Ασυλία', 'Κολιδά', 'Μαχητές',
    'Αγγελόπουλος', 'Βαλαβάνη', 'orestis', 'Ελισάβετ', 'ΒΑΛΑΒΑΝΗ', 'ΕΛΙΣΑΒΕΤ', 'mounopanos'
];

// Generate regex string
const spoilersRegex = new RegExp(spoilers.join('|'), 'i');

// On document ready start looking for survivor related stuff
$(document).ready(function() {
    killSurvivor();
    $(document).scroll(function() {
        setTimeout((function() {
            killSurvivor()
        }), 200);
    });
});

// Finds and terminates posts that contain survivor things.
killSurvivor = function() {
    const elementsFB = ['.userContent', '.lfloat'];
    elementsFB.forEach(function(x) {
        if ($(x).length) {
            $(x).each(function() {
                if (this.textContent.match(spoilersRegex) !== null) {
                    $(this).closest('.userContentWrapper').replaceWith('<div style="display:none;"></div>');
                }
            });
        }
    });
}
