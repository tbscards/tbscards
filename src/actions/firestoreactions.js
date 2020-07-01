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

export const getAllCards = async () => {
    const ref = Fire.db.getCollection('cards').doc('cards');
    const values = await ref.get();
    const cardData = values.data()
    const categories = Object.keys(cardData)
    for (let i = 0; i < categories.length; i++) {
        for (let j = 0; j < cardData[categories[i]].length; j++) {
            cardData[categories[i]][j].category = categories[i]
        }
    }
    return cardData
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

// THIS WAS ONLY USED ONCE TO REFORMAT THE DATA IN FIREBASE
// ** USE WITH CAUTION **

// export const sendReformattedCards = async (data) => {
//     Fire.db.getCollection("cards").doc("cards").set({
//         FORMS: data.FORMS,
//         MEDIUMS: data.MEDIUMS,
//         PRINCIPLES: data.PRINCIPLES,
//         QUESTIONS: data.QUESTIONS,
//         TACTICS: data.TACTICS,
//         THEMES: data.THEMES
//     });
// }
