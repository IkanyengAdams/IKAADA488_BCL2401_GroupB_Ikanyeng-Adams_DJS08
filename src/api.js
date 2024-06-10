
import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, getDoc, getDocs, query, where } from "firebase/firestore/lite"

const firebaseConfig = {
  apiKey: "AIzaSyBZ3gYqN6e77NAdgEOp1tSrz0Qyqn6Wfcw",
  authDomain: "vanlife-cb2c9.firebaseapp.com",
  projectId: "vanlife-cb2c9",
  storageBucket: "vanlife-cb2c9.appspot.com",
  messagingSenderId: "324106571559",
  appId: "1:324106571559:web:33c1ca7e592f5fc4baa302"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const vansCollectionRef = collection(db, "Vans")

export async function getVans() {
  const snapshot = await getDocs(vansCollectionRef)
    const vans = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
    return vans
}

export async function getVan(id) {
  const docRef = doc(db, "Vans", id)
  const snapshot = await getDoc(docRef)
  return {
    ...snapshot.data(),
        id: snapshot.id
  }
}

export async function getHostVans() {
  const q = query(vansCollectionRef, where("hostId", "==", "123"))
  const snapshot = await getDocs(q)
    const vans = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
    return vans
}

/*export async function getHostVans(id) {
  const url = id ? `/api/host/vans/${id}` : "/api/host/vans"
  const res = await fetch(url)
  if (!res.ok) {
      throw {
          message: "Failed to fetch vans",
          statusText: res.statusText,
          status: res.status
      }
  }
  const data = await res.json()
  return data.vans
}*/

export async function loginUser(creds) {
  const res = await fetch("/api/login",
      { method: "post", body: JSON.stringify(creds) }
  )
  const data = await res.json()

  if (!res.ok) {
      throw {
          message: data.message,
          statusText: res.statusText,
          status: res.status
      }
  }

  return data
}