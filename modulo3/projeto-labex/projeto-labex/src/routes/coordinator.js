export const goBackHome = (navigate) =>{
  navigate('/')
}
export const goToCreateTrip= (navigate) =>{
  navigate('/admin/trips/create')
}
export const goToLogout= (navigate) =>{
  navigate('/login')
}

export const goBackList = (navigate) =>{
  navigate(-1)
}
export const goBackAdmin = (navigate) =>{
  navigate(-1)
}
export const goToList = (navigate) =>{
  navigate('/trips/list')
}
export const goToLogin = (navigate) =>{
  navigate('/login')
}

export const goToForm = (navigate) =>{
  navigate('/trips/application')
}

export const goAdmin =(navigate)=>{
  navigate("/admin/trips/list")
}

export const goDetails =(navigate)=>{
  navigate("/admin/trips/:id")
}