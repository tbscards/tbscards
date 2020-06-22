import Fire from "../Fire";

const collectionToCategory = {
    'cards_form': 'forms',
    'cards_medium': 'mediums',
    'cards_principle': 'principles',
    'cards_question': 'questions',
    'cards_tactic': 'tactics',
    'cards_theme': 'themes'
}

export const getCategory = async (collection) => {
    const ref = Fire.db.getCollection(collection);
    const snapshot = await ref.get()
    let cards = [];
    snapshot.forEach(function(doc) {

        const card = {
            id: doc.id,
            content: doc.data().content,
            title: doc.data().title,
            category: collectionToCategory[collection].toUpperCase()
        }
        cards.push(card);
    });
    return cards;
}

export const validatePassword = async (input_password) => {
    if (!input_password) return false
    const ref = Fire.db.getCollection('password').doc(input_password);
    const snapshot = await ref.get()
    if (snapshot.exists) {
            return true;
    } else {
        return false;
    }
}
