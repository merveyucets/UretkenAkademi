useEffect(()=>{
    async function getApi(){
      try{
        const response= await axios.get('https://jsonplaceholder.typicode.com/users');
        console.log(response);
      }catch(error){
        console.error(error);
      }
    }})