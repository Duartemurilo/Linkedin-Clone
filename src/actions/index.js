import { auth, provider } from "../firebase";

export function signInApi() {
  return (dispach) => {
    auth
      .signInWithPopup(provider)
      .then((payload) => {
        console.log(payload);
      })
      .catch((error) => alert(error.message));
  };
}
