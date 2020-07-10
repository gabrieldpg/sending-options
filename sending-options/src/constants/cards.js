const QC = 'Q Card';
const FFC = 'Farmers Finance Card';
const QMC = 'Q MasterCard';
const FLC = 'Flight Centre MasterCard';
const FAR = 'Farmers MasterCard';

const CARDS = [QC, FFC, QMC, FLC, FAR];

export const cards = CARDS.map(card => {
    return {
        message: card,
        url: card.replace(/ /g, '-').toLowerCase()
    }
});