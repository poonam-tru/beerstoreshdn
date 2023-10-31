export const getFormerEmployeesData = async()=> {
    try {
        const response = await fetch(`${process.env.LocalAPI}/about/formeremployees.json`);
        return response.json();
    } catch (error:any) {
        // You can log the error or handle it in some way
        console.error('Error fetching data:', error.message);
        throw error; // Re-throw the error to let the calling code handle it
    }
  };   