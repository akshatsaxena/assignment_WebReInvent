import axios from "axios"

export async function trylogginIn (data:any) {
    const endPoint = `https://reqres.in/api/login`
    try {
      const res = await axios.post(endPoint, (data), {  })
      return res.data
    } catch (error) {

    }
  }

  export async function tryRegisteringIn(register:any){
    const endPoint = `https://reqres.in/api/register`
    try{
        const res = await axios.post(endPoint, (register), {  })
        return res.data;
    }
    catch(error){

    }
  }