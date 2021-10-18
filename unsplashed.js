console.log('Youpi!');

const iStockIdentificationPattern = 'Browse premium images on iStock';
const headings = document.evaluate(`//h2[contains(., '${iStockIdentificationPattern}')]`, document, null, XPathResult.ANY_TYPE, null);

console.log(headings);

// Input

const sections = [];
let thisNode = headings.iterateNext();
while (thisNode) {
  sections.push(thisNode.parentNode);
  thisNode = headings.iterateNext();
}

// Treatment
for (const section of sections) {
  console.log(section);
  // section.remove();
  section.style.display = 'none';
}

// Output
