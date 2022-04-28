

export const goToLisTriPage = (navigate) => {

    navigate("/trips/list")
  }
 export  const goLoginPage =(navigate)=>{
    navigate("/login")
 }
export  const goToBack =(navigate)=>{
    navigate(-1)
 }
 export const goToSubscribe =(navigate)=>{
    navigate("/trips/application")
}
export const goToAdminHomePage =(navigate)=>{
    navigate("admin")
 }
 export const goToCreateTtip =(navigate)=>{
   navigate("/admin/trips/create")
}
export const goToLogout =(navigate)=>{
   navigate("/login")
}
export const goToDetailPage=(navigate)=>{
    navigate("/admin/trips/:id")
}

 export const goToDetails =(navigate)=>{
   navigate("/admin/trips/:id")
}