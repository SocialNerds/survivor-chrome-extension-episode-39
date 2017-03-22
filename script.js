// Survivor dictionary.
const spoilers = ['survivor', 'τσανκ', 'κινέζος', 'Ορέστης', 'αγώνισμα', 'Ορέστης', 'Σάρα', 'Τσανγκ', 'Μισθοφόρος',
  'Λάουρα', 'Σπαλιάρας', 'Σπαλ', 'Χρανιώλα', 'Χρανιώτης', 'ΜΠΟ ', 'Ασυλία', 'Κολιδά', 'Μαχητές',
  'Αγγελόπουλος', 'Βαλαβάνη', 'orestis', 'Ελισάβετ', 'ΒΑΛΑΒΑΝΗ'];

// Generate regex string.
const spoilersRegex = new RegExp(spoilers.join('|'), 'i');

// On document ready start looking for survivor.
$(document).ready(function () {
  killSurvivor();
  $(document).scroll(function () {
    setTimeout((function () {
      killSurvivor()
    }), 150);
  });
});

/**
 * Finds and terminates posts that contain survivor things.
 */
killSurvivor = function () {
  const newElements = $('.userContent');
  if (newElements.length === 0) {
    return;
  }
  newElements.each(function () {
    if (this.textContent.match(spoilersRegex) !== null) {
      $(this).closest('.userContentWrapper').replaceWith('<h1 style="border-style: solid;">Survivor found</h1>');
    }
  });
};
