// import { createContext, useContext, useEffect, useReducer, useState } from 'react';
// import { onAuthStateChanged, signOut } from 'firebase/auth';
// import { auth, firestore } from "../config/firebase";
// import { doc, getDoc } from 'firebase/firestore';

// const AuthContext = createContext();

// const initialState = {
//   isAuth: false,
//   user: null,
// };

// const reducer = (state, { type, payload }) => {
//   switch (type) {
//     case "SET_LOGGED_IN":
//       return {
//         isAuth: true,
//         user: payload.user, // user object includes role
//       };
//     case "SET_LOGGED_OUT":
//       return initialState;
//     default:
//       return state;
//   }
// };

// const AuthContextProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   const [isAppLoading, setIsAppLoading] = useState(true);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, async (user) => {
//       setIsAppLoading(true);

//       if (user) {
//         try {
//           // Fetch role from Firestore
//           const userRef = doc(firestore, "users", user.uid);
//           const userSnap = await getDoc(userRef);

//           let userData = {};
//           if (userSnap.exists()) {
//             userData = userSnap.data();
//           }

//           const fullUser = {
//             uid: user.uid,
//             email: user.email,
//             displayName: user.displayName,
//             Role:userData.role ,
//             ...userData, // this includes role
//           };

//           console.log('fullUser', fullUser)

//           dispatch({
//             type: "SET_LOGGED_IN",
//             payload: { user: fullUser },
//           });
//         } catch (error) {
//           console.error("Error fetching user role:", error);
//         }
//       } else {
//         dispatch({ type: "SET_LOGGED_OUT" });
//       }

//       setIsAppLoading(false);
//     });

//     return () => unsubscribe();
//   }, []);

//   const handleLogout = async () => {
//     try {
//       await signOut(auth);
//       dispatch({ type: "SET_LOGGED_OUT" });
//       window.toastify("Logout success", "success");
//     } catch (error) {
//       console.error("Logout error:", error);
//       window.toastify("User Not Logged Out", "error");
//     }
//   };



//   const isAdmin = state.user?.role === "admin";

//   console.log("👤 Role:", state.user?.role); 
// console.log("✅ isAdmin:", isAdmin);

//   return (
//     <AuthContext.Provider
//       value={{
//         ...state,
//         dispatch,
//         handleLogout,
//         isAppLoading,
//         isAdmin,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuthContext = () => useContext(AuthContext);

// export default AuthContextProvider;

