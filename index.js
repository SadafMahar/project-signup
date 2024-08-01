const signup = async (e) => {
    e.preventDefault()
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    // console.log(email, password);
    try {
        const result = await firebase.auth().createUserWithEmailAndPassword(email, password);
        // await result.user.updateProfile({
        //     displayName: "User",
        // })
        createusercollection(result.user)
        // await result.user.sendEmailVerification()
        // console.log(result);
        alert(`wellcom ${result.user.email}`)
    } catch (err) {
        console.log(err);
        alert(err.message)
        createusercollection(null)
    }
    email.value = ""
    email.password = ""
    }
    const login = async (e) => {
        e.preventDefault()
        const email = document.getElementById("login_email").value;
        const password = document.getElementById("login_password").value;
        console.log(email, password);
        try {
            const result = await firebase.auth().signInWithEmailAndPassword(email, password);
            console.log(result);
            alert(`user is successfully login ${result.user.email}`)
         } catch (error) {
            // console.log(error);
            alert("err.message")
         }
         email.value = ""
         email.password = ""
        }
        const logout = (e)=>{
            e.preventDefault()
            firebase.auth().signOut()
        }
            firebase.auth().onAuthStateChanged((user) => {
               if (user) {
                  getuserinfoRealtime(user.uid)
                  console.log(user)
               //   var uid = user.uid;
               } else {
                  console.log('user successfully signout');
                  alert('user successfully signout');
                  getuserinfoRealtime(null)
         
               }
             });
         
