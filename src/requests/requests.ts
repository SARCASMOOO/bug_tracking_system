import Firebase from './firebase/firebase';

class Request {
    private firebase: Firebase;

    constructor() {
        this.firebase = new Firebase();
    }

    doCreateUserWithEmailAndPassword = (email: string, password: string) =>
    this.firebase.doCreateUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email: string, password: string) =>
        this.firebase.doSignInWithEmailAndPassword(email, password);

    doSignOut = () => this.firebase.doSignOut();

    doPasswordReset = (email: string) =>
        this.firebase.doPasswordReset(email);

    doPasswordUpdate = (password: string) => {
        const currentUser = this.firebase.getCurrentUser();
        if (currentUser) return currentUser.updatePassword(password);
    }

    user = (uid: string) => this.firebase.user(uid);

    users = () => this.firebase.user('users');

    createListener(cb: (authUser: any) => void) {
        const listener = this.firebase.getAuth().onAuthStateChanged(cb);
        return listener;
    }
}

export default Request;