import { useState } from "react";
import Style from "./Home.module.css";

function Home() {
    const [id, setID] = useState('');
    const [price, setPrice] = useState('');
    const [disk, setDisk] = useState('');
    const [table, setTable] = useState('');
    const [table1, setTable1] = useState([]);
    const [table2, setTable2] = useState([]);
    const [table3, setTable3] = useState([]);

    function handleSubmit() {
        console.log(id, price, disk, table);
    
        const data = { id, price, disk, table };
    
        if (table === "Table 1") {
            const storageData = JSON.parse(localStorage.getItem("Table 1")) || [];
            setTable1((previousData) => [...previousData, data]);
            localStorage.setItem("Table 1", JSON.stringify([...storageData, data]));
        } else if (table === "Table 2") {
            const storageData = JSON.parse(localStorage.getItem("Table 2")) || [];
            setTable2((previousData) => [...previousData, data]);
            localStorage.setItem("Table 2", JSON.stringify([...storageData, data]));
        } else if (table === "Table 3") {
            const storageData = JSON.parse(localStorage.getItem("Table 3")) || [];
            setTable3((previousData) => [...previousData, data]);
            localStorage.setItem("Table 3", JSON.stringify([...storageData, data]));
        } else {
            alert("Please select a table");
        }
    }
    


    return (
        <div className={Style.main}>
            <div className={Style.inputFild}>
                <div>
                    <label>Order I.D. </label>
                    <input type="text" onChange={(e) => setID(e.target.value)} />
                </div>
                <div>
                    <label>Choose Price</label>
                    <input type="number" onChange={(e) => setPrice(e.target.value)} />
                </div>
                <div>
                    <label>Choose Disk</label>
                    <input type="text" onChange={(e) => setDisk(e.target.value)} />
                </div>
                <div>
                    <label>Choose a Table</label>
                    <select onChange={(e) => setTable(e.target.value)}>
                        <option>Select Table</option>
                        <option>Table 1</option>
                        <option>Table 2</option>
                        <option>Table 3</option>
                    </select>
                </div>
                <button onClick={handleSubmit}>Add to bill</button>
            </div>
            <div className={Style.map}>
                <h3>Table 1</h3>
                {table1.length > 0 ? (table1.map((i) => (
                    <div key={i.id} className={Style.items}>
                        <h4>{i.id}</h4>
                        <h4>{i.price}</h4>
                        <h4>{i.disk}</h4>
                        <h4>{i.table}</h4>
                    </div>
                ))) : ('')}
                <h3>Table 2</h3>
                {table2.length > 0 ? (table2.map((i) => (
                    <div key={i.id} className={Style.items}>
                        <h4>{i.id}</h4>
                        <h4>{i.price}</h4>
                        <h4>{i.disk}</h4>
                        <h4>{i.table}</h4>
                    </div>
                ))) : ('')}
                <h3>Table 3</h3>
                {table3.length > 0 ? (table3.map((i) => (
                    <div key={i.id} className={Style.items}>
                        <h4>{i.id}</h4>
                        <h4>{i.price}</h4>
                        <h4>{i.disk}</h4>
                        <h4>{i.table}</h4>
                    </div>
                ))) : ('')}
            </div>
        </div>
    )
}

export default Home;
