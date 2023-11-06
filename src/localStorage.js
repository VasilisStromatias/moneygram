export const useLocalStorage = (key) => {

const setLocalStorageData = (value) => {
    try {
    window.localStorage.setItem(key,JSON.stringify(value))
    } catch (error) {
    console.log(error);
    }    
};

const getLocalStorageData = () => {
    try {
    const item = window.localStorage.getItem(key);
    return item ?  JSON.parse(item) : undefined;
    } catch (error) {
    console.log(error);
    }    
};


return {setLocalStorageData,getLocalStorageData}
};