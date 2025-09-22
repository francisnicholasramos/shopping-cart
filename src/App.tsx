// import {useState, useEffect} from 'react';
//
type Properties = {
    id: number;
    description: string;
    image: string;
    price: number;
    title: string; 
    rating: {
        rate: number;
        count: number;
    }
}

const App = () => {
    // const [image, setImage] = useState(null)

    // useEffect(() => {
    //     fetch(`https://fakestoreapi.com/products`)
    //         .then(res => res.json())
    //         .then(data => console.log(data))
    // }, [])


    async function apiCall(): Promise<Properties[]> {
        const fakeApi: Properties[] = await (
            await fetch(`https://fakestoreapi.com/products`)).json();

        const shoes = fakeApi.map((item) => item);

        return shoes;
    }

    async function showTitles() {
        const products = await apiCall();
        const arr: Properties[] = [];

        arr.push(...products);
        return arr;
    }

    console.log(showTitles())



    return (
        <> 

            <h1>Hello, World!</h1>
        </>
    )
}

export default App;
