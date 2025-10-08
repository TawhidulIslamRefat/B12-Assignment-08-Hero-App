const getStoreApp = () => {

    const storeAppSTR = localStorage.getItem("installList");
    if (storeAppSTR) {
        const storeAppData = JSON.parse(storeAppSTR);
        return storeAppData;
    }else{
        return [];
    }
}

const addToStoredDB =(id) =>{
 const storedAppData = getStoreApp();
 if (storedAppData.includes(id)) {
    alert("this is all ready exist");
 }else{
    storedAppData.push(id);
    const data = JSON.stringify(storedAppData);
    localStorage.setItem("installList",data);
 }
}
export{addToStoredDB,getStoreApp}