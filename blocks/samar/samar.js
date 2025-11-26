export default async function decorate(block) {
    const [quotation, attribution] = [...block.children].map((c) => c.firstElementChild);
    const blocksamar = document.createElement('blocksamar');
    // decorate quotation
    quotation.className = 'samar-quotation';
    blocksamar.append(quotation);
    // decoration attribution
    if (attribution) {
      attribution.className = 'samar-attribution';
      blocksamar.append(attribution);
      const ems = attribution.querySelectorAll('em');
      ems.forEach((em) => {
        const cite = document.createElement('cite');
        cite.innerHTML = em.innerHTML;
        em.replaceWith(cite);
      });
    }
    block.innerHTML = '';
    block.append(blocksamar);
  }
  