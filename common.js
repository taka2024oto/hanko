// FAQ アコーディオン
function toggleFaq(el) {
  var a = el.nextElementSibling;
  var t = el.querySelector('.faq-toggle');
  var open = a.classList.contains('open');
  document.querySelectorAll('.faq-a').forEach(x => x.classList.remove('open'));
  document.querySelectorAll('.faq-toggle').forEach(x => x.classList.remove('open'));
  if (!open) { a.classList.add('open'); t.classList.add('open'); }
}
