import {doc, collection, getDocs, setDoc} from 'firebase/firestore'
import api from './api'
import {db} from './firebase'

export default function fireStoreService() {
    async function getImage() {
        const snapshot = await getDocs(collection(db, "coffees"));
        const data = snapshot.docs.map((row) => ({
            id: row.id,
            ...row.data(),
        }))

        return data;
    }

    async function setImage(query: string) {
        const data = await api(query);

        for (const unsplash of data) {
            await setDoc(doc(db, "coffees", unsplash.id), {
                id: unsplash.id,
                alt_description: unsplash.alt_description,
                urls: unsplash.urls, 
            });
        }
    }

    return {getImage, setImage};

}


